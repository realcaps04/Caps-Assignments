import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem 0' }}>
                <div className="container">
                    {children}
                </div>
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'var(--text-muted)',
                borderTop: '1px solid var(--border)',
                fontSize: '0.875rem'
            }}>
                &copy; 2024 Modern React App. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
