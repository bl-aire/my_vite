import logo from '../assets/react.svg'

export default function Navbar() {
    return(
        <nav className="nav">
            <div className='nav-items'>
                <img src={logo} width="70px" />
                <h1 className='facts'>BeeFacts</h1>
            </div>
            
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
        </nav>
    )
}