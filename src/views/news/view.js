import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import Navr from "../../components/navr/comp";
import NavPanel from "../../components/navpanel/comp";

export default function NewsView() {
    const { setTitle } = useAppContext();
    useEffect(() => {
        setTitle("Новости")
    }, [setTitle])
    return (
        <>
            <Header />
            <main>
                <NavPanel />
                <div className="page">
                    <h1>Новости</h1>
                    <p className="mini">Может быть я внедрю сюда бекенд и тут "чудесным образом" появится новостная лента</p>
                </div>
                <Navr />
            </main>
            <Footer />
        </>
    )
}