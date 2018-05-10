<template lang="html">
    <section>
        <span class="leggero">Codice prodotto: </span><span class="leggero is-medium">{{prodotto.uid}}</span><span class="leggero"> | Prezzo di partenza: </span><span class="leggero prezzoOriginale">{{formatMoney(prodotto.data.prezzo)}}</span>
        <br>
        <span><strong>Offerta</strong>: </span><span class="prezzo">{{getPrezzoScontato(prodotto.data).offertaFormatted}}</span> <span class="sconto rosso">(Sconto del {{prodotto.data.percentuale_sconto}}%)</span>
        <br>
        <span class="leggero">Risparmi: {{getPrezzoScontato(prodotto.data).importoSconto}}</span> - <span class="dataFinePromo">Fino al 30 Maggio 2018</span>

        <div class="callToAction">
            <a href="#" class="button is-large snipcart-add-item"
                data-item-url="/"
                v-bind:data-item-name="PrismicDom.RichText.asText(prodotto.data.titolo)"
                v-bind:data-item-price="getPrezzoScontato(prodotto.data).offerta"
                v-bind:data-item-id="prodotto.id">
                <i class="fa fa-cart-plus"></i> &nbsp;Aggiungi al carrello
            </a>
        </div>
    </section>


</template>

<script>
import PrismicDom from 'prismic-dom'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'


export default {
    props: ['prodotto'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
        }
    },
}
</script>

<style lang="css">
</style>
