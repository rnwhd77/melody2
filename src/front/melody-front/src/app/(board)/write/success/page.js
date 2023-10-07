"use client"
import { useRouter } from 'next/navigation';

export default function page(){
    let router = useRouter()

    return (
        <div className="container mx-auto p-8">
            <section className="success-message">
                <div className="section-inner flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl font-bold mb-4">문의 접수가 완료되었습니다.</h1>
                    <p>회원님 문의에 최대한 빠르고 정확한 답변을 드리기 위해 노력하겠습니다. 감사합니다.</p>
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer" onClick={()=>{ router.push('/') }}>메인으로</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer" onClick={()=>{ router.push('/list') }}>문의 내역</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

