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
let MitarbeiterService = class MitarbeiterService {
    async findAll() {
        const data = [];
        const worker = await db
            .collection('nutzers')
            .where('typ', '==', 'mitarbeiter')
            .get();
        await worker.forEach(fr => {
            data.push({ id: fr.id, data: fr.data });
        });
        return data;
    }
    async findOne(id) {
        const worker = await db
            .collection('nutzers')
            .doc(id)
            .get();
        worker.data['id'] = worker.id;
        return worker.data;
    }
    async CheckMitarbeiter(userName, password) {
        const worker = await db
            .collection('nutzers')
            .where('userName', '==', userName)
            .where('password', '==', password);
        return worker.get();
    }
};
MitarbeiterService = __decorate([
    common_1.Injectable()
], MitarbeiterService);
exports.MitarbeiterService = MitarbeiterService;
//# sourceMappingURL=mitarbeiter.service.js.map