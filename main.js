let trainerContentElement = document.querySelector(".trainer-content");

let contentText = trainerContentElement.innerText;
let currentSymbolIndex = 0;

trainerContentElement.innerText = "";

for (let i = 0; contentText.length > i; i++) {
  let symbol = contentText[i];
  let symbolElement = document.createElement("span");
  symbolElement.innerText = symbol;

  symbolElement.classList.add("symbol-" + i);
  symbolElement.dataset.symbol = symbol;

  if (i === currentSymbolIndex) {
    symbolElement.classList.add("border");
    symbolElement.classList.add("border-slate-300");
    symbolElement.classList.add("px-1");
  }

  trainerContentElement.appendChild(symbolElement);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    let kbdElements = document.querySelectorAll("kbd[data-key]");

    for (let i = 0; i < kbdElements.length; i++) {
      let element = kbdElements[i];

      if (element.dataset.key === "Shift") continue;

      element.innerText = element.dataset.key.toUpperCase();
      element.dataset.key = element.dataset.key.toUpperCase();
    }
  }

  let kbdElement = document.querySelector('kbd[data-key="' + event.key + '"]');

  kbdElement.classList.add("bg-white");
  kbdElement.classList.add("text-base-100");

  let currentSymbolElement = document.querySelector(
    ".symbol-" + currentSymbolIndex
  );
  let nextSymbolElement = document.querySelector(
    ".symbol-" + (currentSymbolIndex + 1)
  );

  if (currentSymbolElement.dataset.symbol === event.key) {
    currentSymbolElement.classList.remove("border");
    currentSymbolElement.classList.remove("border-slate-300");
    currentSymbolElement.classList.remove("px-1");

    currentSymbolElement.classList.add("text-white");

    nextSymbolElement.classList.add("border");
    nextSymbolElement.classList.add("border-slate-300");
    nextSymbolElement.classList.add("px-1");

    currentSymbolIndex++;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    let kbdElements = document.querySelectorAll("kbd[data-key]");

    for (let i = 0; i < kbdElements.length; i++) {
      let element = kbdElements[i];

      if (element.dataset.key === "Shift") continue;

      element.innerText = element.dataset.key.toLowerCase();
      element.dataset.key = element.dataset.key.toLowerCase();
    }
  }

  let kbdElement = document.querySelector('kbd[data-key="' + event.key + '"]');

  kbdElement.classList.remove("bg-white");
  kbdElement.classList.remove("text-base-100");
});
