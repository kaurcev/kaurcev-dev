import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import Navr from "../../components/navr/comp";
import NavPanel from "../../components/navpanel/comp";

export default function ResumeView() {
    const { setTitle } = useAppContext();
    useEffect(() => {
        setTitle("Резюме")
    }, [setTitle])
    return (
        <>
            <Header />
            <main>
                <NavPanel />
                <div className="page">
                    <h1>Резюме</h1>
                    <p>Fullstack-разработчик с 2019 года опытом создания комплексных веб-решений.
                        Специализируюсь на JavaScript-стеках (React.js, Node.js) и реляционных СУБД. Обладатель двух медалей региональных чемпионатов
                        ПРОФЕССИОНАЛЫ (импортозамещение WorldSkills Russia) по веб-разработке и программными решениями для бизнеса. Практикую DevOps-методологии и современные инженерные практики.</p>
                    <p>Обладаю экспертизой в проектировании реляционных баз данных и работе с СУБД: PostgreSQL, MS SQL Server, MySQL.</p>
                    <p>Регулярно применяю современные практики разработки: контейнеризацию приложений через Docker, систему контроля версий GitHub, а также принципы CI/CD для автоматизации развертывания.</p>
                    <p>Для нативных desktop-решений использую C# (WinForms), для кроссплатформенных проектов - Progressive Web Applications (PWA).</p>
                    <p>Этот сайт реализован с полным циклом CI/CD, что демонстрирует приверженность автоматизации и постоянному улучшению процессов разработки.</p>
                    <p>Активно развиваюсь в IT с детства. Достижения включают две медали региональных чемпионатов по программированию.</p>
                    <p>Формирую профессиональные навыки через системное самообразование и практическую реализацию проектов различной сложности.</p>
                </div>
                <Navr />
            </main>
            <Footer />
        </>
    )
}