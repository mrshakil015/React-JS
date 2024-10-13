import { useState } from 'react';
import './Country.css';
import CountryDetails from './../CountryDetails/CountryDetails';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country)
    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={ flags.png } alt="" />
            <h3 style={{color: visited ? 'Green' : 'white'}}>Name: { name?.common }</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country'}
            <hr />
            <CountryDetails
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;