
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
spl="\t"
var tt
var cc=0
var itemresult
var extendid=$("script[src^=chrome-extension][src$=hasID]")[0].getAttribute("src").split("://")[1].split("/")[0]
//see if load is complete
function isfinished(){
	lastinterest=$("tbody")[1].childNodes.length - 2
	if (cc>10){
	clearInterval(tt)
	alert ('item tab load failed')
	}

	if (! $($("tbody")[1].childNodes[lastinterest].childNodes[3]).text()){
	return 1

	} else {
	clearInterval(tt)
	grabinfo()

	}
	cc++
}


function grabinfo(){
	title=$($("h2 :contains('定期')")).text()
	title2=$($("div[class=company-name] :contains('定期')")).text()

	firstincome=$($("tbody")[1].childNodes[2].childNodes[3]).text().replace(/ /g,"").replace(/\n/g,"").replace("￥","")
	secondincome=$($("tbody")[1].childNodes[4].childNodes[3]).text().replace(/ /g,"").replace(/\n/g,"").replace("￥","")

	lastinterest=$("tbody")[1].childNodes.length - 2
	lastincome=$($("tbody")[1].childNodes[lastinterest].childNodes[3]).text().replace(/ /g,"").replace(/\n/g,"").replace("￥","")

	invested=$($("tr :contains('投资本金') font")).text().replace(",","").replace("元","")

	insurance=$($("tr :contains('保险凭证') font")).text().replace(/ /g,"").replace(/\n/g,"")

	duration=$($("tr :contains('项目期限') font")).text().split("个月")

	durationr=Number(duration[0])+Number(duration[1].replace("天",""))/100

	rate=$($("tr :contains('年化收益') font")).text().replace(/ /g,"").split("%")[0]
	rate=Number(rate)/100

	enddate=$($("tr :contains('回款到账') font")).text().replace(/ /g,"").replace(/年|月/g,"-").replace(/日/g,"")
	startdate=$($("div[class=company-name] :contains('投资时间')")).text().replace(/投资时间：/g,"")
	startdate2=$($("div[class=investDate-time]")).text().split(" ")[0]
 
	if(!title){title=title2}
	if(!startdate){startdate=startdate2}

	returnway=$($("tr :contains('还款方式') font")).text().replace("按月付息，到期还本","zyd.mon").replace("等额本息(气球贷)","zxd.qqd").replace("等额本息","xfd.debx")

	var itemresult=title+spl+returnway+spl+insurance+spl+invested+spl+durationr+spl+startdate+spl+rate+spl+spl+enddate+spl+firstincome+spl+secondincome+spl+lastincome
	console.log(itemresult)
	//console.save(title+spl+returnway+spl+insurance+spl+invested+spl+durationr+spl+startdate+spl+rate+spl+spl+enddate+spl+firstincome+spl+secondincome+spl+lastincome,"dd"+insurance)
	//var extendid="ifooldnmmcmlbdennkpdnlnbgbmfalko";
	chrome.runtime.sendMessage(extendid,{greeting:"result",result:itemresult})
	window.close()
}
tt=setInterval("isfinished()",3000);
isfinished();



