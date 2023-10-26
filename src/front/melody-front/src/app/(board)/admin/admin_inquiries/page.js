"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = ({ userAccountId }) => {
    const [board, setBoard] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        axios.get(`/api/user-boards`)
            .then((res) => {
                setBoard(res.data);
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });

        axios.get(`/api/user-comments`)
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.error("댓글 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, [userAccountId]);

    if (!board.length || !comments.length) {
        return <div>Loading...</div>;
    }

    // 병합된 데이터를 저장할 상태 변수
    const mergedData = [];

    // board 데이터와 comments 데이터를 병합
    board.forEach((boardItem) => {
        const correspondingComment = comments.find(comment => comment.postId === boardItem.userAccountId);
        mergedData.push({
            ...boardItem,
            replyStatus: correspondingComment ? correspondingComment.replyStatus : 0,
        });
    });

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-4xl font-bold mb-8">관리자모드</h2>
            <ul className="flex justify-center mb-8">
                <li className=" mx-3">
                    <Link href="/admin/administrator" legacyBehavior><a className="no-underline hover:bg-gray-300 hover:text-white px-2 py-2 ">공지글 확인</a></Link>
                </li>
                <li className=" mx-3 ">
                    <Link href="/admin/admin_inquiries" legacyBehavior><a className="no-underline hover:bg-gray-300 hover:text-white px-2 py-2 ">1:1문의 확인</a></Link>
                </li>
            </ul>
            <div className="container mx-auto mb-80">
            <table className="w-full border-collapse mt-4">
                <thead className="text-gray-400 mt-2">
                <tr className="border-b mt-2">
                    <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd" }}>번호</th>
                    <th className="p-2" style={{ width: "65%", borderTop: "1px solid #ddd" }}>제목</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>등록일</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>작성자</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>처리상태</th>
                </tr>
                </thead>
                <tbody>
                {mergedData.map((data) => (
                    <tr key={data.userAccountId} className="border-b">
                        <td className="p-2">
                            {data.userAccountId}
                        </td>
                        <td className="p-4">
                            <a className="no-underline text-black">{data.content}</a>
                            <Link
                                href={{
                                    pathname: `write`,
                                    query: {
                                        userAccountId: data.userAccountId,
                                        content: data.content,
                                        title: data.title,
                                        creationDate: data.creationDate,
                                    },
                                }}
                                legacyBehavior
                            >
                                <a className="no-underline">&nbsp; ✏️</a>
                            </Link>
                        </td>
                        <td className="p-4">{data.creationDate}</td>
                        <td className="p-4">{data.accountId}</td>
                        <td className={`p-4 ${data.replyStatus === 0 ? 'text-blue-600' : ''}`}>
                            {data.replyStatus === 0 ? "답변대기" : "답변완료"}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-gray-400 text-right mt-2 mb-40">✏️(답변작성)</div>
        </div>
        </div>
    );
};

export default Page;
