import { TrashService } from './trash.service';
export declare class TrashController {
    private service;
    constructor(service: TrashService);
    viewAllTrashes(): Promise<{
        obj: {};
    }>;
    createTrash(body: any): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
    updateTrash(userId: any, id: any, body: any): Promise<{
        id: any;
        updatedBy: any;
    }>;
}
