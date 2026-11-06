import { items } from "./items.js";

const storageSlots = document.querySelectorAll(
  ".backpack-storage-slots li"
);

const hotbarSlots = Array.from(document.querySelectorAll(
  ".backpack-container li"
));

const nextButton = document.querySelector(".backpack-next");

const selected = [];

const params = new URLSearchParams(window.location.search);
const island = params.get("island");

const islandTitle = document.querySelector(".island-title");

if (island) {
  islandTitle.textContent = island;

  if (island === "Hollikas") {
    window.location.href = "hollikas.html"
  }
    if (island === "Hawai") {
    window.location.href = "hawaii.html"
  }
      if (island === "saaremaa") {
    window.location.href = "saaremaa.html"
  }
   if (island === "Kaleidoskoop") {
    window.location.href = "kaleidoskoop.html"
  }
}

function determineEnding(selectedIds) {
  function hasItem(itemId) {
    return selectedIds.includes(itemId);
  }

  if (island === "Hollikas") {
    window.location.href = "hollikas.html"
  }
    if (island === "Hawai") {
    window.location.href = "hawaii.html"
  }
      if (island === "saaremaa") {
    window.location.href = "saaremaa.html"
  }

   if (island === "Kaleidoskoop") {
    window.location.href = "kaleidoskoop.html"
  }

  if (island === "Juustusaar") {
    if (hasItem("spacesuit") && hasItem("fuel-can") ) {
      window.location.href = "juustusaar-koju.html"
    } else if (hasItem("spacesuit")) {
      window.location.href = "juustusaar-kosmos.html"
    } else {
      window.location.href = "juustusaar-surm.html"
    }
  }

  if (island === "Paradiisisaar") {
    if (hasItem("water-filter") && hasItem("hammock") ) {
      window.location.href = "paradiisisaar_alive.html"
    } else {
      window.location.href = "paradiisisaar_dead.html"
    }
  }

}

function getSelectedIds() {
  return selected.map(item => item.id);
}

function changeTable(item, button, storageSlot) {
  const index = selected.indexOf(item);

  if (index >= 0) {
    // Return the item to its original storage slot.
    selected.splice(index, 1);
    storageSlot.append(button);
  } else if (selected.length < hotbarSlots.length) {
    // Move the item into the first empty hotbar slot.
    const emptySlot = hotbarSlots.find(slot => slot.children.length === 0);
    selected.push(item);
    emptySlot.append(button);
  } else {
    return;
  }

  if (selected.length === hotbarSlots.length) {
    nextButton.style.visibility = 'visible';
  } else {
    nextButton.style.visibility = 'hidden';
  }
}

items.forEach((item, index) => {
  const slot = storageSlots[index];
  if (!slot) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "backpack-item";

  const image = document.createElement("img");
  image.src = item.image;

  const label = document.createElement("span");
  label.className = "backpack-item-name";
  label.textContent = item.name;

  button.append(image, label);
  slot.append(button);

  button.addEventListener("click", () => {
    changeTable(item, button, slot);
  });
});

nextButton.style.visibility = 'hidden';

nextButton.addEventListener("click", () => {
 // const params = new URLSearchParams({
 //   items: getSelectedIds().join(",")
 // });

  determineEnding(getSelectedIds());
  //window.location.href = "test.html?" + params;
});
