<template>
  <Nav />
  <div class="flex flex-col h-screen max-w-full md:flex-row">
    <side-bar />
    <div class="flex flex-col w-9/12">
      <!-- Main Content -->
      <div class="flex flex-col py-10 p-7">
        <!-- filter & title -->
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-2xl text-blue-900">
            Upload required documents for pet travel to United Kingdom (UK)
          </h1>
          <div class="mt-12">
            <div v-for="(zone, idx) in dropzones" :key="idx">
              <div class="flex items-center justify-center w-full my-6">
                <h1 class="w-1/4 mr-8 text-xl font-bold text-blue-950">
                  {{ zone.title }}
                </h1>
                <div class="w-3/4">
                  <Dropzone
                    @file-uploaded="handleFileUpload"
                    @file-canceled="handleFileCancel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex self-end justify-end">
            <button class="mx-4 btn btn-outline btn-info">Cancel</button>
            <button @click="submitFiles" class="mx-4 btn btn-info">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";
import Nav from "../components/layout/Nav.vue";
import Card from "../components/ui/Card.vue";
import Dropzone from "../components/ui/Dropzone.vue";
import SideBar from "../components/layout/SideBar.vue";
import { CoAirplaneMode } from "oh-vue-icons/icons";

const dropzones = ref([
  { title: "USDA Health Certificate" },
  { title: "Rabies Vaccination" },
  { title: "Titre Test Results" },
]);
const files = ref([]); // Array to store uploaded files

const handleFileUpload = ({ file, index }) => {
  files.value[index] = file;
};

const handleFileCancel = () => {
  // Handle file cancellation if needed
};

const submitFiles = async () => {
  console.log("====================================");
  console.log(files.value);
  console.log("====================================");
  //   for (let file of files.value) {
  //     if (file) {
  //       // Assuming you have a function to handle Cloudinary upload called `uploadToCloudinary`
  //       //   await uploadToCloudinary(file);
  //       console.log("====================================");
  //       console.log(file);
  //       console.log("====================================");
  //     } else {
  //       console.log("====================================");
  //       console.log("nothing happen");
  //       console.log("====================================");
  //     }
  //   }
};

const uploadToCloudinary = async (file) => {
  // Use Cloudinary SDK or API to upload the file.
};
</script>

<style scoped></style>
