import { Fragment } from 'react';
import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}

export default DefaultLayout;
