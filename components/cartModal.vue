<template lang="html">

    <div v-bind:ref="cart._id" class="modal cartModal" v-bind:class="{ 'is-active': $store.getters.getShowCart}">
        <div class="modal-background" v-on:click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <cartModalCallToAction />
            </header>

            <section class="modal-card-body" v-if="hasItems">

                <div v-for="(item, key, index) in $store.getters['cart/getCartItems']">
                    <cartModalRow v-bind:item="item" />
                    <div class="spazio_bianco">

                    </div>
                </div>

            </section>
            <section class="modal-card-body" v-else>

                <p class="title is-4">
                    Il tuo carrello è vuoto
                </p>

            </section>

                <footer class="modal-card-foot has-text-centered">
                    <cartModalCallToAction />
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
import cartModalCallToAction from '~/components/cartModalCallToAction.vue'


export default {
    components: {
        cartModalRow,
        cartModalCallToAction
    },

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
