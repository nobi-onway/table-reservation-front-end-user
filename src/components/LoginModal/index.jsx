import BasicTextFields from '../../pages/Reservation/components/BasicTextFields';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../../img/logo.png';

import styles from './LoginModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginModal({ handleModalClose, handleSignUp }) {
    return (
        <div className={`${cx('overlay')}`}>
            <div className={`${cx('wrapper')}`}>
                <div className={`${cx('flex-center')}`}>
                    <img className={`${cx('logo')}`} src={logo} alt="Logo" />
                </div>
                <div className={`${cx('m-col-4')} ${cx('m-ver-4')}`}>
                    <BasicTextFields type="string" label="username" />
                </div>
                <div className={`${cx('m-col-4')} ${cx('m-ver-4')}`}>
                    <BasicTextFields type="password" label="password" />
                </div>
                <div className={`${cx('button-wrapper')} ${cx('m-ver-4')}`}>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        disableElevation
                    >
                        SIGN IN
                    </Button>
                </div>

                <button
                    onClick={handleModalClose}
                    className={`${cx('close-button')}`}
                >
                    <CloseOutlinedIcon />
                </button>

                <div className={`${cx('flex-center')} ${cx('flex-col')}`}>
                    <a href="#" className={`${cx('forgot-password')}`}>
                        Forgot Password?
                    </a>
                    <span className={`${cx('medium-txt')} ${cx('m-col-2')}`}>
                        Don't have an account?{' '}
                        <button
                            onClick={handleSignUp}
                            className={`${cx('sign-up')}`}
                        >
                            Sign Up
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
