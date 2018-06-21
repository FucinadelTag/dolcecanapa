<template lang="html">
    <section class="cartModalCallToAction">
        <span class="totaleCart">Totale Carrello: <strong>{{formatMoney($store.getters['cart/getImporto'])}}</strong></span>

        <a v-bind:href="getCartUrl" v-if="hasItems" class="button is-link">
            <span class="icon">
                <i class="fas fa-shopping-cart"></i>
            </span>
            <span>Vai alla Cassa</span>
        </a>
    </section>

</template>

<script>
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
const cartUrl = process.env.cartUrl;

export default {
    data: function () {
        return {
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
            cart: this.$store.getters['cart/getCart']
        }
    },
    computed: {
        // a computed getter
        hasItems: function () {
            if (this.$store.getters['cart/getCartItems'].length > 0){
                return true;
            }

            return false;

        },
        getCartUrl: function () {
            let url = cartUrl + "/cart/vedi/" + this.$store.getters['cart/getCartId'];

            return url;

        }
    },

}
</script>

<style lang="scss">
.cartModalCallToAction {
    .totaleCart {
        padding-right: 1rem;
    }
}
</style>
