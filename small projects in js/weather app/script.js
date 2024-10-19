const apikey = "e3f6be0e7390f1ec2af26e08a75f568d";
const apiurl ="https://api.openweathermap.org/data/2.5/weather? units=metric&q=bangalore";

async function cheackweather (){
    const response= fetch(apiurl + `&appid=${apikey}`);
    var date = (await response).json();

    console.log(date);
    
}

cheackweather();