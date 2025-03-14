"use client";
import React, { Suspense } from "react";
import AppData from "@data/app.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
function Admin() {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkSession = async () => {
            const res = await fetch("/api/session");
            const data = await res.json();

            if (res.status === 401 && pathname !== "/admin/login") {
                router.replace("/admin/login"); 
            } else {
                setUser(data.user);
            }
            setLoading(false);
        };

        checkSession();
    }, [router, pathname]);
    return (<>
        Admin
    </>)
}
export default Admin;