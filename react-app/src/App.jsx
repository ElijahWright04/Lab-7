import React from 'react';
import Navigation from './components/Navigation';
import PlantList from './components/PlantList';
import Footer from './components/Footer';
import { nativePlants } from './plantsData';

export default function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fbf8', minHeight: '100vh', margin: 0 }}>
            <header style={{ background: '#3b7a33', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
                <h1>Native Plant Initiative</h1>
                <p>Built with React Components, Props, and Dynamic Lists</p>
            </header>
            
            <Navigation />
            
            <main>
                <PlantList plants={nativePlants} />
            </main>
            
            <Footer />
        </div>
    );
}