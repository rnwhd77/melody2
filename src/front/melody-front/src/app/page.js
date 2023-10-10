"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

const Home = () => {

    const { userState, userDispatch } = useContext(UserContext);


    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            <h1> <Link href="/login"> test </Link></h1>

            {userState.isAuthenticated ? (
                <>
                    <p>Welcome, {userState.user.name}!</p>
                </>
            ) : (
                <>
                   no logined yet
                </>
            )}

        </div>
    );
};

export default Home;