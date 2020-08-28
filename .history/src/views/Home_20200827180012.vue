<template>
  <div class="d-flex">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="kuan">
      <!-- 导航栏 -->
      <div class="navigation-bar">
        <top></top>
      </div>
      <!-- 类容 -->
      <div class="Class-capacity">
        <capacity></capacity>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
import capacity from "../components/capacity";
import top from "../components/top";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    top,
    capacity,
    sidebar
  },
  methods: {

  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.kuan {
  width: 80%;
}
.navigation-bar {
  width: 94%;
  height: 70px;
  display: flex;
  padding: 0 3%;
}
.sidebar {
  width: 20%;
  height: 100%;
  background: gold;
}
.Class-capacity {
  width: 100%;
  height: 300px;
  background: lightcoral;
}
.d-flex {
  display: flex;
}
.font {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>