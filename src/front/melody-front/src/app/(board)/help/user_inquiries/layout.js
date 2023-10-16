import Link from "next/link";
import Layout from '../../../../components/users/Layout';
import BoardForm from "../../../../components/user/BoardForm";
import BoardList from "../../../../components/user/BoardList";
const ServicePage = () => {
    return (
        <Layout>
                <BoardForm/>
        </Layout>
    );
}

export default ServicePage;