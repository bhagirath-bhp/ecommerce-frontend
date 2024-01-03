import axios from "axios";

axios.get("http://ip-api.com/batch")
    .then((response) => { response.json() })
    .then((location)=>{
        console.log(location.country);
    })