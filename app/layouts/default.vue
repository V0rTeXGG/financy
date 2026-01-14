<script setup lang="ts">
// #region Imports
// Components
import TheHeader from '~/components/layout/header/TheHeader.vue';
// #endregion
</script>

<template>
    <div
        id="app"
    >
        <TheHeader />
        <main :class="$style.main">
            <slot />
        </main>
    </div>
</template>

<style module lang="scss">
    .main {
        position: relative;
        min-height: stretch;
    }

    .page {
        min-height: stretch;
        padding-top: var(--header-h);
    }
</style>
