var tronWeb;
var obj = setInterval(async () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(obj)
                var tronweb = window.tronWeb
        }
}, 100);
