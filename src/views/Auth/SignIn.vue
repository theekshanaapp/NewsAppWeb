<template>
  <v-container fluid class="fill-height" style="padding: 0px;background: cadetblue;">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
        <v-card class="px-8 pt-6 pb-12" outlined style="border: solid">
          <img class="img-responsive img-logo" src= "https://res.cloudinary.com/persystance-network/image/upload/v1620801591/cochchi/portal_user/1620801590884.png">
          <v-card-title class="text-center" style="display: block; margin-left: auto; margin-right: auto;">News APP</v-card-title>
          <v-card-text>
            <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
              <form
                @submit.prevent="handleSubmit(signin)"
                @reset.prevent="reset"
              >
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                    outlined
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    type="password"
                    :error-messages="errors"
                    label="Password"
                    outlined
                  ></v-text-field>
                </ValidationProvider>
                  <v-btn block type="submit" class="primary" depressed>Sign in</v-btn>
              </form>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  methods: {
    async signin() {
      if (this.loading) return
      this.loading = true

      const data = await this.$store
        .dispatch('signIn', { email: this.email, password: this.password })
        .catch((err) => {
          this.loading = false
          console.log(err)
          this.$refs.form.setErrors({
            Email: ["We don't recognize, this email"],
            Password: ["We don't recognize, this password"]
          })
          this.$toast.error("Error Logged!", "Error", {
            position: "topRight"
          });
        })
        
      if (!data) return

      this.loading = false
      this.$router.push({ name: 'Home' })
      this.$toast.success("Succesfully Logged In!", "Success", {
        position: "topRight"
      });
    }
  }
}
</script>
<style>
.img-logo {
 width:auto; 
 height:130px; 
 width: auto;
 display: block;
 margin-left: auto;
 margin-right: auto;
}
</style>
