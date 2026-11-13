# Hostel Room Escape 3D · Test checklist

Seven automated rule tests passed. Chromium 153 exercised the offline game on desktop and an emulated touch device, including a real first-person escape. The phone-sized guided escape also passed against the served production bundle.

## Reproduce

```sh
npm ci
npm test
npm run build
npm run build:standalone
npx playwright install chromium
npm run test:browser
```

The browser test can run against a served build by passing its URL as the final argument. Set `EVIDENCE_DIR` to capture screenshots, or `CHROMIUM_PATH` to select an installed Chromium. WebGL 2 is required for the first-person portion of the browser test.

| Check | Verification |
| --- | --- |
| Room movement and solid boundaries | Walk the main aisle, aim with the pointer, inspect by key and click, and check walls and furniture in the movement tests. |
| Clue progression | Confirm arrival order, clock and print counts, and route-indexed keypad code. Reject skipped clues and invalid entries. |
| Hint limit | Read both bedside phone hints and confirm the third request is disabled. |
| Warden | Trigger a round by sprinting, wait it out while crouched, and verify that standing can send the player back to the rug. |
| Hiding | Enter and leave a hiding spot. Confirm both hiding conditions work with the patrol rules. |
| Recovery | Refresh after victory and confirm progress and the used hints. Reset and check the initial screen and counters. |
| Touch and guided view | Hold the touch movement control, crouch, and finish through the viewpoint controls on a phone-sized viewport. |
| WebGL fallback | Open the guided controls on a viewport with WebGL 2 disabled. |
| Organizer panel | Reject the wrong code, reveal the demo instructions with `DEMO-207`, and relock. |
| Offline assets | Load the standalone file with no web requests, failed assets, or application console errors. |

Screenshots from the browser walkthrough:

1. [Room entrance](evidence/01-room.png)
2. [Approaching the arrival board](evidence/02-arrival-board.png)
3. [Phone hints exhausted](evidence/03-hints-exhausted.png)
4. [Print clues](evidence/04-prints.png)
5. [Exit keypad](evidence/05-exit-keypad.png)
6. [Victory and full progress](evidence/06-victory.png)
7. [A patrol passing](evidence/07-patrol-passed.png)
8. [Phone-sized movement controls](evidence/08-mobile.png)
