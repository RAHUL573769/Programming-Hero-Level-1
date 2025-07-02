"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => {
    res.status(200).json({
        status: 'Failed',
        message: `Route Not Found for ${req.originalUrl}`,
    });
};
exports.default = notFound;
