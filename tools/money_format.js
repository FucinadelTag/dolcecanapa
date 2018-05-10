import currencyFormatter from 'currency-formatter'

const formatMoney = function (number) {

    let formattedMoney = currencyFormatter.format(number, { locale: 'it-IT' });

    return formattedMoney;

}

const getPrezzoScontato = function (datiProdotto) {
    let moltiplicatore = datiProdotto.percentuale_sconto/100;
    let importoSconto = datiProdotto.prezzo*moltiplicatore;
    let offerta = datiProdotto.prezzo-importoSconto;

    let formattedOfferta = formatMoney(offerta);
    let formattedImportoSconto = formatMoney (importoSconto);

    return {
        offerta: offerta,
        offertaFormatted: formattedOfferta,
        importoSconto: formattedImportoSconto
    }

}


export {formatMoney, getPrezzoScontato};
