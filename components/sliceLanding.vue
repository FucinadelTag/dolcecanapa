<template lang="html">
    <div class="sliceLanding box">

        <h3 class="title is-2 line_bottom" v-html="PrismicDom.RichText.asText(caratteristiche.primary.tipo_caratteristiche)"></h3>
        <div class="columns is-5 is-variable is-multiline">
            <div class="column is-half" v-for="item in caratteristiche.items">
                <div class="title is-4" v-html="PrismicDom.RichText.asText(item.nome_caratteristica)"></div>
                <div v-html="PrismicDom.RichText.asHtml(item.descrizione_caratteristica)"/>
            </div>
        </div>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['caratteristiche', 'indice'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
        }
    }
}
</script>

<style lang="scss">



</style>
