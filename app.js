const english = ["boy", "name", "translate", "item", "car", "tree"];

const somali = ["wiil", "magac", "turjumid", "shay", "baabur", "geed"];

function genrateEgn() {
  let randomWordIndex = Math.floor(Math.random() * 6);
  document.getElementById("question-input").value = english[randomWordIndex];
  return english[randomWordIndex];
}

function genrateSom() {
  let randomWordIndex = Math.floor(Math.random() * 6);
  document.getElementById("question-input").value = somali[randomWordIndex];
  return somali[randomWordIndex];
}

function chooseLang() {
  let language = document.getElementById("choose-lang").value;
  if (language == "english") {
    let randomWordIndex = Math.floor(Math.random() * 6);
    document.getElementById("question-input").value = english[randomWordIndex];
    wordsChangetoEnglsih();
    return english[randomWordIndex];
  } else if (language == "somali") {
    let randomWordIndex = Math.floor(Math.random() * 6);
    document.getElementById("question-input").value = somali[randomWordIndex];
    wordsChangetoSomali();
    return somali[randomWordIndex];
  }
}

function checkAns() {
  let language = document.getElementById("choose-lang").value;
  if (language == "english") {
    let result = document.getElementById("result");
    // result.innerHTML = somali.some(checkInSomarray);
    if ((result.innerHTML = somali.some(checkInSomarray))) {
      document.getElementById("correct-incorrect").innerhtml = "Correct ✅";
      genrateEgn();
      document.getElementById("answer-input").value = "";
    } else {
      document.getElementById("correct-incorrect").innerhtml = "InCorrect ❌";
    }
  } else if (language == "somali") {
    let result = document.getElementById("result");
    // result.innerHTML = english.some(checkInEngarray);
    if ((result.innerHTML = english.some(checkInEngarray))) {
      document.getElementById("correct-incorrect").innerhtml = "Correct ✅";
      genrateSom();
      document.getElementById("answer-input").value = "";
    } else {
      document.getElementById("correct-incorrect").innerhtml = "InCorrect ❌";
    }
  }
}

function checkInSomarray(somali) {
  return somali == document.getElementById("answer-input").value;
}

function checkInEngarray(english) {
  return english == document.getElementById("answer-input").value;
}

function wordsChangetoSomali() {
  document.getElementById("header-title").innerHTML = "Dheel & Baro";
  document.getElementById("header-subtitle").innerHTML =
    "baro ereyo cusub luqad kale";
  document.getElementById("question-label").innerHTML =
    "Ubadal Eraygan Afsomali";
  document.getElementById("answer-label").innerHTML = "Gali Jawaabta";
}
function wordsChangetoEnglsih() {
  document.getElementById("header-title").innerHTML = "Learn And Play";
  document.getElementById("header-subtitle").innerHTML =
    "Learn new Words of another Language";
  document.getElementById("question-label").innerHTML = "Translate this word:";
  document.getElementById("answer-label").innerHTML = "Enter your answer:";
}

function reset() {
  document.getElementById("choose-lang").value = "";
  document.getElementById("question-input").value = "";
  document.getElementById("answer-input").value = "";
}

function forceLower(strInput) {
  return (strInput.value = strInput.value.toLowerCase());
}
