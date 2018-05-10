<template lang="html">
    <div>

        <testata v-bind:testataStyle="testataStyle" v-bind:titolo="titolo"/>

        <section itemprop="articleBody"  class="section" v-for="(slice, key, index) in body" :key="id">

            <sliceLanding v-if="slice.slice_type == 'caratteristiche'"  v-bind:caratteristiche="slice" v-bind:indice="key" />

            <sliceCollection v-if="slice.slice_type == 'collection'"  v-bind:collection="slice" v-bind:indice="key" />

            <sliceCollectionContenuti v-if="slice.slice_type == 'collection_contenuti'"  v-bind:collectionContenuti="slice" v-bind:indice="key" />

            <sliceBanner v-if="slice.slice_type == 'banner'"  v-bind:banner="slice" v-bind:indice="key" />

            <sliceIncludes v-if="slice.slice_type == 'include'"  v-bind:include="slice" v-bind:indice="key" />

        </section>


        <!-- <h3 class="title is-2" itemprop="name headline" v-html="PrismicDom.RichText.asText(caratteristiche.primary.tipo_caratteristiche)"></h3>
        <div class="columns is-5 is-variable is-multiline">
            <div class="column is-half" v-for="item in caratteristiche.items">
                <div class="title is-4" v-html="PrismicDom.RichText.asText(item.nome_caratteristica)"></div>
                <div v-html="PrismicDom.RichText.asHtml(item.descrizione_caratteristica)"/>
            </div>

        </div> -->

    </div>

</template>

<script>
import testata from '~/components/testata.vue'
import sliceLanding from '~/components/sliceLanding.vue'
import sliceCollection from '~/components/sliceCollection.vue'
import sliceCollectionContenuti from '~/components/sliceCollectionContenuti.vue'
import sliceBanner from '~/components/sliceBanner.vue'
import sliceIncludes from '~/components/sliceIncludes.vue'
import PrismicDom from 'prismic-dom'

export default {
    middleware: 'getLandingPage',
    components: {
        testata,
        sliceLanding,
        sliceCollection,
        sliceCollectionContenuti,
        sliceBanner,
        sliceIncludes
    },
    data (context) {
        //console.log(this.$store);
        return {
            PrismicDom: PrismicDom,
            immagine_testata: this.$store.getters['landing/getImmagineTestata'],
            titolo: this.$store.getters['landing/getTitle'],
            id: this.$store.getters['landing/getId'],
            body: this.$store.getters['landing/getBody'],
            landing: this.$store.getters['landing/getLanding'],
            mainDescription: this.$store.getters.getDescription
        }
    },
    computed: {
        // a computed getter
        testataStyle: function () {
            let immagineUrl = this.immagine_testata.url;
            let styleString = `background: url(${immagineUrl}) center no-repeat; background-size: cover;`
            return styleString;
        }
    },
    head () {
        return {
            title:  this.landing.data.meta_title != null ? this.landing.data.meta_title : PrismicDom.RichText.asText(this.titolo),
            meta: [
                { hid: 'description', name: 'description', content: this.landing.data.meta_description != null ? this.landing.data.meta_description : this.mainDescription }
            ]
        }
    }
}
</script>

<style lang="scss">
</style>
