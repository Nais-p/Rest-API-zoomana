<template>
  <div>
    <detail
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :stock="product.stock"
      :picture="product.picture"
      :delivery_price="product.delivery_price"
      :description="product.description"
      :additional_information="product.additional_information"
      :sold_by="product.sold_by"
      :sent_by="product.sent_by"
      :weight="product.weight"
      :height="product.height"
      :width="product.width"
      :depth="product.depth"
      :material="product.material"
      :_id="details._id"
    />
  </div>
</template>

<script>
import detail from "../components/product.vue";
export default {
  components: {
    detail,
  },
  data() {
    return {
      details: [],
      id: this.$route.params.id,
    };
  },

  mounted() {
    this.$store.dispatch("products/productId", { id: this.$route.params.id });
  },

  computed: {
    //bien nommer la fonction comme ce que tu récupère en state la tu récup les products donc la fonction s'appelle product
    // si on avais eu le state detail dans le fichier products.store on pourrait faire this.$store.state.products.détail et du coup il aurait fallut appeler
    // fonction details
    product() {
      console.log("rr", this.$store.state.products.product);
      return this.$store.state.products.product;
    },
  },
};
</script>