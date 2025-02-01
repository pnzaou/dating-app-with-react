import toast from 'react-hot-toast'
import { create } from 'zustand'
import { axiosInstance } from '../libs/axios'

export const useAuthStore = create((set) => ({

    token: localStorage.getItem("dating-app-auth-token"),

    login: async (data, setValue, setLoading) => {
        try {
            const rep = await axiosInstance.post("/api/personnes/signin", data)
            setValue("email", "")
            setValue("password", "")
            localStorage.setItem("dating-app-auth-token", rep.data?.token)
            set({token: rep.data?.token})
            setLoading(false)
            toast.success(rep.data.message)
            return true
        } catch (error) {
            setLoading(false)
            toast.error(error.response 
                ? error.response.data.message
                : "Une erreur s'est produite. Veuillez réessayer."
            )
            return false
        }
    },

    logout: () => {
        try {
            localStorage.removeItem("dating-app-auth-token")
            set({token: null})
            return true
        } catch (error) {
            console.error(error);
            return false
        }
    }
}))