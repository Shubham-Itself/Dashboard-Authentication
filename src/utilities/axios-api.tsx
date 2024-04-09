import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const login = async (email:string, password:string) =>{

    try {
        const response = await axios.post(`${API_URL}/login`,{email, password});
        return response.data
      
        
    } catch (err:any) {
  
      
        
    }

}

export const registration =async (email:string , password:string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {email , password});
        return response.data;
    } catch (err:any) {
       
    }
}

export const dataList = async ()=>{
try{
    const response = await axios.get(`${API_URL}/users?page=2`);
    return response.data.data;
}catch(err){
    
}
} 