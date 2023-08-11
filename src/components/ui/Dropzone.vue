<template>
  <div
    @click="openFilePicker"
    @dragover.prevent="onDragOver"
    @drop.prevent="onDrop"
    class="relative flex flex-col items-center justify-center p-10 transition-all duration-300 border-[3px] border-dashed cursor-pointer rounded-xl w-full hover:bg-blue-100"
  >
    <p v-if="!isDraggingOver" class="mb-2">
      <span class="flex flex-col items-center justify-center">
        <h1><v-icon scale="2" name="co-cloud-upload" /></h1>
        <h1>Upload files up to 15 MB</h1>
      </span>
    </p>
    <p v-else-if="isDraggingOver" class="mb-2 text-blue-600">
      Release to drop the files!
    </p>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="onFilesSelected"
      accept=".pdf"
      multiple
    />
  </div>
  <div
    v-for="(file, index) in uploadedFiles"
    :key="index"
    class="flex items-center w-2/3 my-4 bg-white rounded shadow-md"
  >
    <div class="flex items-center w-full h-full p-4">
      <v-icon name="fa-regular-file-alt" />
      <span class="ml-4">{{ file.name }}</span>
    </div>
    <button
      @click.stop="cancelUpload(index)"
      class="p-2 text-center text-red-500"
    >
      <h1 class="p-2 text-2xl tracking-widest">x</h1>
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(["files-uploaded", "file-canceled"]);

const isDraggingOver = ref(false);
const uploadedFiles = ref([]);
const fileInput = ref(null);

const onDragOver = () => (isDraggingOver.value = true);

const onDrop = (event) => {
  isDraggingOver.value = false;
  const files = [...event.dataTransfer.files];
  if (files.length) {
    uploadedFiles.value.push(...files);
    emit("files-uploaded", uploadedFiles.value);
  }
};

const openFilePicker = () => fileInput.value.click();

const onFilesSelected = (event) => {
  const files = [...event.target.files];
  if (files.length) {
    uploadedFiles.value.push(...files);
    emit("files-uploaded", uploadedFiles.value);
  }
};

const cancelUpload = (fileIndex) => {
  uploadedFiles.value.splice(fileIndex, 1);
  fileInput.value.value = ""; // Clear the input file field
  emit("file-canceled", fileIndex);
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
