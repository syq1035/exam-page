
let score=0;
//填空题计分函数
function filltest(id ,answer) {
    if(document.getElementById(id).value==answer ){
        score += 5;
    }
}
//单选题、判断题计分函数
function radio(id ,answer) {
    let select = document.getElementsByName(id);
    for(let i=0;i<select.length;i++){
        if(select[i].checked){
            if(select[i].value==answer){
                score += 10;
            }
        }
    }
}
// 多选题计分函数
function checkbox(id ,answer) {
    let arr=[];
    let select = document.getElementsByName(id);
    for(let i=0;i<select.length;i++){
        if(select[i].checked){
            arr.push(select[i].value);
        }
    }
    if(arr.join("")== answer){
        score += 10;
    }
}
//简答题计分函数
function shortAnswer(id,answer) {
    if(document.getElementById(id).value==answer){
        score+=20;
    }
}
let btn=document.getElementById("btnsubmit");
btn.addEventListener("click",function (e){
    e.preventDefault();
    //填空题计分
    let fillTestAnswer={fillTestOne:"统一建模语言" ,fillTestTwo:"封装性" ,fillTestThree:"继承性" ,fillTestFour:"多态性"};
    for(let id in fillTestAnswer){
        filltest(id,fillTestAnswer[id]);
    }
    //选择题计分
    let radioAnswer={ radioTestOne:"B",radioTestTwo:"A"};
    for(let id in radioAnswer){
        radio(id,radioAnswer[id]);
    }
    //多选题计分
    let checkboxAnswer={checkboxTestOne:"ABD",checkboxTestTwo:"ABC"};
    for(let id in checkboxAnswer){
        checkbox(id,checkboxAnswer[id]);
    }
    //判断题计分
    let judgeAnswer={judgeTestOne:"flase" ,judgeTestTwo:"true"};
    for(let id in judgeAnswer){
        radio(id,judgeAnswer[id]);
    }
    //简答题计分
    let shorAnswerAnswer={shortAnswerTest:"模型是对现实世界的简化和抽象"};
    for(let id in shorAnswerAnswer){
        shortAnswer(id,shorAnswerAnswer[id]);
    }
    document.getElementById("score").innerHTML=score;
});
