import PropTypes from "prop-types";

const Interests = ({register, errors}) => {
    const tab = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
      <div className="mb-[86px]">
        <div className="mt-10 ml-10">
          <h1 className="font-bold" style={{ fontSize: 30 }}>
            Vos centre d&apos;intérêts
          </h1>
          <p className="pr-7 text-justify">
            Scrollez pour sélectionnez quelques-uns de vos centre intérêts et faites savoir à
            tout le monde ce qui vous passionne.
          </p>
        </div>
        <div className="h-[250px] overflow-y-auto mt-5 grid grid-cols-2 justify-items-center px-12 int-cent:px-2 gap-y-[12px]">
          {tab.map(el => (
            <div className="w-[140px]" key={el}>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                name="genre"
                value="femme"
                {...register("genre", { required: "genre is required" })}
                className="peer hidden"
              />
              <div
                className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${
                  errors.genre ? "border-red-500" : "text-gray-600"
                }`}
              >
                sport
              </div>
            </label>
          </div>
          ))}
        </div>
      </div>
    );
}

export default Interests;

Interests.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object
  }
