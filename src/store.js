import { reactive } from 'vue';

export const store = reactive({
  cardList: [],
  loading: true,
  archetypeList: [],
  archetype: '"C"',
});
