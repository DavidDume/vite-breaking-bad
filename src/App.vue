<script>

  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import CardList from './components/CardList.vue';

  import axios from 'axios';
  import {store} from './store.js'

  export default {
    components: {
      Header,
      Search,
      CardList
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCards() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes').then(res => {
          this.store.cardList = res.data;
          console.log(this.store.cardList);
        });
        
      }
    },
    created() {
      this.getCards();
    }
  }
</script>

<template>
  <Header title="YU-GI-HO"></Header>
  <div class="container">
    <div class="wrapper">
      <Search></Search>
      <CardList></CardList>
    </div>
    
  </div>
</template>

<style lang="scss">
  @use './general.scss';

  .container {
    background-color: #d48f38;
    height: 100%;
    width: 100%;
    & .wrapper {
      margin: auto;
      width: 700px;
    }
  }
</style>
