"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../../components/csComponent/Layout";

const Page = ({ userAccountId }) => {
    const [notice, setNotice] = useState(null);
    const [selectedNotice, setSelectedNotice] = useState(null);

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
            <div className="container mx-auto mb-80">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="text-gray-400 border-b mt-2">
                                <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd" }}>번호</th>
                                <th className="p-2" style={{ width: "65%", borderTop: "1px solid #ddd" }}>제목</th>
                                <th className="p-2" style={{ width: "20%", borderTop: "1px solid #ddd" }}>등록일</th>
                            </tr>
                            </thead>
                        </table>
                {notice.map((a) => (
                    <div key={a.userAccountId}>
                        <table className="w-full border-collapse">
                            <tbody>
                            <tr
                                className="cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    if (selectedNotice && selectedNotice.userAccountId === a.userAccountId) {
                                        setSelectedNotice(null);
                                    } else {
                                        setSelectedNotice(a);
                                    }
                                }}
                            >
                                <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>{a.userAccountId}</td>
                                <td className="p-4" style={{ width: "65%", borderBottom: "1px solid #ddd" }}>{a.noticeTitle}</td>
                                <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>{a.creationDate}</td>
                            </tr>
                            </tbody>
                        </table>
                        {selectedNotice && selectedNotice.userAccountId === a.userAccountId && (
                            <div className="bg-gray-100 p-4 mt-4" key={`content-${selectedNotice.userAccountId}`} style={{ marginTop: "20px" }}>
                                {selectedNotice?.noticeContent?.split('\n').map((sentence, index) => (
                                    <p key={index} className="mt-4 ml-4 text-blue-600">
                                        {sentence}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Page;
