const assert = require('assert');
const { Enigma } = require('../enigma.js');

describe('Enigma Machine', () => {
  // Test case 1: Basic encryption and decryption
  it('should correctly encrypt and decrypt a message', () => {
    const rotorPositions = [0, 0, 0];  // All rotors at position A
    const ringSettings = [0, 0, 0];    // Default ring settings
    const plugboardPairs = [];         // No plugboard connections

    const enigma = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    
    const message = 'HELLOWORLD';
    const encrypted = enigma.process(message);
    
    // Reset the machine with same settings
    const enigma2 = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    const decrypted = enigma2.process(encrypted);
    
    assert.strictEqual(decrypted, message);
  });

  // Test case 2: Test with plugboard
  it('should work correctly with plugboard connections', () => {
    const rotorPositions = [0, 0, 0];
    const ringSettings = [0, 0, 0];
    const plugboardPairs = [['A', 'B'], ['C', 'D']];

    const enigma = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    
    const message = 'HELLOWORLD';
    const encrypted = enigma.process(message);
    
    // Reset the machine with same settings
    const enigma2 = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    const decrypted = enigma2.process(encrypted);
    
    assert.strictEqual(decrypted, message);
  });

  // Test case 3: Test with different rotor positions
  it('should work with different rotor positions', () => {
    const rotorPositions = [1, 2, 3];  // Different starting positions
    const ringSettings = [0, 0, 0];
    const plugboardPairs = [];

    const enigma = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    
    const message = 'HELLOWORLD';
    const encrypted = enigma.process(message);
    
    // Reset the machine with same settings
    const enigma2 = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    const decrypted = enigma2.process(encrypted);
    
    assert.strictEqual(decrypted, message);
  });

  // Test case 4: Test with ring settings
  it('should work with different ring settings', () => {
    const rotorPositions = [0, 0, 0];
    const ringSettings = [1, 2, 3];    // Different ring settings
    const plugboardPairs = [];

    const enigma = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    
    const message = 'HELLOWORLD';
    const encrypted = enigma.process(message);
    
    // Reset the machine with same settings
    const enigma2 = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    const decrypted = enigma2.process(encrypted);
    
    assert.strictEqual(decrypted, message);
  });

  // Test case 5: Test with special characters
  it('should handle special characters correctly', () => {
    const rotorPositions = [0, 0, 0];
    const ringSettings = [0, 0, 0];
    const plugboardPairs = [];

    const enigma = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    
    const message = 'HELLO WORLD! 123';
    const encrypted = enigma.process(message);
    
    // Reset the machine with same settings
    const enigma2 = new Enigma([0, 1, 2], rotorPositions, ringSettings, plugboardPairs);
    const decrypted = enigma2.process(encrypted);
    
    assert.strictEqual(decrypted, message);
  });
}); 