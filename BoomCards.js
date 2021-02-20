let cardsLeft = parseInt(document.querySelector("span.playCards").innerText);;
do {
  await new Promise((resolve) => {
    for (let i = 0; i < cardsLeft; i++) {
      setTimeout(() => {
        a = document.querySelector("#play-surrender");
        a.click();
        setTimeout(() => {
          b = document.querySelector("body > div > div.backdrop.visible.active > div > div > div.popup-buttons > button.button.button-positive");
          b.click();
          setTimeout(() => {
            c = document.querySelector("body > div > div.backdrop.visible.active > div > div > div.popup-buttons > button");
            c.click();
            cardsLeft = parseInt(document.querySelector("span.playCards").innerText);
            resolve();
          }, 1000);
        }, 1000);
      }, 1000);
    }
  });
} while (cardsLeft != 0)
score = parseInt(prompt("What score do you want?"));
document.querySelector("div.donePreviewDeckContent > h3").outerHTML = `<h3>End of Play</h3><br><p>You got ${score} correct!</p>`;
document.querySelector("div.donePreviewDeckContent > br:nth-child(5)").remove();
