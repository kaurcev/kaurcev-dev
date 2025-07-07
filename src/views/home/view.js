import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import Tg from '../../img/tg.svg';
import github from '../../img/github.svg';

import { Link } from "react-router-dom";
import { useAppContext } from "../../Application";

export default function HomeView(){   
    const {setTitle} = useAppContext();
    useEffect(()=>{
        setTitle("Welcome!")
    }, [setTitle]) 
    return (
        <>
        <Header />
            <main>
                <p className="mini">This is an unfinished prototype, I will complete it soon.</p>
                
                <h1>Alexsandr Kaurcev: Fullstack Web Developer <div className="row">
                        <Link className="target" to="https://kaurcev.t.me">
                            <img alt="Telegram" src={Tg} />
                            <span>Telegram</span>
                        </Link>                        
                        <Link className="target" to="https://github.com/kaurcev">
                            <img alt="GitHub" src={github} />
                            <span>GitHub</span>
                        </Link>    
                </div></h1>
                <h2>Professional Profile</h2>
                
                <p>Fullstack development specialist since 2019. Currently working as a programmer technician at <strong>BUZOO "Medical Information and Analytical Center"</strong> (Omsk). Graduated from Siberian Professional College with a degree in 09.02.07 "Information Systems and Programming".</p>
                <p>Currently serving as an expert for demonstration exams in specialty 09.02.07 "Information Systems and Programming".</p>

                <h3>Technology Stack</h3>
                <ul className="skills-grid">
                    <li>ReactJS</li>
                    <li>Node.js (REST ecosystem)</li>
                    <li>PostgreSQL / MySQL</li>
                    <li>C#</li>
                    <li>T-SQL (MS SQL Server)</li>
                    <li>PHP</li>
                    <li>Git (version control systems)</li>
                    <li>Responsive and semantic markup</li>
                    <li>Process automation</li>
                </ul>

                <h3>Professional Achievements</h3>
                <ul className="achievements">
                    <li>
                        Prize winner of the national championship "PROFESSIONALS-2023" (competency: 
                        <strong>"Business Software Solutions"</strong>)
                    </li>
                    <li>
                        Prize winner of the national championship "PROFESSIONALS-2024" (competency: 
                        <strong>"Web Development"</strong>)
                    </li>
                </ul>
                
                <h4>Philosophy</h4>
                <p>I condemn vibe coders and those who reinvent the wheel.</p>
            </main>
        <Footer />
        </>
    )
}
