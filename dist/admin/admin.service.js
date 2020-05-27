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
let AdminService = class AdminService {
    async addAdmin(data) {
        data.createdAt = new Date().toISOString();
        data.updatedAt = new Date().toISOString();
        const action = await db.collection('nutzers').add(data);
        return await action.get();
    }
    async findOne(_id) {
        const actionOne = await db
            .collection('nutzers')
            .doc(_id)
            .get();
        if (!actionOne)
            throw new common_1.NotFoundException('Nutzer does not exist');
        return { _id: actionOne.id, data: actionOne.data() };
    }
    async findAllByTyp(_typ) {
        const action = await db.collection('nutzers').where('typ', '==', _typ);
        return action.get();
    }
    async findAll() {
        const all = await db.collection('nutzers').get();
        return all;
    }
    async deleteOne(_id) {
        const del = await db
            .collection('nutzers')
            .doc(_id)
            .delete();
        return del;
    }
    async updateByAdmin(id, body) {
        body.updateAt = new Date().toISOString();
        const up = db
            .collection('nutzers')
            .doc(id)
            .update(body);
        return up;
    }
    async CheckAdmin(userName, password) {
        const chk = await db
            .collection('nutzers')
            .where('userName', '==', userName)
            .where('password', '==', password)
            .get();
        if (!chk) {
            throw new common_1.NotFoundException('Not found!!');
        }
        const res = await chk.docs.map(one => one.id);
        const res2 = await chk.docChanges().map(m => m.doc.data());
        return { id: res, data: res2 };
    }
};
AdminService = __decorate([
    common_1.Injectable()
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map