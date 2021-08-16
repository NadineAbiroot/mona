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
          <p class="slider-title"> Choose Your Account Plan</p>
        </div>
      </div>
      <div class="container">
        <div class="row cardsPosition pt-5">
          <div class="col-md-3 card" v-for="plan in plansList" :key="plan.id" @click="planRedirect( plan.id)">
            <div class="image pt-4">
              <img class="card-img-top" src="../assets/img4.png" alt="Card image cap">
            </div>
            <!--<img :src="'/storage/'+account.image" alt="">-->
            <div class="card-body">
              <h5 class="card-title">{{ plan.name }}</h5>
              <p class="card-text">{{ plan.description }}</p>
              <!--            <p class="card-text">{{ plan.is_available }}</p>-->
              <!--            <p class="card-text">{{ plan.price }}</p>-->
              <!--            <p class="card-text">{{ plan.seats }}</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plans',
  data() {
    return {
      plansList: [],
      price: '',
      seats: ''
    }
  },
  mounted() {
    this.Plans();
  },

  methods: {
    Plans() {
      this.axios.get('plans', this.plansList)
          .then((response) => {
            this.plansList = response.data.data
          })
          .catch((error) => {
            this.errors = error.response.data.data
          })
    },
    planRedirect(id) {
      this.axios.post('user/plan', {plan_id: id})
          .then(() => {
            this.$router.push('/confirm')
          })
          .catch((error) => {
            this.errors = error.response.data.data
          })
    }
  },
}
</script>
