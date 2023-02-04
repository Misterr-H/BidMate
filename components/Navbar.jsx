import router from 'next/router';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4">
            <div className="flex items-center">
                <img src={'/logo.png'} alt="logo" className="h-8 w-8 mr-2" />
                <h1 className="text-white text-2xl">BidMate</h1>
            </div>
            <div className="flex items-center">
                <h1 className="text-white mr-4">Balance: ₹1000</h1>
                <button onClick={() => {
                    router.push('/portfolio')
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Portfolio
                </button>
            </div>
        </div>
    )
}

export default Navbar;