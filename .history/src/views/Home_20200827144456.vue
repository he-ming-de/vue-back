<template>
  <div class="d-flex">
    <div class="sidebar"></div>
    <div class="kuan">
      <div class="navigation-bar"></div>
      <div class="Class-capacity"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("http://49.233.66.125:3030/menu")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>
<style scoped>
.
.navigation-bar {
  width: 80%;
  height: 100px;
  background: red;
}
.sidebar {
  width: 20%;
  height: 400px;
  background: gold;
}
.Class-capacity {
  width: 80%;
  height: 300px;
  background: lightcoral;
}
.d-flex {
  display: flex;
}
</style>