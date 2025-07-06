import { useAppContext } from '../../Application';
import './style.css';

const Footer = () => {
    const {version, versionstate} = useAppContext();
    return (
        <>
            <footer>
                <div className="footer">
                    kaurcev.dev, 2025 v{version} ({versionstate})
                </div>
            </footer>
        </>
    );
}

export default Footer;
