<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
  <b-container>
     <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <b-row>
      <b-col >
        <div class="recipe-body">
          <img :src="recipe.image" class="recipe-image" />
        </div>
      </b-col>
      <b-col>
        <ul>
         <div class="recipe-footer">
        <li>Ready in: {{ recipe.readyInMinutes }} minutes</li>
        <li>Likes: {{ recipe.aggregateLikes }} likes</li>
        </div>
        </ul>
      </b-col>
      </b-row>
  </b-container>
 
  </router-link>
  
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 75%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
  background-color: rgb(214, 35, 95);
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-footer {
  color:white;
  float: right;
  padding: 15px;
}
.recipe-body{

  float: left;
}
.recipe-preview  .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 5px;
  display: block;
  width: 300px;
  height: 240px;
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover; */
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-title {
  color: white;
  margin-left: 30%;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  margin-top: 30px;
  font-size: 12pt;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>
