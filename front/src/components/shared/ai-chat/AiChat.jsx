import { useState } from 'react';
import ChatPanel from './ChatPanel/ChatPanel.jsx';
import ChatButton from './ChatButton/ChatButton.jsx';

export default function AIChat() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <>
            <ChatButton onClick={() => setChatOpen(true)} />
            <ChatPanel isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </>
    );
}