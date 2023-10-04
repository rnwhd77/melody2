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
        return <div>Loading...</div>; // 데이터를 기다리는 동안 로딩 메시지를 표시합니다.
    }

        return (
            <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">문의내역</h1>
            <table className="w-full border-collapse border">
                <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="p-2">상태</th>
                    <th className="p-2" style={{ width: "50%" }}>제목</th>
                    <th className="p-2">조회수</th>
                    <th className="p-2">등록일</th>
                </tr>
                </thead>
                <tbody>
                {board.map((a) => (
                    <tr key={board.userAccountId} className="border">
                        <td className="border p-2">접수중</td>
                        <td className="border p-2">
                            <Link href={`/detail/${a.userAccountId}`}>
                                {a.title}
                            </Link>
                        </td>
                        <td className="border p-2">34</td>
                        <td className="border p-2">2023-10-03</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        );
    };

export default page;

