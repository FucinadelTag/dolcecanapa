<template lang="html">
    <section>
        <span class="leggero">Codice prodotto: </span><span class="leggero is-medium">{{prodotto.uid}}</span><span class="leggero">
        <br>
        <span><strong>Offerta</strong>: </span><span class="prezzo">{{getPrezzoScontato(prodotto.data).offertaFormatted}}</span> <span class="sconto rosso">(Sconto del {{prodotto.data.percentuale_sconto}}%)</span>
        <br>
        <span class="leggero">Prezzo di partenza: </span><span class="prezzoOriginale">{{formatMoney(prodotto.data.prezzo)}}</span> | Risparmi: {{getPrezzoScontato(prodotto.data).importoSconto}}</span> - <span class="small">Fino al <dataPromo /></span>

        <div class="callToAction">
            <a href="#"  v-on:click="addToCart()" class="button is-large snipcart-add-item"
                v-bind:data-item-url="getLandingUrl"
                v-bind:data-item-name="PrismicDom.RichText.asText(prodotto.data.titolo)"
                v-bind:data-item-price="getPrezzoScontato(prodotto.data).offerta"
                v-bind:data-item-id="prodotto.id">
                <i class="fa fa-cart-plus"></i> &nbsp;Aggiungi al carrello
            </a>
        </div>

        <div v-bind:ref="prodotto.id" class="modal" v-bind:class="{ 'is-active': showModal}">
            <div class="modal-background" v-on:click="closeModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title"><i class="fas fa-shopping-cart"></i>&nbsp;Prodotto aggiunto al carrello! - {{formatMoney($store.getters['cart/getImporto'])}}</p>
                    <button class="delete" v-on:click="closeModal" aria-label="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                    <span class="content title is-4">{{PrismicDom.RichText.asText(prodotto.data.titolo)}}</span><br> <span>è stato aggiunto al carrello!</span>
                </section>
                <footer class="modal-card-foot">
                    <a v-bind:href="getCartUrl" class="button is-warning"><i class="fas fa-arrow-right"></i>&nbsp;Vai Alla Cassa</a>
                    <button v-on:click="closeModal()" class="button"><i class="fas fa-arrow-down"></i>&nbsp;Continua gli acquisti</button>
                </footer>
            </div>
        </div>
    </section>


</template>

<script>
import PrismicDom from 'prismic-dom'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import axios from 'axios'
import dataPromo from '~/components/dataPromo.vue'


const prepareItem = function (prodotto){
    let item = {
        _id: prodotto.id,
        sku: prodotto.uid,
        nome: PrismicDom.RichText.asText(prodotto.data.titolo),
        prezzo: prodotto.data.prezzo,
        percentuale_sconto: prodotto.data.percentuale_sconto,
        descrizione: PrismicDom.RichText.asHtml(prodotto.data.descrizione_breve),
        immagine: prodotto.data.immagini[0].immagine.Quadrata.url,
    }

    return item;
}


export default {
    props: ['prodotto'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
            cart: this.$store.getters['cart/getCart'],
            landing: this.$store.getters['landing/getLanding'],
            showModal: false,
        }
    },
    components: {
        dataPromo
    },
    computed: {
        // a computed getter
        getCartUrl: function () {
            let url = "http://localhost:3000/cart/vedi/" + this.$store.getters['cart/getCartId'];

            return url;

        },
        getLandingUrl: function () {
            let url = "https://www.dolcecanapa.it/landing/" + this.landing.uid;

            return url;

        }
    },
    methods: {
        addToCart: function () {
            // let item = prepareItem (this.prodotto);
            //
            // const store = this.$store;
            // var self = this;
            //
            // axios.post('http://localhost:3000/api/addProduct/' + this.cart._id, {
            //     item: item,
            // })
            // .then(function (response) {
            //     self.showModal = true;
            //     console.log(self.showModal)
            //     store.commit('cart/SET_IMPORTO', response.data.importo);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });

        },
        closeModal: function () {
            this.showModal = false;
        }
    }
}
</script>

<style lang="css">
</style>
