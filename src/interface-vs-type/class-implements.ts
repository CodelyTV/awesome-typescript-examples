/* eslint-disable @typescript-eslint/no-unused-vars */
interface Web {
  url: string;
}

class CodelyWeb implements Web {
  url = "https://codely.tv/";
}

type Step = {
  name: string;
};

class VideoStep implements Step {
  name = "interface vs type";
}
