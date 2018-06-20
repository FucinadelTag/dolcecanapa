<template lang="html">

    <div v-bind:ref="cart._id" class="modal" v-bind:class="{ 'is-active': $store.getters.getShowCart}">
        <div class="modal-background" v-on:click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><i class="fas fa-shopping-cart"></i>&nbsp;Il tuo carrello! - {{formatMoney($store.getters['cart/getImporto'])}}</p>
                <button class="delete" v-on:click="closeModal" aria-label="close"></button>
            </header>

            <section class="modal-card-body">

                <div class="item" v-for="(item, key, index) in $store.getters['cart/getCartItems']">
                    <cartModalRow v-bind:item="item" />
                </div>

            </section>

            <footer class="modal-card-foot">
                <button class="button" v-on:click="closeModal">Continua gli Acquisti</button>
                <button class="button is-success">Vai Alla Cassa</button>
            </footer>
        </div>

    </div>

    <!-- <div>
        <section class="modal-card-body">

            <div class="item" v-for="(item, key, index) in $store.getters['cart/getCartItems']">
                <cartModalRow v-bind:item="item" />
            </div>

        </section>
    </div> -->

</template>

<script>

import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import cartModalRow from '~/components/cartModalRow.vue'

export default {
    components: {
        cartModalRow,
    },

    data: function () {
        return {
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
            cart: this.$store.getters['cart/getCart'],
            items: this.$store.getters['cart/getCartItems'],
        }
    },
    methods: {
        closeModal: function () {
            this.$store.commit('SET_SHOWCART', false)
        }
    }

}
</script>

<style lang="scss">
</style>
