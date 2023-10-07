import React from 'react';
import BoardForm from "../../../components/user/BoardForm"; // BoardForm 컴포넌트를 가져옵니다.
import Layout from '../../../components/users/Layout';
const Page = () => {
    return (
        <div>
            <Layout>
            <BoardForm /> {/* BoardForm 컴포넌트를 렌더링합니다. */}
            </Layout>
        </div>
    );
};

export default Page;