const mosha = 25;

console.log("mosha: ", mosha);

// mosha = 26; Kjo variabel e deklaurar me const nuk mund te ndryshohet ne vijim shkaku qe e kemi deklaru me constante

// console.log("mosha e re: ", mosha);
var gjinia = "Mashkull";

let emri = "Filan";

console.log("emri: ", emri);

emri = "Fisteku";

console.log("emri i ri: ", emri);

let stringVar = "String Variabel"; // kjo eshte nje variable string

console.log("tipi i stringVar:", typeof stringVar);

let intVar = 23; //kjo eshte nje variabel qe eshte e deklaruar me vlere Intergjere ose te plote

console.log(typeof intVar, "tipi i intVar");

let objVar = {
  emri: "Filan",
  mbiemri: "Fisteku",
  isActive: true,
  mosha: 35,
  shkollimi: {
    fillor: "Klasa 9",
    mesem: "Gjimnaz",
    fakultet: "Shkenca Kompjuterike",
  },
  punesimi: ["CH", "SPEEEX", "Frakton"],
};

console.log(objVar.shkollimi.fakultet);

console.log("tipi i objVar: ", typeof objVar);

let arrVar = [1, 2, 3, 4];

console.log("tipi i arrVar: ", typeof arrVar);

let objArrVar = [
  {
    emri: "Filan",
    mbiemri: "Fisteku",
    isActive: true,
    mosha: 35,
    shkollimi: {
      fillor: "Klasa 9",
      mesem: "Gjimnaz",
      fakultet: "Shkenca Kompjuterike",
    },
    punesimi: ["CH", "SPEEEX", "Frakton"],
  },
  {
    emri: "Filan1",
    mbiemri: "Fisteku",
    isActive: true,
    mosha: 35,
    shkollimi: {
      fillor: "Klasa 9",
      mesem: "Gjimnaz",
      fakultet: "Shkenca Kompjuterike",
    },
    punesimi: ["CH", "SPEEEX", "Frakton"],
  },
  {
    emri: "Filan2",
    mbiemri: "Fisteku",
    isActive: true,
    mosha: 35,
    shkollimi: {
      fillor: "Klasa 9",
      mesem: "Gjimnaz",
      fakultet: "Shkenca Kompjuterike",
    },
    punesimi: ["CH", "SPEEEX", "Frakton"],
  },
];

console.log(objArrVar[0].emri);

//Deklarimi i Funksioneve

function shfaqKonzolen(emri) {
  console.log(`Emri: ${emri}`);
}

shfaqKonzolen(objVar.mbiemri);

//Kushtet if/else

let kushti = 10;

if (kushti >= 10) {
  console.log("Numri eshte me i madh se 10");
} else if (kushti <= 9 && kushti >= 9) {
  console.log("Numri eshte me i vogel se 10");
} else if (kushti >= 0) {
  console.log("Numri eshte Negativ");
} else {
  console.log("Nuk eshte nje numer");
}

if (kushti >= 10) {
  console.log("Numri eshte me i madh se 10");
}
if (kushti === 10) {
  console.log("Numri eshte 10");
}

let switchCaseVar = 3;

let switchNumber;

switch (switchCaseVar) {
  case (switchNumber = 1):
    console.log("Numri eshte 1");
    break;
  case (switchNumber = 2):
    console.log("Numri eshte 2");
    break;
  case (switchNumber = 3):
    console.log("Numri eshte 3");
    break;
  default:
    console.log("Nuk eshte nje numer");
}

function shikoUserLevel() {
  let selectedOption = parseInt(document.getElementById("user_level").value);
  let niveliZgjedhur = document.getElementById("rezultati");
  console.log("selectedOption: ", selectedOption);

  switch (selectedOption) {
    case 1:
      niveliZgjedhur.textContent = "Niveli i Zgjedhur eshte 1";
      break;
    case 2:
      niveliZgjedhur.textContent = "Niveli i Zgjedhur eshte 2";
      break;
    case 3:
      niveliZgjedhur.textContent = "Niveli i Zgjedhur eshte 3";
      break;
    case 4:
      niveliZgjedhur.textContent = "Niveli i Zgjedhur eshte 4";
      break;
    default:
      niveliZgjedhur.textContent = "Nuk eshte zgjedhur asnje Nivel";
  }
}

function ndryshoTekstin() {
  let teksti = document.getElementById("teksti");
  teksti.innerHTML = "Teksti i Ndryshuar";
}

let mapVar = [
  { emri: "Filan", mbiemri: "Fisteku", mosha: 25 },
  { emri: "Filan", mbiemri: "Fisteku", mosha: 25 },
  { emri: "Filan", mbiemri: "Fisteku", mosha: 25 },
];

let mappedVar = mapVar.map(function (element, index) {
  return `Pozita e Emrit: ${index + 1}: ` + element.emri;
});

console.log("mappedVar: ", mappedVar);

// let num = 1;

let str = "";

for (let i = 1; i <= 9; i++) {
  str = str + i;
}

console.log("for Function: ", str);

let muaji = 1;
// debugger;
let checkedMonth = "";

if (muaji === 2) {
  checkedMonth = 28;
} else if (muaji === 1) {
  checkedMonth = 30;
} else {
  checkedMonth = 31;
}
let num = "";
for (let i = 1; i <= checkedMonth; i++) {
  num = num + i;
}

console.log("checkedMonth", checkedMonth);

console.log("Ditet e muajit: ", num);

let filterMap = [
  { href: "#", name: "Home", isExternal: true, link: "index.html" },
  { href: "#", name: "About", isExternal: true, link: "index.html" },
  { href: "#", name: "Contact", isExternal: false, link: "index.html" },
  { href: "#", name: "Team", isExternal: true, link: "http://google.com" },
  { href: "#", name: "History", isExternal: false, link: "index.html" },
  { href: "#", name: "Project", isExternal: true, link: "index.html" },
];

let filteredMapVar = filterMap
  .filter((item) => item.link.startsWith("http"))
  .map(function (item, index) {
    return item.href;
  });
let slicedMapVar = filterMap.slice(0, 2).map(function (item, index) {
  return item;
});
console.log("Filter: ", filteredMapVar);

console.log("Sliced: ", slicedMapVar);

<ul>
  {filterMap.map((item, index) => (
    <li>
      <a href={item.href}>{item.name}</a>
    </li>
  ))}
</ul>;
