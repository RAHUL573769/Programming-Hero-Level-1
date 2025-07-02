"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tour_route_1 = require("../routes/tour.route");
const user_route_1 = require("../routes/user.route");
const routes = [
    { path: '/users', route: user_route_1.UserRouter },
    { path: '/tours', route: tour_route_1.TourRouter },
];
exports.default = routes;
