import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {handleInput, handleKeyDown} from "../services/verification-code-services";
import axios from "axios";
import toast from "react-hot-toast";

const VerificationCodeForm = () => {
    const hiddenInputRef = useRef(null)
    const displayRef = useRef(null)
    const [values, setValues] = useState([0, 0, 0, 0])
    const [numPosition, setNumPosition] = useState(0)
    const [code, setCode] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        hiddenInputRef.current.focus()
    }, [])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const sendCode = async () => {
            const digitCode = code.join("")
            try {
                const rep = await axios.post(`http://localhost:8080/api/personnes/signup-email-confirm?token=${token}`, {digitCode})
                navigate(rep.data.lien)
                toast.success(rep.data.message)
                console.log(rep.data.lien);
            } catch (error) {
                toast.error(error.response.data.message)
                if(error.response.data.redirect){
                    navigate(error.response.data.lien)
                }
            }
        }

        if(numPosition > 3) {
            sendCode()
        }
    },[code, numPosition])

    const numContentStyle = {
        height: 70,
        width: 66,
        fontSize: 34,
        fontWeight: "bold",
        color: "#E8E6EA"
    }

    return (
        <div className="mt-7 flex flex-col items-center">
            <input 
                type="number"
                inputMode="numeric" 
                placeholder="vvv" 
                id="hiddenInput" 
                style={{
                    position: "absolute",
                    top: -100,
                    opacity: 0
                }}
                ref={hiddenInputRef}
                onInput={(e) => handleInput(e, numPosition, setCode, setNumPosition, setValues, values)}
                onKeyDown={(e) => handleKeyDown(e, numPosition, setCode, setNumPosition, setValues, values)}
            />
            <div className="flex justify-evenly pl-5">
                {values.map((value, index) => (
                    <div 
                        key={index} 
                        ref={displayRef} 
                        className="number-container flex items-center justify-center border rounded-xl mr-5" 
                        style={{...numContentStyle, borderColor: "#E94057"}}>
                        {value}
                    </div>
                ))}
            </div>
            <div className="mt-10 mb-5">
                <Link style={{
                    color: "#E94057",
                    fontWeight: 700
                }}>Envoyer à nouveau</Link>
            </div>
        </div>
    );
}

export default VerificationCodeForm;
