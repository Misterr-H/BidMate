import {useState} from "react";
import LeftBidBubble from "@/components/LeftBidBubble";
import RightBidBubble from "@/components/RightBidBubble";
import LeftChatBubble from "@/components/LeftChatBubble";
import RightChatBubble from "@/components/RightChatBubble";
import MessageEntry from "@/components/MessageEntry";

const Chat = () => {
    return (
        <>
            <div className={'px-20 py-10'}>
                <LeftBidBubble amount="1000" time="1" rate="10" />
                <RightBidBubble bid={{amount: 1000, time: 1, rate: 10}} isLast={true} />
                <LeftChatBubble message="Hello" />
                <RightChatBubble message="Hello" />
            </div>
            <MessageEntry />
        </>
    )
}

export default Chat;