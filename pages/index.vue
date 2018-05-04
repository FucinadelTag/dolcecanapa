<template>
    <div>

        <section class="hero has-bg-img" v-bind:style="testataStyle">
            <div class="hero-body noleggio">
                <div class="has-text-centered">
                            <div class="testo box">
                                <h1 class="title is-1 is-spaced">
                                    Cannabis Light e CBD Legale
                                </h1>
                                <div class="is-size-1">
                                    Acquista subito<br><span class="rosso is-size-1 is-italic">45% di sconto su tutti i prodotti</span>
                                </div>
                                <div class="is-size-4">
                                    Promozione valida fiono al 30 Maggio
                                </div>
                                <!-- <div>
                                    <div class="is-size-4">Canapa legale con <i>THC < 0,2%</i></div>
                                    <div class="is-size-4">Venduta solo a <i>maggiori di 18 anni</i></div>
                                    <div class="is-size-4">Prodotti da canapa <i>Biologia</i> coltivata in italia</div>
                                </div> -->
                                <span class="is-size-2"><i class="fas fa-phone-volume"></i> Ordina al telefono</span>
                                <div class="callToAction has-text-centered">
                                    <a class="button is-large" target="_blank"> 800 800 800 800</a>
                                </div>
                                <span class="is-size-4"><i>Dal lunedì a venerdì - dalle 9 alle 18</i></span>

                            </div>

                </div>
            </div>
        </section>

        <div class="spazio_bianco"></div>

        <div class="columns">

            <div class="column is-half">
                <div class="box">
                    <h2 class="title is-2">
                        Cannabis Light Legale<br>
                    </h2>

                    <div>
                        <img v-bind:src="immagine_fumo.url" alt="" />
                    </div>
                    <div class="spazio_bianco"></div>

                    <div class="callToAction has-text-centered">
                        <a class="button" target="_blank">Vedi le nostre Influorescenze</a>
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

            </div>

            <div class="column is-half">
                <div class="box">
                    <h2 class="title is-2">
                        CBD: Olio e tanto altro
                    </h2>
                    <div>
                        <img v-bind:src="immagine_olio.url" alt="" />
                    </div>
                    <div class="spazio_bianco"></div>

                    <div class="callToAction has-text-centered">
                        <a class="button" target="_blank">Vedi i nostri prodotti con CBD</a>
                    </div>

                    <div class="spazio_bianco"></div>

                    <p>
                        <span class="is-size-5">Olio di Canapa puro ricco di Omega3 e Antiossidanti:</span>

                        <ul>
                            <li>Riduce dolori e infiammazioni</li>
                            <li>Dona freschezza e lucidità mentale</li>
                            <li>Energizzante, capace di rigenerare energie e forze</li>
                        </ul>
                    </p>



                    <p class="leggero">
                        Non si tratta di un prodotto medicinale
                    </p>

                </div>
            </div>

        </div>
        <hr>
        <div class="title is-2">
            Perchè scegliere <span class="rosso">DolceCanapa.it</span>
        </div>
        <div class="columns is-5 is-variable is-multiline">
            <div class="column is-half">
                    <h3>
                        <i class="far fa-thumbs-up"></i> 100% soddisfatti o rimborsati
                    </h3>
                    <p>
                        Acquista in totale tranquillità. Hai 15 giorni per valutare e ripensare al tuo acquisto! Nel caso volessi restutuire,
                        <strong>non dovrai pagare neanche le spese di spedizione</strong>.
                    </p>
            </div>
            <div class="column is-half">
                <h3>
                    <i class="fa fa-gavel" aria-hidden="true"></i> Garanzia <strong>6 anni</strong>
                </h3>
                <p>
                    In caso di problemi tecnici o mal funzionamenti <strong>vi invieremo gratuitamente un nuovo Misuratore di Pressione</strong>.
                    <br>Chiamando il nostro numero verde o contattandoci via email, sapremo sempre trovare una soluzione al vostro problema.
                </p>
            </div>
            <div class="column is-half">
                <h3>
                    <i class="far fa-handshake"></i> Assistenza gratuita: <strong>800-180-439</strong>
                </h3>
                <p>
                    <strong>Non vi lasciamo mai soli</strong>. Chiamateci pure senza impegno prima di acquistare. Saremo sempre a vostra disposizione per ogni domanda.
                    <br>Una volta acquistato, sapremo <strong>sempre</strong> aiutarti per utilizzare al meglio i nostri prodotti. <i>Chiamaci</i>!
                </p>
            </div>
            <div class="column is-half">
                <h3>
                    <i class="fa fa-credit-card" aria-hidden="true"></i> Pagamenti sicuri e facili!
                </h3>
                <p>
                    Puoi scegliere di pagare in tutta sicurezza:
                    <ul>
                        <li>
                            <strong>Carta di Credito</strong>
                        </li>
                        <li>
                            <strong>PayPal</strong>
                        </li>
                        <li>
                            <strong>Contrassegno</strong> (Paghi al momento della consegna)
                        </li>
                    </ul>
                </p>
            </div>
            <div class="column is-half">
                <h3>
                    <i class="fa fa-truck" aria-hidden="true"></i> Spedizione <strong>gratuita</strong> in <strong>24/48h</strong>
                </h3>
                <p>
                    Curiamo nel dettaglio ogni spedizione in modo tale da rendere il servizio migliore senza perdere tempo.<br>
                    I nostri ordini vengono consegnati in 24/48 ore. Nel frattempo potrete <strong>monitorare passo passo</strong> dove si trova il vostro Prodotto.
                    Nessuna sorpresa!
                </p>
            </div>
            <div class="column is-half">
                <h3>
                    <i class="fa fa-cart-plus" aria-hidden="true"></i> Acquisto al telefono: <strong>800-180-439</strong>
                </h3>
                <p>
                    Non sai come concludere l'acquisto online? Hai paura ad effettuare un ordine online?<br>
                    Un nostro operatore è sempre a vostra disposizione per concludere l'ordine al telefono.
                    <strong>Chiama il nostro numero verde 800-180-439 e pensiamo a tutto noi!</strong>
                </p>
            </div>
        </div>
    </div>
</template>

<script charset="utf-8">
    export default {
        middleware: 'getHomeData',
        data (context) {
            //console.log(this.$store);
            return {
                immagine_testata: this.$store.getters.getImageTestata,
                immagine_fumo: this.$store.getters['home/getImmagineFumo'],
                immagine_olio: this.$store.getters['home/getImmagineOlio'],
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

.noleggio {
    .title {
        font-weight: 1000;
    }
    .testo {
        background-color: rgba(255,255,255,0.8);
    }

    .formPreventivo {
        //background-color: rgba(255,255,255,0.8);
    }


}

</style>
