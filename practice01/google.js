function onSearch(e) {
    var enter_word = document.getElementById("search").value;
    if (e.keyCode == 13) {
        var search_word = enter_word;
        var search_url = "https://www.google.com/search?q=" + search_word;
        window.open(search_url, "_blank");
    }
}

window.onload = function () {
}

function spanBtn() {
    var search_url = "https://www.google.com/search?q=" + document.getElementById("search").value;
    window.open(search_url, "_blank");
}