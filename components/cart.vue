<template lang="html">
    <section v-if="cart" class="">
        <i class="fas fa-shopping-cart"></i>&nbsp;Carrello <span></span>
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
    },
    // mounted () {
    //     let cartId = this.$session.get('cartId');
    //
    //     if (typeof cartId == 'undefined') {
    //         cartId = uuidv1();
    //         this.$session.set('cartId', cartId);
    //     }
    //
    //     axios.get('http://localhost:3000/api/getCart/' + cartId)
    //         .then(response => {
    //             this.cart = response.data.cart;
    //             this.$store.commit('cart/SET_CART', response.data.cart)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //
    // }

    // created: function () {
    //     axios.get('http://localhost:3000/api/getCart/123')
    //     .then(response => this.cart = response.cart)
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
}
</script>

<style lang="css">
</style>
