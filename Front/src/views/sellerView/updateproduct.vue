<template>
  <div>
    <form>
      <div class="rowe">
        <v-form ref="form" v-model="valid">
          <h2>Update my product</h2>
          <div>
            <v-text-field
              placeholder="Enter your product name"
              v-model="data.name"
              :rules="nameRule"
              outlined
              background-color="white"
              autocomplete="name"
            />
            <v-text-field
              placeholder="Enter your product description"
              v-model="data.description"
              :rules="descriptionRule"
              outlined
              background-color="white"
              autocomplete="description"
            />

            <v-text-field
              placeholder="Enter your stock"
              v-model="data.stock"
              :rules="stockRule"
              outlined
              background-color="white"
              autocomplete="stock"
            />

            <v-text-field
              placeholder="Enter your picture"
              v-model="data.picture"
              :rules="pictureRule"
              outlined
              background-color="white"
              autocomplete="picture"
            />

            <v-text-field
              placeholder="Enter your price"
              v-model="data.price"
              :rules="priceRule"
              outlined
              background-color="white"
              autocomplete="price"
            />

            <v-text-field
              placeholder="Enter your delivery price"
              v-model="data.deliveryprice"
              :rules="deliverypriceRule"
              outlined
              background-color="white"
              autocomplete="deliveryprice"
            />

            <v-text-field
              placeholder="Enter sent by"
              v-model="data.sentby"
              :rules="sentbyRule"
              outlined
              background-color="white"
              autocomplete="sentby"
            />
          </div>
          <div>
            <v-text-field
              placeholder="Enter your product height"
              v-model="data.height"
              :rules="heightRule"
              outlined
              background-color="white"
              autocomplete="height"
            />

            <v-text-field
              placeholder="Enter your product width"
              v-model="data.width"
              :rules="widthRule"
              outlined
              background-color="white"
              autocomplete="width"
            />

            <v-text-field
              placeholder="Enter your product depth"
              v-model="data.depth"
              :rules="depthRule"
              outlined
              background-color="white"
              autocomplete="depth"
            />

            <v-text-field
              placeholder="Enter your product weight"
              v-model="data.weight"
              :rules="weightRule"
              outlined
              background-color="white"
              autocomplete="weight"
            />

            <v-text-field
              placeholder="Enter your product material"
              v-model="data.material"
              :rules="materialRule"
              outlined
              background-color="white"
              autocomplete="material"
            />

            <v-text-field
              placeholder="Enter your additional information"
              v-model="data.additionalinformation"
              :rules="additionalinformationRule"
              outlined
              background-color="white"
              autocomplete="additionalinformation"
            />
            <v-text-field
              placeholder="Enter sold by"
              v-model="data.soldby"
              :rules="soldbyRule"
              outlined
              background-color="white"
              autocomplete="soldby"
            />
          </div>
        </v-form>
      </div>
      <v-card-actions class="justify-start">
        <v-btn style="min-width: 140px;" @click="create">Save</v-btn>
      </v-card-actions>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],

  data() {
    return {
      showModal: false,
      valid: true,
      isActive: false,
      data: {},
      name: "",
      nameRule: [(v) => !!v || "name expected"],
      description: "",
      descriptionRule: [(v) => !!v || "description expected"],
      stock: "",
      stockRule: [(v) => !!v || "stock expected"],
      picture: "",
      pictureRule: [(v) => !!v || "picture expected"],
      price: "",
      priceRule: [(v) => !!v || " price expected"],
      deliveryprice: "",
      deliverypriceRule: [(v) => !!v || "deliveryprice expected"],
      sentby: "",
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
      additionalinformation: "",
      additionalinformationRule: [
        (v) => !!v || "additionalinformation expected",
      ],
      soldby: "",
      soldbyRule: [(v) => !!v || "soldby expected"],
    };
  },

  methods: {
    async create() {
      const body = this.data;

      axios
        .put(`http://localhost:3000/api/modify-product/${this.id}`, body, {})
        .then((res) => {
          console.log(res);
        });
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
