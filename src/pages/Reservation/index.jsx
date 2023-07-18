import { ServiceForm, TableForm } from './components';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import CustomizedSnackbars from '../../components/SnackBar';
import useToast from '../../hooks/useToast';

import styles from './Reservation.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderRadius: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
}));
function Reservation() {
    const [reservationId, setReservationId] = useState(null)

    const {
        isSnackBarOpen,
        severity,
        message,
        handleNotification,
        setIsSnackBarOpen,
    } = useToast();
    

    const handleOpenServiceForm = (reservationId) => {
        setReservationId(reservationId)
    };

    const handleCloseServiceForm = () => {
        setReservationId(null)
    };

    return (
        <div className={`${cx('wrapper')}`}>
            <Grid container spacing={0} className={`${cx('form')}`}>
                <Grid item xs={12}>
                    <Item>
                        {reservationId || (
                            <TableForm
                                handleSuccessNotify={() => handleNotification(
                                    'success',
                                    `Making reservation successfully!`,
                                )}
                                handleFailNotify={() => handleNotification('error', `Making reservation fail!`)}
                                handleOpenServiceForm={handleOpenServiceForm}
                            />
                        )}
                        {reservationId && (
                            <ServiceForm
                                reservationId={reservationId}
                                handleCloseServiceForm={handleCloseServiceForm}
                            />
                        )}
                    </Item>
                </Grid>

                <CustomizedSnackbars
                open={isSnackBarOpen}
                handleClose={() => setIsSnackBarOpen(false)}
                severity={severity}
                message={message}
            />
            </Grid>
        </div>
    );
}

export default Reservation;
