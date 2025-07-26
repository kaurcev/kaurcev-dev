import { Link } from 'react-router-dom';
import './style.css';
const NavPanel = () => {
    return (
        <nav>
            <Link to="/about">Обо мне</Link>
            <Link to="/projects">Проекты</Link>
            <Link to="/resume">Резюме</Link>
            <Link to="/news">Новости</Link>
        </nav>
    );
}

export default NavPanel;
