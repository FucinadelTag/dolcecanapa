<template lang="html">
    <div class="sliceBanner">


                <span class="sconto" v-html="PrismicDom.RichText.asText(banner.primary.frase_principale)"></span>
                <br>
                <i>Fino al <strong class="dataPromo" v-html="PrismicDom.RichText.asText(banner.primary.frase_fine_promozione)"></strong></i>
                <br>
                <telefonoCallToAction v-if="banner.primary.call_to_action == 'Numero Verde'" />



                <!-- <span class="phoneAction">
                     <span class="subSconto"><i>Ordina al Telefono e Paga alla Consegna</i></span><br>
                    <a href="tel:800-180-439" class="ctaButton button numero-verde"><i class="fa fa-phone" aria-hidden="true"></i> 800-180-439</a>
                    <br>Dal Lunedì al Venerdì - dalle 09 alle 18
                </span>
                {{banner}}
                <span class="ecommerceAction hide">
                     <span class="subSconto"><i>Ordina subito e Paga alla Consegna</i></span><br>
                </span> -->


        </div>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import telefonoCallToAction from '~/components/telefonoCallToAction.vue'

export default {
    props: ['banner', 'indice'],
    components: {
        telefonoCallToAction
    },
    data: function () {
        return {
            PrismicDom: PrismicDom,
        }
    }
}
</script>

<style lang="scss">

.sliceBanner {
    text-align: center;
    letter-spacing: 1px;

    .sconto {
        font-size: 5vw;
        text-transform: none;
        font-weight: 700;
        font-style: normal;
        color: $rosso;
    }

    .subSconto {
        font-size: 3vw;
        text-transform: none;
        font-weight: 100;
        font-style: normal;
        color: #000000;
    }

}

</style>
