import { Link } from "react-router-dom";

const HomePageFooter = () => {

    const btnStyle = {
        width: 295,
        height: 56,
        backgroundColor: "#E94057",
        fontSize: 16,
        borderRadius: 15
    }

    const linkStyle = {
        color: "#E94057",
        fontWeight: "bold"
    }

    return (
        <div className="flex items-center w-full flex-col mt-7 pb-10">
            <div>
                <Link className="btn btn-wide text-white" style={btnStyle} to="/signUp-methode">Créer un compte</Link>  
            </div>
            <div className="mt-7">
                <p>
                    Vous avez déjà un compte ? <Link to="" style={linkStyle}>Se connecter</Link>
                </p>
            </div>
        </div>
    );
}

export default HomePageFooter;
