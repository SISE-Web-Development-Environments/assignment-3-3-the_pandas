<template>
  <div class="container">
    <div v-if="recipe">
      <div id="title" class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <button @click="SaveRecipe" class="center">Save as favorite</button>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <b>Ingredients:</b>
              {{ recipe.Ingredients }}
          </div>
          <div class="wrapped">
             <b> Instructions:</b>
              {{ recipe.Instructions }}
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    try {
      console.log(this.$route.query);
      // response = this.$route.params.response;
      let NewRecipe = {};
      NewRecipe.image = this.$route.query.image;
      NewRecipe.title = this.$route.query.title;
      NewRecipe.readyInMinutes = this.$route.query.readyInMinutes;
      NewRecipe.aggregateLikes = this.$route.query.aggregateLikes;
      NewRecipe.Ingredients = this.$route.query.Ingredients;
      NewRecipe.Instructions = this.$route.query.instructions;
      this.recipe = NewRecipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async SaveRecipe() {
      try {
        console.log("im doing it   " + this.$route.params.recipeId);
        const response = await this.axios.get(
          "https://panda-recipes.herokuapp.com/users/Favorite/" +
            this.$route.params.recipeId
          // "http://localhost:4000/users/Favorite/"+this.$route.params.recipeId
        );
        console.log("response.status", response.status);
        console.log(response);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
  padding: 25px;
}
.center {
  display: block;
  margin-left: auto;
  margin-top: 5px;
  margin-right: auto;
  width: 50%;
}
.container {
  color:white;
}

</style>
