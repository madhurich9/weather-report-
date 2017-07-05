$(document).ready(function(){
$("#btn").click(function(){
var city=$("#city").val();
    console.log(city);
    
    // debugger;
    // $("#data").html("data"); 
    
    var api_key = "4e63a5f1c775602bc41f56a0dab07b73";
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key,function(response){
        console.log(response);
        
        
        
        
        console.log(response.main.temp_max);
        
        var temp = response.main.temp_max;
        var city_name = response.name;
        var celsius=temp-273.15;
        $("#data").html(celsius+" °C"); 
        $("#cityName").html(city_name);
        
        
    });
    }); 
 $("#btn1").click(function(){
$("#city").val("");
    });
});
        




// Code to display mmenu item names

/*$.get("https://davids-restaurant.herokuapp.com/menu_items.json",function(data){
        console.log(data);
        var data = data.menu_items;
        $.each(data, function(index, value){
            console.log(data[index].name);
});        });*/
        
        