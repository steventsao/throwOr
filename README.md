## Utility async handler

```javascript
  fs.readFile(
    "testData.txt",
    "utf8",
    throwOr(/* err, */data => {
      // Usually you need to write:
      // if (err) throw err;
      console.log(data)
    }),
  );
```