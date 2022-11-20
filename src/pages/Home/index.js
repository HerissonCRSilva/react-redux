import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdFlightTakeoff } from 'react-icons/md';
import { addReserveRequest } from '../../store/modules/reserve/actions';
import './style.css';
import api from '../../services/api';

export default function Home() {

    const [trips, setTrips] = useState([]);
    const dispatch = useDispatch();

    function handleAdd(id) {
        dispatch(addReserveRequest(id))
    }

    useEffect(() => {

        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
        }

        loadApi();
    }, [])

    return (
        <div>
            <div className='box'>
                {
                    trips.map(trip => (
                        <li key={trip.id}>
                            <img src={trip.image} alt={trip.title} />
                            <strong>{trip.title}</strong>
                            <span>{trip.status ? "Disponível" : "Indisponível"}</span>
                            <button
                                type='button'
                                onClick={() => handleAdd(trip.id)}
                            >
                                <div>
                                    <MdFlightTakeoff size={16} color="#FFF" />
                                </div>
                                <span>Solicitar Reserva</span>
                            </button>
                        </li>
                    ))
                }
            </div>
        </div>
    );
}