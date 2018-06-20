<template lang="html">
    <section class="">
        <a v-on:click="showModal">
            <i class="fas fa-shopping-cart"></i>&nbsp;Carrello <span  v-if="$store.getters['cart/getImporto']">{{formatMoney($store.getters['cart/getImporto'])}}</span>
        </a>

        <cartModal />
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';
import {formatMoney} from '~/tools/money_format.js'
import cartModal from '~/components/cartModal.vue'

const cartUrl = process.env.cartUrl;


export default {
    data: function () {
        return {
            //cart: this.$store.getters['cart/getCart'],
            formatMoney: formatMoney,
        }
    },
    components: {
        cartModal
    },
    computed: {
        // a computed getter
        getCartUrl: function () {
            let url = cartUrl + "/cart/vedi/" + this.$store.getters['cart/getCartId'];

            return url;

        }
    },
    methods: {
        showModal: function () {
            this.$store.commit('SET_SHOWCART', true)
        }
    }
}
</script>

<style lang="css">
</style>
