import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import NavPanel from "../../components/navpanel/comp";

export default function HomeView() {
    const { setTitle } = useAppContext();
    useEffect(() => {
        setTitle("Добро пожаловать!")
    }, [setTitle])
    return (
        <>
            <Header />
            <main>
                <NavPanel />
                <div className="page">
                    <h1>Александр Каурцев: Fullstack Web Developer</h1>
                    <p>Потом</p>
                </div>
            </main>
            <Footer />
        </>
    )
}