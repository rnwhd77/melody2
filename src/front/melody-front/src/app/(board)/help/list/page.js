"use client"
import BoardForm from "../../../components/user/BoardForm"; // BoardForm 컴포넌트를 가져옵니다.
import Layout from '../../../components/users/Layout';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"
 const page = ({ userAccountId }) => {
}

return (
    <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">문의내역</h1>
        <div className="container mx-auto ">
            <Layout>
                <BoardForm />
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

            <table className="w-full border-collapse border">
                <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="p-2" style={{ width: "70%" }}>제목</th>
                    <th className="p-2">등록일</th>
                    <th className="p-2">답변</th>
                </tr>
                </thead>
                <tbody>
                {board.map((a) => (
                    <tr key={board.userAccountId} className="border">
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
                                <a className="no-underline"> {a.title} </a>
                            </Link>
                            <span className="flex justify-end">
                            <Link
                                href={{
                                    pathname: `edit/${a.userAccountId}`,
                                    query: {
                                        userAccountId: a.userAccountId,
                                        title: a.title,
                                        content: a.content,
                                    },
                                }}
                                legacyBehavior
                            >
                                <a className="no-underline"> ✏️ </a>
                            </Link>
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
                        <td className="border p-2">2023-10-03</td>
                        <td className="border p-2">답변대기</td>
                    </tr>
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

                ))}
            </tbody>
        </table>
    </Layout>
</div>
);
};