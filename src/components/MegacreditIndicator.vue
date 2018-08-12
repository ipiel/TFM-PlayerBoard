<template>
    <div class="megacredit-indicator">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "MegacreditIndicator",
        data () {
            return {
                msg: 'This will be the megacredit indicator for player board'
            }
        }
    }
</script>

<style scoped>
    .megacredit-indicator {
        width: 320px;
        height: 290px;
        background-image: url("../assets/Megacredit-Background.jpg");
    }
</style>
