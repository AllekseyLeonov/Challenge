# Enigma Machine Bug Fix

## The Bugs

### 1. Rotor Stepping Mechanism
The main issue was in the rotor stepping mechanism. The previous implementation had two problems:

1. The rotors were stepping in the wrong order
2. The double-stepping mechanism was not correctly implemented

In the original code, the stepping logic was:
```javascript
if (this.rotors[2].atNotch()) this.rotors[1].step();
if (this.rotors[1].atNotch()) this.rotors[0].step();
this.rotors[2].step();
```
This implementation missed the crucial double-stepping mechanism and had incorrect order of operations.

### 2. Plugboard Swap Application
The plugboard swap was only applied once (before the rotors), but the historical Enigma machine applies the plugboard swap both before and after the rotors/reflector. This omission caused encryption and decryption to fail when plugboard connections were used.

## The Fixes

### Rotor Stepping
The correct Enigma stepping mechanism should:
1. Check if the middle rotor is at its notch position
2. If it is, step the left rotor
3. Check if the right rotor is at its notch position
4. If it is, step the middle rotor
5. Finally, step the right rotor

The fixed implementation properly implements the double-stepping mechanism where the middle rotor steps both when:
- The right rotor is at its notch position
- The middle rotor itself is at its notch position

This matches the historical Enigma machine behavior where the middle rotor would step twice in certain situations, creating the characteristic double-stepping mechanism.

### Plugboard Swap
The plugboard swap is now applied both before the signal enters the rotors and after it exits the rotors/reflector, matching the real Enigma's behavior.

## Verification
The fixes can be verified by:
1. Encrypting a message
2. Using the same settings to decrypt the message
3. Verifying that the original message is recovered
4. Running unit tests that cover both rotor stepping and plugboard scenarios

The fixes ensure that the Enigma machine follows the correct historical stepping mechanism and plugboard behavior, which are crucial for both encryption and decryption to work properly. 