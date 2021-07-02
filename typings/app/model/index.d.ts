// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCustomData from '../../../app/model/custom_data';
import ExportProject from '../../../app/model/project';
import ExportStatisticsDetail from '../../../app/model/statistics_detail';
import ExportUser from '../../../app/model/user';
import ExportUserProject from '../../../app/model/user_project';
import ExportWebResStatistic from '../../../app/model/web_res_statistic';

declare module 'egg' {
  interface IModel {
    CustomData: ReturnType<typeof ExportCustomData>;
    Project: ReturnType<typeof ExportProject>;
    StatisticsDetail: ReturnType<typeof ExportStatisticsDetail>;
    User: ReturnType<typeof ExportUser>;
    UserProject: ReturnType<typeof ExportUserProject>;
    WebResStatistic: ReturnType<typeof ExportWebResStatistic>;
  }
}
