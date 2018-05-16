<template lang="html">
    <section v-if="cart" class="">
        <i class="fas fa-shopping-cart"></i>&nbsp;Carrello
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';



export default {
    data: function () {
        return {
            cart: this.$store.getters['cart/getCart'],
        }
    }
}
</script>

<style lang="css">
</style>
