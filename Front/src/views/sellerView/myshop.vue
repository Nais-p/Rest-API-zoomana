<template>
  <div>
    <button
      @click="(showModal3 = true), (showButton = false)"
      v-if="showButton"
      style="float: right; margin: 20px"
      class="btn-cart"
    >
      Add Product <span> <i class="fas fa-plus"></i></span>
    </button>

    <div v-if="showButton">
      <div
        style="display: grid; grid-template-columns: repeat(4, 5fr); margin: 20px"
      >
        <div
          class="product"
          style="margin-top: 35px"
          v-for="product in shopProduct"
          :key="product._id"
        >
          <div class="product-content">
            <div class="product-img">
              <v-img
                :src="`${product.picture}`"
                alt=""
                style="width: 100%; display: block"
              />
            </div>

            <div class="product-btns">
              <div class="bout">
                <button
                  class="btn-cart"
                  @click="
                    (showModal = true), (id = product._id), (showButton = false)
                  "
                >
                  Modify
                  <v-icon color="white">fas fa-pen</v-icon>
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <div class="product-info">
            <div class="product-info-top">
              <div class="rating"></div>

              <v-icon
                color="red"
                @click="
                  (showModal2 = true), (id = product._id), (showButton = false)
                "
                >fas fa-trash</v-icon
              >
            </div>

            <a href="#" class="product-name">{{ product.name }}</a>
            <p class="product-price">{{ product.price }}€</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="overlay" v-if="showModal2" @click="showModal2 = false" />

    <div class="containn modal" v-if="showModal2">
      <div class="form-container  modal-wrapper">
        <div class="form modal-container">
          <button
            class="close"
            @click="(showModal2 = false), (showButton = true)"
          >
            <v-icon color="red">fas fa-times</v-icon>
          </button>
          <br />
          <br />
          <p>Are you sure to delete the product ? </p>
          <v-btn
            @click="delproduct(), (showModal2 = false), (showButton = true)"
          >
            yes
          </v-btn>
          <v-btn @click="(showModal2 = false), (showButton = true)">
            No
          </v-btn>
        </div>
      </div>
    </div>
    <div class="overlay" v-if="showModal" @click="showModal = false" />

    <div class="modal" v-if="showModal">
      <div class="form-container modal-wrapper">
        <div class="form modal-container">
          <button
            class="close"
            @click="(showModal = false), (showButton = true)"
          >
            <v-icon color="red">fas fa-times</v-icon>
          </button>
          <br />
          <br />

          <updateproduct :id="id" />

          <v-card-actions class="justify-end" style="margin-top: -11%">
            <v-btn
              type="submit"
              value="Submit"
              style="min-width: 140px; margin-bottom: 30px; ;"
              class=""
              @click="(showModal = false), (showButton = true)"
            >
              Update
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </div>
    <div
      class="overlay"
      v-if="showModal3"
      @click="(showModal3 = false), (showButton = true)"
    />

    <div class="modal" v-if="showModal3">
      <div class="form-container modal-wrapper">
        <div class="form modal-container">
          <button
            class="close"
            @click="(showModal3 = false), (showButton = true)"
          >
            <v-icon color="red">fas fa-times</v-icon>
          </button>
          <newp :id="id" />
          <v-card-actions class="justify-end" style="margin-top: -16%">
            <v-btn
              type="submit"
              value="Submit"
              style="min-width: 140px; margin-bottom: 30px; ;"
              class=""
              @click="(showModal3 = false), (showButton = true)"
            >
              Add
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import updateproduct from "./updateproduct.vue";
import newp from "./form/newproduct";
import axios from "axios";
export default {
  name: "Home",
  components: {
    updateproduct,
    newp,
  },
  data() {
    return {
      shopProduct: null,
      id: "",
      showModal: false,
      showModal2: false,
      showModal3: false,

      hide: true,
      showButton: true,
      isModalOpen: false,
    };
  },
  mounted() {
    setInterval(this.get, 1000);
  },

  methods: {
    get: function() {
      axios
        .get(
          "http://localhost:3000/api/product-from-shop/" + this.$route.params.id
        )
        .then((response) => (this.shopProduct = response.data));
    },
    async delproduct() {
      console.log("eeee");
      try {
        await this.$store.dispatch("products/deleteproduct", { _id: this.id });

        this.$snotify.success("Delete success");

        this.$refs.form.reset();
      } catch (error) {
        console.log(error);
      }
    },
    handleClick() {
      this.$refs.modal.open();
    },
  },
};
</script>

