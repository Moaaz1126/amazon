function drob_open() {
    document.getElementById("drobmunu").style.display="block";
    document.getElementById("drob_open_hide").style.display="inline-block";
    document.getElementById("drob_open_show").style.display="none";
}
function drob_open_hide() {
    document.getElementById("drobmunu").style.display="none";
    document.getElementById("drob_open_hide").style.display="none";
    document.getElementById("drob_open_show").style.display="";
}

function open_munu() {
    document.getElementById("aside").style.display="inline-block"
}
function hide_mune() {
    document.getElementById("aside").style.display=""
}
function open_flag_mune() {
    document.getElementById("flag_munu").style.display="inline-block";
    document.getElementById("hide_flag").style.display="inline-block";
    document.getElementById("open_flag").style.display="none";
}
function hide_flag_mune() {
    document.getElementById("flag_munu").style.display="none";
    document.getElementById("hide_flag").style.display="none";
    document.getElementById("open_flag").style.display="block";
}
function open_aco() {
    document.getElementById("aco_open2").style.display="none";
    document.getElementById("aco_open").style.display="none";
    document.getElementById("aco_hide").style.display="inline-block";
    document.getElementById("aco_hide2").style.display="inline-block";
    document.getElementById("acount").style.display="inline-block";

}
function hide_aco() {
    document.getElementById("aco_open2").style.display="inline-block";
    document.getElementById("aco_open").style.display="inline-block";
    document.getElementById("aco_hide").style.display="none";
    document.getElementById("aco_hide2").style.display="none";
    document.getElementById("acount").style.display="none";
}