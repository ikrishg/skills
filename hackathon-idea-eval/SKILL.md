---
name: hackathon-idea-eval
description: >-
  Score and kill hackathon ideas against one event. Use when comparing
  candidates, generating them from saved launches, or deciding Build, Rework,
  or Drop before any code.
license: MIT
---

# Hackathon idea eval

Pick one idea for one event, or kill the slate. Done means every candidate has a written card and the close names one Build, one Rework, or an empty slate.

## Brief

Fill every field from the conversation, linked pages, and the user's notes before asking. Ask once, only for fields still blank. Record each assumption next to the field it fills.

- **Event:** organiser, sponsors, the hero product (exact model, API, or SDK, not the company), theme wording, tracks, prize criteria.
- **Box:** hours left, demo length, live or recorded.
- **Team:** domains they can ship in, and the ones they will not start (hardware, a stack nobody has touched).
- **Slate:** each candidate as one line, problem plus payoff. An empty slate is a step, not a failure: take candidates only from the user's saved launches, demos, and bookmarks. Never author the slate.

## Gates

Run all four, in order, on every idea. A fail is Drop or a named Rework, never a quiet pass. Write pass or fail plus the sentence that decided it.

1. **Crowd.** Fresh-session prompt: "Give me hackathon ideas for [event, sponsors, theme]." A candidate that matches a suggestion is the crowd's idea: fail, unless the card names the twist that a second person would not see. Use that session to stress a choice, not to stock the slate.
2. **Hero.** Ask "Could we build this without the sponsor product?" Yes fails. Pass only when the product is the trick, not a wrapper, and no second sponsor is bolted on to qualify.
3. **One minute.** The problem fits one line. The payoff is on screen inside the demo window, in the first 30 seconds when the window is a minute. A pitch that needs a prologue, a long horizon, or jargon to land fails.
4. **Theme.** Pass when a judge reading only the theme line would still see this entry as on-theme. A strong idea that ignores the theme fails.

## Scores

Score only ideas with every gate passed or a Rework that repairs a named gate. Each axis is 1 to 5. Anchors:

- **Early.** 5: impossible or poor a month or two ago, and not yet a template. 2: a known workflow with a new coat.
- **Mix.** 5: two signals from different places (a fresh demo crossed with an older concept, design crossed with tech). 2: a copy of one source.
- **Edge.** 5: someone on the team has shipped or lived this domain. 1: nobody has touched it and the box is short. An exceptional idea can still win on execution the team already knows.
- **Simple.** 5: the core fits the box with time left to polish the demo. 2: the core alone consumes the box.
- **Fun.** 5: the team wants this weekend and will learn something. 2: they are grinding a prize they do not care about.

## Card

One card per idea, in this order:

- One-line pitch: problem plus payoff.
- Gates 1 to 4: pass or fail, one sentence each.
- Five scores and a total out of 25. No total on a Drop.
- **Kill test:** name the generic build (the crowd suggestion, or the same idea on a stack that skips the hero product) and the one visible difference that beats it.
- **Beat:** first frame, the wow, the close, inside the demo window.
- **Verdict:** Build, Rework (name the change), or Drop (name the failed gate or the weak axis: "workflow, not early", "no edge", "won't demo").

## Close

Rank every survivor by total, then by Early, then by Edge. Pick one.

- A Build gets its pitch and its beat written as the demo script before any implementation starts.
- A Rework names the single change and stops; it is not a Build until the card is rerun.
- An empty slate is a result. List every Drop with its reason.
- An unfamiliar stack is not a Drop when the team wants it and a rough plan fits the box. Models make new genres shippable fast; motivation plus a plan is enough to start.

Source heuristic, not a sponsor rule: Parth Mittal, "How to find hackathon winning ideas" (35+ hackathons, 15 wins). https://x.com/mittalparth_/status/2090033629422604523
