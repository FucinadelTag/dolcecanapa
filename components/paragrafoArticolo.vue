<template lang="html">
    <div class="paragrafoArticolo">
        <h2 v-bind:id="getSlug" class="subtitle is-3" v-if="hasTitolo" v-html="PrismicDom.RichText.asText(paragrafo.primary.titolo)"/>


        <div v-if="paragrafo.primary.posizione_immagine == 'Destra'">
            <div class="columns">
                <div class="column">
                    <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
                <div class="column" itemscope itemtype="https://schema.org/ImageObject">
                    <img itemprop="image"  v-bind:src="paragrafo.primary.immagine.Quadrata.url" v-bind:alt="paragrafo.primary.alt_immagine" />
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sinistra'">
            <div class="columns">
                <div class="column" itemscope itemtype="https://schema.org/ImageObject">
                    <img itemprop="image" v-bind:src="paragrafo.primary.immagine.Quadrata.url" v-bind:alt="paragrafo.primary.alt_immagine" />
                </div>
                <div class="column">
                    <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sopra'">
            <figure itemscope itemtype="https://schema.org/ImageObject">
                <img itemprop="image" v-bind:src="paragrafo.primary.immagine.url" v-bind:alt="paragrafo.primary.alt_immagine" />
            </figure>

            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'No_Immagine'">
            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>


        <div v-if="paragrafo.primary.posizione_immagine == 'Sotto'">
            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
            <figure itemscope itemtype="https://schema.org/ImageObject">
                <img itemprop="image" v-bind:src="paragrafo.primary.immagine.url" v-bind:alt="paragrafo.primary.alt_immagine" />
            </figure>
        </div>

    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import slugify from 'slugify'

export default {
    props: ['paragrafo', 'indice'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            callToActions: this.$store.getters['articoli/getArticoliCallToActions'],
        }
    },
    computed: {
        // a computed getter
        callToActionsParagrafo: function () {
            let callToActionsArray = this.callToActions[this.indice];
            if (callToActionsArray[0] !== null){
                return this.callToActions[this.indice];
            } else {
                return false
            }
        },
        hasTitolo: function (){
            if (this.paragrafo.primary.titolo =='' || !this.paragrafo.primary.titolo) {
                return false
            }
            return true
        },
        getSlug: function () {

            var slug = this.indice;

            if (this.paragrafo.primary.titolo !='') {
                 slug = slugify(PrismicDom.RichText.asText(this.paragrafo.primary.titolo), {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@?]/g,
                    lower: true
                })
            }

            return slug;
        }
    }
}
</script>

<style lang="scss">

.paragrafoArticolo {
    img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        //padding: 0.4rem;
        //border: 1px solid;
        //border-color: $grey-ligh;
    }

    .subtitle {
        font-weight: 700;
        font-size: 2.1rem;
    }
}

</style>
