export { }


export class ApiCall {

    url: string;
   
    static instace: ApiCall = null;

    constructor(url: string) {
        this.url = url;
    }

    static getInstance(url: string) {
        if (ApiCall.instace === null) ApiCall.instace = new ApiCall(url);
        return ApiCall.instace;
    }

    public async get(query: string, lim:number,activePage: number) {

        console.log(query, lim,activePage);
        
        try {
            const data = await fetch(`${this.url}?${query}&limit=${lim}&page=${activePage}`);
            console.log(data);
            
            const dataJson = await data.json();
            const d2 = dataJson.data
            return dataJson;
        } catch (error) {
            alert(error)
        }
    }


    public post(data : any) {

        try {
            fetch(this.url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }) 
    }catch (error) {
            alert(error)
        }
    }

    public delete(id:any){
        fetch(`${this.url}/${id}`,{
            method:'DELETE'
        })
    }


    public edit(data : any){
        try {
            fetch(`${this.url}/${data._id}`,{
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


}

export const apiReq = ApiCall.getInstance('https://coupon-server.onrender.com/coupon');


console.log(apiReq);



console.log('test call', await apiReq.get("", 10,1))












/* 
token -> interceptor -> veirfy  -> fail -> error  -> suces 

configuration
axios -> get ,post, patch,put -> return

*/

