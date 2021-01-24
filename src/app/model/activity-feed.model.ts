
import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user.model';

export class ActivityFeed {
  public id: string;
  public title: string;
  public description: string;
  public actionBy: User;
  public actionOn: DateTimeFormat;
  public actionFrom: string;

  constructor(activityFeed?) {
    activityFeed = activityFeed || {};
    this.id = activityFeed.id || null;
    this.title = activityFeed.title || null;
    this.description = activityFeed.description || null;
    this.actionBy = activityFeed.actionBy || null;
    this.actionOn = activityFeed.actionOn || null;
    this.actionFrom = activityFeed.actionFrom || null;
  }
}
