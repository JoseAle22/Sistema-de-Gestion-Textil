<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="register-title">Registro</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <label for="name" class="form-label">Nombre</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="form-input"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div class="form-group">
          <label for="cedula" class="form-label">Cédula de Identidad</label>
          <input
            v-model="cedula"
            type="text"
            id="cedula"
            class="form-input"
            placeholder="Ingresa tu cédula"
            required
          />
        </div>
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
        <div class="form-group">
          <label for="role" class="form-label">Rol</label>
          <select v-model="role" id="role" class="form-input">
            <option value="employee">Empleado</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit" class="register-button">Registrarse</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      <p class="login-text">
        ¿Ya tienes una cuenta?
        <router-link to="/login" class="login-link">Inicia Sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      cedula: '',
      email: '',
      password: '',
      role: 'employee',
      error: '',
      adminCedulas: ['12345678', '87654321', '31036510'], // Lista de cédulas permitidas para administradores
    };
  },
  methods: {
    async register() {
    try {
      // Validar si el rol es administrador y la cédula no está en la lista permitida
      if (this.role === 'admin' && !this.adminCedulas.includes(this.cedula)) {
        this.error = 'No puedes registrarte como administrador. Cédula no válida.';
        return;
      }

      const response = await axios.post('/api/register', {
        name: this.name,
        cedula: this.cedula,
        email: this.email,
        password: this.password,
        role: this.role,
      });

      // Redirigir al login después del registro
      this.$router.push('/login');
    } catch (error) {
      // Mostrar el mensaje de error del servidor
      if (error.response && error.response.data.message) {
        this.error = error.response.data.message;
      } else {
        this.error = 'Error en el registro';
      }
    }
  },
},
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  padding: 20px;
}

/* Estilos para la caja del formulario */
.register-box {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Estilos para el título */
.register-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Estilos para el formulario */
.register-form {
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

/* Estilos para el select */
.form-input select {
  appearance: none; /* Elimina el estilo por defecto del select */
  background: #fff;
}

/* Estilos para el botón de registro */
.register-button {
  padding: 12px;
  background: #6a11cb;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-button:hover {
  background: #2575fc;
}

/* Estilos para el mensaje de error */
.error-message {
  color: #ff4d4d;
  margin-top: 10px;
  font-size: 14px;
}

/* Estilos para el texto de inicio de sesión */
.login-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

/* Estilos para el enlace de inicio de sesión */
.login-link {
  color: #6a11cb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #2575fc;
}
</style>