import { connect } from 'react-redux';
import { baseURL, token } from './ApibaseUrl';

   export const ContestApi={

    GetAllContest:async()=>{
        //alert()
        return await  fetch(baseURL+'Contest/GetAllContest', {
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

    GetAllUpComingContest:async()=>{
        //alert()
        return await  fetch(baseURL+'Contest/GetAllUpComingContest', {
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
    
    GetAllRunningContest:async()=>{
    //alert()
    return await  fetch(baseURL+'Contest/GetAllRunningContest', {
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

    SaveParticipation:async(jsonbody)=>{
        // console.log(JSON.stringify(jsonbody))
        return await   fetch(baseURL+'Participation/SaveParticipation', {
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

  GetAllParticipationByContestId:async(contestId)=>{
    //alert()
    return await  fetch(baseURL+'Participation/GetAllParticipationByContestId/'+contestId, {
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

  GetAllParticipationByCategoryId:async(categoryId)=>{
  //alert()
  return await  fetch(baseURL+'Participation/GetAllParticipationByCategoryId/'+categoryId, {
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

  GetAllCategory:async()=>{
    //alert()
    return await  fetch(baseURL+'Category/GetAllCategory', {
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

GetContestMostBought:async()=>{
    //alert()
    return await  fetch(baseURL+'Contest/GetContestMostBought', {
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

    GetParticipateMostBought:async()=>{
    //alert()
    return await  fetch(baseURL+'Contest/GetParticipateMostBought', {
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

    UploadUrlImage:async(jsonbody)=>{
        // console.log(JSON.stringify(jsonbody))
        return await   fetch(baseURL+'Participation/UploadUrlImage', {
            method: "PUT",
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

    GetDetailsByParticipationId:async(participation_id)=>{
            //alert()
            return await  fetch(baseURL+'Participation/GetDetailsByParticipationId?Id='+participation_id, {
                method: "PUT",
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
}

// const mapStateToProps = (state) => {
//     return {
//       network: state.network,
//       loginInfo:state.login
//     };
//   };
//   export default connect(mapStateToProps)(ContestApi)