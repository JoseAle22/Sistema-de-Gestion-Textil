<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Iniciar Sesión</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="form-input"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-input"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" class="login-button">Iniciar Sesión</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      <p class="register-text">
        ¿No tienes una cuenta?
        <router-link to="/register" class="register-link">Regístrate</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        // Guardar el token de autenticación
        localStorage.setItem('token', response.data.token);

        // Redirigir según el rol
        if (response.data.role === 'admin') {
          this.$router.push('/admin/dashboard');
        } else {
          this.$router.push('/employee/dashboard');
        }
      } catch (error) {
        this.error = 'Credenciales incorrectas';
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  padding: 20px;
}

/* Estilos para la caja del formulario */
.login-box {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Estilos para el título */
.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Estilos para el formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilos para los grupos de formulario */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Estilos para las etiquetas */
.form-label {
  font-size: 14px;
  color: #555;
  text-align: left;
}

/* Estilos para los inputs */
.form-input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #6a11cb;
  outline: none;
}

/* Estilos para el botón de inicio de sesión */
.login-button {
  padding: 12px;
  background: #6a11cb;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: #2575fc;
}

/* Estilos para el mensaje de error */
.error-message {
  color: #ff4d4d;
  margin-top: 10px;
  font-size: 14px;
}

/* Estilos para el texto de registro */
.register-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

/* Estilos para el enlace de registro */
.register-link {
  color: #6a11cb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #2575fc;
}
</style>