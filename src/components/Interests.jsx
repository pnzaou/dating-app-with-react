import axios from "axios";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

const Interests = ({register, errors}) => {
  
  const {data, isLoading, isError, refetch} = useQuery("CIData", async () => {
    const rep = await axios.get("http://localhost:8080/api/centres-dinterets")
    return rep.data.CI
  })

  if(isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <div>
          <span className="loading loading-dots loading-md"></span>
        </div>
      </div>
    )
  }

  if(isError) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <div>
          <h1 className="font-semibold">Une erreur s&apos;est produite veuillez réessayer</h1>
          <div className="mt-4 flex justify-center">
            <button className="btn btn-wide bg-[#E94057] text-white" onClick={refetch}>Réessayer</button>
          </div>
        </div>
      </div>
    )
  }

    return (
      <div className="mb-[55px]">
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
          {data?.map(CI => (
            <div className="w-[140px]" key={CI._id}>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  value={CI._id}
                  {...register("centreInteretId", { required: "Veuillez sélectionner au moins une des options" })}
                  className="peer hidden"
                />
                <div
                  className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${
                    errors.centreInteretId ? "border-red-500" : "text-gray-600"
                  }`}
                >
                  {CI.nom}
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
