import { DataGrid } from '@mui/x-data-grid';
import {UIStore} from "@/store/store";
import Modal from "@mui/material/Modal";
import {useRef, useState} from "react";

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
    { id: 2, name: 'Manya', amount: 12000, rate: 7, time: 12, interest: 988 },
    { id: 3, name: 'Nikita Arora', amount: 50000, rate: 32, time: 40, interest: 19011 },
    { id: 4, name: 'Pragati', amount: 19000, rate: 14, time: 19, interest: 4342 },
    { id: 5, name: 'Mahua', amount: 23000, rate: 18, time: 6, interest: 3000 },
    { id: 6, name: 'Shreya', amount: 22000, rate: 13, time: 9, interest: 5000 },
];

const PortfolioPage = () => {
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
                            Deposit
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
        <div className={'flex flex-col'}>
            <div className={'flex flex-row mt-16'}>
                <h1 className={'mx-auto font-bold text-4xl text-cyan-500'}>₹{amount}</h1>
            </div>
            <div className={'flex justify-center flex-row mt-4'}>
                <button onClick={() => setIsWithdrawModalOpen(true)} className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Withdraw
                </button>
                <button onClick={() => setIsDepositModalOpen(true) } className={'bg-cyan-500 mx-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="button">
                    Deposit
                </button>
            </div>
            <DepositModal />
            <WithdrawModal />
            <div className={'w-1/2 mx-auto mt-10'}>
                <DataGrid rows={rows} columns={columns} pageSize={10} autoHeight={true} />
            </div>
        </div>
    );
}

export default PortfolioPage;