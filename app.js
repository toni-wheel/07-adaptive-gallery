const cards = Array.from(document.querySelectorAll("#card")); // Создаем массив из коллекции
const picture = Array.from(document.querySelectorAll("#picture"));
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupBtnLeft = document.querySelector("#popup_btn_left");
const popupBtnRight = document.querySelector("#popup_btn_right");
const popupClose = document.querySelector("#popup_close");

let cardIndex = -1;
let pictureFull;

console.log(cards.length);

for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    console.log(cardIndex);
    popup.classList.add("active");
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    popupContainer.append(pictureFull);
  });
}

popupBtnRight.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("right");
});

popupBtnLeft.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("left");
});

function changePicture(dir) {
  if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  } else if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
  }
  console.log(cardIndex);
  newPictureFull = picture[cardIndex].cloneNode();
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
}

popupClose.addEventListener("click", (event) => {
  popup.classList.remove("active");
  pictureFull.remove();
});
