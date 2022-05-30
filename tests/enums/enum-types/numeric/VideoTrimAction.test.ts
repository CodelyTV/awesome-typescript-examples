import { AccessLevel } from "../../../../src/enums/enum-types/numeric/AccessLevel";
import { User } from "../../../../src/enums/enum-types/numeric/User";
import { VideoTrimAction } from "../../../../src/enums/enum-types/numeric/VideoTrimAction";

describe("VideoTrimAction", () => {
  it("throws an exception in case a user without enought access level tries to trim a video", () => {
    const videoTrimAction = new VideoTrimAction();
    const userWithoutEnoughAccessLevel = new User(
      "🤹‍♂️ Random standard user",
      AccessLevel.Standard
    );
    const randomVideoId = "99abf680-0a4c-4378-af33-02f967b9a092";

    const videoTrimActionExecution = () => {
      videoTrimAction.trim(userWithoutEnoughAccessLevel, randomVideoId);
    };

    expect(videoTrimActionExecution).toThrow(
      new Error(
        "User can't edit videos because it does not has enough access level"
      )
    );
  });

  it("allow to trim a video if the user has Editor Access Level", () => {
    const videoTrimAction = new VideoTrimAction();
    const editorUser = new User("🎥 Random editor user", AccessLevel.Editor);
    const randomVideoId = "99abf680-0a4c-4378-af33-02f967b9a092";

    const videoTrimActionExecution = () => {
      videoTrimAction.trim(editorUser, randomVideoId);
    };

    expect(videoTrimActionExecution).not.toThrow(Error);
  });

  it("allow to trim a video if the user has Admin Access Level", () => {
    const videoTrimAction = new VideoTrimAction();
    const adminUser = new User("🧖 Random admin user", AccessLevel.Admin);
    const randomVideoId = "99abf680-0a4c-4378-af33-02f967b9a092";

    const videoTrimActionExecution = () => {
      videoTrimAction.trim(adminUser, randomVideoId);
    };

    expect(videoTrimActionExecution).not.toThrow(Error);
  });
});
