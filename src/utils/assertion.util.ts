import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised);
const expect = chai.expect;

export class AssertionUtil {

    static async equal(actual?: any, expected?: any) {
        await expect(actual).to.eventually.equal(expected);
    };

    static async notEqual(actual?: any, expected?: any) {
        await expect(actual).to.not.equal(expected);
    };

    static async contains(actual?: any, expected?: any) {
        await expect(actual).to.contains(expected);
    };

    static async notContains(actual?: any, expected?: any) {
        await expect(actual).to.not.contains(expected);
    };    

}