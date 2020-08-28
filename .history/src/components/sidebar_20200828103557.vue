<template>
  <div>
    <!-- 侧边栏 -->
    <el-row class="tac">
      <!-- 一级 -->
      <el-col v-for="(item,index) in lists" :key="index">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item v-if="index==0" :index="item.url">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.url">
            <template slot="title">
              <span>{{item.name}}</span>
            </template>
            <!-- 二级 -->
            <el-menu-item-group v-for="(item1,index1) in asss" :key="index1">
              <el-menu-item :index="item.url">{{item1.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      menu_id: "",
      lists: [],
      ass: [],
      menu_ids: "",
      asss: []
    };
  },
  components: {},
  methods: {
    //侧边栏
    //展开
    handleOpen(key) {
      console.log(key);
      
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
    this.$bus.$on("send", data => {
      console.log(data);
      this.lists = data;
    });
    this.$bus.$on("send1", data => {
      this.ass = data;
      console.log(this.ass);
    });
    // console.log(this.ass);
    // console.log(this.lists);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>