<template>
  <div id="container2">
    <form
      @submit.prevent="onSubmit"
      style="max-width: 600px; margin-right: auto; margin-left: auto"
    >
      <div class="rowe">
        <v-form ref="form" v-model="valid" id="myForm">
          <h2>Add new product</h2>
          <div>
            <label><b>Name</b></label>
            <v-text-field
              placeholder="Enter your product name"
              v-model="name"
              :rules="nameRule"
              outlined
              background-color="white"
              autocomplete="name"
            />
            <label><b>Description</b></label>
            <v-text-field
              placeholder="Enter your product description"
              v-model="description"
              :rules="descriptionRule"
              outlined
              background-color="white"
              autocomplete="description"
            />
            <label><b>Stock</b></label>
            <v-text-field
              placeholder="Enter your stock"
              v-model="stock"
              :rules="stockRule"
              outlined
              background-color="white"
              autocomplete="stock"
            />
            <label><b>Picture</b></label>
            <br />
            <input
              class="upload-box"
              type="file"
              counter
              show-size
              chips
              @change="onFileUpload"
            />
            <br />
            <br />

            <label><b>Price</b></label>
            <v-text-field
              placeholder="Enter your price"
              v-model="price"
              :rules="priceRule"
              outlined
              background-color="white"
              autocomplete="price"
            />
            <label><b>Delivery Price</b></label>
            <v-text-field
              placeholder="Enter your delivery price"
              v-model="delivery_price"
              :rules="deliverypriceRule"
              outlined
              background-color="white"
              autocomplete="deliveryprice"
            />
            <label><b>Sent By</b></label>
            <v-text-field
              placeholder="Enter sent by"
              v-model="sent_by"
              :rules="sentbyRule"
              outlined
              background-color="white"
              autocomplete="sentby"
            />
          </div>
          <div>
            <label><b>Height</b></label>
            <v-text-field
              placeholder="Enter your product height"
              v-model="height"
              :rules="heightRule"
              outlined
              background-color="white"
              autocomplete="height"
            />
            <label><b>Width</b></label>
            <v-text-field
              placeholder="Enter your product width"
              v-model="width"
              :rules="widthRule"
              outlined
              background-color="white"
              autocomplete="width"
            />
            <label><b>Depth</b></label>
            <v-text-field
              placeholder="Enter your product depth"
              v-model="depth"
              :rules="depthRule"
              outlined
              background-color="white"
              autocomplete="depth"
            />
            <label><b>Weight</b></label>
            <v-text-field
              placeholder="Enter your product weight"
              v-model="weight"
              :rules="weightRule"
              outlined
              background-color="white"
              autocomplete="weight"
            />
            <label><b>Material</b></label>
            <v-text-field
              placeholder="Enter your product material"
              v-model="material"
              :rules="materialRule"
              outlined
              background-color="white"
              autocomplete="material"
            />
            <label><b>Additional Information</b></label>
            <v-text-field
              placeholder="Enter your additional information"
              v-model="additional_information"
              outlined
              :rules="additionalinformationRule"
              background-color="white"
              autocomplete="additionalinformation"
            />
            <label><b>Sold By</b></label>

            <v-text-field
              placeholder="Enter sold by"
              v-model="sold_by"
              outlined
              :rules="soldbyRule"
              background-color="white"
              autocomplete="soldby"
            />
          </div>
        </v-form>
      </div>
      <div style="">
        <v-card-actions class="justify-start">
          <v-btn
            type="submit"
            value="Submit"
            style="min-width: 140px; "
            class="btn-cart"
            @click.stop="close"
          >
            Save
          </v-btn>
        </v-card-actions>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      showButton: true,

      filee: null,
      name: "",
      valid: true,
      isActive: false,
      data: {},
      picture: [],
      nameRule: [(v) => !!v || "name expected"],
      description: "",
      descriptionRule: [(v) => !!v || "description expected"],
      stock: "",
      stockRule: [(v) => !!v || "stock expected"],
      pictureRule: [(v) => !!v || "picture expected"],
      price: "",
      priceRule: [(v) => !!v || " price expected"],
      delivery_price: "",
      deliverypriceRule: [(v) => !!v || "deliveryprice expected"],
      sent_by: "",
      sentbyRule: [(v) => !!v || "sentby expected"],
      height: "",
      heightRule: [(v) => !!v || " height expected"],
      width: "",
      widthRule: [(v) => !!v || "width expected"],
      depth: "",
      depthRule: [(v) => !!v || "depth expected"],
      weight: "",
      weightRule: [(v) => !!v || "weight expected"],
      material: "",
      materialRule: [(v) => !!v || "material expected"],
      additional_information: "",
      additionalinformationRule: [
        (v) => !!v || "additionalinformation expected",
      ],
      sold_by: "",
      soldbyRule: [(v) => !!v || "soldby expected"],
    };
  },

  computed: {
    ...mapState({
      // Récupération de authentification, role et username du store
      id: (state) => state.users.id,
    }),
  },

  methods: {
    onFileUpload(event) {
      this.filee = event.target.files[0];
    },
    async onSubmit() {
      // upload file
      const formData = new FormData();
      formData.append("filee", this.filee);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("stock", this.stock);

      formData.append("price", this.price);
      formData.append("delivery_price", this.deliveryprice);
      formData.append("sent_by", this.sent_by);
      formData.append("height", this.height);
      formData.append("width", this.width);
      formData.append("depth", this.depth);

      formData.append("weight", this.weight);
      formData.append("material", this.material);
      formData.append("additional_information", this.additional_information);
      formData.append("sold_by", this.sold_by);

      axios
        .post(
          `http://localhost:3000/api/new-product/${this.$route.params.id}/${this.id}`,
          formData,
          {}
        )
        .then((res) => {
          console.log(res);
        });
      console.log(this.$route.params.id, this.id);
    },
    open() {
      this.$emit("open");
      this.isActive = true;
    },

    close(e) {
      if (this.$refs.content.contains(e.target)) return;

      this.$emit("close");
      this.isActive = false;
    },
  },
};
</script>

<style>
label {
  margin: 0%;
}
.rowe {
  background-color: transparent;
  /* display: flex; */
  flex-direction: row;
  flex-wrap: nowrap;
}

#container2 {
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
}

#container2 h2 {
  width: 38%;
  margin: 0 auto;
  padding-bottom: 2%;
  text-align: center;
}

input[type="text2"] {
  width: 100%;
  padding: 15pt 20pt;
  margin: 8pt 0;
  display: inline-block;
  border: 1pt solid #ccc;
  box-sizing: border-box;
}

input[type="button"] {
  background-color: grey;
  color: white;
  padding: 14pt 20pt;
  margin: 8pt 0;
  border: #2c3e50;
  cursor: pointer;
  width: 100%;
}

input[type="button"]:hover {
  background-color: #6d84a5;
  color: white;
  border: none;
}
.btn-cart {
  background: black;
  color: white;
  width: max-content;
  padding: 10px;
  float: right;
  margin: 20px;
}
</style>
