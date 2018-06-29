
var myImg = ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=39429892503371488751&fm=27&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=2960542509,809787366&fm=27&gp=0.jpg","http://img5.imgtn.bdimg.com/it/u=81080394,3532788413&fm=27&gp=0.jpg","http://img5.imgtn.bdimg.com/it/u=3626217888,316039247&fm=27&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=2959119197,2886529201&fm=27&gp=0.jpg"];

var photoSwipe={
    /*用户信息数组*/
    imgArr:[{img:"http://img5.imgtn.bdimg.com/it/u=3626217888,316039247&fm=27&gp=0.jpg" +
    "","name":"曹帅","content":"这是内容"},
        {img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3371845535,196884241&fm=27&gp=0.jpg","name":"小贾","content":"这是内容"},
        {img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg", "name":"玉田","content":"这是内容"},
        {"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg","name":"张三","content":"这是内容"},
        {"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg","name":"李四","content":"这是内容"},
    ],

    /*元素位置*/
    site:{
        _x_start:0,
        _y_start:0,
        _x_move:0,
        _y_move:0,
        _x_end:0,
        _y_end:0,
        top_val:0,
        left_val:0
    },
    /*当前下标*/
    index:0,
    /*是否允许动画*/
    run:true,
    /*是否加载完成*/
    load:false,
    /*初始化*/
    init:function () {
        document.querySelector("#photo_box>div>div").innerHTML=this.imgHtml();
    },
    /*图片HTML*/
    imgHtml:function () {
        var str=`<div id="ind-${this.index}"><img style="width: 80px;height: 80px;border-radius:50%;margin: 20px auto;" src="${(this.imgArr[this.index]).img}" alt="">
          <h3 style="text-align: center;font-weight: 600;color:rgba(102,102,102,.8);;margin: 0 auto 30px">${(this.imgArr[this.index]).name}</h3>
          <div class="borderBox">
                <div class="report-L">【心印偈】</div>
                <div class="report-R">
                <div class="report-content">
                <p><span class="quotation">外：</span>性格外倾好行动，社交广泛有热情</p>
            </div>
                <div class="report-content">
                    <p><span class="quotation">圆：</span>性格外倾好行动，社交广泛有热情</p>
                </div>
                <div class="report-content">
                    <p><span class="quotation">人：</span>性格外倾好行动，社交广泛有热情</p>
                </div>
                <div class="report-content">
                    <p><span class="quotation">事：</span>性格外倾好行动，社交广泛有热情</p>
                </div>
                </div>
            </div>
        </div>`;
        return str;
    },
    /*移动动画*/
    animateMove:function (el,val) {
        if(!this.run){
            return;
        }
        this.run=false;

        /*CSS3动画方式*/
        el.css({"transform":"translate3d("+doc_width*val+"px,"+photoSwipe.top_val*2.2+"px,0px)","transition-duration":"0.3s"});
        var moveTime=setTimeout(function () {
            el.remove();
            var ind_el=$("#ind-"+(photoSwipe.index));
            photoSwipe.activeEl(ind_el);
            photoSwipe.index++;
            $("#photo_box>div>div").append(photoSwipe.imgHtml());
            photoSwipe.run=true;
        },300);
    },
    /*复位动画*/
    animateReset:function (el) {
        /*CSS3动画方式*/
        el.css({"transform":"translate3d(0px,0px,0px)","transition-duration":"0.3s"});
        var resetTime=setTimeout(function () {
            el.css("transition-duration","0s");
        },1000);
    },
    /*激活层*/
    activeEl:function (el) {
        el.css("z-index","2");
    },
    /*清除位置*/
    clearLocation:function () {
        this.left_val=0;
    }

};
photoSwipe.init();

var doc_width=$(document).width(),doc_height=$(document).height();

photoSwipe.activeEl($("#ind-0"));
photoSwipe.index++;
$("#photo_box>div>div").append(photoSwipe.imgHtml());

$("#photo_box").on("touchstart",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }

    var ev = e || window.event;
    photoSwipe._x_start=ev.touches[0].pageX;
    photoSwipe._y_start=ev.touches[0].pageY;
    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
});
$("#photo_box").on("touchmove",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }
    var ev = e || window.event;
    photoSwipe._x_move=ev.touches[0].pageX;
    photoSwipe._y_move=ev.touches[0].pageY;

    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
    photoSwipe.top_val=parseFloat(photoSwipe._y_move)-parseFloat(photoSwipe._y_start);
    photoSwipe.left_val=parseFloat(photoSwipe._x_move)-parseFloat(photoSwipe._x_start);

    act_el.css({"transform":"translate3d("+photoSwipe.left_val+"px,"+photoSwipe.top_val+"px,0px)","transition-duration":"0s"});
});
$("#photo_box").on("touchend",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }
    var ev = e || window.event;
    photoSwipe._x_end=ev.changedTouches[0].pageX;
    photoSwipe._y_end=ev.changedTouches[0].pageY;
    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
    if(photoSwipe.left_val>0 && photoSwipe.left_val>doc_width/2-doc_width/4.5){
        if(photoSwipe.index<photoSwipe.imgArr.length-1){
             photoSwipe.animateMove(act_el,1);
        }else {
            photoSwipe.imgArr = photoSwipe.imgArr.concat(myImg);
            photoSwipe.animateMove(act_el,1);
        }
    }else if(photoSwipe.left_val<0 && photoSwipe.left_val<-doc_width/2+doc_width/4.5){
        if(photoSwipe.index<photoSwipe.imgArr.length-1){
            photoSwipe.animateMove(act_el,-1);
        }else {
            photoSwipe.imgArr = photoSwipe.imgArr.concat(myImg);
            photoSwipe.animateMove(act_el,-1);
        }


    }else {
        photoSwipe.animateReset(act_el);
    }
});

$(function () {
    photoSwipe.load=true;
});