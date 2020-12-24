import axios from "axios";

export default axios.create(
    {
        baseURL: "http://http://www.hercules.ink/",
        headers: {
            "Content-type": "application/json"
        }
});