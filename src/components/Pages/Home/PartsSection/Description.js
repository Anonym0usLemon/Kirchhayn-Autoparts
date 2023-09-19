import pin from "../../../../assets/svgs/map-icon.svg"

const Description = () => {
    return (
        <div className="description">
            <span className="title">
                <h2>Junk Yard in Fredonia, WI<img src={pin} alt=""/></h2>
            </span>

            <p>
                Kirchhayn Auto Parts & Recycling is a family-owned and operated salvage yard in Fredonia, WI, north of Milwaukee. Our prime 
                location allows us to serve both the Fox Valley and Milwaukee areas. We pride ourselves on providing you with high-quality used 
                OEM parts for any vehicle. We also offer the best prices on used cars, and we'll pay top-dollar to buy your old and unwanted car.
                <br/><br/>
                When you choose Kirchhayn, you can trust you're working with a leader in the auto salvage industry. We inspect all parts carefully 
                to ensure they work reliably before sale. Our goal is to provide high-quality parts at a great price so you get maximum value for your 
                money.
                <br/><br/>
                Choose Kirchhayn for all your auto salvage, used parts, and junk yard needs. Experience the difference a Wisconsin family-owned 
                and operated salvage yard can make!

            </p>
        </div>
    );
}

export default Description;