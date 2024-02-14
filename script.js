var myAPI = `https://hp-api.onrender.com/api/characters`;

fetch(myAPI)
  .then((response) => response.json())
  .then((test) => {
    test.forEach((element) => {
      console.log(element);
    });
  });
function fetchCharacterData() {
  var characterName = document.getElementById("characterSearch").value.trim();
  fetch(myAPI)
    .then((response) => response.json())
    .then((data) => {
      var character = data.find(
        (c) => c.name.toLowerCase() === characterName.toLowerCase()
      );
      displayCharacterData(character);
    })
    .catch((error) => console.error("Fetching error:", error));
}
function displayCharacterData(character) {
  var characterInfoDiv = document.getElementById("characterInfo");
  if (character) {
    characterInfoDiv.innerHTML = `
        <div class="main_box">
            <p class="Navn">Navn: ${character.name}</p>
            <p class="Skuspiller">Skuspiller: ${character.actor}</p>
            <p class="Hus">Hus: ${character.house}</p>
            <p class="Kjønn">Kjønn: ${character.gender}</p>
            <p class="Fødselsdag">Fødselsdag: ${character.dateOfBirth}</p>
            <p class="Øyenfarge">Øyenfarge: ${character.eyeColour}</p>
            <p class="Hårfarge">Hårfarge: ${character.hairColour}</p>
            <img src="${character.image}" alt="${character.name}">
            </div> `;
  } else {
    characterInfoDiv.innerHTML = `<p>Karakteren du ga ble ikke funnet.</p>`;
  }
}

document
  .getElementById("characterSearch")
  .addEventListener("keypress", function () {
    fetchCharacterData();
  });
