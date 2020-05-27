"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
try {
    admin.initializeApp(functions.config());
}
catch (e) {
    console.log(e);
}
const db = admin.firestore();
let TrashService = class TrashService {
    async addOne(data) {
        data['create_at'] = new Date().toISOString();
        data['updated_at'] = new Date().toISOString();
        const action = await db.collection('trashes').add(data);
        return action.get();
    }
    async findAll() {
        let obj = {};
        const action = await db.collection('trashes').get();
        action.docs.map(m => {
            obj = { data: m.data() };
        });
        return { obj };
    }
    async findOne(id) {
        const action = await db
            .collection('trashes')
            .doc(id)
            .get();
        return action;
    }
    async updateOne(userId, id, data) {
        data['updated_at'] = new Date().toISOString();
        const user = await db
            .collection('nutzers')
            .doc(userId)
            .get();
        const usr = user.data();
        data['updated_by'] = { id: userId, userName: usr.userName };
        await db
            .collection('trashes')
            .doc(id)
            .update(data);
        return { id: id, updatedBy: data['updated_by'] };
    }
    async deleteOne(id) {
        await db
            .collection('trashes')
            .doc(id)
            .delete();
        return id;
    }
    async findAllByStatus(status) {
        const action = await db
            .collection('trashes')
            .where('status', '==', status)
            .get();
        const act = action.docChanges();
        return act;
    }
};
TrashService = __decorate([
    common_1.Injectable()
], TrashService);
exports.TrashService = TrashService;
//# sourceMappingURL=trash.service.js.map