<template>
  <div class="about">
    <div id="head">This is an Bing News page</div>
    <p v-if="errored" v-cloak>{{ error }}</p>
    <p v-if="loading" v-cloak>Loading...</p>

    <div v-else>
      <div v-for="(n, index) in news" :key="index" v-cloak id="dContainer">
        <div id="dLeft">
          <a :href="n.url">
            <img :src="image_src[index]" :title="n.name" alt="image" class="image-content" />
          </a>
        </div>
        <div id="dRight">{{ n.description }}</div>

        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      loading: true,
      errored: false,
      err: null,
      news: [],
      image_src: []
    }
  },
  created () {
    this.$axios
      .get('http://localhost:8080', {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => {
        let res = JSON.parse(response.data)
        for (let i in res.value) {
          this.news.push(res.value[i])
          this.image_src.push(res.value[i].image.thumbnail.contentUrl)
        }
        console.log(response.data)
      })
      .catch(err => {
        (this.errored = true)((this.error = err))
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}

#head {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid;
  padding-bottom: 15px;
  font-size: 3em;
}

/* 〜479px：スマートフォン横
------------------------------ */
@media screen and (max-width: 479px) {
  #dContainer {
    float: left;
    width: 100%;
    height: 100%;
    margin: 10px;
    /* border: 2px solid aqua; */
    /* padding: 2px; */
    align-content: flex-start;
  }
  #dLeft {
    float: left;
    width: 10%;
    display: none;
  }
  #dRight {
    float: left;
    width: 100%;
    background-color: rgb(192, 190, 190);
    color: rgb(255, 255, 255);
  }
}

@media screen and (min-width: 480px) and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  #dContainer {
    float: left;
    width: 100%;
    height: 30%;
    margin: 10px;
    border-bottom: 2px solid gray;
    padding: 2px;
  }
  #dLeft {
    float: left;
    width: 100%;
    border-bottom: 2px solid gray;
    padding-bottom: 5px;
  }
  #dRight {
    float: left;
    width: 100%;
    padding-top: 5px;
  }
  .image-content {
    border-radius: 10px;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  #dContainer {
    float: left;
    width: 100%;
    height: 25%;
    margin: 5px;
    border: 2px solid aqua;
    border-radius: 10px;
    padding: 2px;
  }
  #dLeft {
    float: left;
    width: 20%;
    border-right: 2px solid gray;
  }
  #dRight {
    float: right;
    width: 80%;
    padding-left: 5px;
  }
  .image-content {
    border-radius: 10px;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  #dContainer {
    float: left;
    width: 100%;
    height: 20%;
    margin: 5px;
    border: 2px solid aqua;
    border-radius: 10px;
    padding: 2px;
  }
  #dLeft {
    float: left;
    width: 10%;
    border-right: 2px solid gray;
  }
  #dRight {
    float: right;
    width: 90%;
    padding-left: 5px;
  }
  .image-content {
    border-radius: 10px;
  }
}
</style>
