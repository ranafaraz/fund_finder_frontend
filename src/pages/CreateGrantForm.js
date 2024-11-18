import React, { useState } from 'react';
import { createGrant } from '../services/apiClient';

const CreateGrantForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createGrant({ title, amount });
        alert('Grant Created!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Grant Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateGrantForm;
