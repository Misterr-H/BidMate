const MessageEntry = ({ message, onMessageChange, onMessageSubmit, onBidClick }) => (
    <div className="flex px-5 absolute w-full bottom-2 flex-row items-center">
        <input
            className="border-2 w-full border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600"
            type="text"
            value={message}
            onChange={onMessageChange}
        />
        <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={onMessageSubmit}
        >
            Send
        </button>
        <button
            className="bg-orange-500 hover:bg-orange-400 text-white w-40 font-bold py-2 px-4 rounded ml-2"
            onClick={onBidClick}
        >
            Make Bid
        </button>
    </div>
);

export default MessageEntry;