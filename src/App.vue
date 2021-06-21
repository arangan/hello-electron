<script>
// import DocumentHeader from './components/DocumentHeader.vue'
import { Doc } from './models';

export default {
  name: 'App',
  // components: {
  //   DocumentHeader
  // },
  data() {
    return {
      document: new Doc()
    };
  },
  methods: {
    addTable() {
      var d = new Doc();
      console.log(d.tmp);

      console.log(JSON.stringify(this.document));
      console.log(JSON.stringify(this.document.Header));
      console.log(JSON.stringify(this.document.Body));
    },
    Add_Row() {}
  }
};
</script>

<template>
  <!-- <DocumentHeader v-model="this.document.Header" /> -->
  <button @click="console.log(symbol)">Show Log</button>
  <hr />
  <button @click="addTable">Add Table</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
