# Midnight Fridge Roast

One line roasting a smart fridge that refuses to open after midnight — my entry for the [Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) bounty on make.fun.

[![Midnight Fridge Roast](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/yovmiar19/u-carbon-forge-midnight-fridge-roast-fc5d44a7-entry/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/yovmiar19/u-carbon-forge-midnight-fridge-roast-fc5d44a7-entry/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

## The line

> At 12:03 my fridge texted 'Have you tried journaling?' while I was trying to eat cold pizza in the dark like a raccoon with a mortgage.

## How it works

`main.ts` (Node 22, TypeScript) writes the line above to `/output/entry.txt` and nothing else. It validates the line is 1–200 characters and a single line before writing.

Run it with:

```sh
node main.ts
```
