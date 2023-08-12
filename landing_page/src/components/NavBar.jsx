import Logo from "./Logo";

function NavBar() {
    return (
        <div className="NavBar">
           <div>
             <Logo />
           </div>
            <div className="navicon">
               <span>Home</span>
               <span>Categorias</span>
               <span>Sobre</span>
               <span>Localização</span>
            </div>

        </div>
    )
}

export default NavBar;