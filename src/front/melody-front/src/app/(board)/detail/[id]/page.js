"use client"
import React from "react";
import {useSearchParams} from "next/navigation";

const page = () => {

    const params= useSearchParams();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">문의내역</h1>
            <table className="w-full border-collapse border">
                <thead>
                <tr className="">
                    <th className="p-2">질문내용</th>
                    <th className="p-2">{params.get('title')}</th>
                </tr>
                <tr>
                    <th className="p-2">답변</th>
                    <th className="p-2">{params.get('content')}</th>
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