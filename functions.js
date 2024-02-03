function button1() {
    if(document.getElementById('page_style').getAttribute("href") === "style.css") {
        dark_mode();
    }
    else {
        light_mode();
    }
}

function light_mode() {
    document.getElementById('page_style').setAttribute("href", "style.css");
}

function dark_mode() {
    document.getElementById('page_style').setAttribute("href", "style2.css");
}