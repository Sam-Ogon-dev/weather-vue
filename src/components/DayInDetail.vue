<template>
    <div class="day_in_detail d-flex flex-column align-items-center rounded-sm p-3" v-if="weather || date || temp">
        <h2>{{date}}</h2>
        <span>Ночь: {{temp.night}}°<img class="icon" src="../assets/night.png"/></span>
        <span>Утро: {{temp.morn}}°<img class="icon" src="../assets/morning.png"/></span>
        <span>День: {{temp.day}}°<img class="icon" src="../assets/day.png"/></span>
        <span>Вечер: {{temp.eve}}°<img class="icon" src="../assets/evening.png"/></span>
        <img :src='weather'/>
        <router-link to="/" class="btn btn-primary m-2">Назад</router-link>
    </div>
</template>

<script>
    export default {
        name: "DayInDetail",
        props: {
            temp: {
                type: Object
            },
            weather: {
                type: String
            },
            date: {
                type: String
            }
        },
        mounted() {
            if(!this.weather || !this.date || !this.temp)
            this.$router.push("/");
        }
    }
</script>