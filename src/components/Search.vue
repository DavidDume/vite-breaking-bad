<template>
    <div class="search">
        <h4>Search Archetype</h4>
        <select name="" id="" @change="$emit('search')" v-model="store.archetype">
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<script> 
import { store } from '../store';
    export default {
        name: 'Search',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss">
    .search {
        padding-top: 20px;
    }
</style>