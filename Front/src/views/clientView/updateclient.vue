<template>
  <div class="container" id="contain">
    <div class="form-container sign-up-container">
      <form class="form">
        <div>
          <v-form ref="form" v-model="valid">
            <h2>Edit account information</h2>
            <label><b>Firstname</b></label>
            <div>
              <v-text-field
                placeholder="Change your firstname"
                v-model="data.firstname"
                :rules="firstnameRule"
                outlined
                background-color="white"
                autocomplete="firstname"
              />

              <label><b>Lastname</b></label>
              <v-text-field
                placeholder="Change your lastname"
                v-model="data.lastname"
                :rules="lastnameRule"
                outlined
                background-color="white"
                autocomplete="lastname"
              />

              <label><b>Delivery Address</b></label>

              <v-text-field
                placeholder="Change your delivery address"
                v-model="data.delivery_address"
                :rules="delivery_addressRule"
                outlined
                background-color="white"
                autocomplete="delivery_address"
              />

              <label><b>Billing Address</b></label>

              <v-text-field
                placeholder="Change your billing_address"
                v-model="data.billing_address"
                :rules="billing_addressRule"
                outlined
                background-color="white"
                autocomplete="billing_address"
              />

              <label><b>City</b></label>

              <v-text-field
                placeholder="Change your city"
                v-model="data.city"
                :rules="cityRule"
                outlined
                background-color="white"
                autocomplete="city"
              />
              <label><b>Postale Code</b></label>

              <v-text-field
                placeholder="Change your postal code"
                v-model="data.postal_code"
                :rules="postal_codeRule"
                outlined
                background-color="white"
                autocomplete="postal_code"
              />
              <label><b>Country</b></label>

              <v-text-field
                placeholder="Change your country"
                v-model="data.country"
                :rules="countryRule"
                outlined
                background-color="white"
                autocomplete="country"
              />

              <label><b>Phone</b></label>

              <v-text-field
                placeholder="Change your number_phone"
                v-model="data.number_phone"
                :rules="number_phoneRule"
                outlined
                background-color="white"
                autocomplete="number_phone"
              />
            </div>
            <div>
              <v-card-actions class="justify-start">
                <v-btn style="min-width: 140px;" @click="up">Save</v-btn>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      valid: true,
      data: {},
      firstname: "",
      firstnameRule: [(v) => !!v || "firstname expected"],
      lastname: "",
      lastnameRule: [(v) => !!v || "lastname expected"],
      delivery_address: "",
      delivery_addressRule: [(v) => !!v || "delivery address expected"],
      billing_address: "",
      billing_addressRule: [(v) => !!v || "billing addressexpected"],
      city: "",
      cityRule: [(v) => !!v || "city expected"],
      postal_code: "",
      postal_codeRule: [(v) => !!v || "postal_code expected"],
      country: "",
      countryRule: [(v) => !!v || "country expected"],
      number_phone: "",
      number_phoneRule: [(v) => !!v || "number_phone expected"],
    };
  },
  computed: {
    ...mapState({
      // Récupération de authentification, role et username du store
      id: (state) => state.users.id,
    }),
  },
  methods: {
    async up() {
      const body = this.data;

      axios
        .put(`http://localhost:3000/api/modify-client/${this.id}`, body, {})
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
</style>
