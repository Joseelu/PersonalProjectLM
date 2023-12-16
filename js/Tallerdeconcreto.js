//ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//variables

var menu = document.getElementById("menu");
var btn_open = document.getElementById("btn_open")
var body = document.getElementById("body");

//mostrar y ocultar
function open_close_menu(){
    body.classList.toggle("body_move");
    menu.classList.toggle("menu__side_move");
}