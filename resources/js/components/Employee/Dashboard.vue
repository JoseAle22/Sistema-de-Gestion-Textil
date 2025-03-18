<template>
  <div class="employee-dashboard">
    <!-- Menú lateral -->
    <div :class="['sidebar', { 'sidebar-collapsed': isCollapsed }]">
      <button @click="toggleSidebar" class="sidebar-toggle">
        {{ isCollapsed ? '☰' : '✕' }}
      </button>
      <ul class="sidebar-menu">
        <li @click="navigateTo('inicio')" :class="{ active: activeSection === 'inicio' }">
          <i class="fas fa-home"></i>
          <span v-if="!isCollapsed">Inicio</span>
        </li>
        <li @click="navigateTo('notificaciones')" :class="{ active: activeSection === 'notificaciones' }">
          <i class="fas fa-bell"></i>
          <span v-if="!isCollapsed">Notificaciones</span>
        </li>
        <li @click="navigateTo('configuracion')" :class="{ active: activeSection === 'configuracion' }">
          <i class="fas fa-cog"></i>
          <span v-if="!isCollapsed">Configuración</span>
        </li>
        <li @click="navigateTo('historial')" :class="{ active: activeSection === 'historial' }">
          <i class="fas fa-history"></i>
          <span v-if="!isCollapsed">Historial</span>
        </li>
        <li @click="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span v-if="!isCollapsed">Cerrar Sesión</span>
        </li>
      </ul>
    <div class="footer">
      <p>Versión 1.0.0 | © 2023 Empresa</p>
    </div>
    </div>

    <!-- Contenido principal -->
    <div class="main-content">
      <h2>Panel del Empleado</h2>
      <p>Bienvenido, {{ user.name }}</p>
      <div v-if="activeSection === 'inicio'">
        <h3>Inicio</h3>
        <p>Contenido de la sección de inicio.</p>
      </div>
      <div v-if="activeSection === 'notificaciones'">
        <h3>Notificaciones</h3>
        <p>Contenido de la sección de notificaciones.</p>
      </div>
      <div v-if="activeSection === 'configuracion'">
        <h3>Configuración</h3>
        <p>Contenido de la sección de configuración.</p>
      </div>
      <div v-if="activeSection === 'historial'">
        <h3>Historial</h3>
        <p>Contenido de la sección de historial.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Nombre del Empleado', // Esto se obtendrá del backend
      },
      isCollapsed: false, // Estado para controlar si el menú está colapsado
      activeSection: 'inicio', // Sección activa por defecto
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    navigateTo(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
.employee-dashboard {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
}

/* Estilos del menú lateral */
.sidebar {
  width: 250px;
  background: #333;
  padding: 20px;
  transition: width 0.3s ease, transform 0.3s ease;
}

.sidebar-collapsed {
  width: 60px;
}

.sidebar-toggle {
  background: #444;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  padding: 10px;
  cursor: pointer;
  color: #fff;
  transition: background 0.3s ease;
}

.sidebar-menu li:hover {
  background: #444;
}

.sidebar-menu li.active {
  background: #6a11cb;
}

.sidebar-menu li span {
  margin-left: 10px;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .sidebar-menu li span {
  opacity: 0;
}

/* Estilos del contenido principal */
.main-content {
  flex: 1;
  padding: 20px;
  background: #fff;
  color: #333;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

/* Estilos del footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>