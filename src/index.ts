const chunk = (list: number[]) => {
  const sorted = list.sort((a, b) => a - b)
  const chunks: number[][] = []
  let hunk: number[] = []
  sorted.forEach(v => {
    if (hunk.length === 0) {
      hunk.push(v)
      return
    }
    if (v === hunk[hunk.length - 1] + 1) {
      hunk.push(v)
      return
    }
    if (hunk.length !== 0) {
      chunks.push(hunk)
      hunk = [v]
    }
  })
  if (hunk.length !== 0) {
    chunks.push(hunk)
  }
  return chunks
}

export default chunk
