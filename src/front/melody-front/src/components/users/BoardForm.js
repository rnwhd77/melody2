"use client"
import React, { useState } from 'react';

function BoardForm() {
    // Define state variables for form fields
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a board object with the form data
        const board = {
            title,
            content,
        };

        try {
            // Send a POST request to the backend API
            const response = await fetch('/api/users-boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(board),
            });

            if (response.ok) {
                // Board creation successful
                alert('Board created successfully!');
                // Optionally, redirect to a success page or perform other actions
            } else {
                // Board creation failed, display an error message
                alert('Board creation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    return (
        <div className="container mx-auto p-8">
            <section className="board-form" id="board-form">
                <div className="section-inner">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold mb-4">문의하기</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full rounded border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block">Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    className="w-full rounded border px-3 py-2"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div>
                                <input
                                    type="submit"
                                    value="접수하기"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default BoardForm;