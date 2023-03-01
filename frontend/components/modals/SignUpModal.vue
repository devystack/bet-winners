<template>
	<div class="modalBlock">
		<span class="modalBlock-crystal"></span>
		<div class="modalBlock-title">
			Sign Up
		</div>
		<!-- <form> -->
			<div class="formGroup formGroup-user">
				<span>Username</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-user"></i>
					</div>
					<input type="text" v-model="username">
				</div>
			</div>
			<div class="formGroup formGroup-password formGroup-agree">
				<p>(Min. 10 Characters)</p>
				<span>Password</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-password"></i>
					</div>
					<input type="password" v-model="password">
				</div>
			</div>
			<div class="formGroup formGroup-email">
				<span>Email</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-mail"></i>
					</div>
					<input type="text" v-model="email">
				</div>
			</div>
			<div class="formGroup formGroup-email">
				<span>Number Mobile</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-number"></i>
					</div>
					<input type="text" v-model="phoneNumber">
				</div>
			</div>
			<div class="formGroup formGroup-email">
				<span>Choose Server</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-question"></i>
					</div>
					<select v-model="netType">
						<option value="0">Old</option>
						<option value="1">New</option>
					</select>
				</div>
			</div>
			
			<div class="formGroup-button">
				<button class="button-big" @click="userSignUp()">Sign Up</button>
			</div>
			<div class="formGroup-text">
				Already registered? <a @click="$store.dispatch('setModalType', 'sign-in')">Sign In Now</a>
			</div>
		<!-- </form> -->
		<a class="close-modal" @click="$store.commit('closeModal')"></a>
	</div>
</template>
<script>
    export default {
        name: 'SignUpModal',
		data(){
			return {
				username: '',
				password: '',
				email: '',
				phoneNumber: '',
				netType: 0,
			}
		},
		methods: {
			userSignUp(){
				if (this.username && this.password && this.phoneNumber && this.email) {
					let data = {}
					data.username = this.username
					data.password = this.password
					data.email = this.email
					data.phoneNumber = this.phoneNumber
					data.netType = this.netType
					this.$api.request.userSignUp(data, (res => {
						if (res.data.type == 2) {
							this.$toast.error(`The user with the username "${this.username}" already exists.`)
						} else if (res.data.user) {
							this.$toast.show(`Successfully registered the username "${this.username}".`)
								this.$store.dispatch('account/setAccount', res.data.user)
								this.$store.commit('closeModal')
						}
					}), err =>{
						this.$toast.error('Server is disconnected.')
						console.log(err)
					})
				}
			}
		}
	
	}
</script>
<style lang="scss" scoped>
	.formGroup-text {
		a {
			color: #91a8f8;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>