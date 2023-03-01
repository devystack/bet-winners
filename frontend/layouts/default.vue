<template>
    <div class="main-container">
        <AppHeader/>
		<main class="body">
			<Nuxt/>
		</main>
		
        <Modal v-show="$store.state.isModal"/>
        
    </div>
    
</template>
<script>
    import AppHeader from './AppHeader.vue';
    import Modal from "@/components/modals/index.vue";

    export default {
        name: 'default',
        components: {AppHeader, Modal},
		data() {
			return {
			};
		},
    }
</script>
<style scoped lang="scss">
    .main-container {
        margin: auto;
        .body {
            width: 100%;
            min-height: 750px;
            min-width: 1280px;
            // position: absolute;
            padding-top: 20px;
            
        }
    }
</style>