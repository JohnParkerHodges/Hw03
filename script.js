function  generate()  {

        
    let  complexity  =  document.getElementById("slider").value;    

    //possible password characters
    let  values  =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_-+=";        
    let  password  =  "";

             //determine password length
    for  (var  i  =  0;  i  <=  complexity;  i++)  {         password  =  password  +  values.charAt(Math.floor(Math.random()  *  Math.floor(values.length  -  1)));     }

         //Putting password in display area
        
    document.getElementById("display").value  =  password;



}

//setting default length
document.getElementById("length").innerHTML = "length: 8 ";

//function to set length based on user input

document.getElementById("slider").oninput = function() {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    } else {
        document.getElementById("length").innerHTML = "length: 1"
    }
}

//function to copy password 

function copypassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password Copied to Clipboard");
}