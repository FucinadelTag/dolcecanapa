<template lang="html">
    <section>
        Carrello
    </section>

</template>

<script>
import uuidv1 from 'uuid/v1';
import axios from 'axios';



export default {
    data: function () {
        return {
            cart: false
        }
    },
    created: function () {

        axios.get('http://localhost:3000/api/getCart/123')
        .then(response => this.cart = response.cart)
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style lang="css">
</style>
