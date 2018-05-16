<template lang="html">

    <section class="hero has-bg-img" v-bind:style="testataStyle">
        <div class="hero-body testata">
            <div class="has-text-centered">
                        <div class="testo box">
                            <h1 class="title is-1 is-spaced">
                                {{titolo}}
                            </h1>
                            <div class="is-size-1">
                                <span class="rosso is-size-1 is-italic">45% di sconto su tutti i prodotti</span>
                            </div>
                            <div class="is-size-4">
                                Promozione valida fino al 30 Maggio
                            </div>
                            <!-- <div>
                                <div class="is-size-4">Canapa legale con <i>THC < 0,2%</i></div>
                                <div class="is-size-4">Venduta solo a <i>maggiori di 18 anni</i></div>
                                <div class="is-size-4">Prodotti da canapa <i>Biologia</i> coltivata in italia</div>
                            </div> -->
                            <telefonoCallToAction />

                        </div>

            </div>
        </div>
    </section>


</template>

<script>
import telefonoCallToAction from '~/components/telefonoCallToAction.vue'


export default {
    props: ['testataStyle', 'titolo'],
    components: {
        telefonoCallToAction
    },
}
</script>

<style lang="css">
</style>
