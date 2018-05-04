<template lang="html">
    <div>

        <testata v-bind:testataStyle="testataStyle" v-bind:titolo="titolo"/>

    </div>

</template>

<script>
import testata from '~/components/testata.vue'

export default {
    middleware: 'getLandingPage',
    components: {
        testata,
    },
    data (context) {
        //console.log(this.$store);
        return {
            immagine_testata: this.$store.getters['landing/getImmagineTestata'],
            titolo: this.$store.getters['landing/getTitle'],
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
</style>
