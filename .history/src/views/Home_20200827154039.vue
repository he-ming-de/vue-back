<template>
  <div class="d-flex">
    <div class="sidebar"></div>
    <div class="kuan">
      <div class="navigation-bar">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item
            v-for="(item,index) in arr"
            :key="index"
            :index="String(index)"
          >{{item.name}}</el-menu-item>
        </el-menu>
      </div>
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
    return {
      activeIndex: "0",
      menus: [],
      arr: [],
      list: []
    };
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 所有数据
    getData() {
      axios
        .get("http://49.233.66.125:3030/menu")
        .then(res => {
          console.log(res);
          this.menus = res.data.data.menus;
          this.menus.map(item => {
            if (item.level == 0) {
              this.arr.push(item);
            }
          });
          this.arr = this.arr.slice(0, 7);
          // console.log(this.arr);
          this.list=this.
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
  height: 400px;
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