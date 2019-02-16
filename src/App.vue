<template>
  <v-app>
    <app-Header></app-Header>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
export default {
  components:{
    appHeader,
    appFooter
  }
}
</script>
