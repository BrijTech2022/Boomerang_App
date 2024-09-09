import { baseURL, token } from './ApibaseUrl';

   export const TransactionApi={

   SaveTransaction:async(jsonbody)=>{
        // console.log(JSON.stringify(jsonbody))
      return await   fetch(baseURL+'Transaction/SaveTransaction', {
            method: "PUT",
           headers: {  // these could be different for your API call
              Accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              Authorization:`Bearer ${token}`
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
   
   GetAllTransaction:async()=>{
   //alert()
   return await  fetch(baseURL+'Transaction/GetAllTransaction', {
         method: "GET",
         headers: {  // these could be different for your API call
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization:`Bearer ${token}`
         },
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

   GetWalletAmountByUserId:async(jsonbody)=>{
   //alert()
   return await  fetch(baseURL+'Transaction/GetWalletAmountByUserId', {
         method: "PUT",
         headers: {  // these could be different for your API call
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization:`Bearer ${token}`
         },
         body:JSON.stringify(jsonbody),
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

   GetParticipationStockQuantityByUserId:async(jsonbody)=>{
      //alert()
      return await  fetch(baseURL+'Transaction/GetParticipationStockQuantityByUserId', {
            method: "PUT",
            headers: {  // these could be different for your API call
               Accept: 'application/json',
               'Content-Type': 'application/json; charset=utf-8',
               Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(jsonbody),
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

   GetAllTransactionByUserId:async(userId)=>{
         //alert()
         return await  fetch(baseURL+'Transaction/GetAllTransactionByUserId/'+userId, {
               method: "GET",
               headers: {  // these could be different for your API call
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization:`Bearer ${token}`
               },
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

      GetHoldingByUserId:async(data)=>{
      //alert()
      return await  fetch(baseURL+'Transaction/GetHoldingByUserId', {
            method: "PUT",
            headers: {  // these could be different for your API call
               Accept: 'application/json',
               'Content-Type': 'application/json; charset=utf-8',
               Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(data),
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

   }