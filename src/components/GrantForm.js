import React, { useState } from 'react';

const GrantForm = ({ initialData = {}, onSubmit, onCancel }) => {
    // Default empty values if initialData is null or undefined
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        description: initialData.description || '',
        amount: initialData.amount || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default GrantForm;
