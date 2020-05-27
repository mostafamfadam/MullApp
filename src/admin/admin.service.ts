import { Injectable, NotFoundException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { AdminDTO } from './dto/admin.dto';
// admin init
try {
  admin.initializeApp(functions.config());
} catch (e) {
  console.log(e);
}

const db = admin.firestore();

@Injectable()
export class AdminService {
  resultData: AdminDTO;

  // add user admin / mitArbiter
  async addAdmin(data: AdminDTO) {
    data.createdAt = new Date().toISOString();
    data.updatedAt = new Date().toISOString();
    //data.Name = data.firstName + ' ' + data.lastName;

    const action = await db.collection('nutzers').add(data);

    /*const action = await (await db.collection('nutzers').add(user))
      .collection('typ')
      .add(Typ);*/

    return await action.get();
  }

  // find admin
  async findOne(_id: any) {
    const actionOne = await db
      .collection('nutzers') //.where('typ','==', 'admin').select(_id)
      .doc(_id)
      .get();

    if (!actionOne) throw new NotFoundException('Nutzer does not exist');

    return { _id: actionOne.id, data: actionOne.data() };
  }
  // find all by typ
  async findAllByTyp(_typ: string) {
    const action = await db.collection('nutzers').where('typ', '==', _typ);
    return action.get();
  }

  // find all

  async findAll() {
    //const mll: any[] = [];
    const all = await db.collection('nutzers').get();
    return all;
  }

  // delete one
  async deleteOne(_id) {
    const del = await db
      .collection('nutzers')
      .doc(_id)
      .delete();

    return del;
  }

  //
  async updateByAdmin(id, body) {
    //const dt: any[] = [];
    body.updateAt = new Date().toISOString();
    const up = db
      .collection('nutzers')
      .doc(id)
      .update(body);

    /*
    await db
      .collection('nutzers')
      .get()
      .then(res => {
        res.docs.forEach(el => {
          const data = { data: el.data() };
          data.data.id = el.id;
          if (data.data.id == id && data.data['typ'] == 'admin')
            dt.push(data.data);
        });
      });
      */
    //

    return up;
  }
  // check admin
  async CheckAdmin(userName, password) {
    const chk = await db
      .collection('nutzers')
      .where('userName', '==', userName)
      .where('password', '==', password)
      .get();

    if (!chk) {
      throw new NotFoundException('Not found!!');
    }

    const res = await chk.docs.map(one => one.id);
    const res2 = await chk.docChanges().map(m => m.doc.data());

    return { id: res, data: res2 };
  }

  //
}
