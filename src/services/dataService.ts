import axios from "axios"

// export const getAPI = (name: string) => {
//     fetch("http://universities.hipolabs.com/search?name=" + name)
//       .then(res => res.json())
//       .then(data => console.log(data));
// }

export function getResponse(uniName:string) {
    return axios.request({
        method: "get",
        url: "http://universities.hipolabs.com/search",
        params: {
            name: uniName
        }
    });
}

