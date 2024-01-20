"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
exports.CloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'dh73snhfc',
            api_key: '615926527442474',
            api_secret: 'Gqqv3y7lQWsnzIruhvvsLvaWaQw',
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map