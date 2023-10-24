"use client"
// components/Headers.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header>
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className="text-4xl font-bold mb-8">고객센터</h2>
                <ul className="flex justify-center mb-8">
                    <li className="mx-3">
                        <Link href="/help/user_inquiries" legacyBehavior>
                            <a
                                className={`text-black no-underline px-1 py-2 focus:bg-gray-200 focus:text-white focus:outline-none ${
                                    isFocused ? 'btn-focused' : ''
                                }`}
                                onMouseEnter={() => setIsFocused(true)}
                                onMouseLeave={() => setIsFocused(false)}
                            >
                                1:1문의
                            </a>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link href="./announcements" legacyBehavior>
                            <a
                                className={`text-black no-underline px-1 py-2 focus:bg-gray-200 focus:text-white focus:outline-none ${
                                    isFocused ? 'btn-focused' : ''
                                }`}
                                onMouseEnter={() => setIsFocused(true)}
                                onMouseLeave={() => setIsFocused(false)}
                            >
                                공지사항
                            </a>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link href="./faq" legacyBehavior>
                            <a
                                className={`text-black no-underline px-1 py-2 focus:bg-gray-200 focus:text-white focus:outline-none ${
                                    isFocused ? 'btn-focused' : ''
                                }`}
                                onMouseEnter={() => setIsFocused(true)}
                                onMouseLeave={() => setIsFocused(false)}
                            >
                                자주 묻는 질문
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .btn-focused {
                    // 추가 포커스 스타일을 이곳에 정의
                }
            `}</style>
        </header>
    );
};

export default Header;
