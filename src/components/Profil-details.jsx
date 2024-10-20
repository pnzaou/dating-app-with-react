import PropTypes from 'prop-types'

const ProfilDetails = ({register, errors}) => {
    
    return (
        <div className="mb-20">
            <div className="mt-32 ml-10">
                <h1 className="font-bold" style={{fontSize: 30}}>Détails du profil</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-20">
                    <div className="mask mask-squircle w-24">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div style={{width: 295}} className="mt-20">
                    <input type="text" placeholder="Votre nom" {...register("nom", {
                        required: "Veuillez saisir votre nom" 
                    })} 
                    className="input input-bordered w-full max-w-xs" />
                    {errors.nom && <span className="
                        mt-2 text-sm text-red-500
                    ">
                        {errors.nom.message}
                    </span>}
                </div>
                <div style={{width: 295}} className="mt-5">
                    <input type="text" placeholder="Votre prénom" {...register("prenom", {
                        required: "Veuillez saisir votre prénom"
                    })} 
                    className="input input-bordered w-full max-w-xs" />
                    {errors.prenom && <span className="
                        mt-2 text-sm text-red-500
                    ">
                        {errors.prenom.message}
                    </span>}
                </div>
                <div style={{width: 295}} className="mt-5">
                    <input type="date" placeholder="Votre date de naissance" {...register("date", {
                        required: "Veuillez renseigner votre date de naissance"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                    {errors.date && <span className="
                        mt-2 text-sm text-red-500
                    ">
                        {errors.date.message}
                    </span>}
                </div>
            </div>
        </div>
    );
}

export default ProfilDetails;

ProfilDetails.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object
}
