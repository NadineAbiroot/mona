<template>
  <div class="">
    <div class="background">
      <img class="logo mt-4 mb-md-0" src="../assets/mona-logo.png" alt="Card image cap">
    <div class="container pt-4">
      <img class="card-img-top" src="../assets/relationships.jpg" alt="Card image cap">
    </div>
      <div class="pt-4">
      <button type="submit" class="btn btn-block mb-4 mx-4 px-5 py-1 signin">Sign In</button>
      <button type="submit" class="btn btn-block mb-4 px-5 py-1 signup" @click="signUp">Sign Up</button>
      </div>
  </div>
  </div>
</template>


  <script>
     export default {

       methods:{
         signUp(){
           this.$router.push('/signup')
         }
       }
     }
  </script>

<style>

.btn{

  color:white;
  border-radius:2px;
}
.signup{
  background-color: #0c3754;
}
.signin{
  background-color: #0071bc;
}
.signup:hover{
  background-color: white;
  color: #0071bc;
  border:1px solid #0071bc;
}
.signin:hover{
  background-color: white;
  color: #0c3754;
  border:1px solid #0c3754;
}
.btn-check:focus + .btn, .btn:focus{
  box-shadow:unset;
}
</style>
