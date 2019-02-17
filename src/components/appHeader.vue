<template>
  <div>
      <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
          <v-list>
              <v-list-tile v-for="(item,i) in menuItems" flat :key="`navdraver${i}`"> 
                  <v-list-tile-action>
                      <v-icon v-html="item.icons"></v-icon>
                  </v-list-tile-action>
                <v-list-tile-content>
                     <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar app dark class="primary">
          <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor:pointer">
            <v-toolbar-title  v-text="'DE'"></v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="(item,i) in menuItems" flat :key="`menuitems${i}`" :to="item.route">
                <v-icon left v-html="item.icons"></v-icon>
                {{item.title}}
            </v-btn>
            <v-btn  flat @click.prevent="signout" v-if="isAuthenticated">
                <v-icon left >exit_to_app</v-icon>
                Выйти
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
     data() {
        return {
            drawer:false
        }
    },
  computed: {
      isAuthenticated(){
            return this.$store.getters.isAuthenticated
        },
      menuItems(){
          return this.isAuthenticated ? [
              {
              icons:'visibility',
              title:'Читать',
              route:'/books',
                },
                {
              icons:'extension',
              title:'Учить слова',
              route:'/words',
          },
          {
              icons:'account_circle',
              title:'Мой кабинет',
              route:'/profile',
          },
           
      
          ] : [
              {
              icons:'visibility',
              title:'Читать',
              route:'/books',
                },
               {
              icons:'lock_open',
              title:'Зарегистрироваться',
              route:'/signup',
          },
          {
              icons:'input',
              title:'Войти',
              route:'/signin',
          }, ]
      }
  },
  methods:{
      signout(){
          this.$confirm('Do you really want to exit?').then(res => {
              if(res){
                  this.$store.dispatch('SIGNOUT');
              }
})
          
      }
  }
}
</script>
