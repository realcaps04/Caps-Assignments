import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
    return (
        <nav style={{
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 0
            }}>
                <NavLink to="/" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    MyApp
                </NavLink>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400
                        })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/users"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? 600 : 400
                        })}
                    >
                        Users
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
