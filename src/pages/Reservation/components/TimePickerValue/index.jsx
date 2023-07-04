import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue({ label }) {
    const [value, setValue] = useState(dayjs(new Date()));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                sx={{ width: '100%' }}
                label={label}
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </LocalizationProvider>
    );
}
