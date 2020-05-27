export declare class MitarbeiterService {
    findAll(): Promise<any[]>;
    findOne(id: any): Promise<() => FirebaseFirestore.DocumentData>;
    CheckMitarbeiter(userName: string, password: string): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
}
