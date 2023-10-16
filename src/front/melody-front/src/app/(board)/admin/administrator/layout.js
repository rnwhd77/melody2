import Link from "next/link";
import Layout from '../../../../components/users/Layout';
import BoardForm from "../../../../components/user/BoardForm";
import BoardList from "../../../../components/user/BoardList";
const administratorPage = () => {
    return (
        <header>
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className="text-4xl font-bold mb-8">관리자모드</h2>
                <li className=" mx-3">
                    <Link href="/admin/admin_inquiries" legacyBehavior><a className="no-underline hover:bg-gray-500 hover:text-white px-1  py-2 rounded-full" >회원정보</a></Link>
                </li>
                <li className=" mx-3">
                        <Link href="/admin/admin_inquiries" legacyBehavior><a className="no-underline hover:bg-gray-500 hover:text-white px-1  py-2 rounded-full" >1:1문의 확인</a></Link>
                </li>
                <li className=" mx-3">
                        <Link href="/admin/admin_announcements" legacyBehavior><a className="no-underline hover:bg-gray-500 hover:text-white px-1 py-2 rounded-full ">공지글 등록</a></Link>
                </li>

            </div>
        </header>
    );
}

export default administratorPage;