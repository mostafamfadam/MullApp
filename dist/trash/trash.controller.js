"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const trash_service_1 = require("./trash.service");
let TrashController = class TrashController {
    constructor(service) {
        this.service = service;
    }
    async viewAllTrashes() {
        const result = await this.service.findAll();
        return result;
    }
    async createTrash(body) {
        const result = await this.service.addOne(body);
        return result;
    }
    async updateTrash(userId, id, body) {
        const result = await this.service.updateOne(userId, id, body);
        return result;
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrashController.prototype, "viewAllTrashes", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrashController.prototype, "createTrash", null);
__decorate([
    common_1.Patch(':userId/:id'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TrashController.prototype, "updateTrash", null);
TrashController = __decorate([
    common_1.Controller('trash'),
    __metadata("design:paramtypes", [trash_service_1.TrashService])
], TrashController);
exports.TrashController = TrashController;
//# sourceMappingURL=trash.controller.js.map