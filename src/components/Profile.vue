<template>
  <div class="">
    <div class="background">
      <div class="container">
        <div class="row">
          <img class="logo-left mt-4 my-md-0" src="../assets/mona-logo.png" alt="Card image cap">
        </div>
      </div>
      <div class="container">
        <div class="row">
          <p class="slider-title"> Complete Your Profile</p>
        </div>
      </div>
      <div class="custom-container rounded bg-white mt-5 mb-5 pt-5">
        <div class="container">
          <div class="row white-bg">
            <div class="border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="text-right title">Sign Up</h4>
                </div>
              </div>
              <div class="row">
                <div class="row mt-2">
                  <div class="col-md-6 mt-2">
                    <input type="email" placeholder="Type Your email"
                           v-model.trim="$v.email.$model"
                           class="form-control"/>
                    <div v-if="$v.email.$dirty">
                      <p class="error" v-if="!$v.email.required">Email is required</p>
                      <p class="error" v-if="!$v.email.email">Enter a valid email</p>
                    </div>
                  </div>
                  <div class="col-md-6 mt-2">
                    <input type="password" class="form-control" placeholder="password" value=""
                           :class="{ 'form-group--error': $v.password.$error}"
                           v-model.trim="$v.password.$model"/>
                    <div v-if="$v.password.$dirty">
                      <p class="error" v-if="!$v.password.required">Password is required.</p>
                      <p v-if="$v.password.validPassword" style="text-align:left" class="error">
                        Password contains at least One Uppercase, One Lowercase, One Number
                      </p>
                      <p class="error" v-if="!$v.password.minLength">Password must have at least
                        {{ $v.password.$params.minLength.min }} letters.
                      </p>
                    </div>
                  </div>
                  <!--                <div class="form-group form-check">-->
                  <!--                  <input type="checkbox" class="form-check-input" @click="toggleShowPassword" v-model="showPassword"/>-->
                  <!--                 <label class="form-check-label"> Show Password</label>-->
                  <!--                </div>-->
                  <div class="col-md-6">
                    <input type="text" class="form-control mt-3" placeholder="First name"
                           v-model.trim="$v.first_name.$model"
                           value="">
                    <div v-if="$v.first_name.$dirty">
                      <p class="error" v-if="!$v.first_name.required">Name is required</p>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <input type="password" class="form-control" placeholder="Confirm Password"
                           value="" v-model.trim="$v.repeatPassword.$model">
                    <div>
                      <div v-if="$v.repeatPassword.$dirty">
                        <!--                      <p  class="error" v-if="!$v.repeatPassword.required">Password is Required. </p>-->
                        <p class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2 mb-4">
                <div class="col-md-6 mt-3">
                  <input type="text" class="form-control" placeholder="Last Name" value=""
                         v-model.trim="$v.last_name.$model">
                  <div v-if="$v.last_name.$dirty">
                    <div class="error" v-if="!$v.last_name.required">Last Name is required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row white-bg mt-4 pb-4 border-right">
          <div class="p-3 py-5 d-flex justify-content-between align-items-center ">
            <h4 class="text-right title">Organization Details</h4>
          </div>
          <div class="col-md-6 d-flex px-5">
            <label ref="fileId">
              <img v-if="!imageSelected" src="../assets/addImage.jpg" style="cursor: pointer" class="rounded-circle"
                   height="200" width="200"/>
              <img v-else :src="image" class="rounded-circle" style="cursor: pointer" height="200" width="200"/>
              <input type="file" id="fileId" style="display: none " @change="previewImage($event)"/>
            </label>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control mt-3" placeholder="Organization Name" value=""
                   v-model.trim="$v.organization_name.$model">
            <div v-if="$v.organization_name.$dirty">
              <div class="error" v-if="!$v.organization_name.required">Organization Name is required</div>
            </div>
            <div>
              <input type="text" class="form-control mt-3" value="" placeholder="Address" v-model="address">
            </div>
            <div v-if="$v.address.$dirty">
              <div class="error" v-if="!$v.address.required">Address is required</div>
            </div>
            <div class=" mt-2 input-group rent-input contact-input-item ">
              <div class="input-group-prepend">
                <vue-phone-number-input v-model.trim="$v.yourValue.$model" name="tel" required
                                        @update="validPhoneNumber($event)"></vue-phone-number-input>
                <div v-if="$v.yourValue.$dirty">
                  <div class="error" v-if="!$v.yourValue.required">Phone Number is required</div>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center save-btn py-3">
              <button class="btn btn-primary profile-button" disabled
                      :class="(isDisabled) ? '' : 'selected'" type="submit"
                      v-if="email === '' || !$v.email.email ||
                            first_name === '' || !$v.first_name.required ||
                            last_name === '' || !$v.last_name.required ||
                            password === '' || !$v.password.required ||
                            repeatPassword === '' || !$v.repeatPassword.required ||
                            organization_name === '' || !$v.organization_name.required ||
                            address === '' || !$v.address.required||
                            yourValue === '' || !$v.yourValue.required ||
                            file === '' || !$v.file.required">Save Profile
              </button>
              <button v-else type="submit" class="btn btn-primary profile-button" @click="register">Save Profile
              </button>
            </div>
          </div>
          <!-- <label for="file-upload" class="custom-file-upload">-->
          <!--  <i class="fa fa-cloud-upload"></i> Upload Image-->
          <!--</label>-->
          <!-- <input id="file-upload" name='upload_cont_img' type="file" style="display:none;">-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {required, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
import email from "vuelidate/lib/validators/email";

export default {

  data() {
    return {
      image: '',
      file: '',
      yourValue: '',
      imageSelected: false,
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      errors: [],
      first_name: '',
      last_name: '',
      email: null,
      password: null,
      repeatPassword: null,
      organization_name: '',
      address: '',
      phoneNumber: {
        countryCode: '',
        e164: ''
      },
    };
  },
  computed: {
    //   isDisabled() {
    //     return this.$v.$invalid;
    // },

    isDisabled() {
      return this.$v.$invalid;
    },
  },
  validations: {
    first_name: {
      required,
    },
    email: {
      required,
      email
    },
    last_name: {
      required,
    },
    password: {
      required,
      validPassword () {
        const uppercase = /[A-Z]/
        const lowercase = /[a-z]/
        const numbers = /[0-9]/
        return uppercase && lowercase && numbers
      },
      minLength: minLength(6),
      maxLength: maxLength(40)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    organization_name: {
      required
    },
    address: {
      required
    },
    yourValue: {
      required
    },
    phoneNumber: {
      required
    },
    file: {
      required
    }
  },
  mounted() {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email')
    }
  },
  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    }
  },
  methods: {
//user form data
    register() {
      localStorage.email = this.email;
      const data = new FormData()
      data.append('first_name', this.first_name)
      data.append('last_name', this.last_name)
      data.append('email', this.email)
      data.append('workspace_phone_number', this.phoneNumber.e164)
      data.append('country_code', this.phoneNumber.countryCode)
      data.append('password', this.password)
      data.append('password_confirmation', this.repeatPassword)
      data.append('workspace_name', this.organization_name)
      data.append('workspace_address', this.address)
      data.append('account_id', localStorage.getItem('account_id'))
      data.append('file', this.file)

      this.axios.post('register', this.data)
          .then(response => {
            localStorage.email = this.email;
            localStorage.setItem('token', response.data.data.token)
            this.axios.defaults.headers.common.Authorization = 'Bearer' + ' ' + localStorage.getItem('token')
            console.warn(response)
            this.$router.push('/plans')
          })

          .catch((error) => {
            this.errors = error.response.data.data
          })
    },
    previewImage(event) {
      this.imageSelected = true
      var input = event.target
      if (input.files) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.image = e.target.result
        }
        this.file = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    },
    validPhoneNumber(event) {
      this.phoneNumber.e164 = event.e164
      this.phoneNumber.countryCode = event.countryCode
    },

  }
}
</script>

<style scoped>

.form-control:focus {
  box-sh0adow: none;
  border-color: #86b7fe !important;
  color: #86b7fe;
}

.profile-button {
  background: #5b88cb;
  box-shadow: none;
  border: none
}

.profile-button:hover {
  background: #0071bc;
}

.profile-button:focus {
  background: #5b88cb;
  box-shadow: none
}

.profile-button:active {
  background: #58abe3;
  box-shadow: none
}

.save-btn {
  float: right;
}

.error {
  color: red;
  text-align: initial;
}
</style>
