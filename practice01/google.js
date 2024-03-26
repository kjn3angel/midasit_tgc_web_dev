function onSearch(e) {
    var enter_word = document.getElementById("search").value;
    var search_url = "https://www.google.com/search?q=" + enter_word;
    window.open(search_url, "_blank");
    
}

window.onload = function () {
}

function spanBtn() {
    var search_url = "https://www.google.com/search?q=" + document.getElementById("search").value;
    window.open(search_url, "_blank");
}

window.onkeydown = function (e) {
    if (e.keyCode == 13) {
        onSearch(e);
    }
}

function luckyBtn() {    
    window.open("https://doodles.google", "_blank");
}