
// Question 1 :
console.log("Combien y a-t-il d'éléments <p> présents dans la page HTML ? ");
const element = document.getElementsByTagName("p");
console.log(element.length);

 // Question 2 : 
console.log("Quel est le contenu texte de l'élément portant l'id coucou ?");
const x = document.getElementById("coucou");
console.log(x);

//Question 3 :
console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
const url = document.getElementsByTagName("a")[2].href;
console.log(url);

// Question 4 :
console.log("Combien d'éléments portent la classe compte-moi ?");
const nameClass = document.getElementsByClassName("compte-moi");
console.log(nameClass.length);

// Question 5 :
console.log("Combien d'éléments <li> portent la classe compte-moi ? ");
const li = document.querySelectorAll('li.compte-moi').length;
console.log(li);

// Question 6 : 
console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi");
const lo = document.querySelectorAll("ol li.compte-moi").length;
console.log(lo);

// Question 7 :
//console.log("La page contient un seul élément <div>. Celui-ci contient 2 éléments 'unordered list' ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.");



