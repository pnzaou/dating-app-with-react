import PropTypes from "prop-types";

const PasswordStep = ({ register, errors, password }) => {

    const mdpRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    return (
        <div className="mt-36 mb-20 flex w-screen justify-center">
            <div>
                <h1 className="font-bold">Veuillez saisir votre mot de passe</h1>
                <div style={{ width: 295 }} className="mt-10">
                    <input
                    type="password"
                    placeholder="Mot de passe"
                    {...register("password", {
                        required: "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).",
                        minLength: 8,
                        pattern: mdpRegex
                    })}
                    className="input input-bordered w-full max-w-xs"
                    />
                    {errors.password && (
                    <span className="mt-2 text-sm text-red-500">
                        {errors.password.message}
                    </span>
                    )}
                </div>
                <div style={{ width: 295 }} className="mt-10">
                    <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    {...register("confirmPassword", {
                        required: "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car).",
                        minLength: 8,
                        pattern: mdpRegex,
                        validate: value =>
                            value === password || "Les mots de passe doivent identiques (Minimum: 1 maj, 1 min, 1 chiffre, 1 spé, 8 car)."
                    })}
                    className="input input-bordered w-full max-w-xs"
                    />
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
