import { MitarbeiterService } from './mitarbeiter.service';
export declare class MitarbeiterController {
    private service;
    constructor(service: MitarbeiterService);
    GetAll(): Promise<any[]>;
    Check(userName: any, password: any): Promise<FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>[]>;
    getOne(id: any): Promise<() => FirebaseFirestore.DocumentData>;
}
