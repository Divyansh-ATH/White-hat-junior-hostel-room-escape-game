# Hostel Room Escape · 3D handover

- **Live demo.** Open `hostel-room-escape-3d.html` in a WebGL 2-capable browser. Choose **Enter room**, move toward the desk, and aim at an object. Drag to look, and use E or click to inspect.
- **Show the warden.** Hold Shift while crossing the room. When the footsteps approach, crouch with C and hold still, or hide under the bed or inside the wardrobe.
- **Show the puzzle chain.** The walkthrough in [README.md](README.md) lists the objects and codes. Use **Guided view** for a fast walkthrough of every clue or for a device without a mouse.
- **Show the hint limit.** Visit the phone beside the bed. Use both messages and show the disabled third hint. The independent organizer panel still accepts demo passcode `DEMO-207`.
- **Make changes.** Update `src/game/gameConfig.ts` for puzzle changes, `src/room/layout.ts` for collision and clue locations, and `src/game/twistConfig.ts` for the organizer reveal. Rebuild the offline file with `npm run build:standalone`.
