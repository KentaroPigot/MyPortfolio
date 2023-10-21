export const splitWords = (element) => {
  // Obtenir le texte de l'élément
  const texte = element.textContent;
  // console.log(texte);

  // Obtenir le parent de l'élément
  const parent = element.parentElement;

  // Vider le contenu de l'élément
  element.textContent = "";

  // Parcourir chaque caractère du texte
  for (let i = 0; i < texte.length; i++) {
    // Créer un élément span pour chaque caractère
    const span = document.createElement("span");
    span.textContent = texte[i];
    // console.log(span);
    if (span.textContent === " ") {
      span.classList.add("section--4_title_blankSpace");
    }
    span.classList.add("section--4_titleLetter");

    // Ajouter le span à l'élément h2
    element.appendChild(span);
  }

  // Ajouter l'élément h2 modifié au parent
  parent.appendChild(element);

  return;
};
