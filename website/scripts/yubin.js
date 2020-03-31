		function hoge(json){
        //console.log(json);
        //console.log(json.status);
        var result = json['results'];
        if(result){
        //var result = json['results'];
        //console.log(result);
        var prefecture = document.getElementById('prefecture');
        prefecture.value = result[0].address1;
        var city = document.getElementById('city');
        city.value = result[0].address2;
        var address = document.getElementById('address');
        address.value = result[0].address3;
        }else{
            window.alert(json.message);
        }

    }

    var btn = document.getElementById('btn'); 
    btn.addEventListener('click',function(){
        
        
        var zipcode = document.getElementById('zipcode');
        var span = document.createElement("script");
        span.setAttribute("id", "y-span");
        span.setAttribute("type", "text/javascript");
        span.src='https://zip-cloud.appspot.com/api/search?zipcode='+zipcode.value+'&callback=hoge';
        document.body.appendChild(span);
        document.body.removeChild(span);
        

        },false);