import React from 'react';
import { useParams } from 'react-router-dom';
import BillForm from '../components/BillForm';
import HouseList from '../components/HouseList';
import PersonList from '../components/PersonList';
import Report from '../components/Report';
import Chart from '../components/Chart';
import { House } from '../types';

const Dashboard: React.FC = () => {
    const { houseId } = useParams<{ houseId: string }>();
    const [house, setHouse] = React.useState<House | null>(null);

    React.useEffect(() => {
        // Fetch house details based on houseId
        const fetchHouseDetails = async () => {
            // Simulated fetch function
            const fetchedHouse = await fetch(`/api/houses/${houseId}`).then(res => res.json());
            setHouse(fetchedHouse);
        };

        fetchHouseDetails();
    }, [houseId]);

    if (!house) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard for {house.name}</h1>
            <HouseList />
            <PersonList houseId={house.id} />
            <BillForm houseId={house.id} />
            <Report houseId={house.id} />
            <Chart houseId={house.id} />
        </div>
    );
};

export default Dashboard;