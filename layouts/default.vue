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
        <snipcartInclude/>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import MyFooter from '~/components/myFooter.vue'
    import snipcartInclude from '~/components/snipcartInclude.vue'

    export default {
        components: {
            MyMenu,
            MyFooter,
            snipcartInclude
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
