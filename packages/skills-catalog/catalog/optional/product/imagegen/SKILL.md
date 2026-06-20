---
name: imagegen
description: Generate or edit raster design assets through Codex's built-in image generation capability when product work needs bitmap visuals such as hero art, mockups, illustrations, textures, sprites, or reference images.
key: paperclipai/optional/product/imagegen
recommendedForRoles:
  - designer
  - product
  - engineer
tags:
  - design
  - image-generation
  - visual-assets
  - mockups
---

# Image Generation For Product Design

Use Codex's built-in `imagegen` capability when a product/design task needs a bitmap visual asset. This skill is a routing and quality bar for Paperclip agents; the actual generation is handled by Codex's native image generation tool or by a Codex-backed collaborator that has that tool.

## When to use

- Website/app hero imagery, product mockups, campaign visuals, editorial images, or presentation visuals.
- Raster illustrations, textures, backgrounds, sprites, or transparent-background cutouts.
- High-fidelity visual references for mood, art direction, product screenshots, or concept exploration.
- Editing an existing raster image while preserving key subject, composition, or style.

## When not to use

- Low-fidelity layout, flow, or IA exploration. Use `wireframe`.
- Structured UX critique. Use `design-critique`.
- Simple icons, logos, diagrams, or shapes that should stay SVG/vector/code-native.
- Production UI implementation. Hand the spec to engineering instead of generating a bitmap substitute.

## Operating rules

- Treat image generation as a design asset workflow, not a replacement for product decisions.
- Name the asset purpose before generating: hero background, card illustration, product mockup, avatar, sprite, texture, or reference board.
- Keep prompts grounded in the product context, target audience, brand constraints, and final surface.
- Preserve exact text only when necessary. Generated images are unreliable for text-heavy layouts; prefer real typography in UI/code.
- For project-bound assets, save the final selected image into the project/workspace and name the intended consuming surface.
- For preview-only ideation, attach the generated image and include the prompt so a later agent can reproduce or refine it.
- Do not overwrite existing brand or product assets unless the task explicitly asks for replacement.

## Handoff format

Return:

- Purpose: where the image will be used.
- Prompt: the final prompt or prompt family.
- Output: file path or attached artifact.
- Constraints checked: style, composition, subject, text accuracy, brand fit, and avoid list.
- Next owner: designer for critique, engineer for integration, or QA for visual verification.
