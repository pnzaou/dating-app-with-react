import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addNumber, removeNumber } from "../services/verification-code-services";

const VerificationCodeForm = () => {
    const [numPosition, setNumPosition] = useState(0)
    const [code, setCode] = useState([])

    useEffect(() => {
        if(numPosition > 3) {
            console.log(code);
        }
    },[code, numPosition])

    const numbersTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0]
    const numStyle = {
        fontSize: 24,
        fontWeight: 500
    }
    const numContentStyle = {
        height: 70,
        width: 66,
        fontSize: 34,
        fontWeight: "bold",
        color: "#E8E6EA"
    }


    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="flex justify-evenly">
                <div className="number-container flex items-center justify-center border rounded-xl mr-5"style={{...numContentStyle, borderColor: "#E94057"}}>
                    0
                </div>
                <div className="number-container flex items-center justify-center border border-gray-300 rounded-xl mr-5"style={numContentStyle}>
                    0
                </div>
                <div className="number-container flex items-center justify-center border border-gray-300 rounded-xl mr-5"style={numContentStyle}>
                    0
                </div>
                <div className="number-container flex items-center justify-center border border-gray-300 rounded-xl"style={numContentStyle}>
                    0
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-28 gap-y-14 mt-10'>
                {numbersTab.map(num => (
                    <div key={num} style={numStyle} className="btn-number" onClick={(e) => addNumber(numPosition, setCode, setNumPosition, e)}>{num}</div>
                ))}
                <div style={numStyle} className="btn-delete" onClick={() => removeNumber(numPosition, setCode, setNumPosition)}>
                    <img src="/img/delete-svgrepo-com.svg" height={17.99} width={24}/>
                </div>
            </div>
            <div className="mt-16 mb-5">
                <Link style={{
                    color: "#E94057",
                    fontWeight: 700
                }}>Envoyer à nouveau</Link>
            </div>
        </div>
    );
}

export default VerificationCodeForm;
