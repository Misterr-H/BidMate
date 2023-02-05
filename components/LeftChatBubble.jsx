const LeftChatBubble = ({ message }) => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-col items-start">
                <div className="bg-white rounded-lg p-2">
                    <p className="text-gray-700">{message}</p>
                </div>
                <p className="text-gray-500 text-xs mt-1">1:30 PM</p>
            </div>
        </div>
    )
}

export default LeftChatBubble;