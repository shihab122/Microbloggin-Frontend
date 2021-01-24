import DateTimeFormat = Intl.DateTimeFormat;
import {Name} from './name.model';
import {ActivityFeed} from './activity-feed.model';

export class User {
  public id: string;
  public name: Name;
  public username: string;
  public userType: string;
  public password: string;
  public createdAt: DateTimeFormat;
  public emailList: string[];
  public phoneNumberList: string[];
  public activityFeedList: ActivityFeed[];

  public tokenIssuedAt: number;
  public tokenExpiredAt: number;

  constructor(user?) {
    user = user || {};
    this.id = user.id || null;
    this.username = user.username || null;
    this.userType = user.userType || null;
    this.password = user.password || null;
    this.createdAt = user.createdAt || null;
    this.emailList = user.emailList || null;
    this.phoneNumberList = user.phoneNumberList || null;
    this.activityFeedList = user.activityFeedList || null;

    this.tokenIssuedAt = user.tokenIssuedAt || null;
    this.tokenExpiredAt = user.tokenExpiredAt || null;
  }

}
