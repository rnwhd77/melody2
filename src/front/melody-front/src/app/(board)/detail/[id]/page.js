"use client"
import React from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

const page = () => {

    const params= useSearchParams();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">문의내역</h1>
            <div className="text-right mb-4">
                <Link href='/edit/' legacyBehavior className="list-btn"><a className="no-underline">✏️수정</a></Link>
                <Link href='/delete/' legacyBehavior className="list-btn"><a className="no-underline">🗑️삭제</a></Link>
            </div>
            <table className="w-full border-collapse border">
                <thead>
                <tr className="">
                    <th className="p-2">접수중</th>
                    <th className="p-2">{params.get('title')}</th>
                </tr>
                <tr className="border">
                    <th className="p-2">질문내용</th>
                    <th className="h-300 p-40">{params.get('content')}</th>
                    <th className="p-2">2023-04-10</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div className="text-right mt-4">
                <Link href="/list" legacyBehavior>
                    <a className="btn btn-primary" style={{ color: 'white' }}>
                        목록
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default page;