# Hostel Room Escape · Room 207 in 3D

A first-person puzzle and stealth game. You wake up locked in a fictional hostel room. Inspect the furniture, piece together three codes, and stay quiet when the warden checks the door.

Open `hostel-room-escape-3d.html` in a modern browser for an offline run. A browser with WebGL 2 renders the room. Guided view is available for viewpoint-based navigation and loads automatically when 3D rendering is unavailable.

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Walk | WASD | Hold a movement arrow |
| Look | Drag or use the arrow keys. Mouse look optionally captures the pointer, and Esc releases it. | Drag the room |
| Inspect | Aim at something in reach and press E, or click it directly | Tap an object in reach or use **Inspect** |
| Crouch | C | **Crouch** |
| Sprint | Hold Shift while moving | Walk or crouch |
| Hide | Inspect the bed or wardrobe and choose the hiding action | Use the same hiding action after inspecting |

The phone beside the bed holds two hints for the whole run. Discovered clues can be reread from the inventory. Enter codes at the corresponding objects in the room. **Guided view** moves the camera between locations and pauses the patrol while you use it.

Sprinting and the loose boards raise the noise meter. The warden also makes periodic rounds. When footsteps approach, crouch and stop moving, or hide under the bed or in the wardrobe. Getting caught returns you to the rug with your clues and solved locks intact.

## Run from source

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Run `npm run build` followed by `npm run preview` to serve the production bundle locally. Run `npm run build:standalone` to create `dist-standalone/hostel-room-escape.html`. The offline file bundles Three.js, React, the art, and the fonts.

| Path | Contents |
| --- | --- |
| `src/room/` | Three.js room geometry and materials, movement, interaction, collision, audio, and warden patrol |
| `src/game/` | Puzzle data, rules, validation, saves, and organizer configuration |
| `src/components/` | Game HUD, inspections, keypad, clue inventory, and victory |
| `tests/` and `evidence/` | Acceptance checks and screenshots |

## Judge walkthrough · spoilers

| Step | What to inspect | What to enter |
| --- | --- | --- |
| 1 | The arrival board over the desk and the torn note in the backpack at the foot of the bed. | `6371` at the arrival board. |
| 2 | The drawer note, the clock beside the board, and the three wall prints. | `432` at the desk drawer. |
| 3 | The suitcase and the rounds sheet on the right wall near the door. | `2314` at the exit keypad. |
| 4 | The bedside phone has the two hints. Use both, then check the disabled third request. | The organizer panel accepts demo passcode `DEMO-207`. |

## Organizer settings

- Edit `src/game/gameConfig.ts` for puzzle data, text, and hints. Keep the displayed arrival-order clue consistent with `arrivalOrder`. The answers are derived from the configured sequence, clock symbols, print counts, and route steps.
- Edit `src/game/twistConfig.ts` for the event display code and public reveal content. The supplied constraint and instructions are labeled placeholders. Keep event secrets out of the client bundle.
- Increase `room.saveVersion` when changing the puzzles. The 3D edition uses a new save slot. Reloading restores the clue inventory, solved locks, and used hints. Room position and patrol timing start fresh on reload.

See [GAME_DESIGN.md](GAME_DESIGN.md), [TESTING.md](TESTING.md), and [HANDOVER.md](HANDOVER.md).
