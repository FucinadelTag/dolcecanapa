<template lang="html">
    <section class="">
        <a>
            <i class="fas fa-shopping-cart"></i>&nbsp;Carrello <span  v-if="$store.getters['cart/getImporto']">{{formatMoney($store.getters['cart/getImporto'])}}</span>
        </a>
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';
import {formatMoney} from '~/tools/money_format.js'

const cartUrl = process.env.cartUrl;


export default {
    data: function () {
        return {
            //cart: this.$store.getters['cart/getCart'],
            formatMoney: formatMoney,
        }
    },
    computed: {
        // a computed getter
        getCartUrl: function () {
            let url = cartUrl + "/cart/vedi/" + this.$store.getters['cart/getCartId'];

            return url;

        }
    }
}
</script>

<style lang="css">
</style>
