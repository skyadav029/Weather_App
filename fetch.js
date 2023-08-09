var url='https://ipapi.co/json/';
cty = document.querySelector(".div")

fetch(url)
.then((response)=>response.json())
.then(data=>{
    var res  = `City: ${data.city}
     <br> <br>  
    ip: ${data.ip}
    <br> <br>

    Network:${data.network}
    <br> <br>
    Version:${data.version}
    <br> <br>
    Region:${data.region}
    <br> <br>
    Region_Code:${data.region_code}
    <br> <br>
    Timezone:${data.timezone}
    <br> <br>
    Country_Calling_Code:${data.country_calling_code}
   <br> <br>
    Country_Name:${data.country_name}
    <br> <br>
    Currancy:${data.currency}
    <br> <br>
    Currancy_Name:${data.currency_name}
    <br> <br>
    Organization:${data.org}
    `
   
    cty.innerHTML = res
})