import { DataGrid } from '@mui/x-data-grid';
import {UIStore} from "@/store/store";
import Modal from "@mui/material/Modal";
import {useRef, useState} from "react";


const PortfolioPage = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 140 },
        { field: 'amount', headerName: 'Amount', type: 'number', width: 140 },
        { field: 'rate', headerName: 'Rate', type: 'number', width: 70 },
        { field: 'time', headerName: 'Time (Months)', type: 'number', width: 140 },
    ];

    const rows = UIStore.useState(s => s.portfolioRows);

    const amount = UIStore.useState(s => s.amount);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const inputRef = useRef(null);

    const DepositModal = () => {
        return (
            <Modal
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginY: 'auto',
                }}
                open={isDepositModalOpen}
                onClose={() => setIsDepositModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={'bg-white p-4 rounded shadow-lg'}>
                    <h1 className={'text-2xl font-bold text-cyan-500'}>Deposit</h1>
                    <div className={'flex flex-col mt-4'}>
                        <label className={'text-gray-500'}>Amount</label>
                        <input ref={inputRef} onChange={e => {
                            if(e.target.value < 0) {
                                inputRef.current.value = 0;
                            }
                        }} className={'border border-gray-500 rounded p-2'} type="number" />
                    </div>
                    <div className={'flex flex-row mt-4'}>
                        <button onClick={() => {
                            UIStore.update(s => {
                                s.amount = s.amount + Number(inputRef.current.value);
                            });
                            setIsDepositModalOpen(false);
                        }} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                            Add Money
                        </button>
                        <button onClick={() => {
                            setIsDepositModalOpen(false);
                        }} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }

    const WithdrawModal = () => {
        return (
            <Modal
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginY: 'auto',
                }}
                open={isWithdrawModalOpen}
                onClose={() => setIsWithdrawModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={'bg-white p-4 rounded shadow-lg'}>
                    <h1 className={'text-2xl font-bold text-cyan-500'}>Withdraw</h1>
                    <div className={'flex flex-col mt-4'}>
                        <label className={'text-gray-500'}>Amount</label>
                        <input ref={inputRef} onChange={() => {
                            if(inputRef.current.value < 0) {
                                inputRef.current.value = 0;
                            }
                            if(inputRef.current.value > amount) {
                                inputRef.current.value = amount;
                            }
                        }} className={'border border-gray-500 rounded p-2'} type="number" />
                    </div>
                    <div className={'flex flex-row mt-4'}>
                        <button onClick={() => {
                            UIStore.update(s => {
                                s.amount = s.amount - Number(inputRef.current.value);
                            });
                            setIsWithdrawModalOpen(false);
                        }} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                            Withdraw
                        </button>
                        <button onClick={() => {
                            setIsWithdrawModalOpen(false);
                        }} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <div className={'flex flex-col bg-white'}>
            <div className={'flex flex-row mt-16'}>
                <h1 className={'mx-auto font-bold text-4xl text-cyan-500'}>₹{amount}</h1>
            </div>
            <div className={'flex justify-center flex-row mt-4'}>
                <button onClick={() => setIsWithdrawModalOpen(true)} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Withdraw
                </button>
                <button onClick={() => setIsDepositModalOpen(true) } className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Add Money
                </button>
            </div>
            <DepositModal />
            <WithdrawModal />
            <div className={'w-full sm:w-1/2 mx-1 sm:mx-auto mt-10'}>
                <h1 className={'text-2xl font-bold text-cyan-500'}>Investments</h1>
                <DataGrid rows={rows} columns={columns} pageSize={10} autoHeight={true} />
            </div>
        </div>
    );
}

export default PortfolioPage;