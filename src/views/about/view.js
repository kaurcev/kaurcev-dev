import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import Navr from "../../components/navr/comp";
import NavPanel from "../../components/navpanel/comp";

export default function AboutView() {
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
                    <h1>Обо мне</h1>
                    <p>Специалист в области fullstack-разработки с 2019 года. В настоящее время работаю техником-программистом в <strong>БУЗОО "Медицинский информационно-аналитический центр"</strong> (Омск). Окончил Сибирский профессиональный колледж по специальности 09.02.07 "Информационные системы и программирование".</p>
                    <p>На данный момент являюсь экспертом демонстрационного экзамена по специальности 09.02.07 "Информационные системы и программирование".</p>

                    <h3>Технологический стек</h3>
                    <ul className="skills-grid">
                        <li>ReactJS</li>
                        <li>Node.js (экосистема REST)</li>
                        <li>PostgreSQL / MySQL</li>
                        <li>C#</li>
                        <li>T-SQL (MS SQL Server)</li>
                        <li>PHP</li>
                        <li>Git (системы контроля версий)</li>
                        <li>Адаптивная и семантическая вёрстка</li>
                        <li>Автоматизация процессов</li>
                    </ul>

                    <h3>Профессиональные достижения</h3>
                    <ul className="achievements">
                        <li>
                            Призёр национального чемпионата "ПРОФЕССИОНАЛЫ-2023" (компетенция:
                            <strong>"Программные решения для бизнеса"</strong>)
                        </li>
                        <li>
                            Призёр национального чемпионата "ПРОФЕССИОНАЛЫ-2024" (компетенция:
                            <strong>"Веб-разработка"</strong>)
                        </li>
                    </ul>

                    <h4>Философия</h4>
                    <p>Осуждаю вайбкодеров и изобретающих повторно велосипед.</p>
                </div>
                <Navr />
            </main>
            <Footer />
        </>
    )
}