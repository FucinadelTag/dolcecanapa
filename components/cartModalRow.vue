<template lang="html">
    <div class="columns">
        <div class="column is-three-fifths">
            {{item.nome}}
        </div>
        <div class="column">
            <input class="input" type="number" v-on:input="changeQuantity($event.target.value, item)" name="quantita" v-bind:value="item.quantita">
        </div>
        <div class="column">
            <strong>{{formatMoney(importo)}}</strong>
        </div>


    </div>

</template>

<script>
import {formatMoney, getPrezzoScontato} from '~/tools/money_format.js'

export default {
    props: ['item'],
    data: function () {
        return {
            formatMoney: formatMoney,
            getPrezzoScontato: getPrezzoScontato,
        }
    },
    computed: {
        // a computed getter
        importo: function () {
            let importo =  this.item.prezzo*this.item.quantita;

            return importo;

        },
        getLandingUrl: function () {
            let url = "https://www.dolcecanapa.it/landing/" + this.landing.uid;

            return url;

        }
    },
    methods: {
        changeQuantity: function (newQuantita, item) {
            console.log(newQuantita);
            console.log(item.quantita);
        }
    }

}
</script>

<style lang="scss">
</style>
