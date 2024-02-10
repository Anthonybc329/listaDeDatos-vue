import type { RouteLocation } from "vue-router";

export default interface IMenuItem {
    path: RouteLocation["path"];
    name: String,
}

