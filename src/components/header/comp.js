import { Link } from 'react-router-dom';
import './style.css';
const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <Link to="/">Александр Каурцев</Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
