<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }" class="NavItem">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }" class="NavItem">Search</router-link>|
       <router-link :to="{ name: 'about' }" class="NavItem">About</router-link>|
      <!-- {{ !$root.store.username }} -->
      <span v-if="!$root.store.username">
        Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        <div class="dropdown">
          <div class="dropbtn"> {{ $root.store.username }}'s profile</div>
          <div class="dropdown-content">
            <router-link :to="{ name: 'favorites' }" class="DropdownItem">Favorites</router-link>
            <router-link :to="{ name: 'family' }" class="DropdownItem">Family Recipes</router-link>
            <router-link :to="{ name: 'personal' }" class="DropdownItem">Personal Recipes</router-link>
          </div>
        </div>
        <button id="logoutbtn" @click="Logout">Logout</button>|
      </span>
      <img id="imgbox" class="resize" src="https://cdn.laimoon.com/companies/1517900417_5a79279e-3.png" >
    </div>
    <router-view id="MainPage" />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    async Logout() {
      try {
        const response = await this.axios.post(
          "https://panda-recipes.herokuapp.com/Logout"
        );
        // this.$root.loggedIn = true;
        // console.log(window.$cookies.get("session"));
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        // console.log(this.$root.store.login);
        // this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
      // this.$root.store.logout();
      // this.$root.toast("Logout", "User logged out successfully", "success");
      // this.$router.push("/").catch(() => {
      //   this.$forceUpdate();
      // });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  background-color: rgb(252, 223, 248);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  color: black;
  z-index: 49;
}

#MainPage{
  margin-top: 90px;
}

img.resize {
  width:120px;
  height:90px;
  float: right;
}

#imgbox  { 
  margin-top: -30px;
  margin-bottom: -100px;
  padding: -20px; 
  }

#NavItem {
  color: black;
}

#DropdownItem  {
  color: white;
}

#app {
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/000/693/323/original/abstract-gradient-pink-purple-stripes-on-purple-background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size:cover;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

#logoutbtn {
  margin-left: 3px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 50;
  color: white;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: black;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block; }

/* Change the background color of the dropdown button when the dropdown content is shown */
// .dropdown:hover .dropbtn {background-color: black;}

</style>
