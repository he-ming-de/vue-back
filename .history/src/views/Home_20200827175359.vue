<template>
  <div class="d-flex">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <el-row class="tac">
        <!-- 一级 -->
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
            <el-submenu v-else :index="String(index)">
              <template slot="title">
                <span>{{item.name}}</span>
              </template>
              <!-- 二级 -->
              <el-menu-item-group v-for="(item1,index1) in asss" :key="index1">
                <el-menu-item :index="String(index)">{{item1.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="kuan">
      <!-- 导航栏 -->
      <div class="navigation-bar">
        <top></top>
      </div>
      <div class="Class-capacity"></div>
    </div>
  </div>
</template>

<script>
import top from "../components/top";

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
      lists: [],
      ass: [],
      menu_ids: "",
      asss: []
    };
  },
  components: {
    top
  },
  methods: {
    //侧边栏
    //展开
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.menu_ids = this.lists[key].menu_id;
      this.asss = this.ass.filter(item => {
        return item.parent_id == this.menu_ids;
      });
    },
    //收起
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      // this.menu_ids = this.lists[key].menu_id;
      // this.asss = this.ass.filter(item => {
      //   return item.parent_id == this.menu_ids;
      // });
    }
  },
  mounted() {
    
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