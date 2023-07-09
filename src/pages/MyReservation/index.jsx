import { Fragment, useEffect, useState } from 'react';
import LabTabs from './components/LabTabs';
import ReservationCard from './components/ReservationCard';
import { getData } from '../../services/apiService';
import { RESERVATION_URL } from '../../services/apiConstant';

const defaultTabs = [
    {
        value: 'Reserved',
        label: 'Reserved',
    },
    {
        value: 'pending deposit',
        label: 'Pending',
    },
    {
        value: 'Canceled',
        label: 'Canceled',
    },
];

const defaultReservations = [
    {
        imageUrl:
            'https://pvu.thebluebook.com/inc/img/qp/2214759/lrg_the-orchid-banquet-hall.jpg',
        createDate: '2023-06-03',
        checkinTime: '2023-06-12 17:00:00.0',
        venue: 'Cloudy Area',
        numberOfGuest: 22,
        serviceList: [],
        dishList: [],
        serviceAmount: 0,
        dishAmount: 958.56,
        depositAmount: 315.856,
        status: 'pending deposit',
    },
];

function MyReservation() {
    const [tabs, setTabs] = useState(defaultTabs);

    useEffect(() => {
        const newTabs = defaultTabs.map((tab) => {
            const reservations = defaultReservations.filter(
                (reservation) => reservation.status === tab.value,
            );

            const ChildrenComponent = () => {
                if (reservations.length === 0) return <Fragment></Fragment>;

                return reservations.map((reservation, index) => (
                    <ReservationCard key={index} reservation={reservation} />
                ));
            };

            return {
                ...tab,
                children: <ChildrenComponent />,
            };
        });
        console.log(newTabs);
        setTabs(newTabs);
        // getData(RESERVATION_URL, (res) => {});
    }, []);

    return <LabTabs tabs={tabs} defaultTab={tabs[0]} />;
}

export default MyReservation;
