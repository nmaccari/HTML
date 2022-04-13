const middle=document.querySelector("#middle");
const price=document.querySelector("#price");
let dblPrice=3.00;

document.querySelector("#btnLettuce").addEventListener('click', () => {
    // use "hider" instead of "this"
    let divLettuce=document.createElement("div");
    divLettuce.classList="bg-success size";
    middle.append(divLettuce);
    dblPrice+=.15;
    price.textContent=dblPrice.toFixed(2);
  });

  document.querySelector("#btnTomato").addEventListener('click', () => {
    // use "hider" instead of "this"
    let divTomato=document.createElement("div");
    divTomato.classList="bg-danger size";
    middle.append(divTomato);
    dblPrice+=.25;
    price.textContent=dblPrice.toFixed(2);
  });

  document.querySelector("#btnTurkey").addEventListener('click', () => {
    // use "hider" instead of "this"
    let divTurkey=document.createElement("div");
    divTurkey.classList="turkey size";
    middle.append(divTurkey);
    dblPrice+=1.00;
    price.textContent=dblPrice.toFixed(2);
  });

