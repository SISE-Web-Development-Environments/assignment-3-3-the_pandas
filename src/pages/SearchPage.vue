<template>
  <div class="container">
    <h1 class="title">Search Recipes:</h1>
    number of results:
    <select v-model="amount">
      <option>5</option>
      <option>10</option>
      <option>15</option>
    </select>
    <input v-model="query" id="querybox" placeholder="enter query" />
    <select class="button" v-model="cuisine">
      <option value="">-cuisine-</option>
      <option>African</option>
      <option>American</option>
      <option>British</option>
      <option>Cajun</option>
      <option>Caribbean</option>
      <option>Chinese</option>
      <option>Eastern European</option>
      <option>European</option>
      <option>French</option>
      <option>German</option>
      <option>Greek</option>
      <option>Indian</option>
      <option>Irish</option>
      <option>Italian</option>
      <option>Japanese</option>
      <option>Jewish</option>
      <option>Korean</option>
      <option>Latin American</option>
      <option>Mediterranean</option>
      <option>Mexican</option>
      <option>Middle Eastern</option>
      <option>Nordic</option>
      <option>Southern</option>
      <option>Spanish</option>
      <option>Thai</option>
      <option>Vietnamese</option>
    </select>
    <select class="button" v-model="diet">
      <option  value="">-diet-</option>
      <option>Gluten Free</option>
      <option>Ketogenic</option>
      <option>Vegetarian</option>
      <option>Lacto-Vegetarian</option>
      <option>Ovo-Vegetarian</option>
      <option>Vegan</option>
      <option>Pescetarian</option>
      <option>Paleo</option>
      <option>Primal</option>
      <option>Whole30</option>
    </select>
    <select class="button" v-model="intolerances">
      <option  value="">-intolerances-</option>
      <option>Dairy</option>
      <option>Egg</option>
      <option>Gluten</option>
      <option>Grain</option>
      <option>Peanut</option>
      <option>Seafood</option>
      <option>Sesame</option>
      <option>Shellfish</option>
      <option>Soy</option>
      <option>Sulfite</option>
      <option>Tree Nut</option>
      <option>Wheat</option>
    </select>
    <button class="button" v-on:click="search">search</button>
    
    <div id="SortingDiv">
      Sort by:
      <button class="button" v-on:click="sortByReadyInMinutes">
         Prepare time
      </button>
      <button class="button" v-on:click="sortByPopularity">
        Popularity
      </button>
    </div>
    
    <RecipeFromQueryList
      :recipesArray="searchRecipesArray"
      :isMyRecipe1="isMyRecipe1"
      :is1Column="is1Col"
      title="Search Results"
      class="RandomRecipes center"
    />
    <div v-if="!hasResults">
      <h1>No relevant results found</h1>
    </div>
  </div>
</template>

<script>
import RecipeFromQueryList from "../components/RecipeFromQueryList";
export default {
  components: {
    RecipeFromQueryList,
  },
  data() {
    return {
      searchRecipesArray: [],
      isMyRecipe1: false,
      query: "",
      amount: "5",
      cuisine: "",
      diet: "",
      intolerances: "",
      hasResults: true,
      is1Col: false,
    };
  },
  mounted() {
    // this.showLastSearch();
  },
  methods: {
    async search() {
      try {
        this.hasResults = true;
        let paramsToSend = {};
        if (this.amount) paramsToSend.amount = this.amount;
        if (this.query) paramsToSend.query = this.query;
        if (this.cuisine) paramsToSend.cuisine = this.cuisine;
        if (this.diet) paramsToSend.diet = this.diet;
        if (this.intolerances) paramsToSend.intolerances = this.intolerances;
        console.log(this.query +" "+ this.cuisine+" "+ this.diet+" "+this.intolerances+" "+this.amount);
        const response = await this.axios.get(
          "https://panda-recipes.herokuapp.com/recipes/search/query/"+paramsToSend.query+"/amount/"+paramsToSend.amount
        );
        const recipes = response.data;
        console.log(recipes);
        //there is no search results
        if (!recipes) {
          this.hasResults = false;
        } else {
          console.log("pushing lol");
          this.searchRecipesArray = [];
          console.log(this.searchRecipesArray);
          this.searchRecipesArray.push(...recipes);
          console.log("array:"+this.searchRecipesArray);
          if (this.$root.store.username) {
            this.$root.store.lastSearch = this.searchRecipesArray;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    sortByReadyInMinutes() {
      this.searchRecipesArray.sort(function(recipe1, recipe2) {
        return recipe1.readyInMinutes - recipe2.readyInMinutes;
      });
    },
    sortByPopularity() {
      this.searchRecipesArray.sort(function(recipe1, recipe2) {
        return recipe2.aggregateLikes - recipe1.aggregateLikes;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  color: black;
  border-radius: 15px;
  margin-left: 10px;
}
.container {
  color: black;
  margin-left: 10px;
}
#SortingDiv{
  color: black;
  margin-top: 10px;
}
.title {
  color: black;
}
.RandomRecipes {
  color: black;
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
#querybox{
  margin-left: 10px;
  border-radius: 15px;
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>


<!-- <template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <form  id="querybox" >
      <input v-bind="query" placeholder="Enter Query here" id="QueryText">
      <button id="searchButton" margin-left=5px @click="search">Search</button>
    </form>
     <RecipeFromQueryList ref="foo" id="results" class="RandomRecipes center" />
  </div>
</template>




<script>
import RecipeFromQueryList from "../components/RecipeFromQueryList";
export default {
  components: {
    RecipeFromQueryList,
  },
  // data() {
  //   return {
  //     form: {
  //       query: "",
  //     }
  //   };
  // },
  props: {
    query: {
      type: String,
      required: false
    }
  },
  methods: {
    async search() {
      try {
         console.log("trying to search results for query:"+query);
        const response = await this.axios.get(
          "https://panda-recipes.herokuapp.com/recipes/search/query/"+$query+"/amount/5"
          // "http://localhost:4000/users/lastWatched/"
        );

        console.log(response);
        const recipesArray = response.data;
        console.log(recipesArray);
        this.$refs.foo.updateRecipes(recipesArray);
      } catch (error) {
        console.log(error);
      }
    }
  }

};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
</style>
-->

