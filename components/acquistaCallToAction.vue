<template lang="html">
    <section>
        <span class="is-size-2"> Ordina online e paga alla consegna</span>
        <div class="callToAction has-text-centered">
            <a v-on:click="clickCallToAction()" href="#prodotti" class="button is-large" alt="Ordina adesso"> Ordina adesso</a>
        </div>
    </section>


</template>

<script>
export default {
    methods: {
        clickCallToAction: function () {

            ga('send', {
                hitType: 'event',
                eventCategory: 'CallToAction',
                eventAction: 'ordina_subito'
            });

        }
    }
}
</script>

<style lang="scss">
</style>
