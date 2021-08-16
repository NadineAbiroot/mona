<template>
  <div class="">
    <div class="background">
      <img class="logo mt-4" src="../assets/mona-logo.png" alt="Card image cap">
    <div class="container">
      <div class=" d-flex justify-content-center">
        <div class="box col-md-4">
          <p class="title mb-4"> Sign Up with Email</p>
          <p class="label mb-1">Email</p>
          <input type="email" placeholder="Type Your email"
                 @input="setEmail($event.target.value)"
                 v-model.trim="email" class="form-control"/>
          <div v-if="$v.email.$dirty">
          <div class="error" v-if="!$v.email.required">Field is required</div>
          <div class="error" v-if="!$v.email.email">Enter a valid email</div>
          </div>
          <div class="mt-4 mb-2 signup-button d-flex justify-content-end">
            <button type="submit" class="btn px-4 py-2"  id="myBtn"
                    disabled
                    :class="(isDisabled) ? '' : 'selected'"
                    v-if="email === '' || !$v.email.email">Sign Up
            </button>
            <button v-else type="submit" class="btn btn-primary btn-block signup px-4 py-2" @click="signUp">Sign Up</button>
          </div>
          <div class="loading" v-if="loading">
            Loading....
          </div>
          <div class="text-center mt-4 notes">
            <p class="mb-1"> I already have an account</p>
            <p> Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import {required} from 'vuelidate/lib/validators'
import email from "vuelidate/lib/validators/email";
import { asyncLoading } from 'vuejs-loading-plugin'

export default {
  name:"SignUp",
  props: ['email'],
  data() {
    return {
      validate: {},
      particlesConfig: '',
      errors: [],
      loading: false,
      // email: '',
    };
  },

  computed: {
    isDisabled() {
      console.log(this.email && this.$v.email)
      return (!this.email)
    }
  },
  mounted() {
    if (localStorage.email) {
      this.form.email = localStorage.email;
    }
  },
  methods: {
    signUp() {
     asyncLoading(
         this.axios.post('check-email-availability', {email:this.email})
         .then(() => {
           localStorage.setItem('email' , this.email)
           this.errors = null
           this.$router.push('/account')
         })
         .catch((error) => {
           this.errors = error.response.data.data
         }))

      // this.loading = true;
    },
    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}
 button{
  background-color: #0071bc;
}
.label{
  font-size:15px;
  color:#322828;
}
.notes{
  text-decoration: underline;
  font-size:13px;
}
.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: black;
  text-align: center;
}

.box .inputBox label {
  color: #fff;
}

.error {
  color: #e91a1a;
  font-size:13px;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"], .box button[type="submit"], a.button {
  font-family: sans-serif;
  background: white;
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
}
input[type=email]{
  width:380px;
}
.signup-button button{
  background-color: #0071bc !important;
  color:white;
  border-radius:2px;
}
#myBtn{
  color:white;
}
.box input[type="submit"]:hover, .box button[type="submit"]:hover, a.button:hover {
  opacity: 0.8;
}
.form-control:focus {
  color: black;
  background-color: transparent;
  outline: 0;
  border:1px solid grey;
  box-shadow: unset;
}
p {
  color: black;
}
#myBtn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>


