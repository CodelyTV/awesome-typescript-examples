import { User } from "./User";

export class VideoTrimAction {
  trim(user: User, videoId: string): void {
    if (!user.canEditVideos()) {
      throw new Error(
        "User can't edit videos because it does not has enough access level"
      );
    }

    console.log(`Here we would trim the video with id ${videoId}`);
  }
}
