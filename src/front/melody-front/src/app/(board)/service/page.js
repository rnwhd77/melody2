"use client"

import Link from "next/link";

const ServiceGu = (children) => {
    return (
        <div>
            <h1>service</h1>
            <Link href="/service/create">create</Link>
        </div>
    )
}
export default ServiceGu;