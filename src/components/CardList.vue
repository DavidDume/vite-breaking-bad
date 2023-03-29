<script>
    import Card from './Card.vue';
    import {store} from '../store.js'

    export default {
        name: 'CardList',
        data() {
            return {
                store
            }
        },
        components: {
            Card
        }
    }
</script>

<template>
    <div class="cards-container" v-if="!store.loading">
        <div class="cards-info" >
            You found {{ store.cardList.data.length }} cards with <span>{{ store.cardList.data[0].archetype }} </span> archetype
        </div>
        <div class="cards">    
            <div class="card" v-for="(card, i) in store.cardList.data" :key="i">
                <Card :name="card.name" :img="card.card_images[0].image_url" :type="card.type"></Card>
            </div>
        </div>

    </div>
    
</template>

<style lang="scss">

    .cards-container {
        margin-top: 20px;
        & .cards-info {
            background-color: #212529;
            padding: 10px;
            color: white;
        }
        & span {
            color: red;
        }
    }
    .cards {
        background-color: white;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        gap: 10px;
        & .card {
            width: calc((100% / 5) - 20px);
        }
    }

</style>

