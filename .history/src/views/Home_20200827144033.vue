<template>
  <div class="container">
    <div class="sidebar background-r"></div>
    <div class="d-f">
      <div class="navigation-bar background-r"></div>
      <div class="Class-capacity background-r"></div>
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
.navigation-bar {
  width: 100%;
  height: 100px;
  background: red;
}
.sidebar {
  width: 100px;
  height: 400px;
  background: gold;
}
.Class-capacity {
  width: 100%;
  height: 300px;
  background: lightcoral;
}
.container {
  display: flex;
}
</style>