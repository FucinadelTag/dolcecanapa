<template lang="html">
    <section class="sliceLanding">

        <!-- <h3 class="title is-2 line_bottom" v-html="PrismicDom.RichText.asText(collection.primary.titolo_collezione)"></h3> -->
        <section class="prodotti">
            <div class="box" v-for="(prodotto, key, index) in getProdotti">
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
                        <div class="spazio_bianco"></div>
                        <table class="table is-bordered is-striped">
                            <tbody>
                                <tr v-if="prodotto.data.tipo_di_canapa.length > 0 && prodotto.data.tipo_di_canapa[0].text.length > 0">
                                    <td style="width: 200px;">
                                        <i>Tipo di canapa</i>
                                    </td>
                                    <th>
                                        <span v-html="PrismicDom.RichText.asText(prodotto.data.tipo_di_canapa)"></span>
                                    </th>
                                </tr>

                                <tr v-if="prodotto.data.percentuale_thc.length > 0 && prodotto.data.percentuale_thc[0].text.length > 0">
                                    <td>
                                        <i>Percentuale di THC</i>
                                    </td>
                                    <th>
                                        <span v-html="PrismicDom.RichText.asText(prodotto.data.percentuale_thc)"></span>
                                    </th>
                                </tr>
                                <tr v-if="prodotto.data.percentuale_cbd.length > 0 && prodotto.data.percentuale_cbd[0].text.length > 0">
                                    <td>
                                        <i>Percentuale di CBD</i>
                                    </td>
                                    <th>
                                        <span v-html="PrismicDom.RichText.asText(prodotto.data.percentuale_cbd)"></span>
                                    </th>
                                </tr>
                                <tr v-if="prodotto.data.quantita_contenuto.length > 0 && prodotto.data.quantita_contenuto[0].text.length > 0">
                                    <td>
                                        <i>Quantita</i>
                                    </td>
                                    <th>
                                        <span v-html="PrismicDom.RichText.asText(prodotto.data.quantita_contenuto)"></span>
                                    </th>
                                </tr>

                            </tbody>

                            <!-- <div v-if="prodotto.data.tipo_di_canapa.length > 0 && prodotto.data.tipo_di_canapa[0].text.length > 0" >
                                Tipo di canapa: <span v-html="PrismicDom.RichText.asText(prodotto.data.tipo_di_canapa)"></span>
                            </div>
                            <div v-if="prodotto.data.percentuale_thc.length > 0 && prodotto.data.percentuale_thc[0].text.length > 0" >
                                Percentuale di THC: <span v-html="PrismicDom.RichText.asText(prodotto.data.percentuale_thc)"></span>
                            </div>
                            <div v-if="prodotto.data.percentuale_cbd.length > 0 && prodotto.data.percentuale_cbd[0].text.length > 0" >
                                Percentuale di CBD: <span v-html="PrismicDom.RichText.asText(prodotto.data.percentuale_cbd)"></span>
                            </div>
                            <div v-if="prodotto.data.quantita_contenuto.length > 0 && prodotto.data.quantita_contenuto[0].text.length > 0" >
                                Quantita: <span v-html="PrismicDom.RichText.asText(prodotto.data.quantita_contenuto)"></span>
                            </div> -->
                        </table>

                        <div class="spazio_bianco"></div>



                            <!-- <div v-bind:ref="prodotto.id" class="modal" v-bind:class="{ 'is-active': showModal}">
                                <div class="modal-background"></div>
                                <div class="modal-card">
                                    <header class="modal-card-head">
                                        <p class="modal-card-title">Modal title</p>
                                        <button class="delete" v-on:click="closeModal" aria-label="close"></button>
                                    </header>
                                    <section class="modal-card-body">
                                        <div class="content" v-html="PrismicDom.RichText.asHtml(prodotto.data.descrizione)"></div>
                                    </section>
                                </div>

                            </div>
                            <p>
                                <button class="button" v-bind:prodottoId="prodotto.id" v-on:click="openModal">Show</button>
                            </p> -->

                            <div class="content box" v-html="PrismicDom.RichText.asHtml(prodotto.data.descrizione_breve)"></div>
                            <descrizioneProdotto v-if="prodotto.data.descrizione.length > 0 && prodotto.data.descrizione[0].text.length > 0"  v-bind:prodotto="prodotto"/>






                    </div>
                </div>

                <!-- <h3 class="title is-4 line_bottom">Descrizione</h3>
                <div class="columns is-centered">
                    <div class="column is-four-fifths">

                        <div class="content" v-html="PrismicDom.RichText.asHtml(prodotto.data.descrizione)"></div>
                    </div>

                </div> -->


            </div>
        </section>
    </section>

</template>

<script>
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import descrizioneProdotto from '~/components/descrizioneProdotto.vue'
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
    components: {
        descrizioneProdotto,
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

    }
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
