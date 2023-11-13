import { headerLogoImg } from "../../utils/Constant";
import { useState } from "react";
export default Header = () => {
     const [btnContent, setBtnContent] = useState("Login");
    return (
        <>
            <header className="header-el">
                <nav className="nav-el">
                    <img className="logo-img" src={headerLogoImg} alt="logo" />
                    <ul className="nav-ul-el">
                        < li className="nav-li-el" >Home</ li >
                        < li className="nav-li-el" >About us</ li >
                        < li className="nav-li-el" >Contact us</ li >
                        < li className="nav-li-el" >Cart</ li >
                    </ul>
                    <button className="nav-btn" onClick={()=>{
                     "Login"? setBtnContent("LogOut"):setBtnContent("Login");
                    }}>
                        {btnContent}
                    </button>
                </nav>
            </header>
        </>
    )
}