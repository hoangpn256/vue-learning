<template>
  <div class="album py-5">
    <div class="container">
      <b-row>
        <b-col md="4" xs="12" class="p-1" v-for="(image, index) in images" :key="index">
          <div class="hovereffect">
            <img v-lazy="image.image.medium.url" class="w-100" />
            <div class="overlay">
              <h2>{{image.title}}</h2>
              <a class="info mx-1" @click.prevent="openLightBox(index)" href="#">Full</a>
              <router-link
                class="info mx-1"
                :to="{name: 'imageDetail', params: {id: image.id}}"
              >Detail</router-link>
            </div>
          </div>
        </b-col>
      </b-row>
      <LightBox
        :media="mediaLightBox(images)"
        :showLightBox="isShowLightBox"
        :startAt="startLightBox"
        :key="randomKey"
      ></LightBox>
    </div>
  </div>
</template>

<script>
import ImageService from '@/api/images.api.js';
import LightBox from "vue-image-lightbox";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";

export default {
  name: "ImageLists",
  components: {
    LightBox
  },
  data() {
    return {
      tempDate: "",
      randomKey: "",
      isShowLightBox: false,
      startLightBox: 0,
      images: []
    };
  },
  async created() {
    // await this.fetchImages();
    await this.fetchImages2();
  },
  methods: {
    async fetchImages2(){
      // https://pixabay.com/api/?key=18345307-957535cb27bdd594c80dc1c55&q=bikini&image_type=photo&pretty=true&page=${index}
      const response = await ImageService.getAll();
      console.log(response.data.data.images);
      this.images = response.data.data.images
    },
    mediaLightBox(images) {
      let imageProcess = images.map(item => {
        return {
          src: item.image.url,
          thumb: item.image.thumb.url,
          caption: item.tags
        };
      });
      return imageProcess;
    },
    openLightBox(index) {
      this.isShowLightBox = true;
      this.startLightBox = index;
      this.randomKey = Math.random()
        .toString(36)
        .substring(7); // for re-render LightBox Component
    }
  }
};
</script>
<style scoped>
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 10px;
}

.hovereffect a.info {
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin: 50px 0 0;
  padding: 7px 14px;
}

.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}

.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,
.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

.hovereffect:hover a.info {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
</style>