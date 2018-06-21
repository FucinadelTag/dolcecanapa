<template lang="html">
    <section class="">
        <a v-on:click="showModal">
            <i class="fas fa-shopping-cart"></i>&nbsp;Carrello <i><span class=""  v-if="$store.getters['cart/getImporto']">{{formatMoney($store.getters['cart/getImporto'])}}</span></i>
        </a>
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';
import {formatMoney} from '~/tools/money_format.js'



export default {
    data: function () {
        return {
            //cart: this.$store.getters['cart/getCart'],
            formatMoney: formatMoney,
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
