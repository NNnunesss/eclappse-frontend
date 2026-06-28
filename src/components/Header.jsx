import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">Eclappse</div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
            </nav>
        </header>
    );
}

export default Header;