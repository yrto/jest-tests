class Response {
  send(params) {
    a + b;
  }
  status(params) {
    c + d;
  }
}

// stub

class StubResponse extends Response {
  send() {
    return null;
  }
  status() {
    return this;
  }
}

// fake

class FakeResponse extends Response {
  send() {
    return {
      status: this.statusVal,
    };
  }
  status(params) {
    this.statusVal = params;
    return this;
  }
}

// mock

class MockResponse extends Response {
  send() {
    return {
      status: this.statusVal,
    };
  }
  status(params) {
    parent.status(params);
  }
}

// spy
