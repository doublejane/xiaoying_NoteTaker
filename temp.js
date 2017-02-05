var result="dfd";
//var extendid="ifooldnmmcmlbdennkpdnlnbgbmfalko";
//chrome.runtime.sendMessage(extendid, {greeting:"url",url:"定期12月期·90313629583130626	xfd.debx	1111140211192779	749.51	12	2017-01-29	0.08		2018-01-29	65.20	65.20	65.19"});
//result=$("tr[data-url]")
urlinfo=window.location.href
extendid=$("script[src^=chrome-extension][src$=sdf]")[0].getAttribute("src").split("://")[1].split("/")[0]
alert(extendid)

//function fuck(){
//console.log(extendid)
//chrome.runtime.sendMessage(extendid, {greeting:"result",result:result});
//}
//fuck()
