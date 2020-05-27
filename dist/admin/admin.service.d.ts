import { AdminDTO } from './dto/admin.dto';
export declare class AdminService {
    resultData: AdminDTO;
    addAdmin(data: AdminDTO): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
    findOne(_id: any): Promise<{
        _id: string;
        data: FirebaseFirestore.DocumentData;
    }>;
    findAllByTyp(_typ: string): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
    findAll(): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
    deleteOne(_id: any): Promise<FirebaseFirestore.WriteResult>;
    updateByAdmin(id: any, body: any): Promise<FirebaseFirestore.WriteResult>;
    CheckAdmin(userName: any, password: any): Promise<{
        id: string[];
        data: FirebaseFirestore.DocumentData[];
    }>;
}
