import currencyFormatter from 'currency-formatter'

const formatMoney = function (number) {

    let formattedMoney = currencyFormatter.format(number, { locale: 'it-IT' });

    return formattedMoney;

}

const getRowCartTotale = function (rowCart) {
    let percentualeSconto = Number (rowCart.percentuale_sconto);
    let quantita = Number (rowCart.quantita);
    let moltiplicatore = percentualeSconto/100;
    let importoSconto = rowCart.prezzo*moltiplicatore;
    let prezzoUnitario = rowCart.prezzo-importoSconto;

    let prezzoTotale = prezzoUnitario*quantita;

    return formatMoney (prezzoTotale);


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


export {formatMoney, getPrezzoScontato, getRowCartTotale};
