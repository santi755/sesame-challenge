<template>
  <template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <!-- Otros campos del formulario según tus necesidades -->

      <!-- Botones de acción -->
      <div class="flex justify-end">
        <button
          type="button"
          @click="closeModal"
          class="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
        >
          Cancel
        </button>
        <button type="submit" :class="submitButtonClass">{{ submitButtonText }}</button>
      </div>
    </form>
  </template>
</template>
