import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/users';
import '../styles/global.css';

const Users = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>User Directory</h1>
            <p style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                marginBottom: '3rem',
                fontSize: '1.25rem'
            }}>
                Select a user to view their detailed profile.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {users.map((user) => (
                    <Link key={user.id} to={`/users/${user.id}`} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: 'white',
                                fontWeight: '700'
                            }}>
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <h3 style={{ marginBottom: '0.25rem', color: 'var(--text-main)' }}>{user.name}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{user.email}</p>
                            </div>
                            <div style={{ marginLeft: 'auto', color: 'var(--primary)', fontWeight: '600' }}>
                                View &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link to="/" className="btn btn-outline">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default Users;
