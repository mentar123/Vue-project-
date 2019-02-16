<template>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                     <v-alert
                        :value="error"
                        type="warning">
                        {{error}}
                    </v-alert>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="E-mail" type="email" required v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signup" :disabled="processing">Зарегестрироваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    computed:{
        error(){
            return this.$store.getters.getErorr
        },
        processing(){
            return this.$store.getters.getProcessing
        },
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        }
    },
    watch:{
        isAuthenticated(val){
            if(val === true){
                this.$router.push('/')
            }
        }
    },
    methods:{
        signup(){
            this.$store.dispatch('SIGNUP',{email:this.email,password:this.password})
        }
    },
}
</script>
<style scoped>

</style>
