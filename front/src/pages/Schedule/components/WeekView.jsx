import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './WeekView.module.css';

export default function WeekView({ currentWeekStart, onWeekChange, onTimeSelect }) {
    const [availableSlots, setAvailableSlots] = useState({});
    const [loading, setLoading] = useState(false);

    const API_URL = 'https://localhost:44378/api';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxBookingDate = new Date();
    maxBookingDate.setMonth(maxBookingDate.getMonth() + 2);

    useEffect(() => {
        loadAvailableSlots();
    }, [currentWeekStart]);

    const loadAvailableSlots = async () => {
        setLoading(true);
        try {
            const weekEnd = new Date(currentWeekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);

            const startDate = currentWeekStart.toISOString().split('T')[0];
            const endDate = weekEnd.toISOString().split('T')[0];

            console.log('Loading slots from', startDate, 'to', endDate);

            const response = await fetch(
                `${API_URL}/booking/available-slots?startDate=${startDate}&endDate=${endDate}`
            );

            if (!response.ok) {
                throw new Error('Failed to load available slots');
            }

            const data = await response.json();
            console.log('Available slots:', data);

            const slotsMap = {};
            data.forEach(slot => {
                const date = new Date(slot.date);
                const dayOfWeek = date.getDay();
                slotsMap[dayOfWeek] = slot.availableTimes.map(time => {
                    const match = time.match(/(\d+):(\d+)(am|pm)/);
                    if (match) {
                        let hour = parseInt(match[1]);
                        const minute = match[2];
                        const ampm = match[3];
                        if (ampm === 'pm' && hour !== 12) hour += 12;
                        if (ampm === 'am' && hour === 12) hour = 0;
                        return `${hour}:${minute}`;
                    }
                    return time;
                });
            });

            setAvailableSlots(slotsMap);
        } catch (error) {
            console.error('Error loading slots:', error);
            setAvailableSlots({
                1: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
                2: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
                3: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
                4: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
                5: ['9:00', '14:00', '16:00'],
                6: [],
                0: []
            });
        } finally {
            setLoading(false);
        }
    };

    const getWeekDays = (startDate) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push(date);
        }
        return days;
    };

    const isDateAvailable = (date) => {
        const dateTime = new Date(date);
        dateTime.setHours(0, 0, 0, 0);
        return dateTime >= today && dateTime <= maxBookingDate && getDaySlots(date).length > 0;
    };

    const getDaySlots = (date) => {
        if (!date) return [];
        return availableSlots[date.getDay()] || [];
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:${minutes || '00'}${ampm}`;
    };

    const nextWeek = () => {
        const next = new Date(currentWeekStart);
        next.setDate(next.getDate() + 7);
        onWeekChange(next);
    };

    const prevWeek = () => {
        const prev = new Date(currentWeekStart);
        prev.setDate(prev.getDate() - 7);
        if (prev >= today) {
            onWeekChange(prev);
        }
    };

    const canGoPrev = () => {
        const prev = new Date(currentWeekStart);
        prev.setDate(prev.getDate() - 7);
        return prev >= today;
    };

    const weekDays = getWeekDays(currentWeekStart);
    const currentMonth = currentWeekStart.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>Select Time</h2>
                    <span className={styles.monthDisplay}>{currentMonth}</span>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.timezone}>(GMT+02:00) Eastern European Time - Kyiv</span>
                    <div className={styles.controls}>
                        <button
                            onClick={prevWeek}
                            className={styles.navButton}
                            disabled={!canGoPrev()}
                        >
                            <ChevronLeft className={styles.navIcon} />
                        </button>
                        <button onClick={nextWeek} className={styles.navButton}>
                            <ChevronRight className={styles.navIcon} />
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className={styles.loading}>Loading available slots...</div>
            ) : (
                <div className={styles.weekGrid}>
                    {weekDays.map((date, idx) => {
                        const isAvailable = isDateAvailable(date);
                        const slots = getDaySlots(date);
                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
                        const dayNum = date.getDate();

                        return (
                            <div key={idx} className={styles.dayColumn}>
                                <div className={styles.dayHeader}>
                                    <div className={styles.dayName}>{dayName}</div>
                                    <div className={styles.dayNumber}>{dayNum}</div>
                                </div>

                                <div className={styles.slotsContainer}>
                                    {isAvailable ? (
                                        slots.map(time => (
                                            <button
                                                key={time}
                                                onClick={() => onTimeSelect(date, time)}
                                                className={styles.slotButton}
                                            >
                                                {formatTime(time)}
                                            </button>
                                        ))
                                    ) : (
                                        <div className={styles.noSlots}>—</div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}