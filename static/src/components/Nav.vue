<template>
  <div class="nav">
    <ul class="nav-list ">
      <router-link tag="li"
                   class="nav-item"
                   :key="item.path"
                   :to="item.path"
                   v-for="item in routes">
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { routes } from '../router'
  export default {
    name: "Nav",
    data() {
      return {
        routes
      }
    }
  }
</script>

<style scoped lang="less">
  .nav {
    .nav-list {
      display: flex;
      list-style: none;
      .nav-item {
        display: block;
        flex-grow: 1;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .router-link-exact-active {
        background: #ccc;
      }
    }
  }
</style>