import axios from "axios"

const ax = axios.create({
  baseURL: "https://api.emailjs.com/api/v1.1",
  timeout: 1000
})


async function init() {
  const res = await ax.get("/history", {
    user_id: "",
    accessToken	: ""
  })
}

init()