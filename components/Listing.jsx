const Listing = ({name, creditScore, amount, time, rate}) => {
    return (
        <div className={'shadow flex bg-white w-80 space-between hover:bg-gray-100 cursor-pointer justify-between'}>
            <div className={'flex flex-col justify-center items-center p-4'}>
                <h1 className={'text-2xl'}>{name}</h1>
                <h1 className={`text-xl ${creditScore < 670 ? 'text-red-600' : creditScore < 740 ? 'text-yellow-400' : 'text-green-600'}`}>{creditScore}</h1>
            </div>
            <div className={'flex flex-col justify-center items-center text-cyan-600 p-4'}>
                <h1 className={'text-2xl font-bold'}>₹{amount}</h1>
                <h1 className={'text-xl'}>{time} Months</h1>
                <h1 className={'text-xl'}>{rate}%</h1>
            </div>
        </div>
    )
}

export default Listing;