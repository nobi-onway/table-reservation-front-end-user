import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from './TableForm.module.scss';
import classNames from 'classnames/bind';
import InputSelector from '../InputSelector';
import TimePickerValue from '../TimePickerValue';
import BasicTextFields from '../BasicTextFields';

const cx = classNames.bind(styles);

const capacityOptions = [
    {
        value: 2,
        name: '2 persons',
    },
    {
        value: 4,
        name: '4 persons',
    },
    {
        value: 6,
        name: '6 persons',
    },
    {
        value: 8,
        name: '8 persons',
    },
    {
        value: 10,
        name: '10 persons',
    },
];

function TableForm() {
    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Reservation</span>
            <form className={`${cx('form')}`}>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <InputSelector
                            label="How many persons?"
                            options={capacityOptions}
                            defaultValue={capacityOptions[0]}
                        />
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <TimePickerValue label="Check In" />
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <TimePickerValue label="Check Out" />
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <BasicTextFields label="Name" type="text" />
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <BasicTextFields label="Phone number" type="number" />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default TableForm;
