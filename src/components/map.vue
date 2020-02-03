<template>
    <div class="map" id="map">
    </div>
</template>

<script>
    import {initMap} from "../common/map";

    export default {
        name: "map",
        mounted() {
            initMap()
        }
    }
</script>

<style lang="scss" scoped>
    .map{
        width:100%;
        height:600px;
    }
</style>
