
const browserVersion = "Chrome";
function getBrowserVersion(browsername) {

    if (browsername == "Chrome") {
        console.log("its a chrome browser:  " +browsername)  //chrome
        let browserV = "Edge";  
        console.log("inside function inside block value: " + browserV)  //Edge

    }
    else {
        console.log("its not a chrome browser")
    }
    console.log("inside function outside block passed value: " + browsername)  //Chrome
    console.log("inside function outside block value: " + browserV) //Edge (if use Var)  // not defined (if i use let)

}

getBrowserVersion(browserVersion)
console.log("outside function outside block passed value: " + browserVersion)  //chrome    //not executed
console.log("outside function outside block value: " + browserV) //not defined    //not executed

