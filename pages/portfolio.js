import { DataGrid } from '@mui/x-data-grid';

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 140 },
    { field: 'rate', headerName: 'Rate', type: 'number', width: 70 },
    { field: 'time', headerName: 'Time (Months)', type: 'number', width: 140 },
    { field: 'interest', headerName: 'Interest', type: 'number', width: 70 },
];

export const rows = [
    { id: 1, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
    { id: 2, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
    { id: 3, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
    { id: 4, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
    { id: 5, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
    { id: 6, name: 'Himanshu', amount: 10000, rate: 10, time: 10, interest: 1000 },
];

const PortfolioPage = () => {


    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row mt-16'}>
                <h1 className={'mx-auto font-bold text-4xl text-cyan-500'}>₹10000</h1>
            </div>
            <div className={'flex justify-center flex-row mt-4'}>
                <button className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Withdraw
                </button>
                <button className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Deposit
                </button>
            </div>
            <div className={'w-1/2 mx-auto mt-10'}>
                <DataGrid rows={rows} columns={columns} pageSize={10} autoHeight={true} />
            </div>
        </div>
    );
}

export default PortfolioPage;