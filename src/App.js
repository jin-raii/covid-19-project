import React from 'react';

import {Cards, Charts, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/img.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    //create a method for handle change country
    handleChangeCountry = async (country) => {
        // fetch data
        const fetchedDataCountry = await fetchData(country);
        //set state
        this.setState({data: fetchedDataCountry, country: country});
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={covidImage} alt='' className={styles.image} />
                </div>
                <Cards data={data} />
                <CountryPicker handleChangeCountry={this.handleChangeCountry}/>
                {/* pass data and country attribute through props  */}
                <Charts data={data} country={country}/>
               
            </div>
        )
    }
}

export default App;