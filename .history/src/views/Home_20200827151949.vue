<template>
  <div class="d-flex">
    <div class="sidebar"></div>
    <div class="kuan">
      <div class="navigation-bar">
        <div v-for="(item,index) in arr" :key="index">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              {{item.name}}
            </el-menu-item>
          </el-menu>
        </div>
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
      menus: [],
      arr: []
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("http://49.233.66.125:3030/menu")
        .then(res => {
          // console.log(res);
          this.menus = res.data.data.menus;
          this.menus.map(item => {
            if (item.level == 0) {
              this.arr.push(item);
            }
          });
          this.arr = this.arr.slice(0, 7);
          console.log(this.arr);
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
  width: 100%;
  height: 100px;
  display: flex;
  padding: 0 20px;
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