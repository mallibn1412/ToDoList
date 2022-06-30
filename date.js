// jshint esversion:6

exports.getDate=function(){
    let today=new Date();

    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    
    return today.toLocaleDateString("en-IN",options);
}

exports.getDay=function(){
    let today=new Date();

    var options={
        weekday:"long"
    }

     return today.toLocaleDateString("en-IN",options);
}
