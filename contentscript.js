function checkSteemitLink() {
    var url = location.href.toLowerCase();
    var password = document.getElementsByName("password");
    if (password.length > 0) {
        var placeHolderText = password.getAttribute("placeholder");
        if (password && placeHolderText === "Password or WIF" &&
                !(url.includes("steemit.com") ||
                url.includes("steemd.com") ||
                url.includes("busy.org") ||
                url.includes("utopian.io"))) {
            var str = "You have loaded the website " + window.location.hostname + ", which could potentially be a phishing link; the correct link is https://steemit.com!";
           
        }
    }
    if (url.includes("steemit-rewards")) {
        var str = "You have loaded the website " + window.location.hostname + ", which could potentially be a phishing link; the correct link is https://steemit.com!";
        alert(str);
    }
    if (url.includes("steemit.com") && url.includes("transfers")) {
        var allMemoSpans = document.getElementsByClassName('Memo');
        var arrayNumbers = [];

        for (var i = 0; i < allMemoSpans.length; i++) {
            var previousMemo = allMemoSpans[i].innerHTML;
            if (previousMemo.includes('The link in the memo is not Steemit link!')) {
                return;
            }
            if ((allMemoSpans[i].innerHTML.includes("http") || allMemoSpans[i].innerHTML.includes("https")) && !allMemoSpans[i].innerHTML.includes("steemit.com")) {
                allMemoSpans[i].innerHTML = "<div style='color:red;'>The link in the memo is not Steemit link!</div> " + allMemoSpans[i].innerHTML;
            }
        }
    }
    if (url.includes("steemit.com")) {
        var l = document.links;
        for (var i = 0; i < l.length; i++) {
            if (!(l[i].href.includes("steemit.com") || l[i].href.includes("busy.org") || l[i].href.includes("busy.org") || l[i].href.includes("steemd.com"))) {
                l[i].onclick = function () {
                    var url = new URL(this.getAttribute('href'))
                    var domain = url.hostname;
                    var string = "This link will redirect you to " + domain + ", which is not a Steemit site; DO NOT USE YOUR STEEMIT PASSWORD!";
                    alert(string);
                }
            }
        }
    }
}

setInterval(checkSteemitLink, 10000);
