import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const SignIn = () => {
    const [loading, setLoading] = useState(false)
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    const mdpRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    const {register, handleSubmit, setValue, formState: {errors}} = useForm()
    const { login } = useAuthStore()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        setLoading(true)
        const isLogin = await login(data, setValue, setLoading)
        
        if(isLogin) {
            navigate("/home-page")
        }
    }

    if(loading) {
        return (
          <div className="flex w-screen h-screen justify-center items-center">
            <div>
              <span className="loading loading-dots loading-md"></span>
            </div>
          </div>
        )
    }

    return (
        <div className="flex h-screen w-screen flex-col justify-evenly items-center">
            <div className="h-16"> pok</div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center w-screen">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Votre email" {...register("email", {
                                required: "Champ obligatoire. Veuillez saisir un email valid",
                                pattern: emailRegex
                            })}/>
                        </label>
                        {errors.email && (
                            <span className="text-red-500 text-sm text-center mt-2">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="mt-5 flex flex-col items-center w-screen">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder="Votre mot de passe" {...register("password", {
                                required: "Champ obligatoire. Veuillez saisir un mot de passe valid (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).",
                                pattern: mdpRegex
                            })} />
                        </label>
                        {errors.password && (
                            <span className="text-red-500 text-sm text-center mt-2">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="mt-10 flex justify-center w-screen">
                        <button className="btn btn-wide text-white" style={{
                            backgroundColor: "#E94057"
                        }}>Se connecter</button>
                    </div>
                </form>
            </div>
            <div className="flex items-center w-full px-10">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span
                className="mx-4 font-medium"
                style={{
                    fontSize: 12,
                }}
                >
                ou connectez-vous avec
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
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
        </div>
    );
}

export default SignIn;
