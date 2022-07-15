let tiklaTopla = document.getElementById("butonTopla");
let tiklaCikar = document.getElementById("butonCikar");
let tiklaBol = document.getElementById("butonBol");
let tiklaCarp = document.getElementById("butonCarp");

tiklaTopla.addEventListener("click", toplama);
tiklaCikar.addEventListener("click", cikarma);
tiklaBol.addEventListener("click", bolme);
tiklaCarp.addEventListener("click", carpma);

function carpma() {
  let sayi1 = document.getElementById("toplas").value;
  let sayi2 = document.getElementById("cikars").value;

  let toplam = parseInt(sayi1) * parseInt(sayi2);

  let yazdir = (document.getElementById("sonuc").innerHTML = toplam);
  console.log(yazdir)
}

function bolme() {
  let sayi1 = document.getElementById("toplas").value;
  let sayi2 = document.getElementById("cikars").value;

  let toplam = parseInt(sayi1) / parseInt(sayi2);
  
  let yazdir = document.getElementById("sonuc").innerHTML = toplam;
}

function cikarma() {
  let sayi1 = document.getElementById("toplas").value;
  let sayi2 = document.getElementById("cikars").value;

  let toplam = parseInt(sayi1) - parseInt(sayi2);

  let yazdir = (document.getElementById("sonuc").innerHTML = toplam);
}

function toplama() {
  let sayi1 = document.getElementById("toplas").value;
  let sayi2 = document.getElementById("cikars").value;

  let toplam = parseInt(sayi1) + parseInt(sayi2);

  let yazdir = (document.getElementById("sonuc").innerHTML = toplam);
}
