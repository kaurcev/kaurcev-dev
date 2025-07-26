import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import Navr from "../../components/navr/comp";
import NavPanel from "../../components/navpanel/comp";

export default function ProjectsView() {
    const { setTitle } = useAppContext();
    useEffect(() => {
        setTitle("Проекты")
    }, [setTitle])
    return (
        <>
            <Header />
            <main>
                <NavPanel />
                <div className="page">
                    <h1>Проекты</h1>
                    <p className="mini">Последний проект я закрыл.</p>
                </div>
                <Navr />
            </main>
            <Footer />
        </>
    )
}