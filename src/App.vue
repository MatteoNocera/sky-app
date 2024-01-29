<script >
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppFooter
  },

}
</script>

<template>
  <body>

    <header>
      <nav class="navbar navbar-light shadow-bottom">
        <div class="container justify-content-end">
          <!-- <router-link class="navbar-brand bg-secondary" to="/">
            <img height="80" src="./assets/img/klipartz.com.png" alt="Fiocco di neve">
          </router-link> -->
          <button class="navbar-toggler bg_focus" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end bg_focus" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item d-flex gap-2">
                  <router-link class="nav-link" active-class="active" to="/">Home</router-link>
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-arrow-right-long fa-bounce"></i>
                  </div>
                  <button type="button" class="btn text-reset ps-0" data-bs-dismiss="offcanvas"
                    aria-label="Close">Go</button>
                </li>
                <li class="nav-item d-flex gap-2">
                  <router-link class="nav-link" active-class="active" to="/search">Search</router-link>
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-arrow-right-long fa-bounce"></i>
                  </div>
                  <button type="button" class="btn text-reset ps-0" data-bs-dismiss="offcanvas"
                    aria-label="Close">Go</button>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </nav>



    </header>

    <main>
      <router-view></router-view>
    </main>

    <AppFooter></AppFooter>

  </body>
</template>

<style>
header {
  background-image: url(./assets/img/winter.jpg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-color: aquamarine;
  padding-bottom: 30rem;
}

.bg_focus {
  background-color: #a4628a;
}
</style>
