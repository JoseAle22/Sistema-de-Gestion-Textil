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
import { auth, signInWithEmailAndPassword } from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.js"; // Asegúrate de exportar `db` en tu archivo firebase.js

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
  try {
    // Inicia sesión con Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      this.email,
      this.password
    );
    const user = userCredential.user;
    console.log("Usuario autenticado:", user);

    // Obtén el token de Firebase
    const token = await user.getIdToken();
    console.log("Token de Firebase:", token);

    // Guarda el token en localStorage (opcional)
    localStorage.setItem("token", token);

    // Obtén los datos del usuario desde Firestore
    console.log("Buscando documento en Firestore para el UID:", user.uid);
    const userDoc = await getDoc(doc(db, "users", user.uid)); // Busca el documento con el UID del usuario
    console.log("Documento encontrado:", userDoc.exists() ? userDoc.data() : "No existe");

    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("Datos del usuario:", userData);

      // Redirige al usuario según su rol
      if (userData.role === "admin") {
        this.$router.push("/admin/dashboard");
      } else {
        this.$router.push("/employee/dashboard");
      }
    } else {
      this.error = "No se encontraron datos del usuario.";
      console.error("No se encontró el documento en Firestore para el UID:", user.uid);
    }
  } catch (error) {
    console.error("Error de autenticación:", error);
    if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
      this.error = "Correo electrónico o contraseña incorrectos.";
    } else {
      this.error = "Ocurrió un error durante el inicio de sesión.";
    }
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