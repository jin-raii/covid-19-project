import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {

    let dynamicUrl = url;

    if (country) {
        dynamicUrl = `${url}/countries/${country}`;
    }

    try {

        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(dynamicUrl);

        // This is a standerd way to get an object but there's a short way to do it
        // const modifiedData = {
        //     confirmed:data.confirmed,
        //     deaths: data.deaths,
        //     recovered: data.recovered,
        //     lastupdate: data.lastupdate,
        // }

        // const modifiedData = {
        //     confirmed,
        //     deaths,
        //     recovered,
        //     lastUpdate,
        // }

        // return data in one line 
        return {confirmed, deaths, recovered, lastUpdate};
    } catch (error) {
        
    }
}

// fetch daily data
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        // we need an array so loop over it
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

// fetch country
export const fetchCountryName = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        // return the name of the country
        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}