import {User} from './user.model';
import DateTimeFormat = Intl.DateTimeFormat;

export class Vote {
  public voteType: string;
  public voteBy: User;
  public voteOn: DateTimeFormat;

  constructor(vote?) {
    vote = vote || {};
    this.voteType = vote.voteType || null;
    this.voteBy = vote.voteBy || null;
    this.voteOn = vote.voteOn || null;
  }
}
