<template>
    <div>
        <testata v-bind:testataStyle="testataStyle" v-bind:titolo="titolo"/>

        <div class="spazio_bianco"></div>

        <div class="columns">

            <div class="column is-half">
                <a href="/landing/cannabis-legale">
                    <div class="box">
                        <h2 class="title is-2">
                            Cannabis Light Legale<br>
                        </h2>

                        <div>
                            <img v-bind:src="immagine_fumo.url" alt="" />
                        </div>
                        <div class="spazio_bianco"></div>

                        <div class="callToAction has-text-centered">
                            <a class="button">Le nostre Influorescenze</a>
                        </div>

                        <div class="spazio_bianco"></div>
                        <p>
                            <span class="is-size-5">Influorescenze ad uso tecnico:</span>

                            <ul>
                                <li>
                                    HTC al di sotto dello 0,2% - <strong>Legale in italia</strong>
                                </li>
                                <li>
                                    Influorescenze <strong>100% Italiane</strong>
                                </li>
                                <li>
                                    Canapa biologica Certificata <strong>priva di metalli pesanti e pesticidi</strong>
                                </li>
                            </ul>
                        </p>
                        <p class="leggero">
                            Non è un prodotto medicinale, alimentare o da combustione
                        </p>

                    </div>
                </a>

            </div>

            <div class="column is-half">
                <a href="/landing/cbd">
                    <div class="box">
                        <h2 class="title is-2">
                            Olio e gocce di CBD
                        </h2>
                        <div>
                            <img v-bind:src="immagine_olio.url" alt="" />
                        </div>
                        <div class="spazio_bianco"></div>

                        <div class="callToAction has-text-centered">
                            <a class="button">I nostri olii di CBD</a>
                        </div>

                        <div class="spazio_bianco"></div>

                        <p>
                            <span class="is-size-5">Olio di Canapa puro ricco di Omega3 e Antiossidanti:</span>

                            <ul>
                                <li>Aiuta a ridurre <strong>dolori e infiammazioni</strong></li>
                                <li>Dona freschezza e <strong>lucidità mentale</strong></li>
                                <li><strong>Energizzante</strong>, capace di rigenerare energie e forze</li>
                            </ul>
                        </p>



                        <p class="leggero">
                            Non si tratta di un prodotto medicinale
                        </p>

                    </div>
                </a>
            </div>

        </div>
        <hr>
        <percheDolceCanapa />
    </div>
</template>

<script charset="utf-8">
import testata from '~/components/testata.vue'
import percheDolceCanapa from '~/components/percheDolceCanapa.vue'

    export default {
        middleware: 'getHomeData',
        components: {
            testata,
            percheDolceCanapa
        },
        data (context) {
            //console.log(this.$store);
            return {
                immagine_testata: this.$store.getters.getImageTestata,
                immagine_fumo: this.$store.getters['home/getImmagineFumo'],
                immagine_olio: this.$store.getters['home/getImmagineOlio'],
                titolo: 'Cannabis Light e CBD Legale'
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
