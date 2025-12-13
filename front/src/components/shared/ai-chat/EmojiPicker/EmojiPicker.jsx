import { useEffect, useRef, useState } from 'react';
import styles from './EmojiPicker.module.css';

const EMOJI_CATEGORIES = {
    'Smileys': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘'],
    'Gestures': ['👍', '👎', '👌', '✌️', '🤞', '🤝', '👏', '🙌', '👐', '🤲', '🙏', '✍️', '💪'],
    'Emotions': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓'],
    'Objects': ['💡', '📝', '📊', '📈', '📉', '🎯', '✅', '❌', '⭐', '🔥', '💯', '📱', '💻']
};

export default function EmojiPicker({ onSelect, onClose }) {
    const [activeCategory, setActiveCategory] = useState('Smileys');
    const pickerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const handleEmojiClick = (emoji) => {
        onSelect(emoji);
        onClose();
    };

    return (
        <div ref={pickerRef} className={styles.picker}>
            <div className={styles.categories}>
                {Object.keys(EMOJI_CATEGORIES).map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.emojis}>
                {EMOJI_CATEGORIES[activeCategory].map((emoji, index) => (
                    <button
                        key={index}
                        onClick={() => handleEmojiClick(emoji)}
                        className={styles.emoji}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
}