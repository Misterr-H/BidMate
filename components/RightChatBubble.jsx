// This component is used to render the right side chat bubble in the chat window made using tailwind css

const RightChatBubble = ({ message }) => {
    return (
        <div className="flex my-1 flex-col items-end">
            <div className="flex flex-col items-end">
                <div className="bg-gray-300 rounded-lg p-2">
                    <p className="text-gray-700">{message}</p>
                </div>
                <p className="text-gray-500 text-xs mt-1">1:30 PM</p>
            </div>
        </div>
    )
}

export default RightChatBubble;