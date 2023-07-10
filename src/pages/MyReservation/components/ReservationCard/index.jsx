import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './ReservationCard.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// const reservation = {
//     imageUrl:
//         'https://pvu.thebluebook.com/inc/img/qp/2214759/lrg_the-orchid-banquet-hall.jpg',
//     createDate: '2023-06-03',
//     checkinTime: '2023-06-12 17:00:00.0',
//     venue: 'Cloudy Area',
//     numberOfGuest: 22,
//     serviceList: [],
//     dishList: [],
//     serviceAmount: 0,
//     dishAmount: 958.56,
//     depositAmount: 315.856,
//     status: 'pending deposit',
// };

const notifyMessage = {
    'pending deposit': 'Deposit to complete reservation',
    'pending processing': 'Waiting for processing',
};

function ReservationCard({ reservation }) {
    return (
        <Grid container className={`${cx('wrapper')} ${cx('m-b-4')}`}>
            <Grid item sm={2} md={2}>
                <div className={`${cx('image-wrapper')}`}>
                    <img alt="venue" src={reservation.imageUrl} />
                </div>
            </Grid>
            <Grid item sm={4} md={4} style={{ padding: '1rem 0' }}>
                <div className={`${cx('reservation-wrapper')}`}>
                    <div className={`${cx('reservation-detail')}`}>
                        <CalendarMonthIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Date:
                            </span>
                            {new Date(
                                reservation.checkinDate,
                            ).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <AccessTimeIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Time:
                            </span>
                            {reservation.checkinTime}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <ShareLocationIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Venue:
                            </span>
                            {reservation.venue}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <PersonOutlineIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Persons:
                            </span>
                            {reservation.numberOfGuest} persons
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid item sm={4} md={4} style={{ padding: '1rem 0' }}>
                <div className={`${cx('reservation-wrapper')}`}>
                    <div className={`${cx('reservation-detail')}`}>
                        <RoomServiceOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Service:
                            </span>
                            {reservation.serviceList.length > 0
                                ? 'View'
                                : 'None'}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <FoodBankOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Dishes:
                            </span>
                            {reservation.dishList.length > 0 ? 'View' : 'None'}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <PaymentsOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Total estimate:
                            </span>
                            ${reservation.dishAmount}
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <PriceCheckOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Deposit required:
                            </span>
                            ${reservation.depositAmount}
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                sm={2}
                md={2}
                style={{
                    display: 'flex',
                    padding: '1rem',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <div className={`${cx('option-wrapper')} ${cx('txt-xs')}`}>
                    <span
                        className={`${cx('bold')}`}
                        style={{ color: '#6f7681' }}
                    >
                        {`Created ${new Date(
                            reservation.createDate,
                        ).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}`}
                    </span>
                    <div>
                        <span className={`${cx('notify-message')}`}>
                            {notifyMessage[reservation.status]}
                        </span>
                        <div style={{ display: 'flex' }}>
                            {reservation.status === 'pending deposit' && (
                                <Button
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                    }}
                                    size="large"
                                    variant="contained"
                                    startIcon={<PaidIcon />}
                                >
                                    Deposit
                                </Button>
                            )}
                            {reservation.status !== 'done' && (
                                <Button
                                    style={{
                                        backgroundColor: 'red',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        marginLeft: '1rem',
                                    }}
                                    size="large"
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                >
                                    Cancel
                                </Button>
                            )}
                            {reservation.status === 'done' && (
                                <Button
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'green',
                                        fontSize: 'small',
                                    }}
                                    disabled
                                    variant="contained"
                                    color="success"
                                >
                                    DONE
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default ReservationCard;
