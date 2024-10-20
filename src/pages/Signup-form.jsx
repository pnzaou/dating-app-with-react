import { useState } from "react";
import ProfilDetails from "../components/Profil-details";
import { useForm } from "react-hook-form";
import IAmA from "../components/I-am-a";

const SignupForm = () => {
    const [ step, setStep ] = useState(1)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async (data) => {
        if(step < 3) {
            setStep(step + 1)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <ProfilDetails register={register} errors={errors}/>
                )}
                {step === 2 && (
                    <IAmA register={register} errors={errors}/>
                )}
                <div className="flex justify-center w-screen">
                    <div className="">
                        <button className="btn btn-wide text-white" style={{
                            backgroundColor: "#E94057",
                            fontWeight: "bold",
                            fontSize: 16,
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
