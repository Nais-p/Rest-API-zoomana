<template>
  <div id="container2">
    <form
      @submit.prevent="create"
      style="max-width: 600px; margin-right: auto; margin-left: auto"
    >
      <div class="rowe">
        <v-form ref="form" v-model="valid" id="myForm">
          <h2>Add new Shop</h2>
          <br>
          <div>
            <label><b>Name</b></label>
            <v-text-field
            placeholder="Enter your shop name"
            v-model="data.shop_name"
            :rules="shop_nameRule"
            outlined
            background-color="white"
            autocomplete="shop_name"
          />

          <label><b>Shop Address</b></label>
          <v-text-field
            placeholder="Enter your shop address"
            v-model="data.localization.address"
            :rules="addressRule"
            outlined
            background-color="white"
            autocomplete="address"
          />

          <label><b>Shop City</b></label>
          <v-text-field
            placeholder="Enter your shop city"
            v-model="data.localization.city"
            :rules="cityRule"
            outlined
            background-color="white"
            autocomplete="city"
          />

          <label><b>Shop Postale Code</b></label>
          <v-text-field
            placeholder="Enter your shop postal code"
            v-model="data.localization.postal_code"
            :rules="postal_codeRule"
            outlined
            background-color="white"
            autocomplete="postal_code"
          />

          <label><b>Shop Country</b></label>
          <v-text-field
            placeholder="Enter your shop country"
            v-model="data.localization.country"
            :rules="countryRule"
            outlined
            background-color="white"
            autocomplete="country"
          />
          </div>
        </v-form>
      </div>
      <div style="">
        <v-card-actions class="justify-start">
          <v-btn
            type="submit"
            value="Submit"
            style="min-width: 140px;"
            class=""
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
  computed: {
    ...mapState({
      // Récupération de authentification, role et username du store
      id: (state) => state.users.id,
    }),
  },
  methods: {
    async create() {
      const body = this.data;

      axios
        .post(`http://localhost:3000/api/seller-shop/${this.id}`, body, {})
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
/* label {
  margin: 0%;
} */
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
.btn-cart {
  background: black;
  color: white;
  width: max-content;
  padding: 10px;
  float: right;
  margin: 20px;
}
</style>
