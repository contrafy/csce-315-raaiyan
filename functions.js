function button1() {
    if(localStorage.getItem("theme") === "light") {
        dark_mode();
    }
    else {
        light_mode();
    }
}

function light_mode() {
    document.getElementById('page_style').setAttribute("href", "style.css");
    localStorage.setItem("theme", "light");
}

function dark_mode() {
    document.getElementById('page_style').setAttribute("href", "style2.css");
    localStorage.setItem("theme", "dark");
}

function applySavedTheme() {
    //use when page loads to keep the theme persistent across pages/sessions
    //don't know if lab covered a better way to do this because I was sick but oh well
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        dark_mode();
    } else {
        //default
        light_mode();
    }
}