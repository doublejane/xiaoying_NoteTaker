var url
var result
var datefrommain
var comm='extendid="'+chrome.runtime.id+'"'
var commgrab='srcname="grab"'
var commfind='srcname="findurl"'
var commtemp='srcname="temp"'
var commfind2
var nextline=" \n"
var ttt
var tabcount

if (window.location.href=="https://www.xiaoying.com/user/login"){
	alert("please login XY before pressing Start button");
	window.close();
}
chrome.runtime.onMessageExternal.addListener(  function(request, sender, sendResponse) {
	switch (request.greeting)
	  {
	case "url":
	console.log("F "+request.url)
	url = request.url.split("||")
	tabcount=0
	result=""
	ttt=setInterval("grabtabcontent(url)",3000);
	break;
	
	case "result":
	console.log("suck "+request.result)
	result+=request.result+nextline
	break;


	}
	console.log(request)
})
chrome.runtime.onMessage.addListener(  function(request, sender, sendResponse) {
	switch (request.ingreeting)
	  {
	case "resulttabid":
	console.log("retab "+request.tabid)
	grabtabid = request.tabid
	gonnagrab=1
	break;
	}
})

function executegrab(grabtabid){
	if (!grabtabid||gonnagrab==0){
	} else if (!grabtabid==false&&gonnagrab==1) {
	chrome.tabs.executeScript(grabtabid,{file:"grab.js"});
	grabtabid=""
	gonnagrab=0
	} else {
	console.log("wtf?" + grabtabid)
	}
}
function recordtabs(url) {
	for ( var i = url.length - 1; i >= 0 ; i-- ) {
	chrome.tabs.create({url:url[i]},function(tab){
		chrome.tabs.executeScript(tabs[0].id,{file:"temp.js"});
		});
	
	chrome.tabs.query({url:url[i]}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id,{file:"grab.js"});  
		});
	}


}

function grabtabcontent(taburl){
	if (tabcount<=taburl.length -1){
		chrome.tabs.create({url:taburl[tabcount]},function(tab){
		console.log("tabid is "+tab.id)
		chrome.tabs.executeScript(tab.id,{code:comm});  
		chrome.tabs.executeScript(tab.id,{code:commgrab});  
		chrome.tabs.executeScript(tab.id,{file:"runcomm.js"}); 
		});
		tabcount++
	} else {
		console.log("grab finished "+result)
		clearInterval(ttt)
		console.save(result,"XY_results");
		
	}
}
(function(console){
console.save = function(data, filename){
    if(!data) {
        console.error('Console.save: No data')
        return;
    }
    if(!filename) filename = 'console.json'
    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }
    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}
})(console)

function butonclick(){
	chrome.tabs.create({url:"https://www.xiaoying.com/my/invest"},function(tab){
		console.log("find urls "+tab.id)
		chrome.tabs.executeScript(tab.id,{code:comm}); 
		chrome.tabs.executeScript(tab.id,{code:commfind});
		chrome.tabs.executeScript(tab.id,{code:commfind2});
		chrome.tabs.executeScript(tab.id,{file:"runcomm.js"}); 
 
		});
}

 


