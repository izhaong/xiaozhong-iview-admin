<template>
  <div>
    <h1>store page</h1>
    <p>{{appName}}===>appNameWithVersion: {{appNameWithVersion}}</p>
    <p>{{userName}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'store',
  computed: {
    ...mapState({
      appName: state => state.appName
    }),
    ...mapState('user', {
      userName: state => state.userName
    }),
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    }
  }
}
</script>
