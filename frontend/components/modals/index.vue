<template>
  <div v-if="$store.state.isModal" class="overlay">
    <div class="e-modal">
			<SignUpModal v-if="$store.state.modalType =='sign-up'"/>
      <SignInModal v-if="$store.state.modalType =='sign-in'"/>
		</div>
  </div>
</template>
<script>
  import SignUpModal from './SignUpModal.vue'
  import SignInModal from './SignInModal.vue'

  
  export default {
    name: "ModalContainer",
    props: { type: String},
    components: { SignUpModal, SignInModal},
  };
</script>

<style lang="scss" scoped>
</style>