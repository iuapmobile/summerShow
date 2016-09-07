//here is your code...
summerready = function () {
	//$summer.byId("content").innerHTML += "<h1 style='text-align: center'>Hello friends, welcome to touch the summer frame!</h1><h2 style='text-align: center'>The frame update at " +(new Date()).toLocaleString()+"</h2>";
};

function openWin(name){
	summer.openWin({
        name : 'newWin',
        url : 'html/newWin.html',
        pageParam :{
        	id : name
        }        
    });
}
function exec(id){
	alert(id);
	var getExec = $summer.byId("getExec");
	$summer.html (getExec, id)
}