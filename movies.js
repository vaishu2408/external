async function movies(){
    const  url="https://imdb-api.com/en/API/Top250Movies/k_m2j5s424"
    const resp = await fetch(url);
    var data = await resp.json();
    console.log(data);
   
        let{ items}=data;
        let movies=" ";
       
        items.forEach(ele=>{
            let{title,imDbRating}=ele;
           
            movies+='<tr>';
            movies+='<td>'+title+'</td>';
            movies+='<td>'+imDbRating+'</td><br>';
            movies+='</tr>'
           
  
           
        });
     
        document.getElementById("tab").innerHTML=movies;
       
   
}