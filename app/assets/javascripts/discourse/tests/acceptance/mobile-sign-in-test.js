import { click, visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance, exists } from "discourse/tests/helpers/qunit-helpers";

acceptance("Signing In - Mobile", function (needs) {
  needs.mobileView();

  needs.pretender((server, helper) => {
    server.get(`/session/passkey/challenge.json`, () =>
      helper.response({ challenge: "smth" })
    );
  });

  test("sign in", async function (assert) {
    await visit("/");
    await click("header .login-button");
    assert.ok(exists("#login-form"), "it shows the login modal");
  });
});
