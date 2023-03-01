<template>
    <div class="modalBlock">
		<span class="modalBlock-crystal"></span>
		<div class="modalBlock-title">
			Sign In
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
			<div class="formGroup formGroup-password">
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
				<span>Choose Server</span>
				<div class="formGroup-flex">
					<div class="formGroup-icon">
						<i class="form-icon icon-question"></i>
					</div>
					<select>
						<option>Old</option>
						<option>New</option>
						
					</select>
				</div>
			</div>
			
			
			<div class="formGroup-button">
				<button class="button-big" @click="userSignIn()">Sign In</button>
			</div>
			<div class="formGroup-text">
				<p>Forgot password? <a>Recover Now</a></p>
				Don`t have a account? <a @click="$store.dispatch('setModalType', 'sign-up')">Register Now</a>
			</div>
		<!-- </form> -->
		<a class="close-modal" @click="$store.commit('closeModal')"></a>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			userSignIn() {
				if (this.username && this.password){
					let data = {}
					data.username =this.username
					data.password = this.password
					this.$api.request.userSignIn(data, (res => {
						if (res.data.type == 3) {
							this.$toast.error(`The wrong password.`)
						} else if (res.data.type == 2) {
							this.$toast.error(`The user with the username ${this.username} doesn't exists`)
						} else if (res.data.user) {
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