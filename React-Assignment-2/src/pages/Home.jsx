import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Welcome to Our Application
            </h1>
            <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                marginBottom: '3rem',
                maxWidth: '600px',
                margin: '0 auto 3rem auto'
            }}>
                A modern multi-page React application demonstrating routing, component architecture, and responsive design.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/about" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                    About Project
                </Link>
                <Link to="/users" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                    View Users
                </Link>
            </div>

            <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '0.5rem' }}>Dynamic Routing</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Seamless navigation using React Router without page reloads.</p>
                </div>
                <div className="card">
                    <h3 style={{ marginBottom: '0.5rem' }}>Clean Architecture</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Organized folder structure for scalability and maintainability.</p>
                </div>
                <div className="card">
                    <h3 style={{ marginBottom: '0.5rem' }}>Data Driven</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Dynamic content rendering from mock data sources.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
