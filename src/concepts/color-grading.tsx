import type { Concept } from '../types'
import { ColorGradingDiagram } from '../diagrams/ColorGradingDiagram'

export const colorGrading: Concept = {
  id: 'color-grading',
  title: 'Color Grading & the Look',
  family: 'Color',
  tags: ['fiction', 'documentary'],
  blurb: 'The post-production pass that turns raw camera output into the film\'s final colour identity — and the named "looks" that have become recognisable shorthand.',
  prose: (
    <>
      <p>
        Modern cameras don't record what you see on screen. They record a flat, low-contrast, desaturated signal called <strong>log</strong> (or "raw") that preserves the maximum tonal information for post-production. That signal is unwatchable as a final image — gray skies, milky shadows, lifeless skin. The transformation from log to finished image is <strong>colour grading</strong>, and it happens in two stages.
      </p>
      <p>
        <strong>Colour correction</strong> is the technical baseline: contrast restored, white balance fixed, exposure matched shot-to-shot, skin tones neutralised. After correction, the image looks "right" — what you'd expect to see if you were standing on set. Most documentary, broadcast news, and corporate work stops here. The image reads as factual.
      </p>
      <p>
        <strong>Colour grading</strong> proper goes further: pushing the corrected image toward a specific stylistic register. The grade works through three tonal ranges — <strong>lift</strong> (shadows), <strong>gamma</strong> (midtones), <strong>gain</strong> (highlights) — each tintable independently in three colour channels. A grade specifies how each range shifts: shadows pushed cyan, midtones held neutral, highlights pushed amber — that's the orange-and-teal recipe in three sentences.
      </p>
      <p>
        Several named "looks" have become recognisable shorthand. <strong>Orange & teal</strong> dominates mainstream cinema. <strong>Cold noir</strong> (crushed blacks, desaturated mids, cool cast) belongs to Fincher and the Scandinavian thriller. <strong>Sun-bleached</strong> (lifted blacks, warm honey midtones, blown highlights) is the Sicario / desert-western register. <strong>Bleach bypass</strong> (high contrast, desaturated colour) was originally a film-stock chemical process and now lives in software — Saving Private Ryan and Minority Report made it canonical.
      </p>
      <p>
        A <strong>LUT</strong> (look-up table) is a portable file that bakes a grade into reproducible math — apply this LUT to corrected footage and you get this look. Productions ship LUTs from the cinematographer to the colourist so the final film matches what the DP saw on set. Documentary often uses a single mild LUT across an entire project for tonal unity.
      </p>
    </>
  ),
  diagram: <ColorGradingDiagram />,
  cards: [
    {
      id: 'color-grading-log',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>What does it mean to shoot in <strong>log</strong>, and why is it done?</>,
      back: <>Cameras record a flat, low-contrast, desaturated signal that preserves the maximum tonal information for post-production. Log isn\'t the final image — it\'s the latitude for grading. The image becomes watchable only after correction + grading.</>,
    },
    {
      id: 'color-grading-correction-vs-grading',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>What\'s the difference between <strong>colour correction</strong> and <strong>colour grading</strong>?</>,
      back: <>Correction is the technical baseline — contrast, white balance, exposure, neutral skin. The image now reads as "right." Grading goes further, pushing the corrected image toward a stylistic register. Most documentary stops at correction; fiction usually continues to grading.</>,
    },
    {
      id: 'color-grading-lift-gamma-gain',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>What are <strong>lift, gamma, and gain</strong> in the grading workflow?</>,
      back: <>The three tonal ranges a grade works through. Lift = shadows, gamma = midtones, gain = highlights. Each is tintable independently in three colour channels. The combination is what produces named looks.</>,
    },
    {
      id: 'color-grading-orange-teal-recipe',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>How is the orange-and-teal look produced in three sentences?</>,
      back: <>Push shadows cyan/teal, hold midtones neutral (skin lands here), push highlights amber/orange. The complementary contrast across the tonal range is what reads as "Hollywood professional."</>,
    },
    {
      id: 'color-grading-bleach-bypass',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>What is <strong>bleach bypass</strong> and where did the name come from?</>,
      back: <>A high-contrast, desaturated look. Originally a film-stock chemical process where the silver layer was retained instead of bleached out — that\'s the literal "bypass." Now done in software. Saving Private Ryan and Minority Report made it canonical.</>,
    },
    {
      id: 'color-grading-lut',
      conceptId: 'color-grading',
      kind: 'recall',
      front: <>What is a <strong>LUT</strong> and what is it used for?</>,
      back: <>A look-up table — a portable file that bakes a grade into reproducible math. Apply the LUT to corrected footage and you get this look. Productions ship LUTs from the cinematographer to the colourist so the final film matches what the DP intended on set.</>,
    },
  ],
}
