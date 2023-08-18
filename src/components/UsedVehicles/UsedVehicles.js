import CarTile from "./CarTile";

/**
 * This component is for the Used Vehicles page
 * it displays a list of car components dynamicaly. 
 * 
 */

function UsedVehicles() {
    return (
        <section className="used-vehicles padding-inline">
            <h1>Newest Used Vehicle Selection</h1>

            <CarTile/>
        </section>
    );
}

export default UsedVehicles;