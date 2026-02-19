import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const About = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>About This Project</h1>

            <div className="card" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.8',
                    marginBottom: '2rem'
                }}>
                    This application is built using ReactJS and React Router DOM to demonstrate modern web development practices.
                    It features dynamic routing, parameterized routes, and a component-based architecture designed for
                    scalability and maintenance.
                </p>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Key Features</h3>
                <ul style={{
                    listStyle: 'disc',
                    paddingLeft: '2rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                }}>
                    <li>Multi-page seamless navigation (SPA).</li>
                    <li>Dynamic user detail fetching from data.</li>
                    <li>Responsive, clean layout using modern CSS.</li>
                    <li>Component reusability and separation of concerns.</li>
                </ul>
            </div>

            <Link to="/" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                Back to Home
            </Link>
        </div>
    );
};

export default About;
