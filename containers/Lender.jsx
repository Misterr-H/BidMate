import Listing from "@/components/Listing";

const Lender = ({name}) => {
    return (
        <div>
            <h1>Hi {name}, available categories for Lending Money</h1>
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
            <Listing name={'John'} creditScore={800} amount={10000} time={12} rate={10}/>
        </div>
    )
}

export default Lender;