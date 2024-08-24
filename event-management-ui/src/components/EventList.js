import React, { useState, useEffect } from 'react';
import '../App.css'; // Import App.css for styling
import talentShowImg from '../assets/talent-show.jpg';
import talentHuntImg from '../assets/talent-hunt.jpg';
import culturalAkritiImg from '../assets/cultural-akriti.jpg';
import sportsAkritiImg from '../assets/sports-akriti.jpg';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const collegeEvents = [
            {
                eventId: 1,
                title: 'Talent Show',
                description: 'A grand talent show featuring performances from various artists and participants.',
                date: '2024-09-20',
                image: talentShowImg,
                totalSeats: 100,
                bookedSeats: 20,
                subEvents: [
                    { title: 'Solo Performances', description: 'Individual performances.', date: '2024-09-20' },
                    { title: 'Group Performances', description: 'Group acts showcasing talents.', date: '2024-09-21' }
                ]
            },
            {
                eventId: 2,
                title: 'Talent Hunt',
                description: 'An exciting talent hunt where participants showcase their unique talents.',
                date: '2024-09-25',
                image: talentHuntImg,
                totalSeats: 100,
                bookedSeats: 30,
                subEvents: [
                    { title: 'Auditions', description: 'Initial auditions to select participants for the main event.', date: '2024-09-25' },
                    { title: 'Finals', description: 'Final rounds where the best talents are showcased.', date: '2024-09-26' }
                ]
            },
            {
                eventId: 3,
                title: 'Cultural Akriti',
                description: 'A series of cultural events including singing, dancing, and debate competitions.',
                date: '2024-09-10',
                image: culturalAkritiImg,
                totalSeats: 150,
                bookedSeats: 50,
                subEvents: [
                    { title: 'Singing Event', description: 'Solo and group singing performances.', date: '2024-09-10' },
                    { title: 'Dancing Event', description: 'Solo and group dance performances.', date: '2024-09-11' },
                    { title: 'Debate Competition', description: 'Debate competitions on various topics.', date: '2024-09-12' },
                    { title: 'Instrument Playing', description: 'Performance by various instrumentalists.', date: '2024-09-13' }
                ]
            },
            {
                eventId: 4,
                title: 'Sports Akriti',
                description: 'Various sports events including outdoor and indoor games.',
                date: '2024-09-01',
                image: sportsAkritiImg,
                totalSeats: 200,
                bookedSeats: 70,
                subEvents: [
                    { title: 'Outdoor Games', description: 'Includes football, basketball, and athletics.', date: '2024-09-01' },
                    { title: 'Indoor Games', description: 'Includes table tennis, chess, and badminton.', date: '2024-09-02' }
                ]
            }
        ];

        setEvents(collegeEvents);
    }, []);

    const handleBooking = (eventId) => {
        setEvents(events.map(event =>
            event.eventId === eventId
                ? { ...event, bookedSeats: event.bookedSeats + 1 }
                : event
        ));
    };

    return (
        <div className="EventList">
            <h2>Event List</h2>
            <ul>
                {events.length > 0 ? (
                    events.map(event => (
                        <li key={event.eventId} className="EventList-item">
                            <img src={event.image} alt={event.title} className="EventList-image" />
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                            <p>Total Seats: {event.totalSeats}</p>
                            <p className={event.totalSeats === event.bookedSeats ? 'EventList-seats EventList-seats-full' : 'EventList-seats'}>
                                Available Seats: {event.totalSeats - event.bookedSeats}
                            </p>
                            <button onClick={() => handleBooking(event.eventId)}>Book Seat</button>
                            <ul>
                                {event.subEvents && event.subEvents.map((subEvent, index) => (
                                    <li key={index} className="EventList-subEvent">
                                        <strong>{subEvent.title}</strong>
                                        <p>{subEvent.description}</p>
                                        <p>Date: {new Date(subEvent.date).toLocaleDateString()}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </ul>
        </div>
    );
};

export default EventList;
