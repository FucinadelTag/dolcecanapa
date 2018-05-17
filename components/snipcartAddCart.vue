<template lang="html">
    <section>
        <span class="leggero">Codice prodotto: </span><span class="leggero is-medium">{{prodotto.uid}}</span><span class="leggero"> | Prezzo di partenza: </span><span class="leggero prezzoOriginale">{{formatMoney(prodotto.data.prezzo)}}</span>
        <br>
        <span><strong>Offerta</strong>: </span><span class="prezzo">{{getPrezzoScontato(prodotto.data).offertaFormatted}}</span> <span class="sconto rosso">(Sconto del {{prodotto.data.percentuale_sconto}}%)</span>
        <br>
        <span class="leggero">Risparmi: {{getPrezzoScontato(prodotto.data).importoSconto}}</span> - <span class="dataFinePromo">Fino al 30 Maggio 2018</span>

        <div class="callToAction">
            <a href="#"  v-on:click="addToCart()" class="button is-large snipcart-add-item"
                data-item-url="/"
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
                    <p class="modal-card-title">Prodotto aggiunto con successo</p>
                    <button class="delete" v-on:click="closeModal" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="content">Prodotto aggiunto con successo</div>
                </section>
            </div>
        </div>
    </section>


</template>

<script>
import PrismicDom from 'prismic-dom'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import axios from 'axios'


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
            showModal: false,
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
