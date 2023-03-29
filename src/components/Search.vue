<template>
    <div class="search">
        <h4>Search Archetype</h4>
        <select name="" id="" @change="changeArchetype($event)">
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<script> 
import { store } from '../store';
    export default {
        name: 'Search',
        props: {
            search: Function
        },
        data() {
            return {
                store
            }
        },
        methods: {
            changeArchetype(event) {
                this.store.archetype = event.target.value;
                console.log(this.store.archetype);
            }
        }
    }
</script>

<style lang="scss">
    .search {
        padding-top: 20px;
    }
</style>