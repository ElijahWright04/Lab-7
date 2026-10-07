import React from 'react';
import PlantCard from './PlantCard';

export default function PlantList({ plants }) {
    return (
        <section style={{ padding: '2rem' }}>
            <h2 style={{ color: '#2d5a27' }}>Native Plant Directory</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem', 
                marginTop: '1rem' 
            }}>
                {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
        </section>
    );
}