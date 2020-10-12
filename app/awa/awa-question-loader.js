function loadAWAQuestion(type) {
    var resPath;
    var questionCount;

    if (type && type == "issue") {
        resPath = "res/strings/ets-issue-pool/";
        questionCount = 150;
        subHeaderTitle.value = "Issue";
    } else {
        resPath = "res/strings/ets-argument-pool/";
        questionCount = 176;
        subHeaderTitle.value = "Argument";
    }

    var questionNo = randomNumber(questionCount);
    loadQuestion(resPath, questionNo.toString());
    loadDescription(resPath, questionNo.toString());
}

function randomNumber(questionCount) {
    return Math.floor(Math.random() * questionCount) + 1; 
}

function loadQuestion(resPath, questionNo) {
    var fileName = questionNo.concat("q.txt");

    jQuery.get(resPath.concat(fileName), function(data) {
        $(".awa-question").text(data);
    });
}

function loadDescription(resPath, questionNo) {
    var fileName = questionNo.concat("d.txt");

    jQuery.get(resPath.concat(fileName), function(data) {
        $(".awa-description").text(data);
    });
}
