import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const fetchAllProducts = async() => {
    const response = await axios.get(`${uri}/category/1`,{
        headers:{
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    })
    if(response.status==200){
        return response.data
    }else{
        return null
    }
}

export const fetchDragonSpells = async() => {
    const response = await axios.get(`${uri}/category/2`,{
        headers:{
            'Authorization' : `Bearer ${Cookies.get('token')}`
        }
    })
    if(response.status == 200){
        return response.data;
    }
    else return null
}

export const fetchCollections = async() => {
    const response = await axios.get(`${uri}/collection`,{
        headers:{
            'Authorization' : `Bearer ${Cookies.get('token')}`
        }
    })
    if(response.status == 200){
        return response.data;
    }
    else return null
}