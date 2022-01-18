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
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function carousel(carouselList, eleRef) {
  for (var i = 0; carouselList[i]; i++) {
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1000);
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

carousel(carouselText, "#sentence")