function toBottom() {

    var winH =document.body.clientHeight;
    $('html,body').animate({scrollTop:winH}, 800)
}


var dataArr = [
    {
        'question':'我喜欢？',
        'Answer':['不断结交新朋友','和老熟人在一起']
    },
    {
        'question':'我比较喜欢？',
        'Answer':['旅行前确认行程安排、做好准备','一场说走就走的旅行']
    },
    {
        'question':'我更喜欢？',
        'Answer':['主动促进人与人之间的情感联系','分析事情的前因后果']
    },
    {
        'question':'我做事情喜欢？',
        'Answer':['清晰细节步骤','掌控全局发展']
    },
    {
        'question':'我通常情况下？',
        'Answer':['主动联系别人','很少主动和别人联系']
    },
    {
        'question':'按照规矩做事？',
        'Answer':['比较符合我心意','令我感到束缚']
    },
    {
        'question':'我更倾向于？',
        'Answer':['直击目标、直面矛盾','照顾他人的感受']
    },
    {
        'question':'我更倾向于？',
        'Answer':['沟通、善于说服','实操、善于动手']
    },
    {
        'question':'我更倾向于？',
        'Answer':['先观察周围的人，再慢慢融入','很容易融入到周围人当中']
    },
    {
        'question':'我在完成一件事情时？',
        'Answer':['心情或感觉对我的发挥影响很大','往往会有所计划和准备，根据标准的方法去做']
    },
    {
        'question':'我是一个？',
        'Answer':['讲原则、很公正的人','讲情义、重感情的人']
    },
    {
        'question':'我更倾向于？',
        'Answer':['解决当前问题','深谋远虑']
    },
    {
        'question':'我很多时候？',
        'Answer':['容易和陌生人打开话匣子','会保持静默']
    },
    {
        'question':'做事情时我倾向于？',
        'Answer':['按部就班','不断变化出新']
    },
    {
        'question':'我是 ？',
        'Answer':['比较理性的人','比较情感化的人']
    },
    {
        'question':'我工作时？',
        'Answer':['根据以往的经验进行分析判断','根据直觉和洞察力进行判断']
    },
    {
        'question':'我更倾向于 ？',
        'Answer':['整顿内在的事物','搜集外界的信息']
    },
    {
        'question':'我是 ？',
        'Answer':['一个很有条理的人','一个灵活应变的人']
    },
    {
        'question':'我是 ？',
        'Answer':['非常理智、比较锐利的人','感情丰富、说话柔和的人']
    },
    {
        'question':'我工作时倾向于 ？',
        'Answer':['循序渐进、脚踏实地的做','富有想法、喜欢边思考边做']
    },
    {
        'question':'我通常情况下 ？',
        'Answer':['表现的比较主动、游刃有余','表现的比较低调']
    },
    {
        'question':'我做事情是 ？',
        'Answer':['系统化、标准化','灵活自由、随机应变']
    },
    {
        'question':'我善于？',
        'Answer':['关心、支持或照顾周围的人','整理思路或客观分析']
    },
    {
        'question':'我善于 ？',
        'Answer':['做到实处','整合思路']
    },
    {
        'question':'我的 ？',
        'Answer':['圈子不大，很固定','交际圈很广泛']
    },
    {
        'question':'我更倾向于？',
        'Answer':['随机应变，根据事情发生而做出反应','分清事情的轻重缓急，然后采取行动']
    },
    {
        'question':'我更倾向于？',
        'Answer':['待人随和','固执，说到就要做到']
    },
    {
        'question':'我倾向于？',
        'Answer':['直觉上知道他人所想','从阅读中寻找信息']
    },
    {
        'question':'我喜欢？',
        'Answer':['演讲','思考']
    },
    {
        'question':'我是？',
        'Answer':['一个有很多新点子的人','一个会确立常规做事方法的人']
    },
    {
        'question':'我是？',
        'Answer':['处事很灵活的人','一个只要认定就会始终做到底的人']
    },
    {
        'question':'我倾向于？',
        'Answer':['依靠直觉解决问题','按照计划完成目标是我的本能']
    },
];
var Oul = document.getElementById('quesBox');
var str = ``;
for(var i=0;i<dataArr.length;i++){
    var  cutT = dataArr[i];
    var index =i;
    var answerArr = dataArr[i].Answer;
    var str1 = '';
    for(var k=0;k<answerArr.length;k++){
      str1+='<li class="options-list">'+answerArr[k]+'</li>'
    }
    str +=`
        <li class="answerBox">
            <span class="answer-num">第${index+1}题/共${dataArr.length}题</span>
            
            <div class="system-box">
                <img src="./img/LOGO.png" alt="" class="xt-head">
                <div class="system-BG">
                    <p>${cutT.question}</p>
                </div>
            </div>
            
          <ol class="options-box" id="lch">
              ${str1}
          </ol>
           
            <div class="user-box-T">
                <img src="./img/mate-tx.png" alt="" class="gr-head">
                <span class="user"></span>
            </div>
        </li>`
}
Oul.innerHTML =str;
var oIndex =0;
var  list = Oul.getElementsByClassName("answerBox");

var start = document.getElementById("start");
var oOl = document.getElementById('lch');
var await =document.getElementById('await');
var user =document.getElementsByClassName("user-box-T");
var user2 =document.getElementsByClassName("user");
start.onclick =function () {
    list[oIndex].style.display = "block";
    this.style.display="none";
    oIndex++;
};
for (var i = 0; i < list.length; i++) {
      var Hcur =list[i];
      list[i].index = i;
    var  Hlist = Hcur.getElementsByClassName("options-list");
      for (var j = 0; j < Hlist.length; j++) {
         var CList =Hlist[j];
          Hlist[j].index = i;
          Hlist[j].index1 = j;

          CList.onclick=function () {
             clearTimeout(Timer);
             var answerOne = list[this.index].getElementsByClassName('user-box-T')[0];
             answerOne.style.display = 'flex';
             answerOne.getElementsByClassName('user')[0].innerText = this.innerText;
             this.className ="options-listNew";
             if(this.previousElementSibling){

                 this.previousElementSibling.onclick=null;
             }else {
                this.nextElementSibling.onclick =null;
             }
             toBottom();

                if(oIndex<32){
                    this.onclick =null;
                 var Timer =  setTimeout(function () {
                        list[oIndex].style.display="block";
                        oIndex++;
                        toBottom();

                 },1000)
                }else{
                    console.log(1);
                    await.style.display="block"
                }


         }
    }
}


