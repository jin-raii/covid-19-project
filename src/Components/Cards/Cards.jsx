import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading....';
    }

    return(
        <div className={styles.container}>

            <Grid container spacing={3} justifyContent='center'>
       
            {/* first */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography varient='h-4'>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=','
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient='body2'>Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            {/* second */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Recoverd</Typography>
                    <Typography varient='h-4'>
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=','
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient='body2'>Number of recoveries cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            {/* Third Component */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography varient='h-4'>
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=','
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient='body2'>Number of Deaths cases of COVID-19</Typography>
                </CardContent>
            </Grid>

        </Grid>
        </div>
    
    )
}
 
export default Cards;