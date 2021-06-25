// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSystem from '../../../app/model/system';
import ExportUser from '../../../app/model/user';
import ExportUserSystem from '../../../app/model/user_system';

declare module 'egg' {
  interface IModel {
    System: ReturnType<typeof ExportSystem>;
    User: ReturnType<typeof ExportUser>;
    UserSystem: ReturnType<typeof ExportUserSystem>;
  }
}
