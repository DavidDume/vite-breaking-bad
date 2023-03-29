<script>
    export default {
        name: 'Header',
        props: {
            title: String
        }
    }
</script>

<template>

    <div class="header">
        <h1>{{ title }}</h1>
    </div>

</template>

<style lang="scss">
    .header {
        padding: 20px 0;
        text-align: center;
    }
</style>