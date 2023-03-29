<script>

  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import CardList from './components/CardList.vue';
  import Loading from './components/Loading.vue';

  import axios from 'axios';
  import {store} from './store.js'

  export default {
    components: {
      Header,
      Search,
      CardList,
      Loading
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCards(archetype) {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`).then(res => {
          this.store.cardList = res.data;
          this.store.loading = false;
        });
        
      },
      getArchetype() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(res => {
          this.store.archetypeList = res.data;
        });
      }
    },
    created() {
      this.getCards(this.store.archetype);
      this.getArchetype();
    }
  }
</script>

<template>
  <Header title="YU-GI-HO"></Header>
  <div class="container" v-if="!store.loading">
    <div class="wrapper">
      <Search :search="getCards(store.archetype)"></Search>
      <CardList></CardList>
    </div>  
  </div>
  <Loading></Loading>
</template>

<style lang="scss">
  @use './general.scss';

  .container {
    background-color: #d48f38;
    height: calc(100vh - 50px);
    width: 100%;
    & .wrapper {
      margin: auto;
      width: 700px;
    }
  }
</style>
