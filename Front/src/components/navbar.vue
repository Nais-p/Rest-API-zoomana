<template>
  <div id="app">
    <nav>
      <div class="menu-icon">
        <span class="fas fa-bars"> </span>
      </div>
      <div class="nav-items">
        <li>
          <a
            style="font-size: 30px"
            class="nav-items"
            @click="
              $router.push({
                name: 'Home',
              })
            "
            >ZOMANA</a
          >
        </li>
      </div>
      <div style="width: inherit" v-if="auth || role.includes('seller')">
        <div>
          <div class="search-icon">
            <span class="fas fa-search"></span>
          </div>
          <div class="cancel-icon">
            <span class="fas fa-times"></span>
          </div>
          <form action="#">
            <input
              type="search"
              class="search-data"
              placeholder="Search"
              required
            />
            <button type="submit">
              <v-icon>fas fa-search</v-icon>
            </button>
          </form>
        </div>
      </div>

      <div class="nav-items" style="justify-content: flex-end">
        <!-- si le user n'est pas connecté on affiche les bouttons connexion et
        creer un compte -->
        <div class="nav-items" style="" v-if="auth === false">
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </div>

        <div
          class="nav-items"
          style="width: inherit"
          v-if="auth && role.includes('client')"
        >
          <li><a href="#">Cart</a></li>
          <li><a @click="
              $router.push({
                name: 'Updateclient',
              })
            ">My account</a></li>
          <li><a @click="logout">Logout</a></li>
        </div>

        <div
          class="nav-items"
          style="width: inherit"
          v-if="auth && role.includes('seller')"
        >
          <li>
            <a
              @click="
                $router.push({
                  name: 'mystore',
                })
              "
              >My shops</a
            >
          </li>
          <li><a @click="
              $router.push({
                name: 'Updateseller',
              })
            ">My account</a></li>
          <li><a @click="logout">Logout</a></li>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import $ from 'jquery'
import { mapState } from "vuex";

export default {
  mounted() {
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    // const form = document.querySelector("form");
    menuBtn.onclick = () => {
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    };
    // cancelBtn.onclick = () => {
    //   items.classList.remove("active");
    //   menuBtn.classList.remove("hide");
    //   searchBtn.classList.remove("hide");
    //   cancelBtn.classList.remove("show");
    //   form.classList.remove("active");
    //   cancelBtn.style.color = "#ff3d00";
    // };
    // searchBtn.onclick = () => {
    //   form.classList.add("active");
    //   searchBtn.classList.add("hide");
    //   cancelBtn.classList.add("show");
    // };
  },
  computed: {
    ...mapState({
      // Récupération de authentification, role et username du store
      auth: (state) => state.users.auth,
      role: (state) => state.users.role,
      // username: (state) => state.user.username
    }),
  },
  methods: {
    logout() {
      // Lorsque la méthode logout est trigger, on appelle l'action logout et on renvoie l'utilisateur à '/'
      this.$store.dispatch("users/logout");
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  background: #f2f2f2;
}
nav {
  background: #6d84a5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;
}
nav .logo {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
}
nav .nav-items {
  display: flex;
  padding: 0 0 0 40px;
}
nav .nav-items li {
  list-style: none;
  padding: 0 15px;
}
nav .nav-items li a {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
}
nav .nav-items li a:hover {
  color: #d2d7e4;
}
nav form {
  display: flex;
  height: 40px;
  padding: 2px;
  background: #f8f7f9;
  min-width: 18% !important;
  border-radius: 2px;
  border: 1px solid rgba(155, 155, 155, 0.2);
}
nav form .search-data {
  width: 300px;
  height: 100%;
  padding: 0 10px;
  color: #fff;
  font-size: 17px;
  border: none;
  font-weight: 500;
  background: none;
}
nav form button {
  padding: 0 15px;
  color: #fff;
  font-size: 17px;
  background: #6d84a5;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
nav form button:hover {
  background: #6d84a5;
}
nav .menu-icon,
nav .cancel-icon,
nav .search-icon {
  width: 40px;
  text-align: center;
  margin: 0 50px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  display: none;
}
nav .menu-icon span,
nav .cancel-icon,
nav .search-icon {
  display: none;
}
@media (max-width: 1245px) {
  nav {
    padding: 0 50px;
  }
}
@media (max-width: 1300px) {
  nav {
    padding: 0px;
  }
  nav .logo {
    flex: 2;
    text-align: center;
  }
  nav .nav-items {
    position: fixed;
    z-index: 99;
    top: 70px;
    width: 100%;
    left: -100%;
    height: 100%;
    padding: 10px 50px 0 50px;
    text-align: center;
    background: #6d84a5;
    display: inline-block;
    transition: left 0.3s ease;
  }
  nav .nav-items.active {
    left: 0px;
  }
  nav .nav-items li {
    line-height: 40px;
    margin: 30px 0;
  }
  nav .nav-items li a {
    font-size: 20px;
  }
  nav form {
    position: absolute;
    top: 80px;
    right: 50px;
    opacity: 0;
    pointer-events: none;
    transition: top 0.3s ease, opacity 0.1s ease;
  }
  nav form.active {
    top: 95px;
    opacity: 1;
    pointer-events: auto;
  }
  nav form:before {
    position: absolute;
    content: "";
    top: -13px;
    right: 0px;
    width: 0;
    height: 0;
    z-index: -1;
    border: 10px solid transparent;
    border-bottom-color: #6d84a5;
    margin: -20px 0 0;
  }
  nav form:after {
    position: absolute;
    content: "";
    height: 60px;
    padding: 2px;
    background: #6d84a5;
    border-radius: 2px;
    min-width: calc(100% + 20px);
    z-index: -2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  nav .menu-icon {
    display: block;
  }
  nav .search-icon,
  nav .menu-icon span {
    display: block;
  }
  nav .menu-icon span.hide,
  nav .search-icon.hide {
    display: none;
  }
  nav .cancel-icon.show {
    display: block;
  }
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.content header {
  font-size: 30px;
  font-weight: 700;
}
.content .text {
  font-size: 30px;
  font-weight: 700;
}
.space {
  margin: 10px 0;
}
nav .logo.space {
  color: #6d84a5;
  padding: 0 5px 0 0;
}
@media (max-width: 980px) {
  nav .menu-icon,
  nav .cancel-icon,
  nav .search-icon {
    margin: 0 20px;
  }
  nav form {
    right: 30px;
  }
}
@media (max-width: 350px) {
  nav .menu-icon,
  nav .cancel-icon,
  nav .search-icon {
    margin: 0 10px;
    font-size: 16px;
  }
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content header {
  font-size: 30px;
  font-weight: 700;
}
.content .text {
  font-size: 30px;
  font-weight: 700;
}
.content .space {
  margin: 10px 0;
}
</style>
