import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handelVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handelVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h2>In The Counties {countries.length}</h2>

            <h3>Total Visited Country: {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>
            <div className='flag-size'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handelVisitedCountries={handelVisitedCountries} handelVisitedFlags={handelVisitedFlags}></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;