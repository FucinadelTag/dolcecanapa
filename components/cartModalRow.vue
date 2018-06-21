<template lang="html">
    <div class="columns">
        <div class="column is-three-fifths">
            {{item.nome}}
        </div>
        <div class="column">
            <input class="input" :disabled="isDisabled" type="number" v-on:change="changeQuantity($event.target.value, item)" name="quantita" v-bind:value="item.quantita">
        </div>
        <div class="column">
            <strong>{{formatMoney(importo)}}</strong>
        </div>


    </div>

</template>

<script>
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'
import axios from 'axios'

const cartUrl = process.env.cartUrl;

export default {
    props: ['item'],
    data: function () {
        return {
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
            isDisabled: false
        }
    },
    computed: {
        // a computed getter
        importo: function () {
            let importo =  this.item.prezzo*this.item.quantita;

            return importo;

        }
    },
    methods: {
        changeQuantity: function (newQuantita, item) {
            let oldQuantita = item.quantita;

            if (newQuantita == oldQuantita){
                return;
            }

            this.isDisabled = true;

            const store = this.$store;
            var self = this;



            axios.post(cartUrl + '/api/updateItem/', {
                itemId: item._id,
                cartId: item.related_document_id,
                newQuantita: newQuantita
            })
            .then(function (response) {
                self.isDisabled = false;
                //store.commit('SET_SHOWCART', true)
                store.commit('cart/SET_CART', response.data.cartData)
                store.commit('cart/SET_IMPORTO', response.data.cartData.importo)
            })
            .catch(function (error) {
                self.isDisabled = false;
                console.log(error);
            });

        }
    }

}
</script>

<style lang="scss">
</style>
