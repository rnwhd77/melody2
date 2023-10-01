import Link from "next/link";

const ServicePage = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Q&A</Link>
                </li>
                <li>
                    <Link href="/write">1:1문의</Link>
                </li>
                <li>
                    <Link href="/list">문의 내역 조회</Link>
                </li>
                <li>
                    <Link href="/">공지사항</Link>
                </li>
            </ul>
        </>
    )
}

export default ServicePage;