import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import TreeComponent from './components/TreeComponent';
import './App.css'; // Ensure CSS is imported

const App = () => {
    const [eventHierarchy, setEventHierarchy] = useState([]);

    useEffect(() => {
        // Use realistic sample data for college events
        const sampleData = [
            {
                eventId: 1,
                title: 'Sports Akriti',
                description: 'An annual sports event featuring various outdoor and indoor games.',
                date: '2024-09-10',
                totalSeats: 100,
                bookedSeats: 30,
                children: [
                    {
                        eventId: 2,
                        title: 'Outdoor Games',
                        description: 'Includes events like football, cricket, and athletics.',
                        date: '2024-09-11',
                        totalSeats: 50,
                        bookedSeats: 10,
                        children: []
                    },
                    {
                        eventId: 3,
                        title: 'Indoor Games',
                        description: 'Includes events like table tennis, chess, and carrom.',
                        date: '2024-09-12',
                        totalSeats: 50,
                        bookedSeats: 20,
                        children: []
                    }
                ]
            },
            {
                eventId: 4,
                title: 'Cultural Akriti',
                description: 'A cultural festival showcasing various performances and competitions.',
                date: '2024-09-20',
                totalSeats: 150,
                bookedSeats: 50,
                children: [
                    {
                        eventId: 5,
                        title: 'Singing Event',
                        description: 'A solo and group singing competition.',
                        date: '2024-09-21',
                        totalSeats: 40,
                        bookedSeats: 10,
                        children: []
                    },
                    {
                        eventId: 6,
                        title: 'Dancing Event',
                        description: 'A group and solo dancing competition.',
                        date: '2024-09-22',
                        totalSeats: 40,
                        bookedSeats: 20,
                        children: []
                    },
                    {
                        eventId: 7,
                        title: 'Debate Competition',
                        description: 'An inter-college debate competition.',
                        date: '2024-09-23',
                        totalSeats: 40,
                        bookedSeats: 5,
                        children: []
                    },
                    {
                        eventId: 8,
                        title: 'Instrument Playing',
                        description: 'Showcase of various musical instruments.',
                        date: '2024-09-24',
                        totalSeats: 30,
                        bookedSeats: 15,
                        children: []
                    }
                ]
            },
            {
                eventId: 9,
                title: 'Freshers Welcome',
                description: 'A welcome event for the freshers including talent shows and competitions.',
                date: '2024-09-30',
                totalSeats: 200,
                bookedSeats: 100,
                children: [
                    {
                        eventId: 10,
                        title: 'Talent Hunt',
                        description: 'A competition to find the hidden talents among the freshers.',
                        date: '2024-10-01',
                        totalSeats: 100,
                        bookedSeats: 40,
                        children: []
                    },
                    {
                        eventId: 11,
                        title: 'Talent Show',
                        description: 'A platform for freshers to showcase their talents.',
                        date: '2024-10-02',
                        totalSeats: 100,
                        bookedSeats: 60,
                        children: []
                    }
                ]
            }
        ];

        // Simulate a successful API response
        setEventHierarchy(sampleData);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Online Event Management System</h1>
            </header>
            <main>
                <EventList />
                <TreeComponent data={eventHierarchy} />
            </main>
        </div>
    );
};

export default App;
