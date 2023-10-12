import axios from "axios"

export const getApikey = async() => {
    try {
        console.log(process.env.NEXT_PUBLIC_SECRET_KEY)
        const res = await axios.post("http://api.h4u.kro.kr:7070/api/openai-key", {
            teamKey: process.env.NEXT_PUBLIC_SECRET_KEY,
        })
        console.log(res)
        return res.data.token;
    } catch(error) {
        console.log(error);
    }
}