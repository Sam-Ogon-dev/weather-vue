<template>
    <div id="fragment">
        <h1 v-if="weather.length">Погода в Ростове-на-Дону:</h1>
        <div class="forecast d-flex flex-row rounded-sm shadow-sm">
            <Day v-for="(day, index) of weather"
                 v-bind:index="index"
                 v-bind:key="day.date"
                 v-bind:date="day.date"
                 v-bind:average-temp="day.averageTemp"
                 v-bind:weather="day.weather"
                 v-bind:lastItem="index === weather.length-1"
                 v-bind:temp="day.temp"/>
        </div>
    </div>
</template>

<script>
    import Day from "./Day";

    export default {
        name: 'Forecast',
        components: {
            Day
        },
        props: {
            setIsLoad: Function
        },
        data() {
            return {
                weather: []
            }
        },
        mounted() {
            let datesArray = [];
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=47.23571&units=metric&lon=39.70151&appid=76f164a64422b6f11c572d4665026566")
                .then(r => r.json())
                .then(({daily}) => {
                    for (let i = 0; i <= 3; i++) {
                        datesArray.push({
                            date: new Date(daily[i].dt * 1000).toLocaleDateString("ru", {
                                day: "numeric",
                                month: "long"
                            }),
                            temp: daily[i].temp,
                            averageTemp: ((daily[i].temp.day + daily[i].temp.night + daily[i].temp.eve + daily[i].temp.morn) / 4).toFixed(1),
                            weather: `http://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png`
                        });
                    }
                    this.setIsLoad();
                    this.weather = datesArray;

                });
        }
    }
</script>

