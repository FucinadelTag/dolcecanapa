<template lang="html">

    <div>
        <section class="modal-card-body">

            <div class="item" v-for="(item, key, index) in $store.getters['cart/getCartItems']">
                <cartModalRow v-bind:item="item" />
            </div>

        </section>
    </div>

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
    }

}
</script>

<style lang="scss">
</style>
