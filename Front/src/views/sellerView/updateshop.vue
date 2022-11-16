<template>
  <div>
    <div>
      <form>
        <div>
          <v-form ref="form" v-model="valid">
            <h2>Update my shop</h2>
            <br />
            <label><b>Shop Name</b></label>
            <div>
              <v-text-field
                placeholder="Enter your shop name"
                v-model="data.shop_name"
                :rules="shop_nameRule"
                outlined
                background-color="white"
                autocomplete="shop_name"
              />
              <label><b>Shop adrress</b></label>

              <v-text-field
                placeholder="Enter your shop address"
                v-model="data.localization.address"
                :rules="addressRule"
                outlined
                background-color="white"
                autocomplete="shop_name"
              />
              <label><b>Shop city</b></label>

              <v-text-field
                placeholder="Enter your shop city"
                v-model="data.localization.city"
                :rules="cityRule"
                outlined
                background-color="white"
                autocomplete="shop_name"
              />
              <label><b>Shop postal code</b></label>

              <v-text-field
                placeholder="Enter your shop postal code"
                v-model="data.localization.postal_code"
                :rules="countryRule"
                outlined
                background-color="white"
                autocomplete="shop_name"
              />
              <label><b>Shop country</b></label>

              <v-text-field
                placeholder="Enter your shop country"
                v-model="data.localization.country"
                outlined
                background-color="white"
                autocomplete="shop_name"
              />
            </div>
            <div>
              <v-card-actions class="justify-start">
                <v-btn style="min-width: 140px;" @click="create"
                  >Save</v-btn
                >
              </v-card-actions>
            </div>
          </v-form>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      valid: true,
      data: {
        localization: {},
      },
      address: "",
      addressRule: [(v) => !!v || "Address expected"],
      city: "",
      cityRule: [(v) => !!v || "city expected"],
      postal_code: "",
      postal_codeRule: [(v) => !!v || "postal_code expected"],
      country: "",
      countryRule: [(v) => !!v || "country expected"],
      shop_name: "",
      shop_nameRule: [(v) => !!v || "shop_name expected"],
    };
  },

methods: {
    async create() {
      const body = this.data;

      axios
        .put(`http://localhost:3000/api/modify-shop/${this.id}`, body, {})
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
#contain {
  width: 400pt;
  margin: 0 auto;
  margin-top: 0px;
}

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

input[type="text3"] {
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
</style>
