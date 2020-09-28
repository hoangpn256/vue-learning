<template>
  <div>
      sdffdsf
    <img :src="imageDetail.src" class="d-block w-100" />
    <div class="content-wrap mt-5">
      <h3 class="title">{{ imageDetail.title }}</h3>
      <p>
        <span class="font-weight-bold">Date publish</span>
        : {{ imageDetail.datePublish }}
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
    getInformation() {
      const imageObject = {
        src:
          "https://pixabay.com/get/52e9dd404956a914f6da8c7dda793676163bdbe653566c48732f7ad69145c45cb9_1280.jpg",
        title: "Image title here",
        datePublish: "12/10/2020",
        description:
          'Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục)',
        albums: [
          { id: 1, name: "Album" },
          { id: 2, name: "Primary" },
          { id: 3, name: "Primary" }
        ]
      };
      this.imageDetail = imageObject;
    }
  }
};
</script>