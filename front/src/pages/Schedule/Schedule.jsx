import { useState } from 'react';
import { Clock, Video } from 'lucide-react';
import MiniCalendar from './components/MiniCalendar';
import WeekView from './components/WeekView';
import BookingModal from './components/BookingModal';
import styles from './Schedule.module.css';

export default function Schedule() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentWeekStart, setCurrentWeekStart] = useState(getWeekStart(new Date()));
    const [showModal, setShowModal] = useState(false);

    function getWeekStart(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    }

    const handleDateClickFromCalendar = (date) => {
        setCurrentWeekStart(getWeekStart(date));
    };

    const handleTimeSelect = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const handleWeekChange = (weekStart) => {
        setCurrentWeekStart(weekStart);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Schedule an intro call and learn how LeaHub can help you
                    </h1>

                    <div className={styles.hostInfo}>
                        <img
                            src="https://api.dicebear.com/5.x/fun-emoji/svg?seed=host"
                            alt="Markelov Morkovkin"
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.hostName}>Markelov Morkovkin</p>
                            <div className={styles.duration}>
                                <Clock className={styles.icon} />
                                <span>30 Min Introduction</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <Clock className={styles.infoIcon} />
                        <p>Meeting lasts up to 30 minutes</p>
                    </div>

                    <div className={styles.infoBox}>
                        <Video className={styles.infoIcon} />
                        <p>Google Meet information will be provided after you confirm the meeting</p>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.sidebar}>
                        <MiniCalendar
                            currentWeekStart={currentWeekStart}
                            onDateClick={handleDateClickFromCalendar}
                        />
                    </div>

                    <div className={styles.weekSection}>
                        <WeekView
                            currentWeekStart={currentWeekStart}
                            onWeekChange={handleWeekChange}
                            onTimeSelect={handleTimeSelect}
                        />
                    </div>
                </div>

                {showModal && (
                    <BookingModal
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
                        onClose={handleModalClose}
                    />
                )}
            </div>
        </div>
    );
}