import Grid from '@mui/material/Grid';
import ControlledRadioButtonsGroup from '../ControlledRatioButtonGroup';

import styles from './ServiceForm.module.scss';
import classNames from 'classnames/bind';
import LimitTags from '../LimitTags';
import { useEffect, useState } from 'react';
import { getData } from '../../../../services/useService';
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

const venueOptions = [
    {
        value: 'indoor',
        label: 'indoor',
    },
    {
        value: 'outdoor',
        label: 'outdoor',
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

    useEffect(() => {
        getData(DISHES_URL, (dishes) => {
            const newDishes = dishes || defaultDishes;
            setDishes(newDishes);
        });
    }, [dishes]);

    useEffect(() => {
        getData(SERVICES_URL, (services) => {
            const newServices = services || defaultServices;
            setServices(newServices);
        });
    }, [dishes]);

    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Dishes & Services</span>
            <form className={`${cx('form')}`}>
                <Grid container>
                    <Grid item sm={12} md={12}>
                        <LimitTags label="services" tags={services} />
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <LimitTags label="dishes" tags={dishes} />
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <ControlledRadioButtonsGroup
                            label="Venue"
                            options={venueOptions}
                            defaultValue={venueOptions[0]}
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default ServiceForm;
