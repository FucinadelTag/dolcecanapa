<template lang="html">
<a v-bind:href="linkWithTag" v-on:click="articleTrack()">
    <div class="banneDestra box is-centered">
        <img class="imglogo" v-bind:src="logo" alt="Burocraziafacile">
        <div class="big has-text-centered">
            Cannabis Legale e CBD<br><span class="rosso">con il 50% di sconto</span>
        </div>
    </div>

</a>

</template>

<script>
export default {
    data: function () {
        return {
            logo: this.$store.getters.getLogoUrl
        }
    },
    computed: {
        linkWithTag: function () {
            let taggedLink = '/?utm_source=dolcecanapa&utm_medium=banner&utm_campaign=destra';

            return taggedLink;
        },
    },
    methods: {
        articleTrack: function () {
            fbq('trackCustom', 'BannerAction', {
                button_uid: 'destra'
            });

            ga('send', {
                hitType: 'event',
                eventCategory: 'BannerAction',
                eventAction: 'destra'
            });

        }
    }
}
</script>

<style lang="scss">

.banneDestra {
    border-top-color: $rosso;
    border-top-width: .1rem;
    border-top-style: solid;
    padding: 1rem;

    .big {
        font-size: 200%;
        font-weight: bold;

    }

    .imglogo {
        padding-bottom: 0.2rem;
        border-bottom-color: $grey-ligh;
        border-bottom-width: 0.07rem;
        border-bottom-style: solid;
    }
}
</style>
