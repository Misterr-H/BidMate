import {useEffect, useRef, useState} from "react";
import LeftBidBubble from "@/components/LeftBidBubble";
import RightBidBubble from "@/components/RightBidBubble";
import LeftChatBubble from "@/components/LeftChatBubble";
import RightChatBubble from "@/components/RightChatBubble";
import MessageEntry from "@/components/MessageEntry";
import Modal from '@mui/material/Modal';
import {UIStore} from "@/store/store";
import {useRouter} from "next/router";

const Chat = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = useState("");
    const chat = UIStore.useState(s => s.chat);
    const [time, setTime] = useState("");
    const [rate, setRate] = useState("");
    const timeInputRef = useRef(null);
    const rateInputRef = useRef(null);



    const BidModal = () => {
        return (
            <Modal
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginY: 'auto',
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="bg-white p-4">
                    <h2 id="modal-modal-title">Make Bid</h2>
                    <p id="modal-modal-description">
                        <input
                            className="border-2 w-full border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600"
                            type="text"
                            placeholder="Time (Months)"
                            ref = {timeInputRef}
                        />
                        <input
                            className="border-2 w-full border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600"
                            type="text"
                            placeholder="Rate"
                            ref = {rateInputRef}
                        />
                        <button
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded ml-2"
                            onClick={() => {
                                UIStore.update(s => {
                                    s.chat.push(<RightBidBubble amount={10000} time={timeInputRef.current.value} rate={rateInputRef.current.value} />)
                                })
                                handleClose();
                            }}
                        >
                            Make Bid
                        </button>
                    </p>
                </div>
            </Modal>
        )
    }

    return (
        <div className={''}>
            <div className={'px-2 sm:px-20 py-10'}>
                {chat}
            </div>
            <BidModal />
            <MessageEntry message={message} onMessageChange={(e) => setMessage(e.target.value)} onMessageSubmit={() => {
                UIStore.update(s => {
                    s.chat.push(<RightChatBubble message={message} />)
                })
                setMessage("");
            }} onBidClick={handleOpen} />
        </div>
    )
}

export default Chat;