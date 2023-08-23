<template>
    <header 
        id="header"
        class="header-index"
        :class="{ 'is-scrolled': isScrolled}"
    >
        <HeaderTopbar 
            :data="global.top_bar"
        />
        <div class="container">
            <div class="header-index__wrap">
                <div class="header-index__navigation">
                    <HeaderNavigation :data="global.main_menu" />
                </div>
                <NuxtLink 
                    to="/"
                    class="header-index__logo"
                >
                    <img :src="global.logo.url" :alt="global.logo.alt">
                </NuxtLink>
                <NuxtLink
                    class="header-index__right"
                    :to="global.right_top_link?.url"
                    :target="global.right_top_link?.target"
                >
                    <nuxt-icon name="reserve" />
                    {{ global.right_top_link.title }}
                </NuxtLink>
                <div
                    class="header-index__wrap-hamburger"
                    @click="menuOpen = true"
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div
            class="header-index__menu-bg"
            :class="{
                '-active': menuOpen
            }"
            @click="menuOpen = false"
        ></div>
        <div
            class="header-index__menu container"
            :class="{
                '-active': menuOpen
            }"
        >
            <div class="header-index__menu-top">
                <NuxtLink 
                    to="/"
                    class="header-index__menu-top-logo"
                >
                    <img :src="global.logo.url" :alt="global.logo.alt">
                </NuxtLink>
                <div
                    class="header-index__menu-top-close"
                    @click="menuOpen = false"
                >
                    <nuxt-icon name="close" />
                </div>
            </div>
            <div class="header-index__menu-navigation">
                <HeaderNavigation :data="global.main_menu" />
            </div>
            <NuxtLink
                class="header-index__menu-btn"
                :to="global.right_top_link?.url"
                :target="global.right_top_link?.target"
            >
                <nuxt-icon name="reserve" />
                {{ global.right_top_link.title }}
            </NuxtLink>
        </div>
    </header>
</template>
<script setup>
    const global = useGlobal()
    const isScrolled = ref(false)
    const menuOpen = useMenuOpen()

    onMounted(() => {
        window.addEventListener('scroll', (e) => {
            const scrollY = window.scrollY
            scrollY > 50 ?
            isScrolled.value = true :
            isScrolled.value = false
        })
    })

    const router = useRouter()

    router.beforeEach((to, from) => {
        menuOpen.value = false
    })
</script>
<style lang="scss">
$class-name: header-index;
.#{$class-name} {
    width: 100%;
    position: fixed;
    border-bottom: 1px solid map-get($colors, gray-line);
    background-color: map-get($colors, brand-2);
    z-index: 999;

    &__menu {
        @include size(100%, auto);

        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: map-get($colors, brand-1);
        padding-top: 1.2rem;
        padding-bottom: 4.8rem;
        color: map-get($colors, white);
        transition: transform .6s cubic-bezier(0.76, 0, 0.24, 1);
        transform: translateY(-100%);

        &.-active {
            transform: translateY(0);
        }

        @include media-breakpoint-up(medium) {
            display: none;
        }

        &-bg {
            @include size(100vw, 100vh);

            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .8);
            pointer-events: none;
            opacity: 0;
            transition: opacity .3s ease-in-out;

            &.-active {
                opacity: 1;
                pointer-events: auto;
            }
        }

        &-top {
            @include size(100%, auto);

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 3.4rem;

            &-logo {
                @include size(8rem, auto);

                filter: invert(1);

                > img {
                    @include size(100%, auto);
                }
            }
        }

        &-navigation {
            margin-bottom: 3.4rem;
        }

        &-btn {
            @include typo('body', 16);

            display: flex;
            align-items: center;
            padding: .4rem 1.6rem;
            border-radius: 5rem;
            color: map-get($colors, white);
            background-color: map-get($colors, brand-3);
            transition: background-color .3s ease-in-out;

            @include media-breakpoint-up(medium) {
                &:hover {
                    background-color: map-get($colors, brand-3);
                }
            }

            > span {
                @include size(1.6rem, auto);

                margin-right: 0.6rem;

                > svg {
                    @include size(1.6rem, auto);
                }
            }
        }
    }

    &__wrap {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;

        @include media-breakpoint-down(medium) {
            padding: 1.2rem 0;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        > span {
            margin-right: 1rem;
            display: inline-block
        }

        &-hamburger {
            display: none;

            @include media-breakpoint-down(medium) {
                display: flex;
                flex-direction: column;
                cursor: pointer;
                
                position: absolute;
                top: 50%;
                right: 0;

                > span {
                    @include size(1.6rem, .2rem);

                    background-color: map-get($colors, black-1);

                    &:not(:last-child) {
                        margin-bottom: .2rem;
                    }
                }
            }
        }
    }

    &__navigation {
        @include media-breakpoint-down(medium) {
            display: none;
        }
    }

    &__logo {
        @include size(auto, 4rem);

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        @include media-breakpoint-down(medium) {
            position: relative;
            left: 0;
            transform: translateX(0);
        }

        > img {
            @include size(auto, 100%);
        }
    }

    &__right {
        @include typo('body', 16);

        display: flex;
        align-items: center;
        padding: .4rem 1.6rem;
        border-radius: 5rem;
        color: map-get($colors, white);
        background-color: map-get($colors, brand-1);
        transition: background-color .3s ease-in-out;

        @include media-breakpoint-down(medium) {
            position: fixed;
            right: map-get($container-padding, mobile);
            bottom: 2.4rem;
        }

        @include media-breakpoint-up(medium) {
            &:hover {
                background-color: map-get($colors, brand-3);
            }
        }

        > span {
            @include size(1.6rem, auto);

            margin-right: 0.6rem;

            > svg {
                @include size(1.6rem, auto);
            }
        }
    }
}
</style>