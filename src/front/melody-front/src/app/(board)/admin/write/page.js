"use client"
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "./../../../../contexts/UserContext";
import {useSearchParams} from "next/navigation";
import axios from "axios";
import Link from "next/link";

function ReplyForm({ userAccountId }) {
    const { userState, userDispatch } = useContext(UserContext);
    const [commentContent, setCommentContent] = useState('');
    const [postId, setPostId] = useState();
    const params= useSearchParams();

    console.log("bp1");
    console.log(userState);

    useEffect(() => {
        setPostId(params.get('userAccountId'))
    }, []);


    const commentBoard = {
        postId,
        commentContent,
        replyStatus: 0
    };

    useEffect(() => {
        // 댓글 데이터를 불러오는 요청
        axios.get(`/api/user-comments`)
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.error("댓글 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postId = params.get('userAccountId');

        console.log(userAccountId)
        try {
            const response = await fetch(`/api/user-comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentBoard),
            });
            if (response.ok) {
                alert('작성이 완료되었습니다.');
            } else {
                alert('Board creation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-10 ">답변작성</h2>
            <table className="w-full border-collapse border mb-10">
                <thead>
                <tr className="text-gray-400 mt-2 ">
                    <th className="p-2" style={{ width: "66%", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd"}}>제목</th>
                    <th className="p-2" style={{ width: "10%", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }}>문의유형</th>
                    <th className="p-2" style={{ width: "10%", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }}>등록일</th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                    <th className="p-4">{params.get('content')}</th>
                    <th className="p-4">{params.get('title')}</th>
                    <th className="p-4">{params.get('creationDate')}</th>
                </tr>
                </tbody>
            </table>
            <div className="flex justify-end">
            <Link href={
                `delete`}
                  legacyBehavior>
                <a className="no-underline">🗑️모든 답변 보기</a>
            </Link>
            </div>
            <p className="text-2xl font-bold mt-20 mb-10 ">작성하기</p>
            <section className="board-form" id="board-form">
                <div className="section-inner mb-40">
                    <form onSubmit={handleSubmit} className="w-full inline-flex flex-wrap justify-content-center">
                        <div className="w-full space-y-4">
                            <div>
                                <input
                                    type="text"
                                    value={postId}
                                    className="w-full rounded border px-3 py-2"
                                    hidden={true}
                                />
                                <textarea
                                    rows="10"
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    required
                                    className="rounded border px-3 py-2 text-sm"
                                    style={{
                                        width: "100%"
                                    }}
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <input
                                    type="submit"
                                    value="답변작성"
                                    className="bg-gray-400 text-white py-2 px-4  hover:bg-gray-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <div>
            </div>
        </div>
    );
}

export default ReplyForm;