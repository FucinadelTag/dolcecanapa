<template>
    <div class="default">
        <div class="container">
            <div class="content">
                <cartModal />
                <MyMenu/>
                <div class="">
                    <nuxt/>
                </div>
            </div>
            <MyFooter/>
        </div>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import MyFooter from '~/components/myFooter.vue'
    import cartModal from '~/components/cartModal.vue'

    export default {
        components: {
            MyMenu,
            MyFooter,
            cartModal
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
