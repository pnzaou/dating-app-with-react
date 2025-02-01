import PropTypes from "prop-types";

const PasswordStep = ({ register, errors, password }) => {

    const mdpRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    return (
        <div className="mt-36 mb-20 flex w-screen justify-center">
            <div>
                <h1 className="font-bold">Veuillez saisir votre mot de passe</h1>
                <div style={{ width: 295 }} className="mt-10">
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
                        <input
                         type="password"
                         placeholder="Mot de passe"
                         className="grow"
                         {...register("password", {
                            required: "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).",
                            minLength: 8,
                            pattern: mdpRegex
                        })}
                        />
                    </label>
                    {errors.password && (
                    <span className="mt-2 text-sm text-red-500">
                        {errors.password.message}
                    </span>
                    )}
                </div>
                <div style={{ width: 295 }} className="mt-10">
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
                        <input
                         type="password"
                         placeholder="Mot de passe"
                         className="grow"
                         {...register("confirmPassword", {
                            required: "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).",
                            minLength: 8,
                            pattern: mdpRegex,
                            validate: value =>
                                value === password || "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car)."
                        })}
                        />
                    </label>
                    {errors.confirmPassword && (
                        <span className="mt-2 text-sm text-red-500">
                            Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

PasswordStep.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object,
    password: PropTypes.string
}

export default PasswordStep;
