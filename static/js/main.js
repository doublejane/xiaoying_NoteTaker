var ext = chrome.extension.getBackgroundPage()
$('#start').on('click', function() {
	ext.commfind2='datefrommain="'+document.getElementById("timeinput").value+'"'
	ext.butonclick();
        swapButtons();
    });
    
    $('#stop').on('click', function() {
	chrome.tabs.query({url:"https://www.xiaoying.com/my/invest"}, function(tabs) {
		chrome.tabs.remove(tabs.id); 
	});
	
        
        swapButtons();
});



function DateDemo(){  
var d, s = "";  
d = new Date();  
s += d.getFullYear()+ "-";   
s += (d.getMonth()) + "-"; 
s += d.getDate(); 
return(s);
}
var today=DateDemo()
document.getElementById("timeinput").value=today
 
