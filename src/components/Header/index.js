import logosvg from '../../svg/logo.svg'
const Header = () => {

    const descLogo = "this is the blog description";
    return (
        <>
            <header className="flex-space-between">
                <div className="logo">
                    <img src={logosvg} alt={descLogo}></img>
                </div>
                <div className="search">
                    <input type="text" className='input-search' name="search"></input>
                </div>
                <div className="menu" >
                    <li><a href="none" className='nav-link'>Categories</a></li>
                    <li><a href="none" className='nav-link'>About</a></li>
                    <li><a href="none" className='nav-link'>Contact</a></li>
                </div>
            </header>
        </>
    );
}

export default Header;