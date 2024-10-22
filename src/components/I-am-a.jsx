import PropTypes from 'prop-types'

const IAmA = ({register, errors}) => {
    
    return (
      <div className='mb-64'>
        <div className="mt-32 ml-10">
          <h1 className="font-bold" style={{ fontSize: 30 }}>
            Je suis un(e)
          </h1>
        </div>
        <div className="mt-20 flex flex-col space-y-3 items-center">
          <label className="cursor-pointer" style={{width: 295}}>
              <input
              type="radio"
              name="genre"
              value="femme"
              {...register("genre", { required: "genre is required" })}
              className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.genre ? 'border-red-500' : 'text-gray-600'}`}>
              Femme
            </div>
          </label>

          <label className="cursor-pointer" style={{width: 295}}>
            <input
            type="radio"
            name="genre"
            value="homme"
            {...register("genre", { required: "genre is required" })}
            className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.genre ? 'border-red-500' : 'text-gray-600'}`}>
              Homme
            </div>
          </label>

          <label className="cursor-pointer" style={{width: 295}}>
            <input
            type="radio"
            name="genre"
            value="autre"
            {...register("genre", { required: "genre is required" })}
            className="peer hidden"
            />
            <div className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${errors.genre ? 'border-red-500' : 'text-gray-600'}`}>
              Autre
            </div>
          </label>
          {errors.genre && (
            <span className="text-red-500 text-sm">{errors.genre.message}</span>
          )}
        </div>
      </div>
    );
}

export default IAmA;

IAmA.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object
}