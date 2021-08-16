<template>
  <div class="">
    <div class="background">
        <p class="slider-title pt-5">Complete Your Profile </p>
      <div class="container">
        <div class=" d-flex justify-content-center">
          <div class="box col-md-4 text-center">
            <svg id="Capa_1" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g id="Email_2_"><g><path d="m463.4 371.199 26.701 49.801h-465.199l16.498-41.7-41.4 24.9v-313.2l256 120 256-120v309.6z" fill="#ffbe40"/></g><path d="m490.101 421-26.701-49.801 48.6 29.401v-309.6l-256 120v210z" fill="#ff9f40"/><path d="m512 91-256 225-256-225h256z" fill="#ffdf40"/><path d="m512 91c-89.421 0-173.156 0-256 0v225z" fill="#ffbe40"/><g><path d="m512 400.6v20.4h-21.899l-64.501-75.3 22.8-19.501z" fill="#ffbe40"/></g><g><path d="m86.4 349.3-61.498 71.7h-24.902v-16.8l63.6-74.401z" fill="#ffdf40"/></g></g></svg>
            <p class="yellow pt-3"> Confirm Your Email</p>
            <p class="confirm-text">Your Account has been successfully registered. To complete the
            process,p please check your email for a validation request.</p>
            <p class="confirm-text">If no email received you can <span class="resend"> Resend the confirmation email</span></p>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>

export default {
  name:'Confirm',
  methods: {

  },
}
</script>

<style>
.confirm-text{
  font-size:12px;
  color:grey;
}
.resend{
  color:#f0b23b;
  font-weight:bold;
}
</style>
