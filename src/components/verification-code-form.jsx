import { useState } from "react";
import { Link } from "react-router-dom";

const VerificationCodeForm = () => {
    const [numPosition, setNumPosition] = useState(0)
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

    const addNumber = (e) => {
        const containers = [...document.querySelectorAll('.number-container')]

        containers[numPosition].innerText = e.target.innerText
        containers[numPosition].style.backgroundColor = "#E94057"
        containers[numPosition].style.border = "#E94057"
        containers[numPosition].style.color = "#ffffff"
        containers[numPosition + 1].style.border = "#E94057"
        setNumPosition(numPosition + 1)

    }

    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="flex justify-evenly">
                <div className="number-container flex items-center justify-center border border-gray-300 rounded-xl mr-5"style={numContentStyle}>
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
                    <div key={num} style={numStyle} className="btn-number" onClick={addNumber}>{num}</div>
                ))}
                <div style={numStyle} className="btn-delete">
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
