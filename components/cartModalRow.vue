<template lang="html">
    <section class="cartModalRow">
        <div class="box">
            <div class="columns">
                <div class="column is-one-quarter is-hidden-mobile">
                    <img class="imgProdotto" v-bind:src="item.immagine" v-bind:alt="item.nome" />
                </div>
                <div class="column">
                    <div class="title is-6 is-spaced">
                        {{item.nome}}
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-4">
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field">
                                        <input class="input" :disabled="isDisabled" type="number" v-on:input.stop="changeQuantity($event.target.value, item)" ref="quantita" name="quantita" v-bind:value="item.quantita">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-5">
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field">
                                        <input class="input is-static" type="email" v-bind:value="importo" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column cestino is-1">
                                <a class="cestino" href="#" v-on:click="changeQuantity(0, item)"><i class="far fa-trash-alt"></i></a>

                        </div>


                    </div>
                </div>
            </div>
        </div>
            <!-- <section class="media">

                <div class="media-content">
                    <div class="content">
                        <div class="title is-4 is-spaced">

                            <strong>{{item.nome}} </strong>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <strong>{{item.nome}} </strong>
                            </div>
                            <div class="column">
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Quantità: </label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <input class="input" :disabled="isDisabled" type="number" v-on:change="changeQuantity($event.target.value, item)" name="quantita" v-bind:value="item.quantita">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Totale: </label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <input class="input is-static" type="email" v-bind:value="importo" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <a href="#" v-on:click="changeQuantity(0, item)"><i class="far fa-trash-alt"></i></a>
                            </div>


                        </div>
                    </div>
                </div>
            </section> -->
        <!-- <div class="columns">
            <div class="column">
                <img v-bind:src="item.immagine" v-bind:alt="item.nome" />
            </div>
            <div class="column ">
                {{item.nome}} <br>
                <input class="input" :disabled="isDisabled" type="number" v-on:change="changeQuantity($event.target.value, item)" name="quantita" v-bind:value="item.quantita">
                <a href="#" v-on:click="changeQuantity(0, item)"><i class="far fa-trash-alt"></i></a>

            </div>
        </div> -->
        <!-- <div class="columns">
            <div class="column">
            </div>
            <div class="column">
                <strong>{{importo}}</strong>
            </div>
            <div class="column">
                <a href="#" v-on:click="changeQuantity(0, item)"><i class="far fa-trash-alt"></i></a>
            </div>


        </div> -->
    </section>


</template>

<script>
import {formatMoney, getRowCartTotale} from '~/tools/money_format.js'
import axios from 'axios'

const cartUrl = process.env.cartUrl;

export default {
    props: ['item'],
    data: function () {
        return {
            formatMoney: formatMoney,
            isDisabled: false
        }
    },
    computed: {
        // a computed getter
        importo: function () {
            let importo =  getRowCartTotale(this.item);

            return importo;

        }
    },
    methods: {
        changeQuantity: function (newQuantita, item) {

            if (newQuantita === '') {
                newQuantita = 1;
            }

            let oldQuantita = item.quantita;

            if (newQuantita == oldQuantita){
                return;
            }

            this.isDisabled = true;

            const store = this.$store;
            var self = this;




            axios.post(cartUrl + '/api/updateItem/', {
                itemId: item._id,
                cartId: item.related_document_id,
                newQuantita: newQuantita
            })
            .then(function (response) {

                self.isDisabled = false;
                //store.commit('SET_SHOWCART', true)
                store.commit('cart/SET_CART', response.data.cartData)
                store.commit('cart/SET_IMPORTO', response.data.cartData.importo)

                self.$nextTick(() => {
                    if (typeof self.$refs.quantita != 'undefined')
                    {
                        self.$refs.quantita.focus()
                    }
                });





                //console.log(self.$refs.quantita);




            })
            .catch(function (error) {
                self.isDisabled = false;
                console.log(error);
            });



        }
    }

}
</script>

<style lang="scss">
.cartModalRow {

    .imgProdotto {
        max-height: 4.3rem;
    }

    .cestino {
        padding-top: 1.2rem;
    }

}

</style>
