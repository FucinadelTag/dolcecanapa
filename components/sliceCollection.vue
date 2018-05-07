<template lang="html">
    <div class="sliceLanding box">

        <h3 class="title is-2 line_bottom" v-html="PrismicDom.RichText.asText(collection.primary.titolo_collezione)"></h3>
        <div class="columns is-5 is-variable is-multiline">
            <div class="column is-half" v-for="prodotto in getProdotti">
                <div class="title is-5" v-html="PrismicDom.RichText.asText(prodotto.data.titolo)"></div>
            </div>
        </div>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'
import _ from 'lodash'

export default {
    props: ['collection', 'indice'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            prodottiArray: this.$store.getters['landing/getProdotti'],
        }
    },
    computed: {
        // a computed getter
        getProdotti: function () {
            let prodotti = this.prodottiArray[this.indice];
            console.log(prodotti[this.indice]);
            if (prodotti[this.indice] !== null){
                return prodotti[this.indice];
            } else {
                return false
            }
        },
    },
}
</script>

<style lang="scss">



</style>
