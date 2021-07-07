<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input type="text" v-model="form.email" class="form-control mb-2" placeholder="E-mail" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="form.password" class="form-control mb-2" placeholder="Senha" required>
          </div>

          <button class="btn btn-primary w-100">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 30%;
  }
}
</style>
