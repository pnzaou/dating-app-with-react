import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { axiosInstance } from "../libs/axios";

const Relations = ({register, errors}) => {
  
  const {data, isLoading, isError, refetch} = useQuery("RelationData", async () => {
    const rep = await axiosInstance.get("/api/relations")
    return rep.data.data
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
      <div className="mb-[15px]">
        <div className="mt-10 ml-10">
          <h1 className="font-bold text-[25px]">
            Quel type de relation recherchez-vous ?
          </h1>
          <p className="pr-7 text-justify">
            Scrollez pour sélectionnez un des types de relations.
          </p>
        </div>
        <div className="h-[265px] overflow-y-auto mt-5 grid grid-cols-2 justify-items-center px-12 int-cent:px-2 gap-y-[12px]">
          {data?.map(relation => (
            <div className="w-[140px]" key={relation._id}>
            <label className="cursor-pointer">
              <input
                type="radio"
                value={relation._id}
                {...register("relationId", { required: "Veuillez sélectionner une des options" })}
                className="peer hidden"
              />
              <div
                className={`peer-checked:bg-[#E94057] peer-checked:text-white peer-checked:font-bold border border-gray-300 rounded-2xl p-3 text-center ${
                  errors.relationId ? "border-red-500" : "text-gray-600"
                }`}
              >
                {relation.nom}
              </div>
            </label>
          </div>
          ))}
        </div>
      </div>
    );
}

export default Relations;

Relations.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object
}
