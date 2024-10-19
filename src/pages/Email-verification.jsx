import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VerificationCodeForm from "../components/verification-code-form";

const EmailVerification = () => {
    const [min, setMin] = useState(1)
    const [sec, setSec] = useState(59)


    
    return (
        <div className="w-screen">
            <div className="mt-10 ml-11">
                <div className="flex items-center justify-center border border-gray-300 rounded-xl"style={{
                    height: 52,
                    width: 52
                }}>
                <Link to="/email-signup-methode">
                    <img
                        src="img/back-svgrepo-com.svg"
                        alt="Facebook"
                        className="w-8 h-8"
                    />
                </Link>
                </div>
            </div>
            <div className="mt-10 text-center">
                <h1 style={{
                    fontSize: 34,
                    fontWeight: "bold"
                }}>
                    <span>{min > 9 ? min : `0${min}`}</span>
                    <span>:</span>
                    <span>{sec > 9 ? sec : `0${sec}`}</span>
                </h1>
                <p className="mt-5 px-14">
                    Tapez le code de vérification 
                    que nous vous avons envoyé
                </p>
            </div>
            <VerificationCodeForm/>
        </div>
    );
}

export default EmailVerification;
