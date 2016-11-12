console.log('Loaded!');
var img=document.getElementById("madi");
var marginLeft=0;
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
}
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

				function validate()
{
  
  var uname=document.getElementById("usname").value;
  
  var pass=document.getElementById("pass").value;
  
  if(uname=="")
  {
    alert("please enter the username");
  //  document.getElementById("usname").focus();
  }
   else if(pass=="")
  {
    alert("please enter the password");
   // document.getElementById("pass").focus();
  }
  else if(uname=="admin" && pass=="admin")
  {
   window.location="http://www.nptel.ac.in";
  }
  else
  {
   alert("Invalid Username/Password");
  ////// document.getElementById("usname").value="";
   
  // document.getElementById("pass").value="";
  // document.getElementById("usname").focus();
  }
}
	