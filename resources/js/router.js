import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Auth/Login.vue';
import Register from './components/Auth/Register.vue';
import EmployeeDashboard from './components/Employee/Dashboard.vue';
import AdminDashboard from './components/Admin/Dashboard.vue';

const routes = [
    { path: '/', redirect: '/login' }, // Redirige la raíz a /login
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/employee/dashboard', component: EmployeeDashboard },
    { path: '/admin/dashboard', component: AdminDashboard },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;