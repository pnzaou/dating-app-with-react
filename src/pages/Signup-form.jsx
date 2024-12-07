import { useState } from "react";
import ProfilDetails from "../components/Profil-details";
import { useForm } from "react-hook-form";
import IAmA from "../components/I-am-a";
import Interests from "../components/Interests";
import axios from "axios";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import PasswordStep from "../components/Password-step";

const SignupForm = () => {
    const [ step, setStep ] = useState(1)
    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const password = watch("password")

    const stepBack = () => {
        setStep(step - 1)
    }

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    error => {
                        reject(new Error("Localisation non disponible : " + error.message));
                    }
                );
            } else {
                reject(new Error("La géolocalisation n'est pas supportée."));
            }
        });
    };

    const onSubmit = async (data) => {
        try {
            if(step < 4) {
                setStep(step + 1)
            } else {
                
                const formData = new FormData()
    
                formData.append("email", jwtDecode(token).email)

                Object.keys(data).forEach(key => {
                    if(key !== 'photos'){
                        formData.append(key, data[key])
                    }
                })
    
                if(data.photos && data.photos.length > 0) {
                    Array.from(data.photos).forEach(photo => {
                        formData.append("photos", photo)
                    })
                }
    
                try {
                    const location = await getCurrentLocation();
                    formData.append("latitude", location.latitude);
                    formData.append("longitude", location.longitude);
                } catch (error) {
                    console.warn(error.message);
                }
    
                const rep = await axios.post("http://localhost:8080/api/personnes/signup", formData)
                console.log(rep);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Erreur lors de l'inscription ! Veuillez réessayer.");
        }
    }
    
    return (
        <div className="mb-10">
            {step > 1 && (
                <div className="mt-10 ml-11">
                    <div className="flex items-center justify-center border border-gray-300 rounded-xl"style={{
                        height: 52,
                        width: 52
                    }}  onClick={stepBack}>
                        <img
                            src="img/back-svgrepo-com.svg"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                {step === 1 && (
                    <ProfilDetails register={register} errors={errors}/>
                )}
                {step === 2 && (
                    <IAmA register={register} errors={errors}/>
                )}
                {step === 3 && (
                    <Interests register={register} errors={errors}/>
                )}
                {step === 4 && (
                    <PasswordStep register={register} errors={errors} password={password}/>
                )}
                <div className="flex justify-center w-screen">
                    <div className="">
                        <button className="btn btn-wide text-white" style={{
                            backgroundColor: "#E94057",
                            fontWeight: "bold",
                            fontSize: 16,
                            width: 295
                        }}>
                            {step < 4? "Continuer" : "Soumettre"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
