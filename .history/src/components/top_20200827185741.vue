<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in arr" :key="index" :index="item.url">{{item.name}}</el-menu-item>
    </el-menu>
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
      lists: [],
      ass: [],
      menu_ids: "",
      asss: []
    };
  },
  components: {},
  methods: {
    //导航栏
    handleSelect(key) {
      console.log(key);
      findIndex
    //   this.menu_id = this.arr[key].menu_id;
    //   console.log(this.menu_id);
    //   this.lists = this.list.filter(item => {
    //     return item.parent_id == this.menu_id;
    //   });
    //   this.$bus.$emit("send", this.lists);
    //   this.$bus.$emit("send1", this.list);
    //   this.$bus.$emit("send1", this.ass);
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
            if (item.level == 2) {
              this.ass.push(item);
            }
          });
          this.arr = this.arr.slice(0, 7);
          console.log(this.arr);
          console.log(this.list);
          console.log(this.ass);
        //   this.$bus.$emit("send", this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    console.log(this.activeIndex);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>