
"auto";


function _tap(item)

{

  click(item.bounds().centerX(),item.bounds().centerY());

}

function start(kw) {
  if(textContains(kw).exists()) {
    toast(" go go");
    var a= textContains(kw).findOne();
    _tap(a);
    text("立即购买").waitFor();
    var b=text("立即购买").findOne();
    _tap(b)
    sleep(3000)
    if (textContains("提交订单").exists()) {
        var c=textContains("提交订单").findOne();
        _tap(c)
    }
  }
  
}


var task=setInterval(function(){
    toast("ready")
    device.wakeUp()
    var date=new Date()
    var hour=date.getHours()
    var day=date.getDay()
    
    if(day==5 && hour>=14) {
        clearInterval(task)
        start("乐乐茶15元")
    }

},1000)



