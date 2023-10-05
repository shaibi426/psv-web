import axios from "axios"


const userLogin =(x)=>{
    axios.get(`http://cpo.nhmp.gov.pk:7077/users/getUser/${x}`).then(
        response =>{
          const result = response.data[0]
     return result.userPwd
       
    }
    )
    
}

export {userLogin}


//    result.userPwd == pwd? router.push('/dashboard'): alert(" Wrong Password ")