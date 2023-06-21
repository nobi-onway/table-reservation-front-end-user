import BasicTextFields from '../Reservation/components/BasicTextFields';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div>
            <h1>Title</h1>
            <BasicTextFields type="string" label="username" />
            <BasicTextFields type="password" label="password" />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>
        </div>
    );
}

export default Login;
