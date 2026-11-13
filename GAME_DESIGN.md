# Hostel Room Escape · 3D game design

Room 207 is a single walkable hostel bedroom with a central rug, a desk and clock, a bed and phone, a print wall, a suitcase, a wardrobe, and the locked exit. The night window, warm lamps, floorboards, and audible corridor give each area a distinct landmark.

## Puzzles · spoilers

| Lock | Deduction | Code |
| --- | --- | --- |
| Arrival log | Match names to the digits on the board. The backpack note puts Mei first, Noor immediately before Ira, and Vik after Ira. The only order is Mei, Noor, Ira, Vik. | `6371` |
| Clock and prints | Start at the short hand on Moth. Move clockwise through Moth, Key, and Moon. Count stars, ink drops, and stars in that order. | `432` |
| Exit keypad | The suitcase tag selects Route B on the rounds sheet. Read P3, A2, A4, P1. Take the specified one-indexed digits from the print code (P) and arrival code (A). | `2314` |

The locks open in sequence, and each answer requires inspection of its physical clues. The exit keypad becomes available after the suitcase is read. The inventory preserves discovered clues for reference, while code entry remains at the object. The final code switches to the victory view and marks all locks solved.

## Warden

A long sprint, the loose boards, or an elapsed round timer can bring the warden to the door. Footsteps and the status display give the player time to get ready. The warden checks for roughly three seconds. Hiding inside the wardrobe, hiding beneath the bed, or crouching motionless keeps the player out of sight. If caught, the player returns to the rug with their puzzle progress intact. Patrol checks are timed events at the door.

A single noise meter responds to the player’s movement. The captions carry the same essential information as optional footsteps and knocks. Inspection, help, and guided navigation pause the patrol. The world has solid furniture and walls and uses a close-range aim check for inspections.

The bedside phone holds exactly two hints. The first gives a general direction. The second gives a stronger suggestion for the puzzle active when the player requests it. Both remain in the sidebar. Reset clears the run and returns the player to the room entrance screen.

The use of noise and hiding was inspired by DVloper’s [Granny](https://play.google.com/store/apps/details?id=com.dvloper.granny).
