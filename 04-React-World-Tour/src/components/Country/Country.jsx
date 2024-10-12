import { useState } from 'react';
import './Country.css';
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <img src={ flags.png } alt="" />
            <h3>Name: { name?.common }</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country'}
        </div>
    );
};

export default Country;