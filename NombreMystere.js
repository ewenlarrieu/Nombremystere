let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let essais = 0;
console.log(nombreAleatoire);

const input = document.getElementById("guess");
const button = document.getElementById("ok");
const message = document.getElementById("message");

function resetGame() {
  nombreAleatoire = Math.floor(Math.random() * 100) + 1;
  essais = 0;

  input.disabled = false;
  button.disabled = false;
  message.textContent = "Nouvelle partie ! Devine le nombre entre 1 et 100";
}

button.addEventListener("click", () => {
  const valeur = parseInt(input.value);
  input.value = "";
  if (isNaN(valeur) || valeur < 1 || valeur > 100) {
    message.textContent = "Entre un nombre valide entre 1 et 100.";
    return;
  }
  essais++;
  if (valeur === nombreAleatoire) {
    message.textContent = `Gagné ! `;
    const btn = document.createElement("button");
    btn.textContent = "Rejouer";
    btn.style.backgroundColor = "ffff6e";
    btn.style.border = "none";
    btn.style.width = "100%";
    btn.style.marginTop = "10px";

    btn.onclick = () => {
      resetGame();
      console.log(nombreAleatoire);
      btn.remove();
    };
    message.appendChild(btn);
    input.disabled = true;
    button.disabled = true;
  } else if (valeur > nombreAleatoire) {
    message.textContent = `Trop grand ! Essais numéro ${essais}`;
  } else {
    message.textContent = `Trop petit ! Essais numéro ${essais}`;
  }
});
