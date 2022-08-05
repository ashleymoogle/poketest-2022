import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;
