function loadAWAQuestion(type){
    var dir;
    var count;
    if(type && type == "issue"){
        dir = "res/strings/ets-issue-pool/";
        count=150;
        subHeaderTitle.value="Issue";
    }else{
        dir = "res/strings/ets-argument-pool/";
        count=176;
        subHeaderTitle.value="Argument";
    }

    var questionNo = randomNumber(count);

    ShowQuestion(dir, questionNo.toString());
    ShowDescription(dir, questionNo.toString());
}

function randomNumber(count) {  
    return Math.floor(Math.random() * (count - 1)) + 1; 
}

function ShowQuestion(dir, questionNo){
    var fileName = questionNo.concat("q.txt");

    jQuery.get(dir.concat(fileName), function(data) {
        $(".awa-question").text(data);
    });
}
function ShowDescription(dir, questionNo){
    var fileName = questionNo.concat("d.txt");
    
    jQuery.get(dir.concat(fileName), function(data) {
        $(".awa-description").text(data);
    });
}
  