// // // const nadpis = document.querySelector("h1") //metoda query selector vyberie vzdy prvu najdenu zhodu (nemala by som mat 2 h1)

// // // nadpis.textContent = "Toto som zmenil pomocou javascriptu"

// // // const nadpis2 = document.querySelectorAll //dokáže pracovať s viacerými nájdenými elementami, ale ukladá sa do Nodelistu (poľa), budeme riešiť v ďalsích hodinách

// // // nadpis.style.color = "yellow"
// // // nadpis.style.backgroundColor = "red"  //inlinenový stylom sa snažíme vyhnúť a hodí sa pre testovacie účely

// // // nadpis.classList.add("ramecek")
// // // nadpis.classList.remove("ramecek")

// // // document.querySelector("#obrazek-kocka").src = "https://assets.marthastewart.com/styles/wmax-1500/d20/cat-kitten-138468381/cat-kitten-138468381_horiz.jpg"
// // // document.querySelector("#obrazek-kocka").style.width = "200px"
// // // document.querySelector("#obrazek-kocka").alt = "Krasna kocka"


// // // //ak zakladam v css elemnt pridavam cez .elemnt a ked pridavam ID tak ej to cez hashtag 

// // // //budeme primarne vyuzivat query selector

// // const produkty = document.querySelector("#produkty")
// // const produkt = {
// //     nazev: "talir",
// //     cena: 100,
// //     mena: "CZK",
// // }

// // produkty.innerHTML = `
// // <h2 class="ramecek">${produkt.nazev}</h2>
// // <p>Cena: ${produkt.cena} ${produkt.mena}</p>
// // `


// const produkty = document.querySelector("#produkty")
// const produkt = {
//     nazev: "talir",
//     cena: 100,
//     mena: "CZK",
// }

// produkty.innerHTML = `
// <h2 class="ramecek">${produkt.nazev}</h2>
// <p>Cena: ${produkt.cena} ${produkt.mena}</p>
// `

// produkty.classList.add("trida5")
// produkty.classList.remove("trida2")

// if(produkty.classList.contains("trida6")) {
//     produkty.classList.remove("trida6")
// } else {
//     produkty.classList.add("trida6")
// }

// produkty.classList.toggle("trida7")

// //produkty.className = "trida666 trida777"
