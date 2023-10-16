// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className="text-4xl font-bold mb-8">고객센터</h2>
                <ul className="flex justify-center mb-8">
                    <li className=" mx-3">
                        <Link href="/help/user_inquiries" legacyBehavior>
                            <a className="no-underline px-1 py-2 rounded-full focus:bg-gray-500 focus:text-white">1:1문의</a>
                        </Link>
                    </li>
                    <li className=" mx-3 ">
                        <Link href="./faq" legacyBehavior>
                            <a className="no-underline px-1 py-2 rounded-full focus:bg-gray-500 focus:text-white">자주 묻는 질문</a>
                        </Link>
                    </li>
                    <li className=" mx-3">
                        <Link href="./announcements" legacyBehavior>
                            <a className="no-underline px-1 py-2 rounded-full focus:bg-gray-500 focus:text-white">공지사항</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
