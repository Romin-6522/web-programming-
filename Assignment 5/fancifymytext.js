function bigger() {
    const information = document.getElementById("information");	
    information.style.fontSize = "24pt";
    alert("You pressed the Bigger button!");
}

function modifyStyles() {
    const information = document.getElementById("information");
    const fancy_input = document.querySelector("#fancy_input");
    const boring_input = document.querySelector("#boring_input");

    if (fancy_input.checked) {
        information.style.fontWeight = "bold";
        information.style.color = "blue";
        information.style.textDecoration = "underline";
        alert("You chose the FancyShmancy radio button!");
    }

    if (boring_input.checked) {
        information.style.fontWeight = "normal";
        information.style.color = "black";
        information.style.textDecoration = "none";
        alert("You chose the BoringBetty radio button!");
    }
}

function addMoo() {
    const information = document.getElementById("information");
    information.value = information.value.toUpperCase();
    var sentences = information.value.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    information.value = sentences.join(". ");
    if (information.value.charAt(information.value.length - 1) !== '.') {
        information.value += '.';
    }

    alert("You pressed the Moo button!");
}

function clearText() {
    document.getElementById("information").value = "";
    alert("Text cleared!");
}

function reverseText() {
    const textArea = document.getElementById("information");
    textArea.value = textArea.value.split('').reverse().join('');
    alert("Text reversed!");
}
