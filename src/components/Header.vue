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

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }
</style>