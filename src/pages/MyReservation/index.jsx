import LabTabs from './components/LabTabs';
import ReservationCard from './components/ReservationCard';

const tabs = [
    {
        value: 'Reserved',
        label: 'Reserved',
        children: <ReservationCard />,
    },
    {
        value: 'Pending',
        label: 'Pending',
        children: <h1>Pending</h1>,
    },
    {
        value: 'Canceled',
        label: 'Canceled',
        children: <h1>Canceled</h1>,
    },
];
function MyReservation() {
    return <LabTabs tabs={tabs} defaultTab={tabs[0]} />;
}

export default MyReservation;
