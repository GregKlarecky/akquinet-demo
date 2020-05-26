import { SafeHTMLPipe } from "./safe-html.pipe";
import { DomSanitizer } from "@angular/platform-browser";

describe("SafeHTMLPipe", () => {
  it("create an instance", () => {
    const pipe = new SafeHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});
