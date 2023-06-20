import SimplePaper from '../../components/SimplePaper';

const halls = [
    {
        image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/whats-future-food-halls.jpg?itok=4-XMx-1E',
        name: 'Orchid Hall',
        occupancy: 60,
    },
    {
        image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/whats-future-food-halls.jpg?itok=4-XMx-1E',
        name: 'Orchid Hall',
        occupancy: 60,
    },
    {
        image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/whats-future-food-halls.jpg?itok=4-XMx-1E',
        name: 'Orchid Hall',
        occupancy: 60,
    },
];

function Home() {
    return <SimplePaper halls={halls} />;
}

export default Home;
