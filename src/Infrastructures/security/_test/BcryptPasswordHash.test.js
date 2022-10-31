const bycrypt = require('bcrypt');
const BcryptPasswordHash = require('../BcryptPasswordHash');

describe('BcryptPasswordHash', () => {
    describe('hash password', () => {
        it('should encrypt password correctly', async () => {
            // arrange
            const syphash = jest.spyOn(bycrypt, 'hash');
            const bycryptPasswordHash = new BcryptPasswordHash(bycrypt)

            // action
            const encyptedPassword = await bycryptPasswordHash.hash('plain_password');

            // assert
            expect(typeof encyptedPassword).toEqual('string');
            expect(encyptedPassword).not.toEqual('plain_password');
            expect(syphash).toBeCalledWith('plain_password', 10);
        });
    });
});