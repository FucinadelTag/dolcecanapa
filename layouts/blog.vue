<template>
    <div class="default">
        <div class="container">
            <div class="content">
                <MyMenu/>
                <div class="columns padding">
                    <div class="column is-two-thirds">
                        <nuxt/>
                    </div>
                    <div class="column">
                        <bannerDestra />

                    </div>
                </div>
            </div>
            <MyFooter/>
        </div>
        <snipcartInclude/>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import bannerDestra from '~/components/bannerDestra.vue'
    import snipcartInclude from '~/components/snipcartInclude.vue'
    import MyFooter from '~/components/myFooter.vue'


    export default {
        components: {
            MyMenu,
            bannerDestra,
            snipcartInclude,
            MyFooter

        },
        data (context) {
            //console.log(context);
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
    .padding {
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .default {
        .contenuto {
            //margin-top: 10px;
            //border-top: 1px solid;
            //border-top-color: $grey-ligh;
        }

        .footer {
            margin-top: 5rem;
            padding-bottom: 3rem;
            // .Cookie {
            //     font-size: 0.8rem;
            //     background-color: #000000;
            //     color: #ffffff;
            //     margin: 0rem;
            //     > * {
            //         margin: 0;
            //         align-self: center;
            //     }
            // }
            // .Cookie--base {
            //     padding-left: 0.1rem;
            //     padding-top: 0.1rem;
            //     padding-bottom: 0.1rem;
            //     margin: 0rem;
            // },
            // .Cookie__button {
            //     padding-top: 0rem;
            //     padding-bottom: 0rem;
            // }
        }
    }
</style>
