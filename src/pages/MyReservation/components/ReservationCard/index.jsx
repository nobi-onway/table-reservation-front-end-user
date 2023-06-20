import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './ReservationCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ReservationCard() {
    return (
        <Grid container className={`${cx('wrapper')}`}>
            <Grid item sm={1} md={1}>
                <div className={`${cx('date-wrapper')}`}>
                    <span className={`${cx('txt-m')} ${cx('bold')}`}>
                        {new Date().toString()}
                    </span>
                    <span className={`${cx('txt-xxl')} ${cx('bold')}`}>27</span>
                </div>
            </Grid>
            <Grid item sm={5} md={5} style={{ padding: '1rem 0' }}>
                <div className={`${cx('reservation-wrapper')}`}>
                    <div className={`${cx('reservation-detail')}`}>
                        <CalendarMonthIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Date:
                            </span>
                            {new Date().toLocaleDateString('en-US', {
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
                            13:00 - 15:00
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <ShareLocationIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Venue:
                            </span>
                            Orchid Hall - Floor 1
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <PersonOutlineIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Persons:
                            </span>
                            4 persons
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid item sm={4} md={4}>
                <div className={`${cx('reservation-wrapper')}`}>
                    <div className={`${cx('reservation-detail')}`}>
                        <RoomServiceOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Service:
                            </span>
                            None
                        </span>
                    </div>
                    <div className={`${cx('reservation-detail')}`}>
                        <FoodBankOutlinedIcon />
                        <span className={`${cx('txt-s')}`}>
                            <span className={`${cx('bold')} ${cx('m-4')}`}>
                                Dishes:
                            </span>
                            None
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid item sm={2} md={2} style={{ padding: '1rem 0' }}>
                <div className={`${cx('option-wrapper')} ${cx('txt-xs')}`}>
                    <span
                        className={`${cx('bold')}`}
                        style={{ color: '#6f7681' }}
                    >
                        {`Created ${new Date().toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}`}
                    </span>
                    <div>
                        <Button
                            style={{
                                backgroundColor: 'red',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                            }}
                            size="large"
                            variant="contained"
                            startIcon={<DeleteIcon />}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default ReservationCard;
