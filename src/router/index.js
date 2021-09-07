import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import("../views/Index.vue"),
        props: true,
        meta: {
            title: "XIN HE",
        },
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach(function(to, from, next) {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    next();
});
export default router;
