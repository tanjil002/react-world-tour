import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // setVisited(true);
        setVisited(!visited);
    }


    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && ' I hae visited this country'} */}
            {visited ? ' I have visited this country' : 
            'i want to visit'}
        </div>
    );
};

export default Country;