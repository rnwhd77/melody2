// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/write">문의하기</Link>
                    </li>
                    <li>
                        <Link href="/notice">공지사항</Link>
                    </li>
                    <li>
                        <Link href="/qna">Q&A</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
