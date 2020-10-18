<template>
    <div id="app" v-on:is-load="setIsLoad">
        <div class="Root container-fluid d-flex flex-column justify-content-center align-items-center">
            <Loader v-if="!isLoad"/>
            <router-view v-bind:setIsLoad="setIsLoad"/>
        </div>
    </div>
</template>
<script>
    import "./styles/Main.scss";
    import Loader from "./views/Loader";

    export default {
        components: {
            Loader
        },
        data() {
            return {
                isLoad: false,
                position: 0
            }
        },
        methods: {
            setIsLoad() {
                this.isLoad = true
            }
        },
        mounted() {
            window.onmousemove = e => {
                const bg = document.body;
                if (e.movementX > 0) {
                    bg.style.backgroundPosition = this.position.toString() + "px 0px"
                    this.position -= 0.4;
                }

                if (e.movementX < 0) {
                    bg.style.backgroundPosition = this.position.toString() + "px 0px"
                    this.position += 0.4;
                }
            }
        }
    }
</script>