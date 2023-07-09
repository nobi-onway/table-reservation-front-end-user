import Grid from '@mui/material/Grid';

import styles from './ServiceForm.module.scss';
import classNames from 'classnames/bind';
import LimitTags from '../LimitTags';
import OutlinedButton from '../OutlinedButton';
import { Fragment, useEffect, useState } from 'react';
import { getData } from '../../../../services/apiService';
import { DISHES_URL, SERVICES_URL } from '../../../../services/constant';
import ServiceItem from '../ServiceItem';
import AddServiceItemButton from '../AddServiceItemButton';
import DishesItem from '../DishesItem';
import CustomizedSnackbars from '../../../../components/SnackBar';
import useToast from '../../../../hooks/useToast';

const cx = classNames.bind(styles);

const defaultServices = [
    {
        name: 'live music',
        price: 200,
    },
    {
        name: 'live music 2',
        price: 300,
    },
];

const defaultDishes = [
    {
        name: 'mushroom buger 1',
        price: 400,
    },
    {
        name: 'mushroom buger 2',
        price: 20,
    },
];

function ServiceForm() {
    const [dishesMenu, setDishesMenu] = useState(defaultDishes);
    const [serviceMenu, setServiceMenu] = useState(defaultServices);

    const [selectedDishes, setSelectedDishes] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const {
        isSnackBarOpen,
        severity,
        message,
        handleNotification,
        setIsSnackBarOpen,
    } = useToast();

    const handleRemoveItem = (item, setSelectedItems) => {
        setSelectedItems((preState) =>
            preState.filter((i) => i.name != item.name),
        );
    };

    const handleAddItem = (item, items, setSelectedItems) => {
        let addedItem = items.find((i) => i.name === item.name);

        if (addedItem) {
            handleNotification('warning', 'Item has already added');
            return;
        }

        setSelectedItems((preState) => [...preState, item]);
    };

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

                        {selectedDishes.map((dish, index) => (
                            <DishesItem
                                key={index}
                                item={dish}
                                handleRemoveItem={(item) =>
                                    handleRemoveItem(item, setSelectedDishes)
                                }
                            />
                        ))}

                        <AddServiceItemButton
                            label="Select food & beverage"
                            options={dishesMenu}
                            handleAddItem={(item) =>
                                handleAddItem(
                                    item,
                                    selectedDishes,
                                    setSelectedDishes,
                                )
                            }
                        />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <div className={`${cx('sub-title')}`}>
                            <span>Services</span>
                        </div>
                        {selectedServices.map((service, index) => (
                            <ServiceItem
                                key={index}
                                item={service}
                                handleRemoveItem={(item) =>
                                    handleRemoveItem(item, setSelectedServices)
                                }
                            />
                        ))}

                        <AddServiceItemButton
                            label="Select services"
                            options={serviceMenu}
                            handleAddItem={(item) =>
                                handleAddItem(
                                    item,
                                    selectedServices,
                                    setSelectedServices,
                                )
                            }
                        />
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
            <CustomizedSnackbars
                open={isSnackBarOpen}
                handleClose={() => setIsSnackBarOpen(false)}
                severity={severity}
                message={message}
            />
        </div>
    );
}

export default ServiceForm;
