import Layout from "../../../../components/users/Layout";
import Link from "next/link";
import React from "react";



const Page = () => {
    return (
        <Layout>
            <div className="container mx-auto w-full">
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
                            <td className="p-2">내가 만든리스트를 공유하고 싶어요</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
export default Page;