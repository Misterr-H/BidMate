import router from 'next/router';
import {UIStore} from "@/store/store";
import {DataGrid} from "@mui/x-data-grid";
import {columns, rows} from "@/pages/portfolio";

const Navbar = () => {
    const amount = UIStore.useState(s => s.amount);

    return (
        <div className="flex justify-between items-center bg-gray-800 p-4">
            <div className="flex items-center">
                <img src={'/logo.png'} alt="logo" className="h-8 w-8 mr-2" />
                <h1 className="text-white text-2xl">BidMate</h1>
            </div>
            <div className="flex items-center">
                <h1 className="text-white hidden sm:inline mr-4">Balance: ₹{amount}</h1>
                <button onClick={() => {
                    router.push('/portfolio')
                        .then(() => window.scrollTo(0, 0));
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Portfolio
                </button>
            </div>
        </div>
    )
}

export default Navbar;