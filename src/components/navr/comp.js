import { Link } from 'react-router-dom';
import './style.css';
const Navr = () => {
    return (
        <div className="navr">
            <h4>Блог</h4>
            <p>Можете перейти в блог, расположенный в <Link to="https://blog.kaurcev.dev" target="_blank">blog.kaurcev.dev</Link> </p>
            <h4>Я в социальных сетях</h4>
            <div className="otherlink">
                <Link to="https://t.me/kaurcev">Telegram</Link>
                <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
            <div className="otherlink">
                <Link to="https://github.com/kaurcev">GitHub</Link>
                <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
            <div className="otherlink">
                <Link to="https://twitter.com/kaurcev">Twitter</Link>
                <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Navr;
