# instructions

```
git clone https://github.com/agriffis/linaria-json-repro
cd linaria-json-repro
pnpm install
pnpm build
```

## result

```
vite v4.2.1 building for production...
✓ 4 modules transformed.
✓ built in 288ms
[linaria] /home/aron/src/toy/linaria-json-repro/src/theme.json: Missing semicolon. (2:9)

  1 | {
> 2 |   "color": "blue"
    |          ^
  3 | }
  4 |
```
