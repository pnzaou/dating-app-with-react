import { useEffect, useState } from "react";
import ProfilDetails from "../components/Profil-details";
import { useForm } from "react-hook-form";
import IAmA from "../components/I-am-a";
import Interests from "../components/Interests";

const SignupForm = () => {
    const [ step, setStep ] = useState(1)
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm()

    useEffect(() => {
        const requestLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  // Mise à jour du state avec la localisation de l'utilisateur
                  setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  });
                },
                (err) => {
                  // Gestion des erreurs (ex : refus de l'utilisateur)
                  setError(err.message);
                }
              );
            } else {
              setError("La géolocalisation n'est pas prise en charge par ce navigateur.");
            }
        };
      
        requestLocation();

    },[])

    const stepBack = () => {
        setStep(step - 1)
    }

    const onSubmit = async (data) => {
        if(step < 3) {
            setStep(step + 1)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <ProfilDetails register={register} errors={errors}/>
                )}
                {step === 2 && (
                    <IAmA register={register} errors={errors}/>
                )}
                {step === 3 && (
                    <Interests register={register} errors={errors}/>
                )}
                <div className="flex justify-center w-screen">
                    <div className="">
                        <button className="btn btn-wide text-white" style={{
                            backgroundColor: "#E94057",
                            fontWeight: "bold",
                            fontSize: 16,
                            width: 295
                        }}>
                            {step < 3? "Continuer" : "Soumettre"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
