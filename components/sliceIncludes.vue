<template lang="html">
    <section>
        <percheDolceCanapa v-if="include.primary.elemento == 'perche_dolcecanapa'" />
    </section>

</template>

<script>
import percheDolceCanapa from '~/components/percheDolceCanapa.vue'


export default {
    props: ['include'],
    components: {
        percheDolceCanapa
    },
}
</script>

<style lang="css">
</style>
