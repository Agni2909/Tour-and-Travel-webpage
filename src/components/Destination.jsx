
import './Destination.css'
import DestinationData from './DestinationData';
import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/3.jpg';
import Mountain4 from '../assets/4.jpg';
const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>
            
            <DestinationData className="first-des"
            heading="Taal Volcano, Bantages"
            text="Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines."
            img1={Mountain1}
            img2={Mountain2}

            />
            <DestinationData className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet.Mount Daguldol hike is considered a minor or an easy climb or a level one scale with difficulty of 3/9 and a trail class of 1-3 that will take you an average of 5 hours to reach the summit."
            img1={Mountain3}
            img2={Mountain4}

            />
        </div>
    )
}
export default Destination;