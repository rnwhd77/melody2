"use client";
import Layout from "../../../../components/csComponent/Layout";
import Layouts from "../../../../components/faqComponent/Layouts";
import React, { useState } from "react";

const Page = () => {
    // 상세 페이지 표시 여부를 저장하는 상태 변수
    const [isDetailVisible, setDetailVisible] = useState(false);

    // 클릭 이벤트 핸들러: 상세 페이지 표시 여부 토글
    const toggleDetail = () => {
        setDetailVisible(!isDetailVisible);
    };

    return (
        <Layout>
            <Layouts>
                <div className="container mx-auto mb-80">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="text-gray-400 border-b mt-2">
                            <th className="p-2" style={{ width: "5%",  borderTop: "1px solid #ddd"  }}>
                                번호
                            </th>
                            <th className="p-2" style={{ width: "67%", borderTop: "1px solid #ddd" }}>
                                제목
                            </th>
                            <th className="p-2" style={{ width: "20%" , borderTop: "1px solid #ddd" }}>
                                등록일
                            </th>
                            <th className="p-2" style={{ width: "30%", borderTop: "1px solid #ddd"  }}>

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onClick={toggleDetail} className="cursor-pointer hover:bg-gray-100">
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>1</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}><strong>사용 TIP</strong> 다크 모드는 어떻게 사용하나요?</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>↩</td>
                        </tr>
                        <tr onClick={toggleDetail} className="cursor-pointer hover:bg-gray-100">
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}><strong>서비스 문의</strong> 장르는 몇개 설정 할 수 있나요?</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>↩</td>
                        </tr>
                        <tr onClick={toggleDetail} className="cursor-pointer hover:bg-gray-100">
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>3</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}><strong>기타</strong> 회원 탈퇴는 어떻게 하나요?</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>↩</td>
                        </tr>
                        <tr onClick={toggleDetail} className="cursor-pointer hover:bg-gray-100">
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>4</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}><strong>사용 TIP</strong> 내가 만든 리스트를 공개하고 싶어요</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>↩</td>
                        </tr>
                        <tr onClick={toggleDetail} className="cursor-pointer hover:bg-gray-100">
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>5</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}><strong>사용 TIP</strong> 플레이 리스트도 재생목록에 담을 수 있나요?</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>2023-10-27</td>
                            <td className="p-4" style={{ width: "5%", borderBottom: "1px solid #ddd" }}>↩</td>
                        </tr>
                        </tbody>


                    </table>
                    {/* 상세 페이지 표시 여부에 따라 조건부 렌더링 */}
                    {isDetailVisible && (
                        <div className="bg-gray-100 p-4 mt-4">
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="20" className="mt-4 ml-4 text-blue-600">
                                        <br />
                                        <p>이제 멜로디앱 설정을 통해 다크 모드를 사용하실 수 있습니다.</p>
                                        <p>[설정 - 앱 설정 - 화면 모드 설정]을 통해 원하는 모드로 사용해보세요!</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </Layouts>
        </Layout>
    );
};

export default Page;
