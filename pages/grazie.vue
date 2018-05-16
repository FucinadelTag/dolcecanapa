<template lang="html">

    <section>
        <testata v-bind:testataStyle="testataStyle" v-bind:titolo="titolo"/>

        <div class="has-text-centered grazieNewsletter">
            <h1 class="title is-1">Grazie!</h1>
            <p class="subtitle is-3">
                Messaggio ricevuto con Successo!
            </p>
            <p>
                Ti risponderemo il più velocemente possibile.
            </p>

            <a href="/">Torna alla Home page del sito</a>
        </div>
    </section>


</template>

<script>
import testata from '~/components/testata.vue'

export default {
    middleware: 'getHomeData',
    components: {
        testata,
    },
    data (context) {
        //console.log(this.$store);
        return {
            immagine_testata: this.$store.getters.getImageTestata,
            titolo: 'Grazie per averci Contattati'
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
}
</script>

<style lang="scss">
.grazieNewsletter {
    padding: 4rem;

    a {
        font-size: 220%;
    }
}
</style>
