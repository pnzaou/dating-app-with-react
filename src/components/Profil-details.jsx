import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProfilDetails = ({ register, errors }) => {
    const [image, setImage] = useState(null)  
    const [imageFile, setImageFile] = useState() 

    const handleImageChange = (e) => {
      const file = e.target.files[0]
      if(file && file.type.startsWith("image/")){
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
        setImageFile(file)
      }
    }

    useEffect(() => {
      if(image) {
        console.log(image)
        URL.revokeObjectURL(image)
      }
    }, [image])

    return (
      <div className="mb-10">
        <div className="mt-10 ml-10">
          <h1 className="font-bold" style={{ fontSize: 30 }}>
            Détails du profil
          </h1>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="mt-10">
            <div className="mask mask-squircle w-24">
              <img src={image ? image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
            </div>
          </div>
          <div className="absolute top-16 right-24">
            <div className="relative flex items-center justify-center w-24 h-24">
                {/* Input caché */}
                <input
                id="inputfile"
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                onChange={handleImageChange}
                {...register("photo", {
                required: "Veuillez ajouter une image de vous",
                })}
                />

                {/* Bouton circulaire avec icône de caméra */}
                <div className="w-[50px] h-[50px] bg-[#E94057] rounded-full flex items-center justify-center border-[3px] border-white">
                    <img src="/img/camera-svgrepo-com 1.svg" alt="icône caméra" className="w-6 h-6"/>
                </div>
            </div>
          </div>
          {errors.photo && (
              <span className="mt-2 text-sm text-red-500">
                {errors.photo.message}
              </span>
            )}
          <div style={{ width: 295 }} className="mt-10">
            <input
              type="text"
              placeholder="Votre nom"
              {...register("nom", {
                required: "Veuillez saisir votre nom",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.nom && (
              <span className="mt-2 text-sm text-red-500">
                {errors.nom.message}
              </span>
            )}
          </div>
          <div style={{ width: 295 }} className="mt-5">
            <input
              type="text"
              placeholder="Votre prénom"
              {...register("prenom", {
                required: "Veuillez saisir votre prénom",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.prenom && (
              <span className="mt-2 text-sm text-red-500">
                {errors.prenom.message}
              </span>
            )}
          </div>
          <div style={{ width: 295 }} className="mt-5">
            <input
              type="date"
              placeholder="Votre date de naissance"
              {...register("date", {
                required: "Veuillez renseigner votre date de naissance",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.date && (
              <span className="mt-2 text-sm text-red-500">
                {errors.date.message}
              </span>
            )}
          </div>
          <div style={{ width: 295 }} className="mt-5">
            <input
              type="number"
              placeholder="Votre taille en cm"
              {...register("taille", {
                required: "Veuillez saisir votre taille",
                min: {
                  value: 50,
                  message: "Veuillez saisir une taille valide"
                },
                max: {
                  value: 300,
                  message: "Veuillez saisir une taille valide"
                }
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.taille && (
              <span className="mt-2 text-sm text-red-500">
                {errors.taille.message}
              </span>
            )}
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
