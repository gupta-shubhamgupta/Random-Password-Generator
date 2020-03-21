window.onload=function(){
var lowerChar='abcdefghijklmnopqrstuvwxyz';
var upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number='1234567890';
var special='!@#$%^&*';

var count=document.getElementById("chaNu");
var  upperchBox=document.getElementById("upperch");
var symBox=document.getElementById("sym");
var numBox=document.getElementById("num");
var ypwd=document.getElementById("pwd");


submit1.addEventListener("click",function(e){
          var characters=lowerChar;
          (upperchBox.checked) ? characters +=upperChar :'';
          (symBox.checked) ? characters +=special :'';
          (numBox.checked) ? characters +=number :'';
          
           ypwd.value=password(count.value,characters);
});

function password(len,characters){
  var pass='';
  for(var i=0;i<len;i++){
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pass;
}
}
function copy(){
  var cop=document.getElementById("pwd"); 
  cop.select(); 
  document.execCommand("copy");  
}