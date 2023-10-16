"use client"
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "./../../../../contexts/UserContext"
import axios from "axios";
import Link from "next/link";

function BoardForm() {
    const { userState, userDispatch } = useContext(UserContext);
    const [accountId, setAccountId] = useState((userState.user && userState.user.accountId)||"로그인되어있지 않음");
    const [title, setTitle] = useState('결제/해지/환불');
    const [content, setContent] = useState('');
    const [creationDate, setCreationDate] = useState(new Date());
    const [board, setBoard] = useState([]);

    console.log("bp1");
    console.log(userState);

    const newBoard = {
        accountId,
        title,
        content,
        creationDate: creationDate.toISOString().split('T')[0]
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (accountId === "로그인되어있지 않음") {
            alert('로그인하셔야 문의하기가 가능합니다.');
            return;
        }
        if (content.length < 10) {
            alert('10글자 이상의 내용을 입력해주세요.');
            return;
        }
        try {
            const response = await fetch('/api/user-boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBoard),
            });
            if (response.ok) {
                setBoard([...board, newBoard]);
                alert('문의 접수가 완료되었습니다.');
            } else {
                alert('Board creation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    useEffect(() => {
        axios.get(`/api/user-boards`)
            .then((res) => {
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, [(userState.user && userState.user.accountId) || '로그인해주세요']);

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <section className="board-form" id="board-form">
                <div className="section-inner">
                    <form onSubmit={handleSubmit} className="w-full inline-flex flex-wrap justify-content-center">
                        <div className="w-full space-y-4">
                            <div>
                                <input
                                    defaultValue={(userState.user && userState.user.accountId) || '로그인해주세요'}
                                    className="rounded border px-3 py-2"
                                    disabled={!userState.user}
                                />
                            </div>
                            <div>
                                <select
                                    defaultValue="결제/해지/환불"
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className=" rounded border px-3 py-2"
                                    style={{ width: "26%" }}
                                >
                                    <option value="결제/해지/환불">결제/해지/환불</option>
                                    <option value="오류신고">오류신고</option>
                                    <option value="서비스문의">서비스문의</option>
                                    <option value="음원요청">음원요청</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                            <div>
                                <textarea
                                    rows="10"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    placeholder={`\n 내용을 입력해주세요.\n(입력 시 개인정보가 포함되지 않도록 유의해 주세요. 문의 내역 내 포함된 개인정보가 있을 경우,\n 임의로 개인정보를 가림 처리(*마스킹) 할 수 있음을 안내 드립니다.)\n\n\n\n\n 0/2000`}
                                    className="rounded border px-3 py-2 text-sm"
                                    style={{
                                        width: "100%"
                                    }}
                                ></textarea>
                            </div>
                            <div className="p-4 bg-gray-50 ">
                                {/* 리스트 형식으로 변경 */}
                                <ul style={{ fontSize: "13px", lineHeight: "20px"  }}>
                                    <li>◦ 문의하신 내용에 대한 원인파악 및 원활한 상담을 위해 이메일, 휴대폰 번호, 단말정보, 앱 버전을 수집합니다.</li>
                                    <li>◦ 수집된 개인정보는 회원탈퇴 시점 또는 관계 법령*에 근거한 기간동안 보관 후 삭제됩니다.</li>
                                    <li>◦ 개인정보 수집에 동의하실 경우 '문의하기' 버튼을 눌러주세요. (수집된 개인정보는 상담 외 다른 용도로 사용되지 않습니다.)</li>
                                    <li>◦ 이용자는 Melody에서 수집하는 개인정보에 대해 동의를 거부할 권리가 있으며 동의 거부 시에는 1:1 문의 및 답변 확인 등 서비스 일부가 제한됩니다.</li>
                                </ul>
                                <ul style={{ fontSize: "12px",lineHeight: "20px" }}>
                                    *관계 법령이라 함은 다음에 해당되는 경우를 말합니다.
                                    <li>가. 웹사이트 방문기록: 3개월 (통선비밀보호법)</li>
                                    <li>나. 계약 또는 청악철회 등에 관한 기록:</li>
                                    <li>다. 대금결제 및 재화 등의 공급에 관한 기록: 5년(전자상거래법)</li>
                                    <li>라. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자삼거래법)</li>
                                    <li>마. 신용정보의 수집 처리 및 이용 등에 관한 기록: 3년(신용정보의 이용 및 보호에 관한 법률)</li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <input
                                    type="submit"
                                    value="문의하기"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <h2 className="text-2xl font-bold ">나의 문의내역</h2>
            <table className="w-full border-collapse mt-4" >
                <thead>
                <tr className="text-black border-b mt-2 ">
                    <th className="p-2" style={{ width: "20%", borderTop: "1px solid #ddd"}}>문의유형</th>
                    <th className="p-2" style={{ width: "50%", borderTop: "1px solid #ddd" }}>제목</th>
                    <th className="p-2" style={{ width: "15%", borderTop: "1px solid #ddd" }}>작성자</th>
                    <th className="p-2" style={{ width: "15%", borderTop: "1px solid #ddd" }}>등록일</th>
                </tr>
                </thead>
                <tbody>
                {board.map((boardItem) => (
                    <tr key={boardItem.id}>
                        <td className="p-2" style={{ borderTop: "1px solid #ddd" }}>{boardItem.title}</td>
                        <td className="p-2" style={{ borderTop: "1px solid #ddd" }}>{boardItem.content}</td>
                        <td className="p-2" style={{ borderTop: "1px solid #ddd" }}>{boardItem.accountId}</td>
                        <td className="p-2" style={{ borderTop: "1px solid #ddd" }}>{boardItem.creationDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default BoardForm;