<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible v-model="collapsed" hide-trigger breakpoint="sm">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerClasses"/>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '_c/side-menu'
export default {
  data () {
    return {
      collapsed: true,
      menuList: [
        {
          title: '首页',
          name: 'home',
          icon: 'ios-home'
        },
        {
          title: '表格',
          name: 'table',
          icon: 'ios-grid'
        },
        {
          title: 'Tree',
          name: 'folder_tree',
          icon: 'ios-folder'
        },
        {
          title: 'form',
          name: 'form',
          icon: 'ios-list-box'
        },
        {
          title: '333',
          name: 'menu3',
          icon: 'md-appstore',
          children: [
            {
              title: '333-111',
              name: 'menu31',
              icon: 'md-apps'
            },
            {
              title: '333-222',
              name: 'menu32',
              icon: 'md-apps',
              children: [
                {
                  title: '333-222-111',
                  name: 'menu321',
                  icon: 'ios-archive'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  components: {
    SideMenu
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less" scoped>
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
  .content-con {
    padding: 10px;
    .page-card {
      min-height: ~"calc(100vh - 84px)";
    }
  }
}
</style>
