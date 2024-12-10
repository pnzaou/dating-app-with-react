import PropTypes from "prop-types"

const IAmInterestedBy = ({register, errors}) => {
  return (
    <div className='mb-44'>
        <div className="mt-10 ml-10">
          <h1 className="font-bold" style={{ fontSize: 30 }}>
            Je suis intéressé(e) par
          </h1>
        </div>
        <div className="mt-20 flex flex-col space-y-3 items-center">
          <label className="cursor-pointer" style={{width: 295}}>
              <input
              type="radio"
              name="intresse_par"
              value="femme"
              {...register("intresse_par", { required: "veuillez sélectionner une option" })}
              className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.intresse_par ? 'border-red-500' : 'text-gray-600'}`}>
              Femme
            </div>
          </label>

          <label className="cursor-pointer" style={{width: 295}}>
            <input
            type="radio"
            name="intresse_par"
            value="homme"
            {...register("intresse_par", { required: "veuillez sélectionner une option" })}
            className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.intresse_par ? 'border-red-500' : 'text-gray-600'}`}>
              Homme
            </div>
          </label>

          <label className="cursor-pointer" style={{width: 295}}>
            <input
            type="radio"
            name="intresse_par"
            value="autre"
            {...register("intresse_par", { required: "Veuillez sélectionner un genre" })}
            className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.intresse_par ? 'border-red-500' : 'text-gray-600'}`}>
              Autre
            </div>
          </label>
          {errors.genre && (
            <span className="text-red-500 text-sm">{errors.intresse_par.message}</span>
          )}
        </div>
      </div>
  )
}

IAmInterestedBy.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object
  }

export default IAmInterestedBy
