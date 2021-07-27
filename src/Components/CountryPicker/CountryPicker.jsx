import React, {useEffect, useState} from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountryName } from '../../api';


const CountryPicker = ({handleChangeCountry}) => {

    const [fetchCountry, setFetchCountry] = useState([]);

    useEffect(() => {
        // create an async funciton
        const fetchedCountry = async () => {
            setFetchCountry(await fetchCountryName())
        }

        fetchedCountry()

    }, [setFetchCountry]);
    
    
    

    return(
        <FormControl className={styles.formController}>
            <NativeSelect defaultValue='' onChange={(e) => handleChangeCountry(e.target.value)}>
                <option value=''>Global</option>
                {fetchCountry.map((country, i) => 
                    
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;