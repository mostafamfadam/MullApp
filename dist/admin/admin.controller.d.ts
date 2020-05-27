import { AdminService } from './admin.service';
import { AdminDTO } from './dto/admin.dto';
export declare class AdminController {
    private service;
    constructor(service: AdminService);
    createAdmin(body: AdminDTO): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
    findeOne(_id: any): Promise<FirebaseFirestore.DocumentData>;
    findByTyp(_typ: string): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
    findAll(): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
    DeleteOne(_id: any): Promise<FirebaseFirestore.WriteResult>;
    UpdateOne(id: any, body: any): Promise<FirebaseFirestore.WriteResult>;
    checkAdmin(params: any): Promise<{
        id: string[];
        data: FirebaseFirestore.DocumentData[];
    }>;
}
