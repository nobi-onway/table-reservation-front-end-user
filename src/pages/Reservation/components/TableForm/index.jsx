import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ControlledRadioButtonsGroup from '../ControlledRatioButtonGroup';
import OutlinedButton from '../OutlinedButton';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import styles from './TableForm.module.scss';
import classNames from 'classnames/bind';
import TimePickerValue from '../TimePickerValue';
import BasicTextFields from '../BasicTextFields';
import TitlebarImageList from '../TitleBarImageList';
import { useEffect, useState, useRef, useContext } from 'react';
import { getData, postData } from '../../../../services/apiService';
import {
    CAPACITY_MASTER_DATA_URL,
    CREATE_RESERVATION_URL,
} from '../../../../services/apiConstant';
import CustomizedSnackbars from '../../../../components/SnackBar';
import useToast from '../../../../hooks/useToast';
import { useCallback } from 'react';
import { AuthContext } from '../../../../store/Auth';

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
        id: 1,
        img: 'https://pvu.thebluebook.com/inc/img/qp/2214759/lrg_the-orchid-banquet-hall.jpg',
        name: 'Orchid Hall',
        capacity: 100,
        category: 'Indoor',
    },
    {
        id: 2,
        img: 'https://botanica.org/wp-content/uploads/2021/11/Vanessa-Matthew-1131-1.jpg',
        name: 'Lotus Hall',
        capacity: 70,
        category: 'Indoor',
    },
    {
        id: 3,
        img: 'https://c8.alamy.com/comp/2H24EW3/the-streets-of-the-city-centre-the-bazaar-and-the-port-area-in-side-antalya-street-view-sunset-cloudy-sky-cafe-restaurant-shop-and-houses-2H24EW3.jpg',
        name: 'Cloudy Area',
        capacity: 40,
        category: 'Outdoor',
    },
    {
        id: 4,
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
    const [venues, setVenues] = useState(itemData);
    const [venue, setVenue] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(dayjs(new Date()));
    const [checkInTime, setCheckInTime] = useState(dayjs(new Date()));
    const [numberOfPersons, setNumberOfPersons] = useState(1);
    const { token } = useContext(AuthContext);

    const venuesRef = useRef([]);
    const userRef = useRef(JSON.parse(token));

    const handleUpdateVenues = useCallback(() => {
        const newVenues = venuesRef.current.filter(
            (venue) => venue.category === venueCategory,
        );
        setVenues(newVenues);
    }, [venueCategory]);

    const {
        isSnackBarOpen,
        severity,
        message,
        handleNotification,
        setIsSnackBarOpen,
    } = useToast();

    useEffect(() => {
        handleUpdateVenues();
    }, [venueCategory, handleUpdateVenues]);

    useEffect(() => {
        getData(CAPACITY_MASTER_DATA_URL, (res) => {
            if (res) {
                const newVenues = res.map((venue) => ({
                    id: venue.capacityMasterDataId,
                    name: venue.venue,
                    img: venue.imageUrl,
                    category: venue.category,
                    capacity: venue.capacity,
                }));
                venuesRef.current = newVenues;
                handleUpdateVenues();
                setVenue(newVenues[0]);
            }
        });
    }, [handleUpdateVenues]);

    const handleReserve = () => {
        const currentDate = dayjs(new Date());

        const status = numberOfPersons > 10 ? 'pending processing' : 'reserved';

        const reservation = {
            username: userRef.current.username,
            capacityMasterDataId: venue.id + '',
            status: status,
            numberOfGuest: numberOfPersons,
            createDate: `${currentDate.format('YYYY-MM-DD')}`,
            checkinTime: `${checkInTime.format('HH:mm:ss')}`,
            checkinDate: `${date.format('YYYY-MM-DD')}`
        };

        postData(CREATE_RESERVATION_URL, reservation, (res, error) => {
            if (res.status === 200) {
                handleResetInputData();
                handleNotification(
                    'success',
                    `Making reservation successfully!`,
                );
            }
            if(res.status === 500) {
                handleNotification('error', `Making reservation fail!`);
            }
        });
    };

    const handleResetInputData = () => {
        setName('');
        setEmail('');
        setPhone('');
        setNumberOfPersons('');
        setCheckInTime(dayjs(new Date()));
        setDate(dayjs(new Date()));
    };

    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Reservation Detail</span>
            <form className={`${cx('form')}`}>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            value={name}
                            handleChange={(e) => setName(e.target.value)}
                            required
                            label="Your name"
                            type="text"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            value={phone}
                            handleChange={(e) => setPhone(e.target.value)}
                            required
                            label="Contact number"
                            type="number"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            value={email}
                            handleChange={(e) => setEmail(e.target.value)}
                            required
                            label="Email"
                            type="email"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={date}
                                onChange={(value) => {
                                    setDate(value);
                                }}
                                sx={{ width: '100%' }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <TimePickerValue
                            value={checkInTime}
                            onChange={(value) => {
                                setCheckInTime(value);
                            }}
                            required
                            label="Check In"
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BasicTextFields
                            value={numberOfPersons}
                            handleChange={(e) =>
                                setNumberOfPersons(parseInt(e.target.value))
                            }
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
                            <OutlinedButton
                                onClick={handleReserve}
                                label="Reserve now"
                            />
                        </Item>
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

export default TableForm;
