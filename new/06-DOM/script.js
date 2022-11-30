let imiePracownika = document.getElementsByClassName('pracownik');
let czasPracy = document.getElementsByClassName('czas');
let stawka = document.getElementsByClassName('stawka');
let wyplata = document.getElementsByClassName('wyplata');

const policzWyplate = () => {
    for (let i = 0; i < stawka.length; i++){
        // stawka + premia
        if(czasPracy[i].value > 160) {
            let cash = (czasPracy[i].value - 160)* (stawka[i].value * 2) + (160 * stawka[i].value);
            wyplata[i].value = cash;
            wyplata[i].innerHTML = `${wyplata[i].value}`
        } else {
            let cash = czasPracy[i].value * stawka[i].value;
            wyplata[i].value = cash;
            wyplata[i].innerHTML = `${wyplata[i].value}`
        }

        // mniej niż 100h w pracy
        if (czasPracy[i].value < 100) {
            imiePracownika[i].classList.add('red')
        } else {
            imiePracownika[i].classList.remove('red')
        }
    }

    // sortowanie godzin
    let arrTabelaGodzin = Array.from(czasPracy);
    let sortedTabelaGodzin = arrTabelaGodzin.sort((a, b) => b.value - a.value);
    
    // przypisywanie nazwisk
    let pierwszy = sortedTabelaGodzin[0].parentElement.firstElementChild.textContent;
    let drugi = sortedTabelaGodzin[1].parentElement.firstElementChild.textContent;
    let trzeci = sortedTabelaGodzin[2].parentElement.firstElementChild.textContent;

    // tworzenie div#najlepsi-pracownicy
    let najlepsi = document.createElement('div');
    najlepsi.setAttribute('id', 'najlepsi-pracownicy');
    let pracownicy = document.getElementById('pracownicy');
    pracownicy.appendChild(najlepsi);

    document.getElementById('najlepsi-pracownicy').innerHTML = `<h3><span id="last">Najlepsi pracownicy:</span><ol><li>${pierwszy}</li><li>${drugi}</li><li>${trzeci}</li></ol></h3>`;

}

let btn = document.getElementById('oblicz');
btn.addEventListener('click', policzWyplate);