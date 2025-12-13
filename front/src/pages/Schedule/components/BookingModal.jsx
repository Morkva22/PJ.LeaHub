import { useState } from 'react';
import { X, Calendar, Video } from 'lucide-react';
import styles from './BookingModal.module.css';

export default function BookingModal({ selectedDate, selectedTime, onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        tools: '',
        hosting: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const API_URL = 'https://localhost:44378/api';

    const formatDateFull = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTime = (time) => {
        const [hours, minutes = '00'] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:${minutes}${ampm}`;
    };

    const getEndTime = (time) => {
        const [hours, minutes = '00'] = time.split(':');
        let hour = parseInt(hours);
        let minute = parseInt(minutes) + 30;
        if (minute >= 60) {
            hour += 1;
            minute -= 60;
        }
        const ampm = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:${minute.toString().padStart(2, '0')}${ampm}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(null);

        try {
            const bookingData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                meetingDate: selectedDate.toISOString().split('T')[0],
                meetingTime: selectedTime,
                tools: formData.tools || null,
                hostingPreference: formData.hosting || null,
                additionalNotes: formData.notes || null
            };

            console.log('Sending booking:', bookingData);

            const response = await fetch(`${API_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();
            console.log('Response:', result);

            if (!response.ok) {
                throw new Error(result.message || 'Failed to schedule meeting');
            }

            setSuccess({
                message: result.message,
                meetingLink: result.meetingLink
            });

            setTimeout(() => {
                onClose();
            }, 5000);

        } catch (err) {
            console.error('Booking error:', err);
            setError(err.message || 'Failed to schedule meeting. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div>
                        <h3 className={styles.title}>30 Min Introduction</h3>
                        <div className={styles.dateTime}>
                            <span>{formatDateFull(selectedDate)}</span>
                            <span className={styles.separator}>·</span>
                            <span>{formatTime(selectedTime)} – {getEndTime(selectedTime)}</span>
                        </div>
                        <p className={styles.timezone}>(GMT+02:00) Eastern European Time - Kyiv</p>
                    </div>
                    <button onClick={onClose} className={styles.closeButton}>
                        <X className={styles.closeIcon} />
                    </button>
                </div>

                <div className={styles.content}>
                    <div className={styles.infoBox}>
                        <Video className={styles.infoIcon} />
                        <p>Google Meet information will be provided after you confirm the meeting</p>
                    </div>

                    {error && (
                        <div className={styles.errorBox}>
                            <p>{error}</p>
                        </div>
                    )}

                    {success && (
                        <div className={styles.successBox}>
                            <p>{success.message}</p>
                            {success.meetingLink && (
                                <a
                                    href={success.meetingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.meetingLink}
                                >
                                    🎥 Open Google Meet: {success.meetingLink}
                                </a>
                            )}
                        </div>
                    )}

                    <h4 className={styles.sectionTitle}>
                        <Calendar className={styles.sectionIcon} />
                        Your Contact Information
                    </h4>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="Markel"
                                    disabled={isSubmitting || success}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="May"
                                    disabled={isSubmitting || success}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="marcusmay14@gmail.com"
                                disabled={isSubmitting || success}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Which tools are you currently using?</label>
                            <input
                                type="text"
                                name="tools"
                                value={formData.tools}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="Optional"
                                disabled={isSubmitting || success}
                            />
                            <span className={styles.hint}>Optional</span>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                Are you interested in Self Hosted or a Cloud Hosted Solution?
                            </label>
                            <input
                                type="text"
                                name="hosting"
                                value={formData.hosting}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="Optional"
                                disabled={isSubmitting || success}
                            />
                            <span className={styles.hint}>Optional</span>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Anything else I should know?</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                rows={3}
                                className={styles.textarea}
                                placeholder="Optional"
                                disabled={isSubmitting || success}
                            />
                            <span className={styles.hint}>Optional</span>
                        </div>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                onClick={onClose}
                                className={styles.cancelButton}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting || success}
                            >
                                {isSubmitting ? 'Scheduling...' : success ? '✓ Scheduled!' : 'Confirm Meeting'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}