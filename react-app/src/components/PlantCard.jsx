import React from 'react';

export default function PlantCard({ plant }) {
    return (
        <div style={{ 
            border: '1px solid #c8d8c3', 
            borderRadius: '8px', 
            padding: '1.2rem', 
            background: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <h3 style={{ color: '#2d5a27', marginTop: 0 }}>{plant.name}</h3>
            <p><b>Scientific Name:</b> <i>{plant.scientificName}</i></p>
            <p><b>Sunlight:</b> {plant.sunlight}</p>
            <p><b>Height:</b> {plant.heightFeet} ft</p>
            <p><b>Bloom Season:</b> {plant.bloomSeason}</p>
        </div>
    );
}