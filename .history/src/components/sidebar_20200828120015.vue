<template>
  <div>
    <!-- 侧边栏 -->

    <!-- 一级 -->

    <el-menu
      default-active="$route"
      class="el-menu-vertical-demo"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item,index) in lists">
        <el-menu-item v-if="index==0" :index="item.url" :key="index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.url" :key="index">
          <template slot="title">
            <span>{{item.name}}</span>


          </template>
          <!-- 二级 -->
          <el-menu-item-group v-for="(item1,index1) in asss" :key="index1">
            <el-menu-item :index="item.url">{{item1.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
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
      asss: []
    };
  },
  components: {},
  methods: {
    //侧边栏
    //展开
    handleOpen(key) {
      console.log(key);
      let index = this.lists.findIndex(item => {
        return item.url == key;
      });
      console.log(index);
      this.menu_id = this.lists[index].menu_id;
      console.log(this.menu_id);
      this.asss = this.ass.filter(item => {
        return item.parent_id == this.menu_id;
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