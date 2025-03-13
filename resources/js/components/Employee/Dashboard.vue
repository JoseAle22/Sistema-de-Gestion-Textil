<template>
    <div class="employee-dashboard">
      <h2>Panel del Empleado</h2>
      <p>Bienvenido, {{ user.name }}</p>
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'Nombre del Empleado', // Esto se obtendrá del backend
        },
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  .employee-dashboard {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>