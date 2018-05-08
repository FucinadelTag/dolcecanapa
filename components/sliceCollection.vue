<template lang="html">
    <section class="sliceLanding">

        <!-- <h3 class="title is-2 line_bottom" v-html="PrismicDom.RichText.asText(collection.primary.titolo_collezione)"></h3> -->
        <section class="prodotti">
            <div class="box" v-for="prodotto in getProdotti">
                <h2 class="title is-3 line_bottom" v-html="PrismicDom.RichText.asText(prodotto.data.titolo)"></h2>
                <div class="columns">
                    <div class="column is-one-third">
                        <img v-bind:src="prodotto.data.immagini[0].immagine.Quadrata.url" alt="" />
                    </div>
                    <div class="column">
                        <span class="leggero">Codice prodotto: </span><span class="leggero is-medium">{{prodotto.uid}}</span><span class="leggero"> | Prezzo di partenza: </span><span class="leggero prezzoOriginale">{{formatMoney(prodotto.data.prezzo)}}</span>
                        <br>
                        <span><strong>Offerta</strong>: </span><span class="prezzo">{{getPrezzoScontato(prodotto.data).offerta}}</span> <span class="sconto rosso">(Sconto del {{prodotto.data.percentuale_sconto}}%)</span>
                        <br>
                        <span class="leggero">Risparmi: {{getPrezzoScontato(prodotto.data).importoSconto}}</span> - <span class="dataFinePromo">Fino al 30 Maggio 2018</span>

                        <div class="callToAction">
                            <a href="#" class="button is-large" alt="Aggiungi al carrello"><i class="fas fa-cart-plus"></i>&nbsp;Aggiungi al carrello</a>
                        </div>
                        <div class="content box" v-html="PrismicDom.RichText.asHtml(prodotto.data.descrizione)"></div>

                    </div>
                </div>
            </div>
        </section>
    </section>

</template>

<script>
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import _ from 'lodash'

export default {
    props: ['collection', 'indice'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            prodottiArray: this.$store.getters['landing/getProdotti'],
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
        }
    },
    computed: {
        // a computed getter
        getProdotti: function () {
            let prodotti = this.prodottiArray[this.indice];

            if (prodotti[this.indice] !== null){

                return prodotti[this.indice];
            } else {
                return false
            }
        }

    },
}
</script>

<style lang="scss">
.sliceLanding {
    .leggero {
      color: $dark-gray;
      font-size: 0.9rem;
    }
    .prezzoOriginale {
        text-decoration: line-through;
    }

    .prezzo {
        font-size: 2rem;
        color: #ff2424;
        padding: 0.3125rem;
        font-weight: bold;
    }
    .sconto {
        font-size: 1.3rem;
        font-weight: 700;
        font-style: italic;
    }
}


</style>
