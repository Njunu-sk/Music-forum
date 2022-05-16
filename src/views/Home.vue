<template>
  <!-- Introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full bg-contain introduction-bg"
      style="background-image: url(assets/img/music.jpeg)"
    ></div>
    <div class="container mx-auto">
      <div class="text-blue-600 main-header-content">
        <h1 class="font-bold text-5xl mb-5">
          Upload and listen to your music...
        </h1>
        <p class="w-full md:w-8/12 mx-auto text-blue-900">
          A simple music forum that lets you upload music to a cloud storage and
          listen to it. You can also comment on the music you upload.
        </p>
      </div>
    </div>

    <img
      class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
      src="assets/img/introduction-music.png"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <i class="fa fa-headphones-alt float-right text-green-400 text-2xl"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import { songsCollection } from "@/includes/firebase";
import AppSongItem from "@/components/SongItem.vue";

export default {
  name: "Home",
  components: { AppSongItem },
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    const snapshots = await songsCollection.get();

    snapshots.forEach((document) => {
      this.songs.push({
        docID: document.id,
        ...document.data(),
      });
    });
  },
};
</script>
