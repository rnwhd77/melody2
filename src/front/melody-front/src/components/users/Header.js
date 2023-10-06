// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="flex flex-col items-center justify-center mt-16">
                <h2 className="text-2xl font-bold mb-8">고객센터</h2>
                <ul className="flex justify-center mb-8">
                    <li className="mx-3">
                        <Link href="/write" legacyBehavior><a className="no-underline hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full">자주 묻는 질문</a></Link>
                    </li>
                    <li className="mx-3">
                        <Link href="/write" legacyBehavior><a className="no-underline hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full" >1:1 문의</a></Link>
                    </li>
                    <li className="mx-3">
                        <Link href="/qna" legacyBehavior><a className="no-underline hover:bg-gray-500 hover:text-white px-4 py-2 rounded-full">공지사항</a></Link>
                    </li>
                </ul>
                {/* 나머지 내용들 */}
            </div>
        </header>
    );
};

export default Header;
