<template>
  <div  class="container">
    <h1 class="title">Main Page</h1>
     <b-container>
      <b-row>
        <b-col>
          <RecipePreviewList ref="RandomList" title="Try out these Recipes" recipe_type="recipe" />
          <b-button class="MoreBtn" @click="randomUpdate()">Show me more!</b-button>
        </b-col>
        <b-col>
          <div class="notConnected" v-if="!$root.store.username">
            <LoginPage />
          </div>
          <WatchedRecipePreviewList v-if="$root.store.username" title="Last Watched Recipes" recipe_type="recipe" />
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-container>
      <b-col>
    <RecipePreviewList  title="Randome Recipes" class="RandomRecipes center" />
    </b-col>
     <b-col>
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    {{ !$root.store.username }}
    <WatchedRecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></WatchedRecipePreviewList>
     </b-col>
    </b-container> -->
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import WatchedRecipePreviewList from "../components/WatchedRecipePreviewList";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    RecipePreviewList,
    WatchedRecipePreviewList,
    LoginPage
  },
  methods: {
    randomUpdate() {
      this.$refs.RandomList.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
.title {
  color: white;
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.MoreBtn {
  background-color: rgb(182, 39, 182);
  margin-left: 200px;
}

</style>
