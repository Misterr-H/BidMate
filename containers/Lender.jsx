import Listing from "@/components/Listing";

const Lender = ({name}) => {
    return (
        <div className={' grid gap-8 grid-cols-3 grid-rows-3 '}>
            {/*<h1>Hi {name}, available categories for Lending Money</h1>*/}
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Smith'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Jack'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Bean'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Tim'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Smith'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Jack'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Bean'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Tim'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Tom'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'Jerry'} creditScore={800} amount={10000} time={12} rate={10}/>
        </div>
    )
}

export default Lender;