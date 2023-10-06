"use client"
import React, { useState } from 'react';

function BoardForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content.trim()) {
            alert('Content cannot be empty.');
            return;
        }

        console.log('Submitting form with title:', title);
        console.log('Submitting form with content:', content);

        const board = {
            title,
            content,
        };

        try {
            console.log(board);
            const response = await fetch('/api/user-boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(board),
            });

            if (response.ok) {
                alert('문의 접수가 완료되었습니다.');
                    window.location.href = 'write/success';
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
                                <select
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full rounded border px-3 py-2"
                                >
                                    <option value="option1">결제/해지/환불</option>
                                    <option value="option2">오류신고</option>
                                    <option value="option3">서비스문의</option>
                                    {/* 추가 옵션들 */}
                                </select>
                            </div>
                            <div>
                                <label className="block">Content</label>
                                <textarea
                                    rows="10"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    className="w-full rounded border px-3 py-2"
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