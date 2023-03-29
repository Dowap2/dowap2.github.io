const importAll = r => r.keys().map(r);
const markdownFiles = importAll(require.context("../../posts", false, /\.md$/));\

const initialState = {
  state: {
    markdownFiles: markdownFiles
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
