
function CarTile() {
    const cars = [
        {
            "id": 1, 
            "image": "2005-MITSUBISHI-ENDEAVOR.jpg",
            "year": "2005",
            "make": "Mitsubishi",
            "model": "Endevor",
            "price": 2700,
            "mileage": 154000,
            "transmission": "Automatic"
        },
        {
            "id": 2, 
            "image": "2003-SATURN-SATURN-L-SERIES.jpg",
            "year": "2003",
            "make": "Saturn",
            "model": "L Series",
            "price": 2500,
            "mileage": 210000,
            "transmission": "Automatic"
        },
        {
            "id": 3, 
            "image": "2008-MAZDA-MAZDA-3.jpg",
            "year": "2008",
            "make": "Mazda",
            "model": "3",
            "price": 3800,
            "mileage": 182000,
            "transmission": "Automatic"
        },
        {
            "id": 4, 
            "image": "2005-MERCURY-SABLE.jpg",
            "year": "2005",
            "make": "Mercury",
            "model": "Sable",
            "price": 1900,
            "mileage": 139000,
            "transmission": "Automatic"
        },
        {
            "id": 5, 
            "image": "2016-DODGE-CHALLENGER-HELLCAT.jpg",
            "year": "2016",
            "make": "Dodge",
            "model": "Challenger",
            "price": 5600,
            "mileage": 98000,
            "transmission": "Manual"
        },
        {
            "id": 6, 
            "image": "2016-PORSCHE-CAYENNE.jpg",
            "year": "2016",
            "make": "Porsche",
            "model": "Cayenne",
            "price": 4800,
            "mileage": 132553,
            "transmission": "Automatic"
        }
    ]
    
    return (
        <div className="car-tile-container">
        {/* use .map to pull in data from .json file and display car-tile components onto the page */}
            {cars.map((cars) => (
                <div key={cars.id} className="car-tile hover-animation">
                    <div className="make-image-fit-peas">
                        <img className="car-photo" src={`./images/Home/${cars.image}`} alt=""/>
                    </div>
        
                    <div className="car-info">
                        <span className="year">{cars.year}</span>
                        <span className="make-model">{cars.make + " " + cars.model}</span>
                        <span className="price">${new Intl.NumberFormat('en-US').format(cars.price)}</span>
                    </div>
        
                    <div className="car-stats">
                        <div className="mileage">
                            <img src="./images/Home/speedometer.png" alt="" />
                            <p>{new Intl.NumberFormat('en-US').format(cars.mileage)}</p>
                        </div>
        
                        <div className="transmission">
                            <img src="./images/Home/transmission.png" alt="" />
                            <p>{cars.transmission}</p>
                        </div>
                    </div>
        
                    <a className="details-link">Full Details</a>
                </div>
            ))}
        </div>
        
    );
}

export default CarTile;