<template lang="html">
    <section class="cartButton">
        <div class="columns">
            <div class="column">
                <span class="leggero">Codice prodotto: </span><span class="leggero is-medium">{{prodotto.uid}}</span><span class="leggero">
                <br>
                <span><strong>Offerta</strong>: </span><span class="prezzo">{{getPrezzoScontato(prodotto.data).offertaFormatted}}</span> <span class="sconto rosso">(Sconto del {{prodotto.data.percentuale_sconto}}%)</span>
                <br>
                <span class="leggero">Prezzo di partenza: </span><span class="prezzoOriginale">{{formatMoney(prodotto.data.prezzo)}}</span> | Risparmi: {{getPrezzoScontato(prodotto.data).importoSconto}}</span> - <span class="small">Fino al <dataPromo /></span>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="callToAction has-text-centered">
                    <a href="#"  v-on:click="addToCart()" class="button is-large">
                        <i class="fa fa-cart-plus"></i> &nbsp;Aggiungi al carrello
                    </a>
                    <div class="numeroVerde">
                        <span  class="leggero">Oppure ordina al telefono</span><br>
                        <a href="tel:800180439" class="telefono" alt="800-180-439"> 800-180-439</a>
                    </div>


                </div>

            </div>
            <div class="column is-three-fifths">
                <div class="vantaggiBox">
                    <span class="vantaggio"><i class="fas fa-shipping-fast"></i>&nbsp;Spedizione gratuita in 24/48 ore</span><br>
                    <span class="vantaggio"><i class="far fa-money-bill-alt"></i>&nbsp;Pagamento alla consegna</span><br>
                    <span class="vantaggio"><i class="fas fa-gift"></i>&nbsp;Pacco anonimo</span>

                </div>

            </div>

        </div>

        <!-- <div class="columns">
            <div class="column">
                <div v-bind:ref="prodotto.id" class="modal" v-bind:class="{ 'is-active': showModal}">
                    <div class="modal-background" v-on:click="closeModal"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title"><i class="fas fa-shopping-cart"></i>&nbsp;Il tuo carrello! - {{formatMoney($store.getters['cart/getImporto'])}}</p>
                            <button class="delete" v-on:click="closeModal" aria-label="close"></button>
                        </header>

                            <cartModal/>

                        <footer class="modal-card-foot">
                            <button class="button" v-on:click="closeModal">Continua gli Acquisti</button>
                            <button class="button is-success">Vai Alla Cassa</button>
                        </footer>
                    </div>

                </div>
            </div>
        </div> -->
    </section>


</template>

<script>
import PrismicDom from 'prismic-dom'
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import axios from 'axios'
import dataPromo from '~/components/dataPromo.vue'

const cartUrl = process.env.cartUrl;


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
            let url = cartUrl + "/cart/vedi/" + this.$store.getters['cart/getCartId'];

            return url;

        },
        getLandingUrl: function () {
            let url = "https://www.dolcecanapa.it/landing/" + this.landing.uid;

            return url;

        }
    },
    methods: {
        addToCart: function () {
            let item = prepareItem (this.prodotto);

            const store = this.$store;
            var self = this;

            axios.post(cartUrl + '/api/addProduct/' + this.cart._id, {
                item: item,
                storeId: store.state.settings.uid,
            })
            .then(function (response) {
                store.commit('SET_SHOWCART', true)
                store.commit('cart/SET_CART', response.data.cartData)
                store.commit('cart/SET_IMPORTO', response.data.cartData.importo)
            })
            .catch(function (error) {
                console.log(error);
            });

            ga('send', {
                hitType: 'event',
                eventCategory: 'Cart',
                eventAction: 'add'
            });

        }
    }
}
</script>

<style lang="scss">
.cartButton {

    .vantaggiBox {
        padding: 1rem;
        margin-right: 0.9rem;
        margin-bottom: 0.9rem;
        background-color: $grey-ligh;

        .vantaggio {
            font-weight: 200;
            padding-top: 0.9rem;
        }
    }

    .numeroVerde {
        .telefono {
            font-size: 140%;
            color: $verde;

        }
    }
}
</style>
