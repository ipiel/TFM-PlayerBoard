<template>
    <div class="main">
        <h1>{{ msg }}</h1>

        <MegacreditIndicator></MegacreditIndicator>
    </div>
</template>

<script>
    import MegacreditIndicator from "./MegacreditIndicator.vue"

    export default {
        name: 'Main',
        data () {
            return {
                msg: 'This will be the main page for player board'
            }
        },
        components: {
            MegacreditIndicator
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
