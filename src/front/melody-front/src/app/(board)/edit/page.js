"use client"
import React, {useState} from "react";

export default function Edit() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content.trim()) {
            alert('Content cannot be empty.');
            return;
        }

        const board = {
            title,
            content,
        };

        try {
            console.log(board);
            const response = await fetch('/api/user-boards/${UserAccount_ID}', {
                method: 'PUT',
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
    return (
        <div className="container mx-auto p-8">
            <section className="board-form" id="board-form">
                <div className="section-inner">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold mb-4">수정페이지</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    placeholder={"제목을 수정해주세요."}
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full rounded border px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block">Content</label>
                                <textarea
                                    rows="10"
                                    value={content}
                                    placeholder={"내용을 수정해주세요."}
                                    required
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full rounded border px-3 py-2"
                                ></textarea>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="전송"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}