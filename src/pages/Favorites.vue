<template>
  <div  class="container">
    <h1 class="title">Favorite Recipes</h1>
    <FavoriteRecipeList  title="Favorite Recipes" class="RandomRecipes center" />
  </div>
</template>

<script>
import FavoriteRecipeList from "../components/FavoriteRecipeList";
export default {
  components: {
    FavoriteRecipeList
  }
};
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

</style>
