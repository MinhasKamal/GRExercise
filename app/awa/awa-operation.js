function cut(object) {
    $(object).focus();
    document.execCommand('cut');
}
function paste(object) {
    $(object).focus();
    if(navigator.clipboard.readText) {
        navigator.clipboard.readText()
            .then(txt => {
                document.execCommand('insertText', false , txt);
            }).catch(err => {
                console.error("failed to read clipboard: ", err);
            });
    } else {
        document.execCommand('paste');
    }
}
function undo(object) {
    $(object).focus();
    document.execCommand('undo');
}
function redo(object) {
    $(object).focus();
    document.execCommand('redo');
}

var isRestrictionOn = true;
function toggleRestriction() {
    if (isRestrictionOn) {
        setSpellCheckAttribute(".awa-essay", true);
        setReadOnlyAttribute(".awa-question", false);
        setReadOnlyAttribute(".awa-description", false);

        isRestrictionOn = false;
        return 'Off';
    } else {
        setSpellCheckAttribute(".awa-essay", false);
        setReadOnlyAttribute(".awa-question", true);
        setReadOnlyAttribute(".awa-description", true);

        isRestrictionOn = true;
        return 'On';
    } 
}

function setSpellCheckAttribute(object, attribute) {
    $(object)
        .attr("spellcheck", attribute)
        .focus()
        .blur();
}
function setReadOnlyAttribute(object, attribute) {
    $(object).attr("readOnly", attribute);
    if (attribute) {
        $(object).addClass( "unselectable");
    } else {
        $(object).removeClass( "unselectable");
    }
}

function downloadEssay() {
    var question = $(".awa-question").val();
    var description = $(".awa-description").val();
    var essay = $(".awa-essay").val();

    var filename = "GRExercise_" + subHeaderTitle.value + "(" + question.substring(0, 25) +
            "...)_" + new Date().toLocaleString() + ".txt";

    var data = "Prompt-\n\n" + question + "\n" + description +
            "\n\nAnswer- [" + countWords(essay) + "]\n\n" + essay;

    download(filename, data);
}

function download(filename, data) {
    var blob = new Blob([data], {type: 'text/plain'});
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var element = window.document.createElement('a');
        element.href = window.URL.createObjectURL(blob);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        window.URL.revokeObjectURL(element.href);
    }
}

function countWords(text){
    return text.length ? text.split(/\s+\b/).length : 0;
}