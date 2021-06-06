var mouseEvent = "empty";
var last_position_of_x, last_position_of_y; 
canvas = document.getElementById('canvas'); 
ctx = canvas.getContext("2d"); 
color = "black"; 
linewidth = 1; 
canvas.addEventListener("mousedown", my_mousedown);
 
function my_mousedown(e) { 
//Addictonal Activity start 
color = document.getElementById("color").value; 
linewidth = document.getElementById("linewidth").value; 
radius = document.getElementById("radius").value
//Addictonal Activity ends 
mouseEvent = "mouseDown"; 
}

canvas.addEventListener("mousemove", my_mousemove); 
function my_mousemove(e) { 
current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
current_position_of_mouse_y = e.clientY - canvas.offsetTop; 
if (mouseEvent == "mouseDown") { 
console.log("Current position of x and y coordinates = ");
console.log("Last position of x and y coordinates = "); 
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();; 
ctx.stroke(); 
} 

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y; }

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e) { 
mouseEvent = "mouseup"; 
}

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) { 
mouseEvent = "mouseleave"; 
}

 function clearArea() 
 { ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
