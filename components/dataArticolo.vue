<template lang="html">
    <div class="dataArticolo">
        <meta itemprop="datePublished" :content="dataArticolo" />
        <span itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
            <meta itemprop="name"  content="Dolcecanapa.it" />

            <span itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                <meta itemprop="url"   v-bind:content="logo" />
            </span>
        </span>

        <meta itemprop="author" content="Dolcecanapa.it" />
        <span class="data"><time itemprop="dateModified">{{dataArticolo}}</time></span>
    </div>
</template>

<script>
import Moment from 'moment'

export default {
    props: ['articolo'],
    data (context) {
        //console.log(this.$store);
        return {
            logo: this.$store.getters.getLogoUrl,
        }
    },
    computed: {
        // a computed getter
        dataArticolo: function () {
            return Moment(this.articolo.first_publication_date).format('DD MMMM YYYY');
        }
    },
}
</script>

<style lang="scss">

.dataArticolo {
        font-size: 90%;
        margin-bottom: 0rem;
    .data {

        font-style: italic;
    }
    .tag {

        margin-left: 0rem;
    }
}
</style>
