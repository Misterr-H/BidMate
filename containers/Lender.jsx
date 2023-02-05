import Listing from "@/components/Listing";

const Lender = ({name}) => {
    return (
        <div className={' grid gap-4 grid-cols-1 sm:grid-cols-3 grid-rows-3 '}>
            {/*<h1>Hi {name}, available categories for Lending Money</h1>*/}
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Smith'} creditScore={300} amount={10000} time={12} rate={10}/>
            <Listing name={'Jack'} creditScore={500} amount={10000} time={12} rate={10}/>
            <Listing name={'Bean'} creditScore={780} amount={10000} time={12} rate={10}/>
            <Listing name={'Tim'} creditScore={690} amount={10000} time={12} rate={10}/>
            <Listing name={'John'} creditScore={340} amount={10000} time={12} rate={10}/>
            <Listing name={'Smith'} creditScore={850} amount={10000} time={12} rate={10}/>
            <Listing name={'Jack'} creditScore={340} amount={10000} time={12} rate={10}/>
            <Listing name={'Bean'} creditScore={550} amount={10000} time={12} rate={10}/>
            <Listing name={'Tim'} creditScore={678} amount={10000} time={12} rate={10}/>
            <Listing name={'Tom'} creditScore={734} amount={10000} time={12} rate={10}/>
            <Listing name={'Jerry'} creditScore={744} amount={10000} time={12} rate={10}/>
        </div>
    )
}

export default Lender;