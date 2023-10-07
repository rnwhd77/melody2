import Link from "next/link";
import Layout from '../../../components/users/Layout';
import BoardForm from "../../../components/user/BoardForm";
import React, {useEffect, useState} from "react";
import axios from "axios";

const ServicePage = ({ userAccountId }) => {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        axios.get(`/api/user-boards`) // 게시판 데이터를 가져올 API 엔드포인트를 사용합니다.
            .then((res) => {
                setBoard(res.data);
            })
            .catch((err) => {
                console.error("게시판 데이터를 불러오는 데 실패했습니다.", err);
            });
    }, [userAccountId]);

    if (!board) {
        return <div>Loading...</div>;
    }
    return (
        <Layout>
            <BoardForm />
        </Layout>

    );
}

export default ServicePage;