import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MiniCalendar.module.css';

export default function MiniCalendar({ currentWeekStart, onDateClick }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Синхронизация месяца с текущей неделей
    useEffect(() => {
        if (currentWeekStart) {
            const weekMonth = new Date(currentWeekStart.getFullYear(), currentWeekStart.getMonth(), 1);
            setCurrentMonth(weekMonth);
        }
    }, [currentWeekStart]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
        const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
        if (newMonth.getFullYear() >= 2000) {
            setCurrentMonth(newMonth);
        }
    };

    const canGoPrev = currentMonth.getFullYear() > 2000 ||
        (currentMonth.getFullYear() === 2000 && currentMonth.getMonth() > 0);

    const days = getDaysInMonth(currentMonth);
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const isInCurrentWeek = (date) => {
        if (!date || !currentWeekStart) return false;
        const weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        return date >= currentWeekStart && date <= weekEnd;
    };

    const isToday = (date) => {
        if (!date) return false;
        return date.toDateString() === today.toDateString();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.monthYear}>{monthYear}</span>
                <div className={styles.controls}>
                    <button
                        onClick={prevMonth}
                        disabled={!canGoPrev}
                        className={styles.navButton}
                    >
                        <ChevronLeft className={styles.navIcon} />
                    </button>
                    <button
                        onClick={nextMonth}
                        className={styles.navButton}
                    >
                        <ChevronRight className={styles.navIcon} />
                    </button>
                </div>
            </div>

            <div className={styles.weekDays}>
                {weekDays.map(day => (
                    <div key={day} className={styles.weekDay}>
                        {day}
                    </div>
                ))}
            </div>

            <div className={styles.daysGrid}>
                {days.map((date, idx) => {
                    const inWeek = isInCurrentWeek(date);
                    const isTodayDate = isToday(date);

                    return (
                        <button
                            key={idx}
                            onClick={() => date && onDateClick(date)}
                            disabled={!date}
                            className={`${styles.dayButton} ${
                                !date ? styles.empty : ''
                            } ${inWeek ? styles.inWeek : ''} ${
                                isTodayDate ? styles.today : ''
                            }`}
                        >
                            {date?.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
