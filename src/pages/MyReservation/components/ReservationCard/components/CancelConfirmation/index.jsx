import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import WarningIcon from '@mui/icons-material/Warning';

import styles from './CancelConfirmation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CancelConfirmation() {
    return (
        <div className={`${cx('overlay')}`}>
            <div className={`${cx('wrapper')}`}>
                <div className={`${cx('flex-center')}`}>
                    <span style={{color: ''}}>
                        <WarningIcon /> Confirmation
                    </span>
                </div>
                <div className={`${cx('button-wrapper')} ${cx('m-ver-4')}`}>
                    <Button
                        size="large"
                        variant="contained"
                        color="error"
                        disableElevation
                    >
                        CONFIRM
                    </Button>
                    <span style={{ margin: '0 .5rem' }}></span>
                    <Button size="large" variant="contained" disableElevation>
                        CANCEL
                    </Button>
                </div>

                <button className={`${cx('close-button')}`}>
                    <CloseOutlinedIcon />
                </button>
            </div>
        </div>
    );
}

export default CancelConfirmation;
