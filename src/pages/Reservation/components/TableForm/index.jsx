import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ControlledRadioButtonsGroup from '../ControlledRatioButtonGroup';
import OutlinedButton from '../OutlinedButton';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import styles from './TableForm.module.scss';
import classNames from 'classnames/bind';
import TimePickerValue from '../TimePickerValue';
import BasicTextFields from '../BasicTextFields';
import TitlebarImageList from '../TitleBarImageList';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const venueOptions = [
    {
        value: 'Indoor',
        label: 'Indoor',
    },
    {
        value: 'Outdoor',
        label: 'Outdoor',
    },
];

const itemData = [
    {
        img: 'https://pvu.thebluebook.com/inc/img/qp/2214759/lrg_the-orchid-banquet-hall.jpg',
        name: 'Orchid Hall',
        capacity: 100,
        category: 'Indoor',
    },
    {
        img: 'https://botanica.org/wp-content/uploads/2021/11/Vanessa-Matthew-1131-1.jpg',
        name: 'Lotus Hall',
        capacity: 70,
        category: 'Indoor',
    },
    {
        img: 'https://c8.alamy.com/comp/2H24EW3/the-streets-of-the-city-centre-the-bazaar-and-the-port-area-in-side-antalya-street-view-sunset-cloudy-sky-cafe-restaurant-shop-and-houses-2H24EW3.jpg',
        name: 'Cloudy Area',
        capacity: 40,
        category: 'Outdoor',
    },
    {
        img: 'https://novum-hotel-golden-park-budapest.booked.net/data/Photos/OriginalPhoto/10158/1015866/1015866910/Hotel-Golden-Park-Budapest-Exterior.JPEG',
        name: 'Golden Park Hall',
        capacity: 60,
        category: 'Outdoor',
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderRadius: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
}));

function TableForm() {
    const [venueCategory, setVenueCategory] = useState('Indoor');
    const [venues, setVenues] = useState([]);
    const [venue, setVenue] = useState({});

    useEffect(() => {
        const newVenues = itemData.filter(
            (venue) => venue.category === venueCategory,
        );
        setVenues(newVenues);
    }, [venueCategory]);

    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Reservation Detail</span>
            <form className={`${cx('form')}`}>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            required
                            label="Your name"
                            type="text"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            required
                            label="Contact number"
                            type="number"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields required label="Email" type="email" />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker sx={{ width: '100%' }} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <TimePickerValue required label="Check In" />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            required
                            label="How many persons?"
                            type="number"
                        />
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <div className={`${cx('flex-center')}`}>
                            <TitlebarImageList
                                itemData={venues}
                                title={venueCategory}
                                handleOnSelected={(item) => {
                                    console.log(item);
                                    setVenue(item);
                                }}
                                selectedVenue={venue}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <ControlledRadioButtonsGroup
                            label="Venue"
                            options={venueOptions}
                            value={venueCategory}
                            handleChange={(e) =>
                                setVenueCategory(e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <OutlinedButton label="Reserve now" />
                        </Item>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default TableForm;
