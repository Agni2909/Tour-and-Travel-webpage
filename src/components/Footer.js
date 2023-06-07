import './Footer.css';
import {FacebookLogo,InstagramLogo,BehanceLogo,TwitterLogo} from 'phosphor-react';
import {Link} from 'react-router-dom';
const Footer=()=>{
    return(
        <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favourite Destination.</p>
            </div>
            <div>
                <Link to="/">
                <FacebookLogo size={32} />
                </Link>
                <Link to="/">
                <InstagramLogo size={32} />
                </Link>
                <Link to="/">
                <BehanceLogo size={32} />
                </Link>
                <Link to="/">
                <TwitterLogo size={32} />
                </Link>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <Link to="/">ChangeLog</Link>
                <Link to="/">Status</Link>
                <Link to="/">License</Link>
                <Link to="/">All Versions</Link>
            </div>
            <div>
                <h4>Project</h4>
                <Link to="/">ChangeLog</Link>
                <Link to="/">Status</Link>
                <Link to="/">License</Link>
                <Link to="/">All Versions</Link>
            </div>
            <div>
                <h4>Community</h4>
                <Link to="/">Github</Link>
                <Link to="/">Issues</Link>
                <Link to="/">Project</Link>
                <Link to="/">Twitter</Link>
            </div>
            <div>
                <h4>Others</h4>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Policy</Link>
                <Link to="/">License</Link>
            </div>
        </div>
        </div>
    )

}
export default Footer;