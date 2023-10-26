"use client"
import React, { useState } from 'react';
import Layout from "../../../../components/csComponent/Layout";
import Layouts from "../../../../components/faqComponent/Layouts";
function YourComponent() {
    const [isDetailVisible, setIsDetailVisible] = useState({}); // Use an object to track visibility of each row
    const toggleDetail = (rowIndex) => {
        setIsDetailVisible({
            ...isDetailVisible,
            [rowIndex]: !isDetailVisible[rowIndex],
        });
    };

    return (
        <Layout>
            <Layouts>
        <div>
            <div className="container mx-auto mb-80">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="text-gray-400 border-b mt-2">
                        <th className="p-2" style={{ width: "5%", borderTop: "1px solid #ddd" }}>
                            번호
                        </th>
                        <th className="p-2" style={{ width: "70%", borderTop: "1px solid #ddd" }}>
                            제목
                        </th>
                        <th className="p-2" style={{ width: "20%", borderTop: "1px solid #ddd" }}>
                            등록일
                        </th>
                        <th className="p-2" style={{ width: "30%", borderTop: "1px solid #ddd" }}>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        onClick={() => toggleDetail(1)}
                        className="cursor-pointer hover-bg-gray-100"
                    >
                        <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>1</td>
                        <td className="p-4" style={{ width: "65%", borderBottom: "1px solid #ddd" }}>
                            <strong>사용 TIP</strong> 다크 모드는 어떻게 사용하나요?
                        </td>
                        <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                        <td className="p-4" style={{ width: "30%", borderBottom: "1px solid #ddd" }}>
                            {isDetailVisible[1] ? '▲' : '▼'}
                        </td>
                    </tr>
                    {isDetailVisible[1] && (
                        <tr className="mt-4">
                            <td style={{ marginTop: "20px" }} colSpan="20" className="ml-4 text-blue-600 bg-gray-100 pl-24" >
                                <br />
                                <p>이제 멜로디앱 설정을 통해 다크 모드를 사용하실 수 있습니다.</p>
                                <p>[설정 - 앱 설정 - 화면 모드 설정]을 통해 원하는 모드로 사용해보세요!</p>
                            </td>
                        </tr>
                    )}
                    <tr
                        onClick={() => toggleDetail(2)}
                        className="cursor-pointer hover-bg-gray-100"
                    >
                        <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2</td>
                        <td className="p-4" style={{ width: "67%", borderBottom: "1px solid #ddd" }}>
                            <strong>서비스 문의</strong> 소셜 로그인은 무엇인가요?
                        </td>
                        <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                        <td className="p-4" style={{ width: "30%", borderBottom: "1px solid #ddd" }}>
                            {isDetailVisible[2] ? '▲' : '▼'}
                        </td>
                    </tr>
                    {isDetailVisible[2] && (
                        <tr>
                            <td colSpan="20" className="mt-4 ml-4 text-blue-600 bg-gray-100 pl-24">
                                <br />
                                <p>네이버나 카카오 계정을 통해 Melody로 간편하게 로그인하는 것을 말합니다.</p>
                                <p>최초 로그인 시, 접근 권한 동의(네이버, 카카오) – Melody 이용약관 동의 – SMS 본인인증 절차가 진행됩니다. </p>
                            </td>
                        </tr>
                    )}
                    <tr
                        onClick={() => toggleDetail(3)}
                        className="cursor-pointer hover-bg-gray-100"
                    >
                        <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>3</td>
                        <td className="p-4" style={{ width: "67%", borderBottom: "1px solid #ddd" }}>
                            <strong>기타</strong> 마이 플레이리스트는 몇 곡 까지 저장 할 수 있나요?
                        </td>
                        <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                        <td className="p-4" style={{ width: "30%", borderBottom: "1px solid #ddd" }}>
                            {isDetailVisible[3] ? '▲' : '▼'}
                        </td>
                    </tr>
                    {isDetailVisible[3] && (
                        <tr>
                            <td colSpan="20" className="mt-4 ml-4 mb-5 text-blue-600 bg-gray-100 pl-24">
                                <br />
                                마이 플레이리스트는 최대 1,000곡까지 저장할 수 있습니다.
                            </td>
                        </tr>
                    )}
                    <tr
                        onClick={() => toggleDetail(4)}
                        className="cursor-pointer hover-bg-gray-100"
                    >
                        <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>4</td>
                        <td className="p-4" style={{ width: "67%", borderBottom: "1px solid #ddd" }}>
                            <strong>서비스문의/오류</strong> 추천이란 무엇인가요?
                        </td>
                        <td className="p-4" style={{ width: "20%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                        <td className="p-4" style={{ width: "30%", borderBottom: "1px solid #ddd" }}>
                            {isDetailVisible[4] ? '▲' : '▼'}
                        </td>
                    </tr>
                    {isDetailVisible[4] && (
                        <tr>
                            <td colSpan="20" className="mt-4 ml-4 text-blue-600 bg-gray-100 pl-24">
                                <br />
                                <p>Melody에서는 원하는 음악을 발견할 수 있도록 추천 플레이리스트를 제공합니다. 딱 맞는 곡을 선택하기 위해 고객님들의 청취 이력을 바탕으</p>
                                <p>로 딥러닝 기술을 활용합니다. 이외 좋아하는 아티스트와 곡에 따른 추천도 제공하고 있습니다.</p>
                                <p>딥러닝 기술을 사용한 '나를 위한 새로운 발견, 오늘의 추천, 방금레이더', 좋아하는 아티스트를 기반으로 한 '좋아할만한 아티스트 MIX' 를 통</p>
                                <p>해 사용자의 음악 취향을 확장시켜 드립니다.</p>
                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
            </Layouts>
        </Layout>
    );
}

export default YourComponent;
