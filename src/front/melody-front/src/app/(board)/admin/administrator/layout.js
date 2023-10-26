"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const AdministratorPage = () => {
    const [notice, setNotice] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [isDetailVisible, setIsDetailVisible] = useState({});
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        axios.get(`/api/user-notices`)
            .then((res) => {
                setNotice(res.data);
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, []);
    if (!notice) {
        return <div>Loading...</div>;
    }
    const handleCheckboxChange = (userAccountId) => {
        if (selectedRows.includes(userAccountId)) {
            setSelectedRows(selectedRows.filter((row) => row !== userAccountId));
        } else {
            setSelectedRows([...selectedRows, userAccountId]);
        }
    };

    const handleDeleteSelected = () => {
        axios.delete(`/api/user-notices/${selectedRows}`)
            .then((response) => {
                setNotice(notice.filter((a) => !selectedRows.includes(a.userAccountId)));
                setSelectedRows([]); // 선택 해제
                console.log("성공");
            })
            .catch((err) => {
                console.error("게시물 삭제에 실패했습니다.", err);
            });
    };

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
        <div className="container mx-auto mb-40">
            <div className="flex justify-end">
                <Link href="/admin/admin_announcements" legacyBehavior>
                    <a className="no-underline text-black">✏️</a>
                </Link>&nbsp;
                <button onClick={handleDeleteSelected}>🗑️</button>
            </div>
            <table className="w-full border-collapse">
                <thead>
                <tr className="text-gray-400 border-b mt-2">
                    <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd" }}>선택</th>
                    <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd" }}>번호</th>
                    <th className="p-2" style={{ width: "65%", borderTop: "1px solid #ddd" }}>제목</th>
                    <th className="p-2" style={{ width: "20%", borderTop: "1px solid #ddd" }}>등록일</th>
                </tr>
                </thead>
            </table>
            {notice.map((a, index) => (
                <div key={a.userAccountId}>
                    <table className="w-full border-collapse">
                        <tbody>
                        <tr
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                                setIsDetailVisible({ ...isDetailVisible, [index]: !isDetailVisible[index] });
                                if (selectedNotice && selectedNotice.userAccountId === a.userAccountId) {
                                    setSelectedNotice(null);
                                } else {
                                    setSelectedNotice(a);
                                }
                            }}
                        >
                            <td className="p-2" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(a.userAccountId)}
                                    checked={selectedRows.includes(a.userAccountId)}
                                />
                            </td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>{a.userAccountId}</td>
                            <td className="p-4" style={{ width: "65%", borderBottom: "1px solid #ddd" }}>{a.noticeTitle}</td>
                            <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>{a.registrationDate}</td>
                        </tr>
                        </tbody>
                    </table>
                    {isDetailVisible[index] && selectedNotice && selectedNotice.userAccountId === a.userAccountId && (
                        <div className="bg-gray-100 p-4" key={`content-${selectedNotice.userAccountId}`}>
                            <div className="ml-11 mr-80 text-blue-600">
                                {selectedNotice?.noticeContent?.split('\n').map((sentence, index) => (
                                    <p key={index} style={{ lineHeight: '2.6' }}>
                                        {sentence}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <div className="text-gray-400 text-right mt-2 mb-40">✏️(공지글작성) & 🗑️(공지글삭제)</div>
        </div>
        </div>
    );
}

export default AdministratorPage;
