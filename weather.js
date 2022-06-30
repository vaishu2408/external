async function weather(){
    let cityname =  document.getElementById("test");
    // let url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=c7f9b45ff27ae957c1c2b6f25103d3a3&units=metric';
    // let url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=a39491bc79bb71fbc7c0a90d446c62ff&units=metric'
    let url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=a39491bc79bb71fbc7c0a90d446c62ff&units=metric';
    const resp = await fetch(url);
    let data= await resp.json();
    console.log(data);
    let { main : {temp,temp_min,temp_max}}=data;
     document.getElementById("val").innerHTML+=`Temp : ${temp}  Temp_min : ${temp_min}  Temp_max : ${temp_max}`
    
}