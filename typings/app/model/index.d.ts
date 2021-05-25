// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEmail from '../../../app/model/email';
import ExportIp from '../../../app/model/ip';
import ExportSystem from '../../../app/model/system';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Email: ReturnType<typeof ExportEmail>;
    Ip: ReturnType<typeof ExportIp>;
    System: ReturnType<typeof ExportSystem>;
    User: ReturnType<typeof ExportUser>;
  }
}
