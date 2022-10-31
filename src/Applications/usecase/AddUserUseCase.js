const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUseCase {
    constructor({userRepository, passwordHash}) {
        this._userRepository = userRepository;
        this._passwordHash = passwordHash;
    }

    async execute(useCasePayload) {
        const registeredUser = new RegisterUser(useCasePayload);
        await this._userRepository.verifyAvailableUsername(registeredUser.username);
        registeredUser.password = await this._passwordHash.hash(registeredUser.password);
        return this._userRepository.addUser(registeredUser);
    }
}

module.exports = AddUserUseCase;