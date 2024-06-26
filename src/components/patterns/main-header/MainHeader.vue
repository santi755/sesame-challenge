<template>
  <HeaderBase class="h-12 pb-2 flex justify-between items-center">
    <TitleMainSection>
      <slot></slot>
    </TitleMainSection>

    <UserAvatar class="h-8 w-8">
      <img src="@src/assets/profile-avatar.png" alt="User avatar" />
    </UserAvatar>
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@src/components/atoms/header/HeaderBase.vue';
import TitleMainSection from '@src/components/patterns/main-section/TitleMainSection.vue';
import UserAvatar from '@src/components/patterns/user-avatar/UserAvatar.vue';
</script>
