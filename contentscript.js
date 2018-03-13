(function () {
    var url = location.href.toLowerCase();
    var password = document.getElementsByName("password");
    if (password.length > 0) {
        var placeHolderText = password.getAttribute("placeholder");
        if (password && placeHolderText === "Password or WIF" &&
                !(url.includes("steemit.com") ||
                url.includes("steemd.com") ||
                url.includes("busy.org") ||
                url.includes("utopian.io"))) {
            var str = "You have loaded " + window.location.hostname + " site which seems to be a phising link, correct link is https://steemit.com";
        }
    }
    if (url.includes("steemit-rewards")) {
        var str = "You have loaded " + window.location.hostname + " site which seems to be a phising link, correct link is https://steemit.com";
        alert(str);
    }
})();
