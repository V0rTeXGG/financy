<script setup lang="ts">
// #region Data
// Constants
const TITLE: string = 'financy';
// #endregion
</script>

<template>
    <header :class="$style.TheHeader">
        <div class="container">
            <div :class="$style.wrapper">
                <div>
                    <UIIcon
                        name="logo"
                        is-fill-source
                        :class="$style.logo"
                    />
                    <span :class="$style.title">
                        {{ TITLE }}
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<style module lang="scss">
    .TheHeader {
        padding: 1.6rem 0;
        background-color: $white;
        border-bottom: 1px solid $gray-100;
    }

    .logo {
        margin-right: 1rem;
    }

    .title {
        @include text(logo);

        color: $dark;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
