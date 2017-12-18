import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import Hello from '@/components/Hello.vue';

Vue.use(VueRouter);

// custom u routes in here
export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/hello',
    component: Hello
  }
];

export default new VueRouter({ mode: 'history', routes: createRoutes() });