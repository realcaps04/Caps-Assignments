import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { users } from '../data/users';
import '../styles/global.css';

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Use useMemo for efficient finding (though fast for mock data)
    const user = useMemo(() => {
        return users.find((u) => u.id === parseInt(id));
    }, [id]);

    if (!user) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>404</h2>
                <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>User Not Found</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    The user you are looking for does not exist or has been removed.
                </p>
                <button
                    onClick={() => navigate('/users')}
                    className="btn btn-primary"
                    style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}
                >
                    Back to Users
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>User Profile</h1>

            <div className="card" style={{ padding: '3rem 2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 2rem auto',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: 'white',
                    fontWeight: '700'
                }}>
                    {user.name.charAt(0)}
                </div>

                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{user.name}</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{user.email}</p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>User ID</span>
                        <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>#{user.id}</span>
                    </div>
                </div>
            </div>

            <Link to="/users" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
                &larr; Go Back to Users
            </Link>
        </div>
    );
};

export default UserDetail;
