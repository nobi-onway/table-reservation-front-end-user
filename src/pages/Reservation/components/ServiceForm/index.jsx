import styles from './ServiceForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ServiceForm() {
    return (
        <div className={`${cx('wrapper')}`}>
            <span className={`${cx('title')}`}>Dishes & Services</span>
            <form className={`${cx('form')}`}></form>
        </div>
    );
}

export default ServiceForm;
