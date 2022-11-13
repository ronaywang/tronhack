function gettronweb(){
    if(window.tronWeb && window.tronWeb.defaultAddress.base58){
        document.write("Yes, catch it:",window.tronWeb.defaultAddress.base58)
    }
}