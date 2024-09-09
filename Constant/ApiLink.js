/*
const cUrl="https://restapi.kiezensoft.co.in/api/User_Login/getcolor";
getcolor();
export function getcolor(){
 //alert( JSON.stringify(props))
 //const [color,setColor]=useState('#eb6b40')
 
 fetch(cUrl, {
        method: "GET",
        headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //body: jsonbody,
      })
        .then((response) => response.json())
        .then((json) => { 
          //alert(json.data[0].Color)
         //takeColor(json.data[0].Color);
         //themeColor=json.data[0].Color;
         URL=json.data[0].ApiUrl;
         baseUrl=json.data[0].BaseUrl;
         MapUrl= json.data[0].MapUrl;
         Logo1= json.data[0].Logo;
         Logo2=json.data[0].Dlogo; 
       
        //themeColor='#'+props.Myenv.Color;
        })
        .catch((err) => {
           notifyMessage('Some error occured, please retry');
         
           console.log(err);
           takeColor('#eb6b40')
        });
    
 }
 
 
*/





export var URL="https://restapi.kiezensoft.co.in/Api/";
export var baseUrl="https://myeatery.kiezensoft.co.in/restaurant/restaurant_order/index.php";
export var MapUrl="https://myeatery.kiezensoft.co.in/restaurant/locate/index.php?";
export var Logo1="";
export var Logo2=""; 
/*
export var URL="";
export var baseUrl="";
export var MapUrl="";
export var Logo1="";
export var Logo2=""; */