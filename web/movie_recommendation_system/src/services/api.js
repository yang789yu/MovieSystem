import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRjM2EwZjEwNmFjZDUwOTljYWFlYTU0MzIwODQ2ZCIsIm5iZiI6MTczMTE3MTQyOS44NjgwNzM3LCJzdWIiOiI2NzJjYjRlYWRlNTQ2NTg1ZDA0ZGJhMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ntowi0yHAwRr3-bPUG3dZCXtaoGjPkuHq7HEvH5ohEY";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${process.env.VUE_APP_TMDB_TOKEN}`,

    }
})

