<template>
  <router-link v-if="recipe.user_id" :to="{ name: 'DBrecipe', query: { recipeId: recipe.id, image: recipe.image, title: recipe.title, instructions:recipe.Instructions, Ingredients:recipe.ingredients } }"
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
          <img id="clock" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/clock-2578618-2148597.png" />
          {{ recipe.readyInMinutes }} minutes
          <br>
          <img id="clock" src="https://icons-for-free.com/iconfiles/png/512/done+downloaded+icon-1320086210484717001.png" />
          {{ recipe.aggregateLikes }} likes
           <br>
           <span v-if="recipe.owner">Owner:  {{ recipe.owner }} </span>
          <img v-if="recipe.vegetarian" id="clock" src="https://cdn4.iconfinder.com/data/icons/fabric-features-clothes-materials-blue-line-2/64/413_eco-bio-ecology-leaf-512.png" />
          <img v-if="recipe.glutenFree" id="clock" src="https://cdn1.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_15-2-128.png" />
          <img v-if="recipe.Viewed" id="clock" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/eye-382-326435.png" />
          <br>
          <br>
          
          <br>
          <img  v-if="recipe.Saved"   id="Favorite"  src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5122-512.png" />
          <img  v-else @click="SaveRecipe(recipe.id)" id="Favorite"  src="https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/heart-512.png" />
          <!-- https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5122-512.png https://www.pngkey.com/png/full/293-2934876_heart-gradient-love-heart-symbol.png -->
        </div>
        </ul>
      </b-col>
      </b-row>
  </b-container>
 
  </router-link>
  <router-link v-else :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
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
          <img id="clock" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/clock-2578618-2148597.png" />
          {{ recipe.readyInMinutes }} minutes
          <br>
          <img id="clock" src="https://icons-for-free.com/iconfiles/png/512/done+downloaded+icon-1320086210484717001.png" />
          {{ recipe.aggregateLikes }} likes
           <br>
           <span v-if="recipe.owner">Owner:  {{ recipe.owner }} </span>
          <img v-if="recipe.vegetarian" id="clock" src="https://cdn4.iconfinder.com/data/icons/fabric-features-clothes-materials-blue-line-2/64/413_eco-bio-ecology-leaf-512.png" />
          <img v-if="recipe.glutenFree" id="clock" src="https://cdn1.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_15-2-128.png" />
          <img v-if="recipe.Viewed" id="clock" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/eye-382-326435.png" />
          <br>
          <br>
          
          <br>
          <img  v-if="recipe.Saved"   id="Favorite"  src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5122-512.png" />
          <img  v-else @click="SaveRecipe(recipe.id)" id="Favorite"  src="https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/heart-512.png" />
          <!-- https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5122-512.png https://www.pngkey.com/png/full/293-2934876_heart-gradient-love-heart-symbol.png -->
        </div>
        </ul>
      </b-col>
      </b-row>
  </b-container>
 
  </router-link>
  
</template>


// https://webcomicms.net/sites/default/files/clipart/162591/pink-leaf-cliparts-162591-5527686.png
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
  },
  methods: {
    async SaveRecipe(id) {
      try {
         console.log("here we go")
            console.log("im doing it   " + id);
            const response = await this.axios.get(
            "https://panda-recipes.herokuapp.com/users/Favorite/" +
            id
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
.recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  outline: 2px solid white;
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
  width: 250px;
  height:180px;
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover; */
}

#clock {
   width: 25px;
  height:25px;
}
#Favorite {
   width: 25px;
  height:25px;
  margin-left: 37%;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-title {
  color: white;
  margin-left: 0%;
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
