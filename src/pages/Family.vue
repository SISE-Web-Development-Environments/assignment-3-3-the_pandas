<template>
  <div  class="container">
    <h1 class="title">Family Recipes</h1>
    <FamilyList  title="Family Recipes" class="RandomRecipes center" />
  </div>
</template>

<script>
import FamilyList from "../components/FamilyList";
export default {
  components: {
    FamilyList
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
