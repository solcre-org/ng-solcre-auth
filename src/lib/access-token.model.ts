export class AccessTokenModel {
    constructor(
        public token: string,
        public refreshToken: string,
        public expiration: Date
    ) { }
}