itemname=[]
startdate=[]
enddate=[]
amount=[]
itemurl=[]
var endreached=0
var invlistnum=1
var olditemname
var t
var extendid=$("script[src^=chrome-extension][src$=hasID]")[0].getAttribute("src").split("://")[1].split("/")[0]
var datefrommain=$("script[src^=chrome-extension][src$=hasID]")[0].getAttribute("src").split("?")[1].split("hasID")[0]


function toDate(str){
    var sd=str.split("-");
    return new Date(sd[0],sd[1]-1,sd[2]);
}
datethresh=toDate(datefrommain)
function nextInvestList(num){
	text="/my/apiUserInvestList?orderBy=createTime&order=desc&userInvest="+num.toString()
	getInvestList(text)
}

function collecturl(){
$("tr[data-url]").each(function(){ 
	if (toDate($(this.childNodes[3]).text()) < datethresh){
	endreached=1
	finshoff()
	} else {
	itemname.push($(this.childNodes[1]).text())
	startdate.push($(this.childNodes[3]).text())
	enddate.push($(this.childNodes[5]).text())
	amount.push($(this.childNodes[7]).text().replace(",","").replace("￥","") )
	itemurl.push($(this).attr("data-url"))
	}
	});
}


function findurl(){
	console.log($("tr[data-url]"))
	if (!$("tr[data-url] td span").text()){
		return;
	} else {
		if (endreached>0){
		} else if (olditemname==$($("tr[data-url]")[0].childNodes[1]).text()){
		nextInvestList(invlistnum);

		} else {
		collecturl()
		olditemname=$($("tr[data-url]")[0].childNodes[1]).text()
		}

		if (endreached<1){
		invlistnum++
		nextInvestList(invlistnum);
		}
	}
}

function finshoff(){
	clearInterval(t)
	itemurl=itemurl.join("||")
	chrome.runtime.sendMessage(extendid,{greeting:"url",url:itemurl})
}
t=setInterval("findurl()",4000);

