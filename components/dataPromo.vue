<template lang="html">
    <span>{{getData}}</span>
</template>

<script>
import moment from 'moment'

export default {
    computed: {
        getData: function () {

            moment.locale('it');
            var lastDayOfPromo = moment().endOf('month').format("D\ MMMM YYYY");
            var dayMonth = moment().date();

            if (dayMonth <= 15){
                lastDayOfPromo = moment().endOf('month').format("MMMM YYYY");
                lastDayOfPromo = '15 ' + lastDayOfPromo;
            }

            return lastDayOfPromo;


        }
    }
}
</script>

<style lang="css">
</style>
