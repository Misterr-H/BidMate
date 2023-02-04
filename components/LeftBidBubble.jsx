// This component shows left side bid bubble having amount, time and interest rate of bid along with buttons to accept or reject the bid made by the user using tailwind css

const LeftBidBubble = ({ amount, time, rate }) => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-col items-start">
                <div className="bg-gray-300 w-48 rounded-lg p-2">
                    <p className="text-gray-700">Amount: {amount}</p>
                    <p className="text-gray-700">Time: {time}</p>
                    <p className="text-gray-700">Rate: {rate}</p>
                </div>
                <div className="flex justify-between w-48 mt-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reject
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeftBidBubble;