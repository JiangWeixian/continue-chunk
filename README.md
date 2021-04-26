# continue-chunk

[![npm](https://img.shields.io/npm/v/@aiou/continue-chunk)](https://github.com/JiangWeixian/continue-chunk) [![GitHub](https://img.shields.io/github/license/jiangweixian/templates)](https://github.com/JiangWeixian/continue-chunk)

## install

```console
npm install continue-chunk
```

## features

- `[1, 2, 3, 6, 7]` will chunk into `[[1, 2, 3], [6, 7]]`

## usage

```ts
import chunk from 'continue-chunk'

chunk([1, 2, 3, 6, 7]) 
// return [[1, 2, 3], [6, 7]]
```