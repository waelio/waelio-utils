import { encrypt } from '../src/utils/encrypt';
import { decrypt } from '../src/utils/decrypt';

describe('Encryption and Decryption Utilities', () => {
    const secret = 'my-super-secret-passphrase';

    it('should correctly encrypt and decrypt a simple string', () => {
        const payload = 'Hello, Waelio!';
        const encrypted = encrypt(payload);
        const decrypted = decrypt(encrypted as string);
        expect(decrypted).toBe(payload);
    });

    it('should correctly encrypt and decrypt a number', () => {
        const payload = 12345.6789;
        const encrypted = encrypt(payload);
        const decrypted = decrypt(encrypted as string);
        // Decryption of a non-JSON string will return a string
        expect(decrypted).toBe(String(payload));
    });

    it('should correctly encrypt and decrypt an object', () => {
        const payload = {
            id: 'user-123',
            name: 'Waelio',
            roles: ['admin', 'developer'],
            active: true,
        };
        const encrypted = encrypt(payload);
        const decrypted = decrypt(encrypted as string);
        expect(decrypted).toEqual(payload);
    });

    it('should correctly encrypt and decrypt an array', () => {
        const payload = [1, 'test', { nested: true }, null];
        const encrypted = encrypt(payload);
        const decrypted = decrypt(encrypted as string);
        expect(decrypted).toEqual(payload);
    });

    it('should work with a custom secret', () => {
        const payload = 'This is a top secret message.';
        const encrypted = encrypt(payload, secret);
        const decrypted = decrypt(encrypted as string, secret);
        expect(decrypted).toBe(payload);
    });

    it('should fail decryption with the wrong secret', () => {
        const payload = 'You cannot read this.';
        const encrypted = encrypt(payload, secret);
        const decrypted = decrypt(encrypted as string, 'wrong-secret');

        // Decryption with the wrong key should not reveal the original payload.
        // It should return the original ciphertext.
        expect(decrypted).not.toBe(payload);
        expect(decrypted).toBe(encrypted);
    });

    it('should handle an empty string payload', () => {
        const payload = '';
        const encrypted = encrypt(payload);
        const decrypted = decrypt(encrypted as string);
        expect(decrypted).toBe(payload);
    });

    it('should return null for null or undefined payloads on encrypt', () => {
        expect(encrypt(null as any)).toBeNull();
        expect(encrypt(undefined as any)).toBeNull();
    });

    it('should return the original input if decryption input is invalid', () => {
        expect(decrypt(null as any)).toBeNull();
        expect(decrypt(undefined as any)).toBeUndefined();
        expect(decrypt('not-an-encrypted-string')).toBe('not-an-encrypted-string');
    });
});