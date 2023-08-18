<template>
    <div class="navigation-main">
        <ul>
            <li>
                <a href="https://h-and.world/" rel="noopener noreferrer" target="_blank" title="關於H&" >
                    <img src="https://rainbow.h-and.world/wp-content/uploads/2023/08/BH__LOGO.png" style="height: 2rem;width: auto;">
                </a>
            </li>
            <li
                v-for="(item, index) in data"
                :key="index"
            >
            
                <NuxtLink
                    :to="item.item.url"
                    :title="item.item.title"
                    :target="item.item.target"
                >
                    {{ item.item.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })
    const navs = ref([
        {
            name: 'Home',
            link: '/',
        }, {
            name: 'About',
            link: '/about',
        }, {
            name: 'Blog',
            link: '/blog',
        }, {
            name: 'Form',
            link: '/form',
        },
    ])
</script>
<style lang="scss">
$class-name: navigation-main;
.#{$class-name} {
    ul {
        display: flex;
        gap: 1rem;

        @include media-breakpoint-down(medium) {
            @include size(100%, auto);

            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        li {
            a {
                padding: 3rem 0;

                @include media-breakpoint-down(medium) {
                    padding: 0;
                }

                &:hover {
                    opacity: .5;
                }
            }
        }
    }
}
</style>