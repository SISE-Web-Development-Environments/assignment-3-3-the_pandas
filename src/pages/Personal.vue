<template>
  <div  class="container">
    <h1 class="title">Personal Recipes</h1>
    <PersonalList  title="Personal Recipes" class="RandomRecipes center" />
  </div>
</template>

<script>
import PersonalList from "../components/PersonalList";
export default {
  components: {
    PersonalList
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
