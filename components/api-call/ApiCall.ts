import { url } from "./myapi";

// const url = 'https://coupon-server.onrender.com/coupon'

export const ApiCall = async (query : string, activePage : number) => {

    try {
        const data= await fetch(`${url}?${query}&limit=${10}&page=${activePage}`);
        const dataJson =await data.json();
        const d2 = dataJson.data
        return dataJson;  
    } catch (error) {
        alert(error)
    }
}


export const PostCall = (data:any) =>{

    try {
        fetch(`${url}`,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {return res})
    } catch (error) {
        alert(error)
    }

    return data
}

export const DeleteCall = (id:any) =>{
    fetch(`${url}/${id}`,{
            method:'DELETE'
        })
}

export const EditCall = (data:any) =>{
    try {
        fetch(`${url}/${data._id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res) => res.json())
    // .then((res) => {console.log(res);})
  
    } catch (error) {
        alert(error)
    }
}