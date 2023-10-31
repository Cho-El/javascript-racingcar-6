class App {
  async play(a,b) {
    return add(a,b);
  }
}

const add = (a,b) => {
  return a + b
}


export {App, add};
