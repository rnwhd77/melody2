import Layout from "../../../../components/users/Layout";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <Layout>
            <div className="container mx-auto w-full">
                <div className="w-full border-collapse mt-4">
                    <ul className="flex">
                        <li>
                            <Link href="/support/all" legacyBehavior>
                                <a className="text-black hover:text-blue-700 no-underline">전체</a>
                            </Link>
                        </li>
                        <li className="relative before:inline-block before:content-['|'] before:mx-2 before:text-gray-200">
                            <Link href="/support/payment" legacyBehavior>
                                <a className="text-black hover:text-blue-700  no-underline">결제/해지/환불</a>
                            </Link>
                        </li>
                        <li className="relative before:inline-block before:content-['|'] before:mx-2 before:text-gray-200">
                            <Link href="/support/service" legacyBehavior>
                                <a className="text-black hover:text-blue-700 no-underline">오류신고</a>
                            </Link>
                        </li>
                        <li className="relative before:inline-block before:content-['|'] before:mx-2 before:text-gray-200">
                            <Link href="/support/etc" legacyBehavior>
                                <a className="text-black hover:text-blue-700 no-underline">서비스문의</a>
                            </Link>
                        </li>
                        <li className="relative before:inline-block before:content-['|'] before:mx-2 before:text-gray-200">
                            <Link href="/support/etc" legacyBehavior>
                                <a className="text-black hover:text-blue-700 no-underline">음원문의</a>
                            </Link>
                        </li>
                        <li className="relative before:inline-block before:content-['|'] before:mx-2 before:text-gray-200">
                            <Link href="/support/etc" legacyBehavior>
                                <a className="text-black hover:text-blue-700 no-underline">기타</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <table className="w-full border-collapse mt-4" >
                    <thead>
                    <tr className="text-black border-b mt-2 ">
                        <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd"}}>번호</th>
                        <th className="p-2" style={{ width: "65%", borderTop: "1px solid #ddd" }}>제목</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-2">1</td>
                        <td className="p-2">시스템 오픈 공지</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </Layout>
    );
}
export default Page;