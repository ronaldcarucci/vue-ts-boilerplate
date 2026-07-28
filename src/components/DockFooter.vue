<script setup lang="ts">
import { useRouter } from 'vue-router'
import { LucideContact, LucideHouse, LucideInbox, LucideSettings } from '@lucide/vue';
import { useNavigatorPointStore } from '../stores/navigatorPoint';
import { storeToRefs } from 'pinia'

const router = useRouter();

const navigatorPointStore = useNavigatorPointStore();

const { currentPage } = storeToRefs(navigatorPointStore)

const { updateCurrentPage } = navigatorPointStore

</script>

<template>
    <div class="dock">
        <button 
            v-on:click="() => {
                router.push('/');
                updateCurrentPage('home');
            }"
            :class="{ 'dock-active': currentPage === 'home' }"
        >
            <LucideHouse class="size-[1.2em]" />
            <span class="dock-label">Home</span>
        </button>

        <button>
            <LucideInbox class="size-[1.2em]" />
            <span class="dock-label">Inbox</span>
        </button>

        <button 
            v-on:click="() => {
                router.push('/about');
                updateCurrentPage('about');
            }"
            :class="{ 'dock-active': currentPage === 'about' }"
        >
            <LucideContact class="size-[1.2em]" />
            <span class="dock-label">Contact</span>
        </button>

        <button>
            <LucideSettings class="size-[1.2em]" />
            <span class="dock-label">Settings</span>
        </button>
    </div>
</template>
