<script setup lang="ts">
// #region Imports
// Types

// Utils

// Pinia

// Constants
import { HEADER_MENU } from '~/assets/ts/contants/header';
// Components

// Composables

// #endregion

// #region Interfaces

// #endregion

// #region Props
//
// #endregion

// #region Emits
//
// #endregion

// #region Data
//
// #endregion

// #region Computed
//
// #endregion

// #region Methods
//
// #endregion
</script>

<template>
    <nav :class="$style.TheHeaderMenu">
        <UILink
            v-for="item in HEADER_MENU"
            :key="`header-link-${item.id}`"
            target="_self"
            :to="item.link"
            :class="$style.link"
        >
            {{ item.label }}
        </UILink>
    </nav>
</template>

<style module lang="scss">
    .TheHeaderMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .4rem;
        width: fit-content;
    }

    .link {
        padding: 1.2rem;
        border-radius: .6rem;
    }
</style>
