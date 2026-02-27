function permAlone(str) {
  let count = 0;

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      count++;
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // skipea sube i y la deja en remaining por si la proxima iteracion si se puede usar
      if (path.length > 0 && path[path.length - 1] === remaining[i]) {
        continue;
      }

      let nextPath = path + remaining[i];

      // borra del remaining la letra proque se pudo consumir
      let nextRemaining =
        remaining.slice(0, i) + remaining.slice(i + 1);

      backtrack(nextPath, nextRemaining);
    }
  }

  backtrack("", str);
  return count;
}

console.log(permAlone("aab"))
