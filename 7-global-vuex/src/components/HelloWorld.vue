<template>
  <h3>Counter</h3>
  <p>{{ counter }} x2 = {{ times2}}</p>
  <button @click="increment">Increment</button>
</template>

<!-- SETUP -->
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const counter = computed(() => store.state.counter)
  const times2 = computed(() => store.getters.times2)
  const increment = () => store.commit('setCounter', counter.value + 1)

</script>

<!-- Composition API -->
 <!-- <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      const store = useStore();

      const counter = computed(() => store.state.counter)
      const times2 = computed(() => store.getters.times2)
      const increment = () => store.commit('setCounter', counter.value + 1)

      return {
        increment, 
        counter,
        times2,
      }

    }
  })
</script> -->

<!-- Mapear un STORE - Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue';
  import { mapMutations, mapState, mapGetters } from 'vuex';

  export default defineComponent({
    name: 'HelloWorld',
    computed: {
      ...mapState(['counter']),
      ...mapGetters(['times2'])
    },
    methods: {
      ...mapMutations(['setCounter']),
      increment() {
        this.setCounter(this.counter + 1)
      }
    }
  })
</script> -->


<!-- Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    computed: {
      counter() {
        // Read the counter from store
        return this.$store.state.counter;
      },
      times2() {
        // Read the times2 from store
        return this.$store.getters.times2;
      }
    },
    methods: {
      increment() {
        // Call the setCounter mutation from store
        this.$store.commit('setCounter', this.counter + 1);
      }
    }
  })
</script> -->