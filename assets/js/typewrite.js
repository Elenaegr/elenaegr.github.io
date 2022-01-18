const carouselText = [
  { text: "¡Hola! " },
  { text: "Hi! " },
  { text: "Hejsån! " },
  { text: "Bonjour! " },
];

// $( document ).ready(async function() {
//     carousel(carouselText, "#sentence")
//   });

async function typeSentence(sentence, eleRef, delay = 120) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

carousel(carouselText, "#sentence")