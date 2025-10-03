"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_route_1 = require("./modules/movies/movie.route");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const user_route_1 = require("./modules/user/user.route");
const auth_route_1 = require("./modules/auth/auth.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use("/api/movies", movie_route_1.MovieRoutes);
app.use("/api/users", user_route_1.UserRoutes);
app.use("/api/auth", auth_route_1.AuthRoutes);
app.get("/", (req, res) => {
    res.send("Hello Next!");
});
app.use(globalErrorHandler_1.default);
//Not Found
app.use(notFound_1.default);
exports.default = app;
