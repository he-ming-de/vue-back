<template>
  <div class="d-flex">
    <div class="navigation-bar background-r"></div>
    <div class="d-flex">
      <div class=""></div>
      <div></div>
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
.heigt {
  width: 100px;
  height: 400px;
}
</style>