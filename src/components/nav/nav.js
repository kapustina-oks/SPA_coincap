import './nav.css';
import img from './black.svg';

const NavCoin = () => {
    return (
            <nav className='nav-container'>
                <div className='nav-wrap'>
                    <div className='nav-links'>
                        <ul>
                            <li><a link="#">Coins</a></li>
                            <li><a link="#">Exchange</a></li>
                            <li><a link="#">Swap</a></li>
                        </ul>
                    </div>

                    <div className="logo">
                        <img src={img} alt="coincap"></img>
                    </div>

                    
                    <div className='btn'>
                        <button>Connect Wallet</button>
                    </div>

                </div>
            </nav>
    )
}

export default NavCoin;