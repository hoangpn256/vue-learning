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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageDetail",
  data() {
    return {
      imageId: this.$route.params.id,
      imageDetail: {}
    };
  },
  async created() {
    await this.fetchImage({ id: this.imageId });
    this.imageDetail = this.storeImage;
  },
  computed: {
    ...mapGetters({
      storeImage: "Image/getImage",
      storeImages: "Image/getImages"
    })
  },
  methods: {
    ...mapActions({ fetchImage: "Image/fetchImage" })
  }
};
</script>