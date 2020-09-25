<template>
  <div class="album py-5">
    <div class="container">
      <timeline>
        <timeline-title>title</timeline-title>
        <timeline-item bg-color="#9dd8e0">item1</timeline-item>
        <timeline-item :hollow="true">item2</timeline-item>
      </timeline>
      <b-row>
        <b-col md="4" xs="12" class="p-1" v-for="(image, index) in images" :key="index">
          <!-- <b-row cols="12" class="p-1" v-if="showDateTitleProcess(image.date)">
            <p class="text-info font-weight-bold">{{ image.date }}</p>
          </b-row> -->
          <img v-lazy="image.largeImageURL" class="w-100" @click="openLightBox(index)" />
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
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
import LightBox from "vue-image-lightbox";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
export default {
  name: "ImageLists",
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    LightBox
  },
  data() {
    return {
      tempDate: "",
      randomKey: "",
      isShowLightBox: false,
      startLightBox: 0,
      images: [],
      image: { src: "https://source.unsplash.com/random?bikini" }
    };
  },
  async created() {
    await this.fetchImages();
  },
  methods: {
    async fetchImages() {
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15) + 1;
        let url = `https://pixabay.com/api/?key=18345307-957535cb27bdd594c80dc1c55&q=bikini&image_type=photo&pretty=true&page=${index}`;
        let response = await fetch(url);
        let data = await response.json();
        let date = new Date(`${9 - i}, 20, 2020`);
        let imageProcess = data.hits.map(item => {
          item.date = date;
          return item;
        });
        this.images = this.images.concat(imageProcess);
        console.log(this.images);
      }
    },
    mediaLightBox(images) {
      let imageProcess = images.map(item => {
        return {
          src: item.largeImageURL,
          thumb: item.previewURL,
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
    },
    showDateTitleProcess(date) {
      if (this.tempDate == date) {
        return false;
      } else {
        this.tempDate = date;
        return true;
      }
    }
  }
};
</script>