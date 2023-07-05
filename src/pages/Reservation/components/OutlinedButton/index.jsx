import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButton({ label, style }) {
    return (
        <Stack sx={style} direction="row" justifyContent="center" spacing={2}>
            <Button size="large" variant="outlined">
                {label}
            </Button>
        </Stack>
    );
}
