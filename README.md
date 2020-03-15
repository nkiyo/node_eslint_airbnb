## Vim ALE plugin
Add to `~/.vimrc`

```
let g:ale_lint_on_text_changed = 0
let g:ale_fix_on_save = 0
let g:ale_fixers = {
  \ 'javascript': ['eslint'],
  \ 'vue': ['eslint'],
  \ }
```

