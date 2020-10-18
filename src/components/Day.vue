<template>
    <div id="fragment">
<!--        <router-link :to="index.toString()" exact v-bind:date="date" v-bind:weather="weather">-->
<!--        <router-link :to="{path: index.toString(), params: {date, weather}}">-->
        <router-link :to="{name: 'DayInDetail', params: {temp, date, weather, index}}">
            <div class="day d-flex flex-column align-items-center p-3">
                <span class="date">{{date}}</span>
                <div class="weather d-flex flex-row align-items-center justify-content-around w-100">
                    <span>{{averageTemp}}°</span>
                    <img class="icon" v-bind:src="weather">
                </div>
            </div>
        </router-link>
        <hr class="separator" v-if="!lastItem"/>
    </div>

</template>

<script>
    export default {
        name: 'Day',
        props: {
            temp: {
                type: Object,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            averageTemp: {
                type: String,
                required: true
            },
            weather: {
                type: String,
                required: true
            },
            lastItem: {
                type: Boolean,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        }
    }
</script>