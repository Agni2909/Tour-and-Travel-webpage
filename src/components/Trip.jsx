import './Trip.css';
import TripData from './TripData';
import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/8.jpg';
import Trip3 from '../assets/6.jpg';
function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="If you are planning a Indonesia trip, MakeMyTrip is the right place to come to. Whatever your travel preference, you will find suitable Indonesia holiday packages here. Whether you are looking for Indonesia packages for a family or a couple, whether you need escorted Indonesia tour packages for your parents or an offbeat Indonesia vacation for yourself, MakeMyTrip can help you sort out your Indonesia trip plan.
                
                "
                />
                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="The Malaysia weather doesn't seem to vary much all year round. Treat yourself to Malaysia holiday packages anytime between February to early October. With the Chinese New Year and the Hindu celebrations of Thaipusam, February is the month of festivities, hence making it very favorable for Malaysia travel. Post the rainy season, the country drapes up and makes for a beautiful sight, with a vibrant green countryside and enthralling waterfalls - a highlight of a Malaysia tour package.
                "
                />
                <TripData
                image={Trip3}
                heading="Trip in France"
                text="France is known all around the world for Paris and its monuments such as the Eiffel Tower and the Notre-Dame cathedral. French people are very passionate about their culture and art, which is showcased in many museums like the Louvre.
                "
                />
            </div>
        </div>
        
    )
}
export default Trip;