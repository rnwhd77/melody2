"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"

const page = ({ userAccountId }) => {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        axios.get(`/api/user-boards`) // 게시판 데이터를 가져올 API 엔드포인트를 사용합니다.
            .then((res) => {
                setBoard(res.data);
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, [userAccountId]);

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto ">
            <table className="w-full border-collapse">
                <thead>
                <tr className="text-black border-b">
                    <th className="p-2" style={{ width: "70%", borderTop: "1px solid #ddd"}}>제목</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>등록일</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>답변</th>
                </tr>
                </thead>
                <tbody>
                {board.map((a) => (
                    <tr key={board.userAccountId} className="border-b">
                        <td className="flex justify-between">
                            <Link
                                href={{
                                    pathname: `detail/${a.userAccountId}`,
                                    query: {
                                        userAccountId: a.userAccountId,
                                        title: a.title,
                                        content: a.content,
                                    },
                                }}
                                legacyBehavior
                            >
                                <a className="no-underline"> {a.content} </a>
                            </Link>
                            <span className="flex justify-end">
                        <Link
                            href={{
                                pathname: `delete/${a.userAccountId}`,
                                query: {
                                    userAccountId: a.userAccountId,
                                    title: a.title,
                                    content: a.content,
                                },
                            }}
                            legacyBehavior
                        >
                            <a className="no-underline"> 🗑️ </a>
                        </Link>
                    </span>
                        </td>
                        <td className="p-2">2023-10-03</td>
                        <td className="p-2">답변대기</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default page;

