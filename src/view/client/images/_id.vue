<template>
  <div>
    <img v-lazy="imageDetail.image.url" class="d-block w-100" v-if="imageDetail.image" />
    <div class="content-wrap mt-5">
      <h3 class="title">{{ imageDetail.title }}</h3>
      <p>
        <span class="font-weight-bold">Date publish</span>
        : {{ imageDetail.publish_date }}
      </p>
      <p>
        <span class="font-weight-bold">Album</span>:
        <b-badge
          variant="info"
          v-for="item in imageDetail.albums"
          :key="item.id"
          class="mx-1"
        >{{ item.name }}</b-badge>
      </p>
      <p>{{ imageDetail.description }}</p>
    </div>
  </div>
</template>
<script>
import ImageService from "@/api/images.api.js";

export default {
  name: "ImageDetail",
  data() {
    return {
      imageId: this.$route.params.id,
      imageDetail: {}
    };
  },
  async created() {
    await this.getInformation();
  },
  methods: {
    async getInformation() {
      const response = await ImageService.getDetail(this.imageId);
      this.imageDetail = response.data.data;
    }
  }
};
</script>