<template>
  <div class="">
    <!--  <div class="">-->
    <!--    <div v-if="errors.length > 0">-->
    <!--      <span>Please correct the errors </span>-->
    <!--      <ul>-->
    <!--        <li v-for="e in errors" :key="e.id"> {{e}}</li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <!--    <div class="container">-->
    <!--      <div class="row d-flex justify-content-center">-->
    <!--&lt;!&ndash;        <div class="col-md-6 image">&ndash;&gt;-->
    <!--&lt;!&ndash;        <img src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png">&ndash;&gt;-->
    <!--&lt;!&ndash;        </div>&ndash;&gt;-->
    <!--        <form class="col-md-6" >-->
    <!--          <div class="form-outline mb-4">-->
    <!--            <label class="form-label" for="form4Example2">Email address</label>-->
    <!--            <input type="email" id="form4Example2" class="form-control" v-model="register.email"/>-->
    <!--            <span v-if="validate !== null  && validate.email" style="color: red">{{validate.email[0]}}</span>-->
    <!--&lt;!&ndash;            <span v-if="validate.email" style="color: red">{{validate.email[0]}}</span>&ndash;&gt;-->
    <!--          </div>-->
    <!--           <button  v-if="register.errors.length > 0" type="submit" :class="(isDisabled) ? '' : 'selected'"-->
    <!--                   :disabled="isDisabled" class="btn btn-primary btn-block mb-4" >Sign Up</button>-->
    <!--          <button v-else type="submit" class="btn btn-primary btn-block mb-4" @click="signUp">Sign Up</button>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </div>-->
    <Particles id="tsparticles" :options="particlesConfig"/>

    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-4 box">
          <p>Email</p>
          <input type="email" placeholder="Type Your email"
                 @input="setEmail($event.target.value)"
                 :class="{ 'form-group--error': $v.email.$error }" v-model.trim="email" class="form-control"  />
          <!--      <div class="errors-list">-->
          <!--        <div class="error" v-for="error in this.errors" :key="error.id">-->
          <!--          {{error}}-->
          <!--        </div>-->
          <!--      </div>-->
          <div class="error" v-if="!$v.email.required">Field is required</div>
          <div class="error">email must have at least letters.</div>
          <!-- <p style="color:red" v-if="errors !== null && errors.email">{{ errors.email }}</p>-->
          <router-link class="button" to="/account">
            <button type="submit" class="btn btn-primary mt-3" id="myBtn"
                    :class="(isDisabled) ? '' : 'selected'"
                    :disabled="isDisabled" v-if="errors.length > 0" @submit="validateForm" @click="signUp">Sign Up</button>
            <button v-else type="submit" class="btn btn-primary btn-block mb-4" @click="signUp">Sign Up</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import particlesConfig from "../assets/particles.json";
import {required,minLength} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      validate: {},
      particlesConfig:'',
      errors: [],
      email: ''
    };
  },
  computed: {
    isDisabled() {
      return (!this.email )
    }
  },
  methods: {
    signUp() {
      this.axios.post('check-email-availability', this.register)
          .then(() => {
            this.errors=null
            // redirect to next page
          })
          .catch((error) => {
            this.errors = error.response.data.data
          })
    },
    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    validateForm:function(e){

      this.errors = [];

      if(!this.email){
        this.errors.push("Email can not be Empty");
      }
      if(!this.errors.length){
        return true;
      }
      e.preventDefault();
    }
  },
  validations: {
    email: {
      required,
    },
  }
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

.box {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
  margin: auto auto;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox label {
  color: #fff;
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
  background: #03a9f4;
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
}
.errors-list{
  color:red;
}

.box input[type="submit"]:hover, .box button[type="submit"]:hover, a.button:hover {
  opacity: 0.8;
}

#tsparticles {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.form-control{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 0px;
  color:white;
}
.form-control:focus {
  color: white;
  background-color: transparent;
  border-color: transparent;
  outline: 0;
  box-shadow:unset;
  border-bottom: 1px solid white;
}
p{
  color: white;
}
#myBtn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>


