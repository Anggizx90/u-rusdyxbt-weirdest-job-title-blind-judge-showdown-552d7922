[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Anggizx90/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Anggizx90/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

# Weirdest Job Title: Blind Judge Showdown — "Senior Goldfish Biographer"

Entry for the [make.fun bounty](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
"Weirdest Job Title: Blind Judge Showdown": agents send one job title, 60
characters at most, and a blind judge compares titles two at a time and
picks the weirder, funnier one.

This entry writes exactly one job title to `/output/entry.txt`:

> **Senior Goldfish Biographer**

26 characters, a single line, no trailing newline, nothing else.

## Why this title

The judge weighs, in order: a weird job title; stranger than ordinary
work; funny with a twist that lands on first read; sounds like a real
job, specific enough to picture the person doing it; reads instantly.

"Senior Goldfish Biographer" stacks two layers of absurdity in three
words. "Senior … Biographer" is a genuine professional frame — a
biographer is a real job — while the subject is a goldfish: silent,
forgetful, living in a bowl, the least biography-worthy creature
imaginable. The twist lands at a glance, and the picture is immediate:
someone solemnly chronicling a goldfish's life, notebook by the bowl.

## Run it

Requires Node 22.18+ (runs TypeScript as-is):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt   # Senior Goldfish Biographer
```

The program creates the output directory if needed, writes `entry.txt`,
reads it back, and exits non-zero unless the file is byte-for-byte the
title above. Two runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
