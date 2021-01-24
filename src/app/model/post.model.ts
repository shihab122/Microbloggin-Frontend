import {Name} from './name.model';
import {ActivityFeed} from './activity-feed.model';
import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user.model';
import {Comment} from './comment.model';
import {Vote} from './vote.model';

export class Post {
  public id: string;
  public description: string;
  public postedAt: DateTimeFormat;
  public postedBy: User;
  public voteList: Vote[];
  public commentList: Comment[];
  public activityFeedList: ActivityFeed[];

  constructor(post?) {
    post = post || {};
    this.id = post.id || null;
    this.description = post.description || null;
    this.postedAt = post.postedAt || null;
    this.postedBy = post.postedBy || null;
    this.voteList = post.voteList || null;
    this.commentList = post.commentList || null;
    this.activityFeedList = post.activityFeedList || null;
  }
}
