import axios from "axios"


const userLogin =(x)=>{
    axios.get(`http://cpo.nhmp.gov.pk:7077/users/getUser/${x}`).then(
        response =>{
          const result = response.data[0]
     return result.userPwd
       
    }
    )
    
}



const lastRecordNo = (table,field)=>{
  
    const id = axios.get(`http://localhost:5000/gen/last/${table}/${field}`).then(
        response=>{
            const result = response.data[0] 
            return result.last
        }
    )
   return id
}

export {userLogin,lastRecordNo}