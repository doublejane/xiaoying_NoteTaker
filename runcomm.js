var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
	switch(srcname){
	case "grab":
    	oScript.src="chrome-extension://"+extendid+"/grab.js?hasID";

	break;

	case "findurl":
	oScript.src="chrome-extension://"+extendid+"/findurl.js?"+datefrommain+"hasID";
	break;

	case "temp":
	oScript.src="chrome-extension://"+extendid+"/temp.js?haha";
	break;
	}
    oHead.appendChild(oScript);
