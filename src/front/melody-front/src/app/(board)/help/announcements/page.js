"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../../components/users/Layout";
import Link from "next/link"

const Page = ({ userAccountId }) => {
    const [notice, setNotice] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]); // 선택한 행의 userAccountId를 저장하는 상태 변수

    useEffect(() => {
        axios.get(`/api/user-notices`)
            .then((res) => {
                setNotice(res.data);
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, [userAccountId]);

    if (!notice) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
        <div className="container mx-auto">
            <table className="w-full border-collapse mt-4" >
                <thead>
                <tr className="text-black border-b mt-2 ">
                    <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd"}}>번호</th>
                    <th className="p-2" style={{ width: "65%", borderTop: "1px solid #ddd" }}>제목</th>
                    <th className="p-2" style={{ borderTop: "1px solid #ddd" }}>작성일</th>
                </tr>
                </thead>
                <tbody>
                {notice.map((a) => (
                    <tr key={a.userAccountId} className="border-b">
                        <td className="p-2">
                        </td>
                        <td className="p-2">{a.content}</td>
                        <td className="p-2">{a.creationDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default Page;

