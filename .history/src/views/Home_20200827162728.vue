<template>
  <div class="d-flex">
    <div class="sidebar">
      <el-row class="tac">
        <el-col v-for="(item,index) in lists" :key="index">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item v-if="index==0" :index="String(index)">
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-else index="1">
              <template slot="title">
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
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
      list: [],
      menu_id: "",
      lists: []
    };
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.menu_id = this.arr[key].menu_id;
      this.lists = this.list.filter(item => {
        return item.parent_id == this.menu_id;
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.menu_id = this.arr[key].menu_id;
      this.lists = this.list.filter(item => {
        return item.parent_id == this.menu_id;
      });
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
            if (item.level == 1) {
              this.list.push(item);
            }
          });
          this.arr = this.arr.slice(0, 7);
          console.log(this.arr);
          console.log(this.list);
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