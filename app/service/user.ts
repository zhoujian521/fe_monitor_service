import { Service } from 'egg';
export default class user extends Service {


  public async addUser(params:any) {
    console.log('===========经过复杂的处理=============');
    return params;
  }

  public async getUserInfo(id: string, name:string) {
    console.log('===========经过复杂的处理=============');
    return { id, name };
  }

  public async updadteUser(params:any) {
    console.log('===========经过复杂的处理=============');
    return params;
  }

}
