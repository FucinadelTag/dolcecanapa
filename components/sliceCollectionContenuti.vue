<template lang="html">
    <section v-if="contenuti" class="box">
        <h3 class="title is-2 line_bottom" v-html="PrismicDom.RichText.asText(contenuti.collection_title)"></h3>
        <div class="columns is-5 is-variable is-multiline">
            <div class="column is-half" v-for="item in contenuti.paragrafo">
                <div class="title is-4" v-html="PrismicDom.RichText.asText(item.titolo)"></div>
                <div v-html="PrismicDom.RichText.asHtml(item.descrizione)"/>
            </div>
        </div>
    </section>
</template>

<script>
import {getDocumentById} from '~/tools/prismic.js'
import PrismicDom from 'prismic-dom'

export default {
    props: ['collectionContenuti'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            contenuti: false
        }
    },
    computed: {
        // a computed getter
        getCollectionData: function () {
            let id = this.collectionContenuti.primary.collection_contenuti.id;
            //console.log(this.collectionContenuti.primary.collection_contenuti.id);
            //getDocumentById (this.collectionContenuti.id);
            getDocumentById (id).then (
                function (val) {
                    console.log(val);
                    return val.items;
                }
            );
        }
    },
    created: function () {
        let id = this.collectionContenuti.primary.collection_contenuti.id;

        //console.log(this.collectionContenuti.primary.collection_contenuti.id);
        //getDocumentById (this.collectionContenuti.id);
        getDocumentById (id).then(response => this.contenuti = response.data);

    }
}
</script>

<style lang="css">
</style>
