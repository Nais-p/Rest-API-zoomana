<template>
  <div>
    <div class="card-wrapper">
      <div class="card" style="background-color: #f8f9fa">
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img :src="`${picture}`" alt="image" />
            </div>
          </div>
        </div>
        <div class="product-content" style="margin-top: 100px">
          <h2 class="product-title" style="text-align: center">
            <a>{{ name }}</a>
          </h2>
          <hr class="my-4" />
          <div class="product-detail">
            <p>Description : {{ description }}</p>
            <p>
              Sizes : {{ height }} x {{ width }} x {{ depth }} cm <br/>
              Weight : {{ weight }} Kg <br/>  Material : {{material}}
            </p>
         
          </div>
          <div class="product-info">
            <div class="product-price">
              <h2>{{ price }}€</h2>
            </div>
          </div>

          <div v-if="stock > '0'">
            <p>
              <font-awesome-icon icon="tag" />
              {{ stock }} In stock, Delivery within 7 days
              <br>
              Delivery Price : {{delivery_price}} €
            </p>
<br>
            <p>
              Sold_by : {{ sold_by }}
              <br />
              Sent_by : {{ sent_by }}
            </p>
            <p>
              Additional Information : {{additional_information}}
            </p>

            <div class="purchase-info">
              <button
                type="submit"
                class="btn"
                style="background-color: green"
                v-if=" role.includes('client')"
              >
                + Add to cart
              </button>
              <router-link
                :to="{ name: 'products-idPut', params: { idPut: _id } }"
              >
                <button
                  v-if="auth && role.includes('seller')"
                  type="button"
                  class="btn"
                  style="background-color: blue"
                >
                  Edit <i class="fas fa-shopping-cart"></i>
                </button>
              </router-link>
              <button
                v-if="auth && role.includes('seller')"
                type="button"
                class="btn"
                @click="Delete()"
              >
                Delete
              </button>
            </div>
          </div>

          <div v-else>
            <p class="red-text">
              <strong>Product is out of stock</strong>
            </p>

            <div class="purchase-info">
              <router-link
                :to="{ name: 'products-idPut', params: { idPut: _id } }"
              >
                <button
                  v-if="auth && role.includes('seller')"
                  type="button"
                  class="btn"
                  style="background-color: blue"
                >
                  Edit <i class="fas fa-shopping-cart"></i>
                </button>
              </router-link>
              <button
                type="button"
                class="btn"
                @click="Delete()"
                v-if="auth && role.includes('seller')"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// import axios from "axios";
export default {
  props: [
    "name",
    "price",
    "stock",
    "picture",
    "id",
    "delivery_price",
    "description",
    "additional_information",
    "sent_by",
    "sold_by",
    "weight",
    "height",
    "width",
    "depth",
    "material",
  ],

  data() {
    return {
      // id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState({
      // Récupération de authentification, role et username du store
      auth: (state) => state.users.auth,
      role: (state) => state.users.role,
      // username: (state) => state.user.username
    }),
  },
  methods: {
    // Delete() {
    //   if(confirm('Voulez vous supprimer: ' + this.name +' ?')){
    //   axios
    //     .delete("http://localhost:8000/api/products/" + this.id)
    //     .then((response) => {
    //       console.log("response ", response);
    //       if (response.status == 200) {
    //         this.$router.push("/");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("err11 ", err);
    //     });
    //     }
    // },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");
.product-info {
  background: #f6f6f49c;
  padding: 1rem;
}
.product-info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
body {
  line-height: 1.5;
}
.card-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}
img {
  width: 100%;
  display: block;
}
.img-display {
  overflow: hidden;
}
.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}
.img-showcase img {
  min-width: 100%;
}
.img-select {
  display: flex;
}
.img-item {
  margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}
.img-item:hover {
  opacity: 0.8;
}
.product-content {
  padding: 2rem 1rem;
}
.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}
.product-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #256eff;
  color: #fff;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}
.product-link:hover {
  opacity: 0.9;
}
.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}
.product-price span {
  font-weight: 400;
}
.last-price span {
  color: #f64749;
  text-decoration: line-through;
}
.new-price span {
  color: #256eff;
}
.product-detail h2 {
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}
.product-detail p {
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
}
.product-detail ul {
  margin: 1rem 0;
  font-size: 0.9rem;
}
.product-detail ul li {
  margin: 0;
  list-style: none;
  background-size: 18px;
  padding-left: 1.7rem;
  margin: 0.4rem 0;
  font-weight: 600;
  opacity: 0.9;
}
.product-detail ul li span {
  font-weight: 400;
}
.purchase-info {
  margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn {
  border: 1.5px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}
.purchase-info input {
  width: 60px;
}
.purchase-info .btn {
  cursor: pointer;
  color: #fff;
}
.purchase-info .btn:first-of-type {
  background: #256eff;
}
.purchase-info .btn:last-of-type {
  background: #f64749;
}
.purchase-info .btn:hover {
  opacity: 0.9;
}
.social-links {
  display: flex;
  align-items: center;
}
.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}
.social-links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}
.card {
      background-color: rgb(248, 249, 250);
    margin-top: 10%;
}
@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  .card-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-imgs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-content {
    padding-top: 0;
  }
}
</style>