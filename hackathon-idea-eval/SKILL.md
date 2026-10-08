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

Source: Parth Mittal, "How to find hackathon winning ideas" (35+ hackathons, 15 wins). https://x.com/mittalparth_/status/2090033629422604523. Every gate and axis below comes from that article; do not add rules it does not make.

## Brief

Fill every field from the conversation, linked pages, and the user's notes before asking. Ask once, only for fields still blank. Record each assumption next to the field it fills.

- **Event:** organiser, sponsors, the hero product (exact model, API, or SDK, not the company), theme wording.
- **Box:** hours left, demo length.
- **Team:** domains they know, and the ones they cannot ship in the box (hardware, for a team that has never touched it).
- **Slate:** each candidate as one line, problem plus payoff. An empty slate is a step, not a failure: take candidates from the user's saved launches, demos, and bookmarks, and look for a mix of a recent idea with an older or forgotten one. Do not ask an AI to author the slate.

## Gates

Run all four, in order, on every idea. A fail is Drop or a named Rework, never a quiet pass. Write pass or fail plus the sentence that decided it.

1. **Don't ask AI.** Fresh-session prompt: "Give me hackathon ideas for [event, sponsors, theme]." Everyone else gets the same answers, so a candidate that matches a suggestion fails. Use the session only to expand a chosen idea or question its feasibility.
2. **Organiser tech is the hero.** Ask "Could we build this without the sponsor product?" Yes fails. Pass when the product is the heart of the project and the project pushes its limits or shows it doing something different. Forcing the tech in, or stacking sponsors to raise the odds without adding value, fails.
3. **Demo-able in a minute.** Assume the judges give you one minute. The idea explains in one line. If explaining the problem takes over 30 seconds, fail. If the solution has no use case visible enough to show, fail. A payoff the judge has to experience over time fails.
4. **Theme.** The idea fits the organiser's theme. A strong idea that does not fit fails.

## Scores

Score only ideas with every gate passed or a Rework that repairs a named gate. Each axis is 1 to 5; write one sentence for each score.

- **Early.** High: a limitation a month ago, not yet mainstream. Low: already mainstream, or "a workflow".
- **Mix.** High: built tangentially from inspirations across fields or timelines (a recent idea crossed with a forgotten one, design crossed with tech). Low: a copy of one source.
- **Edge.** High: the team's domain knowledge lets it go where others cannot, or execute better. Low: completely outside what the team knows, like hardware for a team that has never done it.
- **Simple.** High: simple, and pushes the hero tech. Low: complexity that does not make the sponsor tech shine.
- **Fun.** High: the team will hack something cool, learn, and enjoy building it. Low: building only to win.

## Card

One card per idea, in this order:

- One-line pitch: problem plus payoff.
- Gates 1 to 4: pass or fail, one sentence each.
- Five scores and a total out of 25. No total on a Drop.
- **Demo:** what the judge sees in the first minute.
- **Verdict:** Build, Rework (name the change), or Drop (name the failed gate or weak axis, e.g. "workflow, not early", "no domain knowledge", "hard to demo").

## Close

Rank every survivor by total. Pick one.

- A Build gets its one-line pitch and minute demo written before any implementation starts.
- A Rework names the single change and stops; it is not a Build until the card is rerun.
- An empty slate is a result. List every Drop with its reason.
- Not having built in a genre before is not a Drop: a rough plan and strong motivation are enough to start. Hardware-style gaps the team cannot close in the box still lower Edge.