<style lang="scss" scoped>
#contain h2 {
  width: 38%;
  margin: 0 auto;
  padding-bottom: 10pt;
  text-align: center;
}

.form {
  padding: 30pt;
  border: 1pt solid #f1f1f1;
  background: #fff;
  box-shadow: 0 0 15pt 0 rgba(0, 0, 0, 0.2), 0 2pt 2pt 0 rgba(0, 0, 0, 0.24);
  margin-bottom: 10px;
  margin-top: 10%;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.157);
  display: table;
  transition: opacity 0.3s ease;
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-container {
    background: #fff;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
    transition: all 0.3s ease;
    margin: 0 auto;
    padding: 20px 30px;
  }
}
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Quicksand", sans-serif;
}
.ee {
  width: 100%;
  display: block;
}
.cate {
  width: 88vw;
  margin: 0 auto;
}
.lg-title,
.md-title,
.sm-title {
  font-family: "Roboto", sans-serif;
  padding: 0.6rem 0;
  text-transform: capitalize;
}
.lg-title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  padding: 1.3rem 0;
  opacity: 0.9;
}
.md-title {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
.sm-title {
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
}
.text-light {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  opacity: 0.5;
  margin: 0.4rem 0;
}
.product-content {
  height: 300px;
  width: 100%;
  background: #edededbd;
  padding: 3rem 0.5rem 2rem 0.5rem;
  cursor: pointer;
}
.product-img {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5);
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  transition: background 0.5s ease;
}
.product:hover .product-img {
  background: #6d84a5;
}
.product-btns {
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.btn-cart,
.btn-buy {
  background: transparent;
  border: 1px solid black;
  padding: 0.8rem 0;
  width: 125px;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.6s ease;
}
.btn-cart {
  background: black;
  color: white;
}
.btn-cart:hover {
  background: #6d84a5;
}
.btn-buy {
  background: white;
}
.btn-buy:hover {
  background: #6d84a5;
  color: #fff;
}
.product-info {
  background: #f6f6f49c;
  padding: 2rem;
}
.product-info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rating span {
  color: #6d84a5;
}
.product-name {
  color: black;
  display: block;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
.product-price {
  padding-top: 0.6rem;
  padding-right: 0.6rem;
  display: inline-block;
  color: #6d84a5;
  font-size: 18px;
}
.product-img img {
  transition: transform 0.6s ease;
}
.product:hover .product-img img {
  transform: scale(1.1);
}
.product:hover .product-btns {
  opacity: 1;
}
.off-info .sm-title {
  background: #6d84a5;
  color: white;
  display: inline-block;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  z-index: 1;
  letter-spacing: 3px;
  cursor: pointer;
}
.product-collection {
  padding: 3.2rem 0;
}
.product-collection-wrapper {
  padding: 3.2rem 0;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50vh;
  padding: 2rem 1.5rem 3.2rem;
  margin: 5px;
}
.product-col-r-bottom > div:first-child {
  background: #eaa001;
}
.product-col-r-bottom > div:last-child {
  background: #0090ff;
}
.product-col-content {
  text-align: center;
  color: white;
}
.product-collection .text-light {
  opacity: 1;
  font-size: 0.8;
  font-weight: 400;
  line-height: 1.7;
}
.btn-dark {
  background: black;
  color: white;
  outline: 0;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  border: 0;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.6s ease;
  font-size: 1rem;
  font-family: inherit;
}
.btn-dark:hover {
  background: #6d84a5;
}
@media screen and (min-width: 992px) {
  .product-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-col-r-bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .product-items {
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  .products .text-light {
    width: 50%;
  }
}
@media screen and (min-width: 1336px) {
  .product-items {
    grid-template-columns: repeat(4, 1fr);
  }
  .product-collection-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .flex {
    height: 60vh;
  }
  .product-col-left {
    height: 121.5vh;
  }
}
</style>
