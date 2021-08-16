<template>
  <div class="">
    <div class="background">
      <div class="container">
        <div class="row">
          <img class="logo-left mt-4" src="../assets/mona-logo.png" alt="Card image cap">
        </div>
      </div>
      <p class="slider-title"> What Type Of Account do you want to create</p>
      <div class="container">
      <div class="row cardsPosition pt-5">
        <div class="col-md-3 card" v-for="account in accounts" :key="account.id" @click="redirect( account.id ,account.name )">
          <div class="text-decoration">
            <div class="image pt-4">
              <img class="card-img-top" src="../assets/img1.png" alt="Card image cap">
            </div>
            <!--           <img class="card-img-top" src="../assets/img2.png" alt="Card image cap">-->
            <!--         <img :src="'/storage/'+account.image" alt="">-->
            <div class="card-body">
              <h5 class="card-title">{{ account.name }}</h5>
              <p class="card-text">{{ account.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { asyncLoading } from 'vuejs-loading-plugin'

export default {
  name:'Account',
  data() {
    return {
      accounts: [],
    }
  },
  mounted() {
    this.AccountList();
  },

  methods: {
    async AccountList() {
      asyncLoading(this.axios.get('accounts', this.accounts)
          .then((response) => {
            // this.accounts=account.response.data
            this.accounts = response.data.data
            //
          })
          .catch((error) => {
            this.errors = error.response.data.data
          }))
    },
    redirect(id,name){
      if(name === "Organizational"){
        localStorage.setItem('account_id',id)
        this.$router.push('/profile')
      }
    }
  },
}
</script>

<style>
.card-img-top {
  width: 50%;
  height: 50%;
}
.card-text {
  color: grey;
  font-size: 13px;
}

.card-title {
  color: black;
  font-weight: bold;
  font-size: 20px;
}
.slider-title{
  color:white;
  font-size:35px;
  font-weight:bold;
}
.card {
  border: none;
  background-color: white;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  cursor:pointer;
}
.card:hover{
  background-color:#86aedb;
  color:white;
}
.card:hover .card-title,.card:hover .card-text{
  color:white;
}
</style>
