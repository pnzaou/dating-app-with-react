import { Link } from "react-router-dom";

const SignUpMethode = () => {

    const btnStyle = {
        width: 295,
        height: 56,
        backgroundColor: "#E94057",
        fontSize: 16,
        borderRadius: 15
    }

    const linkColor = {
        color: "#E94057"
    }

    return (
      <div className="relative h-screen w-screen">
        <div></div>
        <div
          className="absolute flex flex-col items-center w-full"
          style={{ top: 308 }}
        >
          <div>
            <h1 className="text-bold text-lg">Inscrivez-vous pour continuer</h1>
          </div>
          <div>
            <Link
              className="btn btn-wide text-white mt-12"
              style={btnStyle}
              to="/"
            >
              Continuer avec mon email
            </Link>
          </div>
          <div className="flex items-center w-full mt-10 px-10">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span
              className="mx-4 font-medium"
              style={{
                fontSize: 12,
              }}
            >
              ou inscrivez-vous avec
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            {/* Bouton Facebook */}
            <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-xl">
              <Link>
                <img
                    src="img/facebook-color-svgrepo-com.svg"
                    alt="Facebook"
                    className="w-8 h-8"
                />
              </Link>
            </div>

            {/* Bouton Google */}
            <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-xl">
              <Link>
                <img
                    src="img/google-svgrepo-com.svg"
                    alt="Google"
                    className="w-9 h-9"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-evenly mt-10 mb-7">
              <div>
                <Link to="" className="text-sm mr-3" style={linkColor}>Conditions d&apos;utilisation</Link>
              </div>
              <div>
                <Link to="" className="text-sm" style={linkColor}>Politique de confidentialité</Link>
              </div>
          </div>
        </div>
      </div>
    );
}

export default SignUpMethode;
