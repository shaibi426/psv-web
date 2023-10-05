import axios from "axios";

export const getExpiredLicience = async () => {
        
    axios.get(`${process.env.BASE_URL}/web/graph/fitnessExpiry`).then(
      // axios.get(`${process.env.BASE_URL}/web/graph/fitnessExpiry`).then(
      response =>{
        const result = response.data
        return(result )

      }
    )
  } 


 