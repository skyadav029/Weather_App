
const api_k = `3265874a2c77ae4a04bb96236a642d2f`// this is api key
const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")// these all selector

// const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_k}&units=metric`

// const img_url=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getweather=async (city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_k}&units=metric`
    const response=  await fetch(url); // await promis kerne se pehle response execute ker
    const data=await response.json();
    return showWeather(data);
}
const showWeather=(data)=>{
console.log(data)
        // ab hame sari chejo ko dynamic kerne hai
    weather.innerHTML=`
    <div>
        
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">    
    </div>
    <div>
        <h2>${data.main.temp}℃</h2>
        <h4>${data.weather[0].main}</h4>
    </div>`

}



form.addEventListener(   // onsubmit click
    "submit",
    function (event){       // take event and prceeds
          
        getweather(search.value) //(city name) jo search box me serarch kiya hog mujhe dikeni chaye
        event.preventDefault(); // prevent default method reload stop ker deta hai
    }
)
