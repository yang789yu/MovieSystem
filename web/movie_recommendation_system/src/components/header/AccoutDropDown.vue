<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none2">
            <img src="@/assets/images/avatar.jpg" alt="" class="h-10 rounded-full">
        </button>

        <button
            @click="isOpen = false" 
            class="fixed top-0 right-0 bottom-0 w-full h-full cursor-default bg-black opacity-50"
            v-if="isOpen"    
        >
        </button>

        <div 
            class="absolute bg-white rounded-lg w-48 right-0 mr-3 shadow-xl py-2"
            v-if="isOpen"
        >
            <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Account Setting</a>
            <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Support</a>
            <a 
                href="" 
                class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white"
                @click.prevent="logout"
            >
                Logout
            </a>
        </div>
    </div>

    

</template>

<script>

export default {
    created() {
        const handleEscape = (e) => {
            if(e.key == "Esc" || e.key == "Escape") {
                this.isOpen = false;
            }
        };

        document.addEventListener("keydown", handleEscape);

        this.$once("hook:beforeDestroy", () => {
            document.removeEventListener("keydown",handleEscape);
        })
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods:{
        logout() {
            this.$store.dispatch("setUserLoggedIn", false);
        }
    }
}
</script>

<style>

</style>