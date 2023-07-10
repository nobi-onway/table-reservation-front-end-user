import { ServiceForm, TableForm } from './components';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

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
    const [isOpenServiceForm, setIsOpenServiceForm] = useState(false);

    const handleOpenServiceForm = () => {
        setIsOpenServiceForm(true);
    };

    const handleCloseServiceForm = () => {
        setIsOpenServiceForm(false);
    };

    return (
        <div className={`${cx('wrapper')}`}>
            <Grid container spacing={0} className={`${cx('form')}`}>
                <Grid item xs={12}>
                    <Item>
                        {isOpenServiceForm || (
                            <TableForm
                                handleOpenServiceForm={handleOpenServiceForm}
                            />
                        )}
                        {isOpenServiceForm && (
                            <ServiceForm
                                handleCloseServiceForm={handleCloseServiceForm}
                            />
                        )}
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Reservation;
