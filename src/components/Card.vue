<template>
    <img :src="img" :alt="type" class="card-img">
    <h4>{{ name }}</h4>
    <h5>{{ type }}</h5>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            name: String,
            type: String,
            img: String
        }
    }
</script>

<style>

.card-img {
    width: 100%;
}

</style>