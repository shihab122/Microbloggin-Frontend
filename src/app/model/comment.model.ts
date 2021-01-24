import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user.model';

export class Comment {
  public description: string;
  public commentOn: DateTimeFormat;
  public commentBy: User;

  constructor(comment?) {
    comment = comment || {};
    this.commentOn = comment.commentOn || null;
    this.commentBy = comment.commentBy || null;
  }
}
