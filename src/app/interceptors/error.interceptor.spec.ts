import { TestBed } from "@angular/core/testing";

import { ErrorInterceptor } from "./error.interceptor";

describe("ErrorService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const interceptor: ErrorInterceptor = TestBed.get(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
