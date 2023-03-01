<template>
  <header class="app-header">
    <div class="top">
          <div class="logo">
              <img src="" alt="">
          </div>
          <form class="login_form">
            <div>
                <div class="textbox">
                    <input type="text" class="input-box" placeholder="Username" name="name" value="">
                </div>
                <div class="textbox">
                    <input type="text" class="input-box" placeholder="Password" name="password" value="">
                </div>
                <input class="login_btn" type="button" value="Login">
            </div>
          </form>
      </div>
      <div class="bottom border-top">
          <div class="content">
              <div class="menu">
                  <a :class="$route.path == '/' ? 'active': ''" class="menu-item" @click="$router.push('/')">Sports Betting</a>
                  <a :class="$route.path == '/in-play' ? 'active': ''" class="menu-item" @click="$router.push('/in-play')">In-Play</a>
                  <a :class="$route.path == '/outright' ? 'active': ''" class="menu-item" @click="$router.push('/outright')">Outrights</a>
                  <a :class="$route.path == '/result' ? 'active': ''" class="menu-item" @click="$router.push('/result')">Results</a>
              </div>
              <a class="lang-btn">
                <img src="@/assets/images/flags/en_US.png" style="width: 20px;"/>
                <span>English</span>
              </a>


             
              <div class="clearfix"></div>
          </div>
      </div>
		</header>
</template>
  
<script>
  export default {
    name: "Header",
    components: {},
    data() {
      return {
        scrollStyle: false
      };
    },
		methods: {
			handleScroll(event){
				if (window.scrollY >= 50)
					this.scrollStyle = true
				else
					this.scrollStyle = false
			}
		}
  };
</script>

<style lang="css">
  .lang-btn {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
    border: 1px solid #bababa;
    box-shadow: 0 0 0 1px #fff;
    background: linear-gradient(180deg,#fff 0,#cfcfcf);
    padding: 4px;
    min-width: 100px;
  }
    .app-header {
      background-color: #38393c;
      min-width: 1280px;
      width: 100%;
      top: 0;
    }
    .top {
      display: flex;
      justify-content: space-between;
      width: 1280px;
      margin: auto;
    }

    .login_form {
      font-size: 13px;
      margin: 5px 0;
      display: flex;
      float: right;
      border: 1px solid #0d0c0c;
      padding: 7px;
      background-color: #312c32;
      border-radius: 3px;
    }

    .login_form>div {
      padding-bottom: 1px;
    }

    .login_btn {
      text-align: center;
      background-color: var(--primary-color);
      color: #ffffff;
      border: 1px solid #333;
      border-radius: 3px;
    }

    .textbox {
      float: left;
      margin-right: 10px;
    }

    .input-box {
      height: 15px;
      border-radius: 3px;
      border: 1px solid #bbb;
      padding: 10px;
    }

    .border-top {
      border-top: 10px solid var(--primary-color) !important;
    }

    .bottom {
      position: relative;
      background-repeat: no-repeat;
      background-size: 100% auto;
      border-bottom: 0 none;
      background-image: linear-gradient(180deg, #f3f3f3 0, #e7e7e7);
      box-shadow: 0 3px 10px 0 #777;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .menu {
    /* float: left; */
    /* margin-left: 10px; */
    }
    .dropdownbtn {
        display: inline-block;
      text-align: center;
      text-decoration: none;
      border-radius: 2px;
      border: 1px solid #bababa;
      box-shadow: 0 0 0 1px #fff;
      background: linear-gradient(180deg,#fff 0,#cfcfcf);
      padding: 4px;
      min-width: 100px;
    }

    @media only screen and (max-width: 1430px) {
        .menu {
            /* float: left;
            margin-left: 263px; */
        }

        .dropdownbtn {
            /* padding-top: 10px;
            float: left;
            margin-right: 40px; */
        }
    }

    .menu-item {
      cursor: pointer;
      padding: 13px 34px;
      font-size: 18px;
      position: relative;
      overflow: hidden;
      color: #404040;
      font-weight: 400;
      float: left;
      border-right: 1px solid #ccc;
    }

    .menu-item:first-child {
    border-left: 1px solid #ccc;
    }

    .menu-item:hover {
      padding: 13px 34px;
      font-size: 18px;
      position: relative;
      overflow: hidden;
      color: #404040;
      font-weight: 400;
      float: left;
      border-right: 1px solid #ccc;
      box-shadow: inset 0px -16px 10px 0px rgb(0 0 0 / 17%);
      background: transparent;
    }

    .active {
      padding: 13px 34px;
      font-size: 18px;
      position: relative;
      overflow: hidden;
      color: #404040;
      font-weight: 400;
      float: left;
      border-right: 1px solid #ccc;
      box-shadow: inset 0px -16px 10px 0px rgb(0 0 0 / 17%);
      background: transparent;
    }

    .dropdownbtn {
      padding-top: 10px;
      float: right;
      margin-right: 40px;
    }

    .dropdownbtn>.dropbtn1 {
      font-size: 13px;
      display: flex;
      text-align: center;
      text-decoration: none;
      border-radius: 2px;
      border: 1px solid #bababa;
      box-shadow: 0 0 0 1px #fff;
      background: linear-gradient(180deg, #fff 0, #cfcfcf);
      padding: 4px 21px;
      min-width: 100px;
      margin: 0 24px;
      cursor: pointer;
      color: black;
    }

    .dropbtn1>.span:focus,
    .nav-item>a:focus {
      color: #0d0c0c;
    }

    .language {
      margin-right: 3px;
      width: 20px;
      vertical-align: middle;
    }

    .logoutbtn {
      cursor: pointer;
    }

    .logoutbtn>svg {
      width: 13px;
      margin: 0 0 3px 8px;
    }

    .logined>div {
      margin-top: 4px;
      padding-left: 5px;
      padding-right: 5px;
    }

    .logined>div:first-child {
      border-left: 0px;
    }

    .overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background: #00000096;
    }

    .modal-title {
      line-height: 1.5;
      font-size: 19px;
    }

    .modal-footer {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      padding: 1rem;
      border-top: 1px solid #e9ecef;
    }

    .cancel {
      background-color: #971f1e !important;
    }

    .language-list {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    .language-list>ul {
      padding: 0px;
    }
    .language-list>ul>li, .btn-cancel {
      cursor: pointer;
    }
    .language-list>ul>li>div {
      color: #1c1c1c;
      padding: 8px 25px 9px 31px;
      font-weight: 700;
      border-bottom: 1px solid #c1c1c1;
      background: linear-gradient(180deg, #f1f1f1 0, #d7d7d7);
      font-size: 13px;
      text-decoration: none;
      display: block;
      outline: 0;
    }

    .close {
      float: right;
      font-weight: 700;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: .5;
      font-size: 20px;
    }
    .btn-cancel {
      width: calc(100% - 30px);
      text-align: center;
      background-color: #971f1e;
      color: #f5f5f5 !important;
      font-size: 13px;
      border: 1px solid #333;
      margin: 5px;
      padding: 5px 10px;
      border-radius: 3px;
      float: left;
    }
</style>