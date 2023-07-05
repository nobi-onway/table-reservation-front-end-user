import Grid from '@mui/material/Grid';

import styles from './ServiceForm.module.scss';
import classNames from 'classnames/bind';
import LimitTags from '../LimitTags';
import OutlinedButton from '../OutlinedButton';
import { useEffect, useState } from 'react';
import { getData } from '../../../../services/apiService';
import { DISHES_URL, SERVICES_URL } from '../../../../services/constant';

const cx = classNames.bind(styles);

const defaultServices = [
    {
        description: 'live music',
        price: 200,
    },
    {
        description: 'live music',
        price: 300,
    },
];

const defaultDishes = [
    {
        description: 'mushroom buger 1',
        price: 400,
    },
    {
        description: 'mushroom buger 2',
        price: 20,
    },
];

function ServiceForm() {
    const [dishes, setDishes] = useState(defaultDishes);
    const [services, setServices] = useState(defaultServices);

    // useEffect(() => {
    //     getData(DISHES_URL, (dishes) => {
    //         const newDishes = dishes || defaultDishes;
    //         setDishes(newDishes);
    //     });
    // }, [dishes]);

    // useEffect(() => {
    //     getData(SERVICES_URL, (services) => {
    //         const newServices = services || defaultServices;
    //         setServices(newServices);
    //     });
    // }, [services]);

    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Dishes & Services</span>
            <form className={`${cx('form')}`}>
                <Grid container spacing={8}>
                    <Grid item sm={12} md={5}>
                        <div className={`${cx('sub-title')}`}>
                            <span>Food and Beverage</span>
                        </div>
                        <LimitTags label="dishes" tags={dishes} />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <div className={`${cx('sub-title')}`}>
                            <span>Services</span>
                        </div>
                        <LimitTags label="services" tags={services} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className={`${cx('footer')}`}>
                            <OutlinedButton
                                style={{ margin: '0 1rem' }}
                                label="Order now"
                            />
                            <OutlinedButton label="Skip" />
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default ServiceForm;
