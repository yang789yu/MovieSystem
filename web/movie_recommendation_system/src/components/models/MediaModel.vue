<template>
    <div
        style="background-color: rgb(0, 0, 0, .5);"
        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg z-50"
        tabindex="0"
        v-show="value"
    >
        <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto bg-gray-900 p-4">
            <div class="bg-gray-900 rounded shadow-lg">
                <div class="flex justify-end pr-4 pt-2">
                    <button
                        @click="close" 
                        class="text-4xl leading-none hover:text-gray-300"
                    >
                        &times;
                    </button>
                </div>
                <div class="modal-body px-8 py-8">
                    <div 
                        class="responsive-container overflow-hidden relative"
                        :style="isVideo?'padding-top: 56.25%': {}"
                    >
                        <img :src="mediaURL" alt="" v-if="!isVideo" class="w-full h-full">
                        <iframe 
                            frameborder="0"
                            class="responsive-iframe absolute top-0 left-0 w-full h-full"
                            style="border: 0;"
                            allow="autoplay; encryted-media"
                            allowfullscreen
                            v-if="isVideo"
                            :src="mediaURL"    
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // isShow: {
        //     required: true
        // },
        value: {
            required: true
        },
        mediaURL:{
            required: true
        },
        isVideo:{
            required: true
        }
    },
    methods: {
        // updateIsShow() {
        //     this.$emit('update:isShow', !this.isShow);
        // }
        close() {
            this.$emit("input", !this.value);
        }
     }
}
</script>

<style>

</style>