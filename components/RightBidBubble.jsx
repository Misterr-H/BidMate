const RightBidBubble = ({ amount, time, rate, isLast = true }) => {
    return (
        <div className="flex my-1 flex-col items-end">
            <div className="flex flex-col items-end">
                <div className="bg-gray-300 w-48 rounded-lg p-2">
                    <p className="text-gray-700">Amount: {amount}</p>
                    <p className="text-gray-700">Time: {time}</p>
                    <p className="text-gray-700">Rate: {rate}</p>
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