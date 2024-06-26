<template>
  <HeaderBase class="h-12 pb-2 flex justify-between items-center">
    <TitleMainSection>
      <slot></slot>
    </TitleMainSection>

    <UserAvatar class="h-8 w-8">
      <img src="@/assets/profile-avatar.png" alt="User avatar" />
    </UserAvatar>
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@/components/atoms/header/HeaderBase.vue';
import TitleMainSection from '@/components/patterns/main-section/TitleMainSection.vue';
import UserAvatar from '@/components/patterns/user-avatar/UserAvatar.vue';
</script>
