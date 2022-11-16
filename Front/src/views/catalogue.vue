<template>
  <div class="products" style="margin-top: 35px">
    <div>
      <div class="product-items" v-if="products">
        <catalogue
          v-for="catalogue of products"
          :key="catalogue.id"
          :name="catalogue.name"
          :price="catalogue.price"
          :picture="catalogue.picture"
          :stock="catalogue.stock"
          :category="catalogue.category"
          :sent_by="catalogue.sent_by"
          :sold_by="catalogue.sold_by"
          :id="catalogue._id"
        />
      </div>

      <div v-else style="margin: auto; display: flex">
        <h1 style="margin: auto">Welcome in Zomana</h1>
        <div class="loader">
          <BeatLoader
            class="custom-class"
            :loading="this.loading"
            color="#85808F"
            size="27"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BeatLoader } from "@saeris/vue-spinners";

import catalogue from "../components/catalogue";

export default {
  name: "Home",
  components: {
    BeatLoader,
    catalogue,
  },
  data: () => ({
    loading: true,
  }),
  mounted() {
    this.$store.dispatch("products/allproduct");
  },

  computed: {
    //bien nommer la fonction comme ce que tu récupère en state la tu récup les products donc la fonction s'appelle product
    // si on avais eu le state detail dans le fichier products.store on pourrait faire this.$store.state.products.détail et du coup il aurait fallut appeler
    // fonction details
    products() {
      console.log("rr", this.$store.state.products.products);
      return this.$store.state.products.products;
    },
  },
};
</script>

<style scoped>
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
