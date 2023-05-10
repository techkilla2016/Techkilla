import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';
const DynamicWidget = dynamic(() => import('react-chat-widget').then(mod => mod.Widget), {
    ssr: false
});

function ChatBoat() {
    return (
        <div>
            <DynamicWidget />
        </div>
    );
}

export default ChatBoat;
