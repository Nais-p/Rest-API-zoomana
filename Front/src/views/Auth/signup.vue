<template>
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form>
        <div>
          <h1 style="padding-top: 0px">Sign Up</h1>
          <a href="signin">Already have an account login</a>

          <v-form ref="form" v-model="valid">
            <div>
              <v-text-field
                placeholder="email"
                type="email"
                v-model="email"
                autocomplete="current-password"
                :rules="emailRule"
                outlined
                background-color="white"
              />

              <v-text-field
                placeholder="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                :rules="passwordRule"
                outlined
                background-color="white"
              />

              <v-text-field
                placeholder="username"
                v-model="username"
                :rules="usernameRule"
                outlined
                background-color="white"
                autocomplete="username"
              />
            </div>
            <div>
              <a href="/">Continue without login me</a>

              <v-card-actions class="justify-end"
                ><v-btn style="min-width: 140px" @click="registerSeller"
                  >Sign Up</v-btn
                ></v-card-actions
              >
            </div>
          </v-form>
        </div>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <!-- //partie gauche  CLIENT-->
      <form>
        <div>
          <h1 style="padding-top: 0px">Sign Up</h1>
          <a href="signin">Already have an account login</a>

          <v-form ref="form" v-model="valid">
            <div>
              <v-text-field
                placeholder="email"
                type="email"
                v-model="email"
                autocomplete="current-password"
                :rules="emailRule"
                outlined
                background-color="white"
              />

              <v-text-field
                placeholder="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                :rules="passwordRule"
                outlined
                background-color="white"
              />

              <v-text-field
                placeholder="username"
                v-model="username"
                :rules="usernameRule"
                outlined
                background-color="white"
                autocomplete="username"
              />
            </div>
            <div>
              <a href="/">Continue without login me</a>

              <v-card-actions class="justify-end"
                ><v-btn style="min-width: 140px" @click="registerClient"
                  >Sign Up</v-btn
                ></v-card-actions
              >
            </div>
          </v-form>
        </div>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>To access your customer account</h1>
          <p>Click here</p>
          <button class="ghost" id="signIn">Sign Up</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>You are a professional</h1>
          <p>Sign Up here</p>
          <button class="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,

      username: "",
      usernameRule: [(v) => !!v || "Username expected"],
      email: "",
      emailRule: [(v) => !!v || "Email expected"],
      password: "",
      passwordRule: [(v) => !!v || "Password expected"],
    };
  },
  mounted() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  },
  methods: {
    async registerClient() {
      if (this.$refs.form.validate()) {
        const payload = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: "client",
        };
        try {
          await this.$store.dispatch("users/signup", payload);
          this.$snotify.success("Account has been created");
          setTimeout(() => {
            this.$router.push("/signin");
          }, 2000);
          this.$refs.form.reset();
        } catch (error) {
          this.$snotify.error("Invalid informations");
        }
      }
    },
    async registerSeller() {
      if (this.$refs.form.validate()) {
        const payload = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: "seller",
        };
        try {
          await this.$store.dispatch("users/signup", payload);
          this.$snotify.success("Account has been created");
          setTimeout(() => {
            this.$router.push("/signin");
          }, 2000);
          this.$refs.form.reset();
        } catch (error) {
          this.$snotify.error("Invalid informations");
        }
      }
    },
    // submit() {
    //   axios
    //     .post("http://localhost:8000/api/users/login", this.form)
    //     .then((response) => {
    //       console.log("response ", response);
    //       if (response.status == 200) {
    //         this.$router.push("/");
    //       } else {
    //         confirm(
    //           "Erreur connection refusée vérifiez les informations saisies"
    //         );
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("err11 ", err);
    //     });
    // },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
  margin-top: 20px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin: auto;
  margin-top: 10%;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #b0b6c8;
  background: #d2d7e4;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #6d84a5;
  background: linear-gradient(to right, #b0b6c8, #6d84a5) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}

.footer {
  margin-top: 25px;
  text-align: center;
}

.icons {
  display: flex;
  width: 30px;
  height: 30px;
  letter-spacing: 15px;
  align-items: center;
}
</style>
