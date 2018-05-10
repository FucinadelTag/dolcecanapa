<template>
    <div class="default">
        <div class="container">
            <div class="content">
                <MyMenu/>
                <div class="">
                    <nuxt/>
                </div>
            </div>
            <MyFooter/>

        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZTRhNzNmNTktMjU1My00YWZlLWExZDctNTczN2Y5NmM2NGNmNjM2NjE1Nzk1Njg1OTI3MzI5"></script>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import MyFooter from '~/components/myFooter.vue'

    export default {
        components: {
            MyMenu,
            MyFooter,
        },
        data (context) {
            //console.log(this.$store);
            return {
                title: this.$store.getters.getTitle,
                description: this.$store.getters.getDescription
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ]
            }
        },
    }
</script>

<style lang="scss">
</style>
