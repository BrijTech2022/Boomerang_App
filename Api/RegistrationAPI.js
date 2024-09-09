import { baseURL, token } from './ApibaseUrl';

export const RegistrationApi={

  AllCountries:async()=>{
        //alert()
     return await  fetch(baseURL+'Registration/AllCountries', {
            method: "GET",
           headers: {  // these could be different for your API call
              Accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8', 
            },
            // body: JSON.stringify(jsonbody),*/
          })
            .then((response) => response.json())
            .then((json) => { //notifyMessage("processing....")
             // notifyMessage("Processing....")
            //  console.log("api===="+json)
              if(json!=null){
              //  console.log("api===="+JSON.stringify(json))
                 return json
              }
              else
                return false
            })
            .catch((err) => {
               console.log('Some error occured, please retry');
             
               console.log(err);
               return false
            });   
   },

  AllStateByCountryCode:async(country_code)=>{
    //alert()
    return await  fetch(baseURL+'Registration/AllStateByCountryCode?country_code='+country_code, {
        method: "PUT",
        headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8', 
        },
        // body: JSON.stringify(jsonbody),
      })
        .then((response) => response.json())
        .then((json) => { //notifyMessage("processing....")
          // notifyMessage("Processing....")
        //  console.log("api===="+json)
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
              return json
          }
          else
            return false
        })
        .catch((err) => {
            console.log('Some error occured, please retry');
          
            console.log(err);
            return false
        });   
   },

  AllCityByStateANDCountryCode:async(jsonbody)=>{
    // console.log(JSON.stringify(jsonbody))
  return await   fetch(baseURL+'Registration/AllCityByStateANDCountryCode', {
        method: "PUT",
       headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8' 
        },
        body: JSON.stringify(jsonbody),
      })
        .then((response) => response.json())
        .then((json) => { 
         // notifyMessage("Processing....")
        //  console.log("api===="+json)
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
             return json
          }
          else
            return false
        })
        .catch((err) => {
           console.log('Some error occured, please retry');
         
           console.log(err);
           return false
        });   
   },
  
  ValidateRegistration:async(userId)=>{
    //alert()
    return await  fetch(baseURL+'Registration/ValidateRegistration/'+userId, {
        method: "GET",
       headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8', 
        },
      })
        .then((response) => response.json())
        .then((json) => { 
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
             return json
          }
          else
            return false
        })
        .catch((err) => {
           console.log('Some error occured, please retry');
         
           console.log(err);
           return false
        });   
   },

  GenerateOtp:async(jsonbody)=>{
  // console.log(JSON.stringify(jsonbody))
  return await   fetch(baseURL+'Registration/GenerateOtp', {
      method: "POST",
     headers: {  // these could be different for your API call
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8' 
      },
      body: JSON.stringify(jsonbody),
    })
      .then((response) => response.json())
      .then((json) => { 
       // notifyMessage("Processing....")
      //  console.log("api===="+json)
        if(json!=null){
        //  console.log("api===="+JSON.stringify(json))
           return json
        }
        else
          return false
      })
      .catch((err) => {
         console.log('Some error occured, please retry');
       
         console.log(err);
         return false
      });   
   },

  GetOtp:async(mobile)=>{
    // alert(mobile)
    return await  fetch(baseURL+'Registration/GetOtp?PhoneNo='+mobile, {
        method: "PUT",
      headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8', 
        },
      })
        .then((response) => response.json())
        .then((json) => { 
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
            return json
          }
          else
            return false
        })
        .catch((err) => {
          console.log('Some error occured, please retry');
        
          console.log(err);
          return false
        });   
   },

  SaveRegistration:async(jsonbody)=>{
      // console.log(JSON.stringify(jsonbody))
    return await   fetch(baseURL+'Registration/SaveRegistration', {
          method: "PUT",
          headers: {  // these could be different for your API call
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8' 
          },
          body: JSON.stringify(jsonbody),
        })
          .then((response) => response.json())
          .then((json) => { 
            // notifyMessage("Processing....")
          //  console.log("api===="+json)
            if(json!=null){
            //  console.log("api===="+JSON.stringify(json))
                return json
            }
            else
              return false
          })
          .catch((err) => {
              console.log('Some error occured, please retry');
            
              console.log(err);
              return false
          });   
   },

  LoginActivity:async(jsonbody)=>{
    // console.log(JSON.stringify(jsonbody))
  return await   fetch(baseURL+'LoginActivity', {
        method: "POST",
        headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8' 
        },
        body: JSON.stringify(jsonbody),
      })
        .then((response) => response.json())
        .then((json) => { 
          // notifyMessage("Processing....")
        //  console.log("api===="+json)
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
              return json
          }
          else
            return false
        })
        .catch((err) => {
            console.log('Some error occured, please retry');
          
            console.log(err);
            return false
        });   
   },

   GetAllRagitrationDetailsByUserId:async(userId)=>{
    //alert()
    return await  fetch(baseURL+'Registration/GetAllRagitrationDetailsByUserId/'+userId, {
        method: "GET",
      headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8', 
        },
      })
        .then((response) => response.json())
        .then((json) => { 
          if(json!=null){
          //  console.log("api===="+JSON.stringify(json))
            return json
          }
          else
            return false
        })
        .catch((err) => {
          console.log('Some error occured, please retry');
        
          console.log(err);
          return false
        });   
   },
   
   UploadFiles:async(jsonbody)=>{
    // console.log(JSON.stringify(jsonbody))
    return await   fetch(baseURL+'Registration/UploadFiles', {
        method: "POST",
        headers: {  // these could be different for your API call
            Accept: 'application/json',
        //   'Content-Type': 'application/json; charset=utf-8',
        'Content-Type': 'multipart/form-data',
            Authorization:`Bearer ${token}`
        },
        body:jsonbody
        // body: JSON.stringify(jsonbody),
        
        })
        .then((response) => response.json())
        .then((json) => { 
            // notifyMessage("Processing....")
        //  console.log("api===="+json)
            if(json!=null){
            //  console.log("api===="+JSON.stringify(json))
                return json
            }
            else
            return false
        })
        .catch((err) => {
            console.log('Some error occured, please retry');
            
            console.log(err);
            return false
        });   
    },

}