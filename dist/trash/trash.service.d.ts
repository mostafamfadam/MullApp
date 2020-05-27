export declare class TrashService {
    addOne(data: any): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
    findAll(): Promise<{
        obj: {};
    }>;
    findOne(id: any): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
    updateOne(userId: any, id: any, data: any): Promise<{
        id: any;
        updatedBy: any;
    }>;
    deleteOne(id: any): Promise<any>;
    findAllByStatus(status: any): Promise<FirebaseFirestore.DocumentChange<FirebaseFirestore.DocumentData>[]>;
}
