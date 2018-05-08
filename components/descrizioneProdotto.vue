<template lang="html">

    <section>
        <div v-bind:ref="prodotto.id" class="modal" v-bind:class="{ 'is-active': showModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Informazioni sul prodotto</p>
                    <button class="delete" v-on:click="closeModal" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="content" v-html="PrismicDom.RichText.asHtml(prodotto.data.descrizione)"></div>
                </section>
            </div>
        </div>
        <p>
            <button class="button" v-bind:prodottoId="prodotto.id" v-on:click="openModal">Maggiori informazioni sul prodotto</button>
        </p>

    </section>


</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['prodotto'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            showModal: false
        }
    },
    methods: {
        openModal: function (event) {
            this.showModal = true;
        },
        closeModal: function () {
            this.showModal = false;
        }
    }

}
</script>

<style lang="css">
</style>
