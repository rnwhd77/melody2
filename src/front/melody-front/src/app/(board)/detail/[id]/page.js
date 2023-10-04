"use client"
import React from "react";

const page = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">문의내역</h1>
            <table className="w-full border-collapse border">
                <thead>
                <tr className="">
                    <th className="p-2">답변완료</th>
                    <th className="p-2">제목</th>
                </tr>
                <tr>
                    <th className="p-2">답변</th>
                    <th className="p-2">내용</th>
                    <th className="p-2">날짜</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
};
export default page;