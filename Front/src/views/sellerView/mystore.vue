<template>
  <v-app style="" class="d-flex align-center mr-5">
    <div>
      <button
        @click="(showModal3 = true), (showButton = false)"
        v-if="showButton"
        style="float: right;margin: 20px;"
        class="btn-cart"
      >
        Add Shop <span> <i class="fas fa-plus"></i></span>
      </button>
      <!-- <modal
        ref="modal"
        @open="showButton = false"
        @close="showButton = true"
      /> -->
    </div>

    <div
      class="cards-wrapper"
      v-if="showButton"
      style="display: flex;margin-top: 10%;margin-bottom: auto"
    >
      <!-- <div> -->
      <div v-for="shop in shop" :key="shop.id" class="card">
        <div class="card">
          <v-img
            @click="
              $router.push({
                name: 'myshop',
                params: {
                  id: shop._id,
                },
              })
            "
            v-if="shop.picture"
            :src="shop.picture"
            style="top: 0px"
          ></v-img>

          <v-img
            @click="
              $router.push({
                name: 'myshop',
                params: {
                  id: shop._id,
                },
              })
            "
            v-else
            src="../../assets/logo.png"
            style="top: 0px;    width: 300px;"
          ></v-img>

          <p style="text-align: center">{{ shop.shop_name || "no name" }}</p>
          <div style="display: flex; justify-content: space-between;">
            <v-icon
              color="red"
              @click="
                (showModal2 = true), (showButton = false), (id = shop._id)
              "
              >fas fa-trash</v-icon
            >
            <v-icon
              color="blue"
              @click="(showModal = true), (showButton = false), (id = shop._id)"
              >fas fa-pen</v-icon
            >
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <div>
      <div
        class="overlay"
        v-if="showModal"
        @click="(showModal = false), (showButton = true)"
      />

      <div class="containn modal" v-if="showModal">
        <div class="form-container  modal-wrapper">
          <div class="form modal-container">
            <button
              class="close"
              @click="(showModal = false), (showButton = true)"
            >
              <v-icon color="red">fas fa-times</v-icon>
            </button>
            <br />
            <br />

            <updateshop :id="id" />
            <v-card-actions class="justify-end" style="margin-top: -13%">
              <v-btn
                type="submit"
                value="Submit"
                style="min-width: 140px; margin-bottom: 30px; ;"
                class=""
                @click="(showModal = false), (showButton = true)"
              >
                Add
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        class="overlay"
        v-if="showModal3"
        @click="(showModal3 = false), (showButton = true)"
      />

      <div class="containn modal" v-if="showModal3">
        <div class="form-container  modal-wrapper">
          <div class="form modal-container">
            <button
              class="close"
              @click="(showModal3 = false), (showButton = true)"
            >
              <v-icon color="red">fas fa-times</v-icon>
            </button>

            <br />
            <br />
            <news :id="id" />
            <v-card-actions class="justify-end" style="margin-top: -13%">
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

    <div>
      <div
        class="overlay"
        v-if="showModal2"
        @click="(showModal2 = false), (showButton = true)"
      />

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
            <p>Are you sure to delete the store ?</p>
            <v-btn
              @click="delshop(),(showModal2 = false), (showButton = true)"
            >
              yes
            </v-btn>
            <v-btn @click="(showModal2 = false), (showButton = true)">
              No
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import updateshop from "./updateshop.vue";
import news from "./form/newshop.vue";
import { mapState } from "vuex";

export default {
  components: {
    updateshop,
    news,
  },
  data() {
    return {
      id: "",
      showModal: false,
      showModal2: false,
      showModal3: false,

      showButton: true,
      isModalOpen: false,
    };
  },
  mounted() {
    this.$store.dispatch("shops/shopseller", { id: this.id_user });
  },
  computed: {
    shop() {
      return this.$store.state.shops.shop;
    },

    ...mapState({
      // Récupération de authentification, role et username du store
      id_user: (state) => state.users.id,
    }),
  },
  methods: {
    async delshop() {
      try {
        await this.$store.dispatch("shops/deleteshop", { _id: this.id });

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
.btn-cart {
  background: black;
  color: #f6f6f49c;
  width: max-content;
  padding: 10px;
  float: right;
  margin: 20px;
}

.containn {
  width: 100%;
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

.modal {
  position: fixed;
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    margin: 0 auto;
    padding: 20px 30px;
  }
}
.cards-wrapper {
  grid-column: center-start / -1;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  overflow: auto;
  padding-bottom: 1rem;
  padding-right: var(--page-margin);

  .card {
    display: grid;
    place-content: center;
    background-color: #edededbd;
    color: #000000;
    font-size: 1.5rem;
    height: 20rem;
    min-width: 20rem;
  }
}
</style>
