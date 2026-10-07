import React from 'react';

export default function Navigation() {
    return (
        <nav style={{ background: '#2d5a27', padding: '1rem', color: 'white' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#directory" style={{ color: 'white', textDecoration: 'none' }}>Plant Directory</a></li>
                <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            </ul>
        </nav>
    );
}