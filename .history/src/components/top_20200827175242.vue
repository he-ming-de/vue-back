<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in arr" :key="index" :index="String(index)">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
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
          this.menu_id = this.arr[0].menu_id;
          this.lists = this.list.filter(item => {
            return item.parent_id == this.menu_id;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>