import Link from "next/link";
import Layout from '../../../../components/users/Layout';
import BoardForm from "../../../../components/user/BoardForm";
import BoardList from "../../../../components/user/BoardList";
const ServicePage = () => {
    return (
        <Layout>
            <div className="container mx-auto w-full">
                <BoardForm/>
                <BoardList/>
            </div>
        </Layout>
    );
}

export default ServicePage;