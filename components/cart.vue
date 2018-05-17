<template lang="html">
    <section v-if="cart" class="">
        <i class="fas fa-shopping-cart"></i>&nbsp;Carrello <span  v-if="$store.getters['cart/getImporto']">{{formatMoney($store.getters['cart/getImporto'])}}</span>
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'


export default {
    data: function () {
        return {
            cart: this.$store.getters['cart/getCart'],
            formatMoney: formatMoney
        }
    }
}
</script>

<style lang="css">
</style>
