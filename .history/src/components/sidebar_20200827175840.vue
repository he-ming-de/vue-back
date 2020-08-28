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
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>