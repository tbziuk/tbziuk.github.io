$(document).ready(function() {

    let btn = $('#getData');
    btn.click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                console.log(data);

                let daneProgramisty = $('<div id="dane-programisty"></div>');
                let imie = $('<p></p>').text(`Imię: ${data.imie}`);
                let nazw = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let zawod = $('<p></p>').text(`Zawód: ${data.zawod}`);
                let firma = $('<p></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr>');

                daneProgramisty.append(imie);
                daneProgramisty.append(nazw);
                daneProgramisty.append(zawod);
                daneProgramisty.append(firma);
                daneProgramisty.append(hr);
                $('body').append(daneProgramisty);


            })
            .fail(function(error) {
                console.error(error);
            })
    });

});