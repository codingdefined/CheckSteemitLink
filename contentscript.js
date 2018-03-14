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
            var str = "You have loaded " + window.location.hostname + " site which seems to be a phising link, correct link is https://steemit.com";
           
        }
    }
    if (url.includes("steemit-rewards")) {
        var str = "You have loaded " + window.location.hostname + " site which seems to be a phising link, correct link is https://steemit.com";
        alert(str);
    }
    if (url.includes("steemit.com") && url.includes("transfers")) {
        var allMemoSpans = document.getElementsByClassName('Memo');
        var arrayNumbers = [];

        for (var i = 0; i < allMemoSpans.length; i++) {
            var previousMemo = allMemoSpans[i].innerHTML;
            if (previousMemo.includes('The link in the memo is not Steemit Link')) {
                return;
            }
            if ((allMemoSpans[i].innerHTML.includes("http") || allMemoSpans[i].innerHTML.includes("https")) && !allMemoSpans[i].innerHTML.includes("steemit.com")) {
                allMemoSpans[i].innerHTML = "<div style='color:red;'>The link in the memo is not Steemit Link</div> " + allMemoSpans[i].innerHTML;
            }
        }
    }
}

setInterval(checkSteemitLink, 10000);
