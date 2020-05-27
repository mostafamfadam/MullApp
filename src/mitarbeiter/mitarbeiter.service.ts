import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// admin init
try {
  admin.initializeApp(functions.config());
} catch (e) {
  console.log(e);
}

const db = admin.firestore();

@Injectable()
export class MitarbeiterService {
  async findAll() {
    const data = [];
    const worker = await db
      .collection('nutzers')
      .where('typ', '==', 'mitarbeiter')
      .get();
    await worker.forEach(fr => {
      data.push({ id: fr.id, data: fr.data });
    });
    // await act.forEach( l => { l.id; l.data() })
    // const act = await (await worker.get()).docs.map(m => m.id);
    //const act2 = await (await worker.get()).docs.map(m => m.data());
    return data;
  }

  async findOne(id: any) {
    const worker = await db
      .collection('nutzers')
      .doc(id)
      .get();

    worker.data['id'] = worker.id;
    return worker.data;
  }

  async CheckMitarbeiter(userName: string, password: string) {
    const worker = await db
      .collection('nutzers')
      .where('userName', '==', userName)
      .where('password', '==', password);

    return worker.get();
  }
}
