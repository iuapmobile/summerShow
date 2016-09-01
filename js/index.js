
//previous page id, current page id
var prevPid = '', curPid = '';
//save opened frame name
var frameArr = [];

//frame whether open
function isOpened(frmName){
    var i = 0, len = frameArr.length;
    var mark = false;
    for(i; i<len; i++){
        if(frameArr[i] === frmName){
            mark = true;
            return mark;
        }
    }
    return mark;
}

function openTab(type,tid){
    var header = $summer.byId('header');
    var headerPos = $summer.offset(header);
    var footer = $summer.byId('footer');
    var footerPos = $summer.offset(footer);
    var width = $summer.winWidth();//==320
    // var height = api.winHeight - navPos.h - headerPos.h;
    var height = $summer.winHeight() - footerPos.h - headerPos.h;//gct:计算frame的高
    type = type || 'main';
    var actTab = $api.dom('#nav .active');
    $api.removeCls(actTab,'active');
    var thisTab = $api.dom('#nav .'+ type);
    $api.addCls(thisTab,'active');
    
    //record page id
    prevPid = curPid;
    curPid = type;
    if(prevPid !== curPid){
        if(isOpened(type)){
            summer.setFrameAttr({
                id:type,
                hidden: false
            },null,null);
        }else{
            summer.openFrame({
                name: type,
                url: 'html/'+ type +'.html',
                rect: {
                    x: 0,
                    y: headerPos.h,
                    w: width,
                    h: height
                }
            });
        }
        if(prevPid){
        	summer.setFrameAttr({
                id:prevPid,
                hidden: true
            },null,null);
        }
        if(!isOpened(type)){
            //save frame name
            frameArr.push(type);
        }
    }
    setTimeout(function(){
    	summer.hideProgress();
    },1000)
}

summerready = function(){
    // here is your code...	
	// 默认打开main
	summer.showProgress({
        title: '加载中...',
        modal: false
    });
	openTab("main","main");
}