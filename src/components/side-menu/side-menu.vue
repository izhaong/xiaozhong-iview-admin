<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark" v-show="!collapsed" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        >
          <menu-item></menu-item>
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon color="#fff" :type="item.icon"/>
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div class="drop-wrapper" v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown @on-select="handleSelect" v-if="item.children" icon-color="#fff" :show-title="false" :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="30"/>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      console.log(name)
      this.$router.push({ name: name })
    },
    handleClick (name) {
      console.log(name)
      this.$router.push({ name: name })
    }
  }
}
</script>
<style lang="less">
.side-menu-wrapper {
  .ivu-tooltip,
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .drop-wrapper > .ivu-dropdown {
    display: block;
    padding: 10px;
    margin: 0 auto;
  }
}
</style>
