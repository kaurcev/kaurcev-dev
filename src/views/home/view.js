import React from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import Tg from '../../img/tg.svg';
import github from '../../img/github.svg';

import { Link } from "react-router-dom";

export default function HomeView(){    
    return (
        <>
        <Header />
            <main>
                <p className="mini">Это недоработанный прототип, в скором будущем доработаю.</p>
                
                <h1>Александр Каурцев: Fullstack Web Developer <div className="row">
                        <Link className="target" to="https://kaurcev.t.me">
                            <img alt="Telegram" src={Tg} />
                            <span>Telegram</span>
                        </Link>                        
                        <Link className="target" to="https://github.com/kaurcev">
                            <img alt="GitHub" src={github} />
                            <span>GitHub</span>
                        </Link>    
                </div></h1>
                <h2>Профессиональный профиль</h2>
                
                <p>Специалист в области fullstack-разработки с 2019 года. В настоящее время работаю техником-программистом в <strong>БУЗОО "Медицинский информационно-аналитический центр"</strong> (Омск). Окончил Сибирский профессиональный колледж по специальности 09.02.07 "Информационные системы и программирование".</p>

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
                
                <h4>Профессиональная философия</h4>
                <p>Специализируюсь на создании комплексных веб-решений с акцентом на производительность, масштабируемость и соответствие бизнес-требованиям. Постоянно совершенствую экспертизу в области современных web-технологий и архитектурных решений.</p>
            </main>
        <Footer />
        </>
    )
}