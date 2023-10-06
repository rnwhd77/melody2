"use client"
import React, {useState} from "react";
import {useSearchParams} from "next/navigation";

export default function Edit() {
    const [userAccountId, setUserAccountId] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content.trim()) {
            alert('Content cannot be empty.');
            return;
        }

        const board = {
            userAccountId,
            title,
            content,
        };

        try {
            console.log(board);
            const response = await fetch('/api/user-boards', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(board),
            });

            if (response.ok) {
                alert('수정이 완료되었습니다.');

            } else {
                // Board creation failed, display an error message
                alert('Board creation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    const params= useSearchParams();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">삭제완료</h1>
        </div>
    )
}