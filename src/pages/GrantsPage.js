import React, { useEffect, useState } from 'react';
import { getGrants, createGrant, updateGrant, deleteGrant } from '../services/apiClient';
import GrantForm from '../components/GrantForm';

const GrantsPage = () => {
    const [grants, setGrants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingGrant, setEditingGrant] = useState(null);

    const fetchGrants = async () => {
        try {
            const data = await getGrants();
            setGrants(data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch grants.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGrants();
    }, []);

    const handleCreate = async (formData) => {
        try {
            const newGrant = await createGrant(formData);
            setGrants((prev) => [...prev, newGrant]);
            setIsFormVisible(false);
        } catch (err) {
            console.error("Failed to create grant.");
        }
    };

    const handleEdit = async (id, formData) => {
        try {
            const updatedGrant = await updateGrant(id, formData);
            setGrants((prev) =>
                prev.map((grant) => (grant.id === id ? updatedGrant : grant))
            );
            setIsFormVisible(false);
            setEditingGrant(null);
        } catch (err) {
            console.error("Failed to update grant.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteGrant(id);
            setGrants((prev) => prev.filter((grant) => grant.id !== id));
        } catch (err) {
            console.error("Failed to delete grant.");
        }
    };

    const showCreateForm = () => {
        setEditingGrant(null); // Ensure no grant is being edited
        setIsFormVisible(true);
    };

    const showEditForm = (grant) => {
        setEditingGrant(grant);
        setIsFormVisible(true);
    };

    if (loading) return <div>Loading grants...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Grants</h1>
            <button onClick={showCreateForm}>Add New Grant</button>
            {isFormVisible && (
                <GrantForm
                    initialData={editingGrant || {}} // Pass empty object for new grant
                    onSubmit={(data) => (editingGrant ? handleEdit(editingGrant.id, data) : handleCreate(data))}
                    onCancel={() => setIsFormVisible(false)}
                />
            )}
            {grants.length > 0 ? (
                <ul>
                    {grants.map((grant) => (
                        <li key={grant.id}>
                            <strong>{grant.title}</strong> - ${grant.amount}
                            <button onClick={() => showEditForm(grant)}>Edit</button>
                            <button onClick={() => handleDelete(grant.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No grants available.</p>
            )}
        </div>
    );
};

export default GrantsPage;
