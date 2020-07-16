<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>

    
      <b-col v-for="r in recipesArray" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    <!-- <div v-if="is1Column" class="recipesContainer1Column">
      <div v-for="r in recipesArray" :key="r.id">
        <RecipePreview 
        class="recipePreview"
         :recipe="r"
         :isMyRecipe2="isMyRecipe2" />
      </div>
    </div>

    <div v-else class="recipesContainer3Columns" >
      <div v-for="r in recipesArray" :key="r.id">
        <RecipePreview 
        class="recipePreview"
         :recipe="r"
         :isMyRecipe2="isMyRecipe2" />
      </div>
    </div> -->

    <!-- <div class="recipesContainer" >
      <div v-for="r in recipesArray" :key="r.id">
        <RecipePreview 
        class="recipePreview"
         :recipe="r"
         :isMyRecipe2="isMyRecipe2" />
      </div>
    </div> -->
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipesArray:{
      type: Array,
      required: true
    },
    isMyRecipe1:{
      type: Boolean,
      required: true
    },
    is1Column:{
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
      isMyRecipe2:this.isMyRecipe1,
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.recipesContainer3Columns{
  display: grid;
  grid-template-columns: auto auto auto;
}
.recipesContainer1Column{
  display: grid;
  grid-template-columns: auto;
}
</style>