//a beautiful form to post ad for borrowing made using tailwind css

const Borrower = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex shadow flex-col items-center justify-center bg-white w-96 p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Post Ad</h1>
                <div className="flex flex-col w-full mt-4">
                    <label className="text-gray-600">Amount</label>
                    <input type="text" className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600" />
                </div>
                <div className="flex flex-col w-full mt-4">
                    <label className="text-gray-600">Time (Months)</label>
                    <input type="text" className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600" />
                </div>
                <div className="flex flex-col w-full mt-4">
                    <label className="text-gray-600">Rate</label>
                    <input type="text" className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-cyan-600" />
                </div>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Post
                </button>
            </div>
        </div>
    )
}

export default Borrower;