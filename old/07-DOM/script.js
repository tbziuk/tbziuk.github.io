let imieUcznia = document.getElementsByClassName('uczen');
let mat = document.getElementsByClassName('matematyka');
let pol = document.getElementsByClassName('polski');
let biol = document.getElementsByClassName('biologia');
let geo = document.getElementsByClassName('geografia');
let fiz = document.getElementsByClassName('fizyka');
let chem = document.getElementsByClassName('chemia');
let inf = document.getElementsByClassName('informatyka');
let zajeciaDod = document.getElementsByClassName('zajecia-dodatkowe');
let srednia = document.getElementsByClassName('srednia');


const school = () => {
    
    for (i = 1; i < srednia.length; i++) {

        //zajecia-dodatkowe
        if (zajeciaDod[i].value.includes('matematyka') && mat[i].value < 6){
            mat[i].value = +mat[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('polski') && pol[i].value < 6){
            pol[i].value = +pol[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('biologia') && biol[i].value < 6){
            biol[i].value = +biol[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('geografia') && geo[i].value < 6){
            geo[i].value = +geo[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('fizyka') && fiz[i].value < 6){
            fiz[i].value = +fiz[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('chemia') && chem[i].value < 6){
            chem[i].value = +chem[i].value + 0.5;
        } if (zajeciaDod[i].value.includes('informatyka') && inf[i].value < 6){
            inf[i].value = +inf[i].value + 0.5;
        }


        //srednia
        let sredniaOcen;
        sredniaOcen = (+mat[i].value + +pol[i].value + +biol[i].value + +geo[i].value + +fiz[i].value + +chem[i].value + +inf[i].value)/7;
        
        srednia[i].value = sredniaOcen.toPrecision(3);
        srednia[i].innerHTML = srednia[i].value;
        

        //kolory

        if (srednia[i].value >= 4.75) {
            imieUcznia[i].classList.add('green');
        } else {
            imieUcznia[i].classList.remove('green');
        }


        if (mat[i].value == 1 || pol[i].value == 1 || biol[i].value == 1 || geo[i].value == 1 || fiz[i].value == 1 || chem[i].value == 1 || inf[i].value == 1) {
            imieUcznia[i].classList.add('red');
        } else {
            imieUcznia[i].classList.remove('red');
        }
    }

}

let btn = document.querySelector('button');
btn.addEventListener('click', school)



