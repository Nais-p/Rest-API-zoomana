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
              <label><b>Type Seller</b></label>

              <v-text-field
                placeholder="Change your type seller"
                v-model="data.type_seller"
                :rules="type_sellerRule"
                outlined
                background-color="white"
                autocomplete="type_seller"
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
      type_seller: "",
      type_sellerRule: [(v) => !!v || "type_seller expected"],
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
        .put(`http://localhost:3000/api/modify-seller/${this.id}`, body, {})
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
