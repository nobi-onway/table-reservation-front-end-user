import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ required, label, type }) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required={required}
                id="outlined-basic"
                label={label}
                variant="outlined"
                type={type}
            />
        </Box>
    );
}
