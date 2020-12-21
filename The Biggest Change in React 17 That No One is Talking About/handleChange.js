function handleChange(e) {
  setData((data) => ({
    ...data,
    // This crashes in React 16 and earlier:
    text: e.target.value,
  }))
}
