import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';
export default function Header() {
const reserverSize = useSelector(state => state.reserve.length);
    return (
        <header className='container'>
            <Link to="/">
                <img className='logo' src={logo} alt='Logo Projeto' />
            </Link>
            <Link className='reserva' to="/reservas">
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>{reserverSize} reservas</span>
                </div>
            </Link>
        </header>
    );
}