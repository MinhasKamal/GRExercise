
var vocabList = [];

function getVocab(index) {
    return vocabList[index];
}

function loadVocabList() {
    var filePath = "res/strings/vocab-71.txt";

    jQuery.get(filePath, function(data) {
        parseVocab(data);
    });
}

function parseVocab(vocabData) {
    var vocabListRaw = vocabData.split("---");
    vocabListRaw.forEach(vocabRaw => {
        var vocabElements = vocabRaw.trim().split("\n");
        var vocab = {};

        vocab.word = vocabElements[0];
        vocab.type = vocabElements[1];
        vocab.meaning = vocabElements[2];
        vocab.phrase = vocabElements[3];
        vocab.examples = vocabElements[4];
        vocab.synonymous = vocabElements[5];
        vocab.antonymous = vocabElements[6];
        vocab.mnemonics = vocabElements[7];
        vocab.note = vocabElements[8];

        vocabList.push(vocab);
    });
}