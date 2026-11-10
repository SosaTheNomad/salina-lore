# Option 1 design QA

Source visual truth: selected option-1.png (852×1846 px), rendered at 390px wide (scale 390/852) in the comparison. Implementation: outputs/salina-game-redesign/mobile-final.jpg at 390×844 CSS viewport, 1x browser screenshot; full page extends slightly below viewport. State: empty warm-up. Same-input normalized full-view comparison: outputs/salina-game-redesign/source-comparison.jpg. The comparison clearly shows type, fields, CTA and spacing, so a separate crop is unnecessary.

## Findings and fixes

- Initial P1 duplicated warm-up heading was caused by appending heading spans to prefilled text. Fixed by creating an empty heading before appending real text. Re-captured mobile.
- Initial P2 display scale/spacing drift: increased condensed display type, reduced warm-up spacing, preserved all real controls. Normalized comparison shows the chosen hierarchy and relative arrangement now retained.
- Desktop P1 decorative crop initially included source UI text. Fixed poster container to the same 852/630 artwork-only clip at all widths. Re-captured desktop-final.jpg.
- Recap P2 competing controls fixed: one lime email primary; restrained copy/download row; tertiary edit/replay row. No engine or recipient changes.

## Required fidelity surfaces

Typography: locally bundled Barlow Condensed ExtraBold Italic approximates selected display face; actual reference header retains its exact display art. Header has an accessible HTML h1. Body is readable Arial and input text is upright. P3 residual: coded display face differs slightly from mock, and CTA omits decorative arrow.

Spacing/layout: source mobile composition retained, with header compacted after warm-up to prioritize input. Fields and touch actions meet minimum comfortable heights. Desktop adapts into artwork/form columns; no source screenshot is used for interactive controls. P3 residual: small vertical differences support normal browser text rendering.

Colors/tokens: cream #fff3d5, violet #390745, lime #d9ff00; source optical asset retains its orange/violet/lime palette. Focus is visible; text remains high-contrast.

Image quality: supplied source is clipped only to its poster-header region; no generated or altered person. Full HTML forms remain below. P3 residual: body uses a calm flat cream instead of reproducing full grain; header raster is about 2.8MB.

Copy/content: selected warm-up copy retained. Complete functional flow remains; recap accurately says guest reviews and sends email, without automatic-submission claims.

## Interaction verification

390px mobile: name → exactly three statements → back retained entries → private lie selection → optional backstory → recap with lie hidden. Consent blocks export until checked. Expanded email review includes correct recipient, subject, all statements, lie number/text, multiline Unicode backstory, and consent. Copy success visibly confirmed. No real email or mailto navigation. Download event capture was interrupted by a tool hang; unchanged download handler remains present, but this extra browser download check is unverified.

Desktop warm-up rendered at 1280×900 and checked after correcting poster clip. No animation added; reduced-motion rule retained. Engine/email checks and JS syntax pass. Native on-screen keyboard behavior was not tested on a physical phone.

final result: passed
