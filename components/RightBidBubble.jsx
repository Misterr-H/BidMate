const RightBidBubble = ({ bid, isLast }) => {
    return (
        <div className="flex flex-col items-end">
            <div className="flex flex-col items-end">
                <div className="bg-gray-300 w-48 rounded-lg p-2">
                    <p className="text-gray-700">Amount: {bid.amount}</p>
                    <p className="text-gray-700">Time: {bid.time}</p>
                    <p className="text-gray-700">Rate: {bid.rate}</p>
                </div>
                <div className="flex justify-between w-48 mt-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Accept
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reject
                    </button>
                </div>
            </div>
            {!isLast && <div className="w-1 h-16 bg-gray-300 mt-2" />}
        </div>
    )
}

export default RightBidBubble;