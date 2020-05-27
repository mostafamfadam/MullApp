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
export class TrashService {
  // add trash
  async addOne(data: any) {
    data['create_at'] = new Date().toISOString();
    data['updated_at'] = new Date().toISOString();
    const action = await db.collection('trashes').add(data);
    return action.get();
  }

  // find all
  async findAll() {
    let obj = {};
    //let obj2 = {};
    //const ob3 = {};
    const action = await db.collection('trashes').get();
    // .where('updated_by', '==', '3Za9d0Vl0PfBkNu9XA2O')
    /*const user = await db
      .collection('nutzers')
      .doc('3Za9d0Vl0PfBkNu9XA2O')
      .get();
*/
    action.docs.map(m => {
      obj = { data: m.data() };
    });

    //obj2 = { id: user.id };

    //const usr = user.data();
    // obj['data'].updatedBy = { id: user.id, userName: usr.userName };

    return { obj };
  }

  // find one
  async findOne(id: any) {
    const action = await db
      .collection('trashes')
      .doc(id)
      .get();
    return action;
  }

  // update by admin or Mitarbeiter and add seiner-id
  async updateOne(userId: any, id: any, data: any) {
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

  // delete by admin
  async deleteOne(id: any) {
    await db
      .collection('trashes')
      .doc(id)
      .delete();
    return id;
  }
  // find by updated_by

  // find by status
  async findAllByStatus(status) {
    const action = await db
      .collection('trashes')
      .where('status', '==', status)
      .get();
    const act = action.docChanges();
    //act.forEach( m => m.doc)
    return act;
  }
}
