import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerificationCodeForm from "../components/verification-code-form";
import toast from "react-hot-toast";

const EmailVerification = () => {
    const [min, setMin] = useState(1)
    const [sec, setSec] = useState(59)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            } else if (min > 0) {
                setMin(min - 1);
                setSec(59);
            }
        }, 1000);

        if (min === 0 && sec === 0) {
            clearInterval(timer);
            navigate("/email-signup-methode");
            toast.error("Les 2 minutes sont écoulées.")
        }

        return () => clearInterval(timer);
    }, [sec, min]);
    
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
