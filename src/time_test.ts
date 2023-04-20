import { ok, strictEqual } from 'assert';
import moment from 'moment';

import { MomentTime as Self } from './time';

describe('src/time.ts', () => {
    describe('.isSameUnix(leftUnix: number, rightUnix: number, granularity?: TimeGranularity)', () => {
        it('ok', () => {
            const res = new Self().isSameUnix(
                moment().unix(),
                moment().endOf('day').unix(),
            );
            ok(res);
        });
    });

    describe('.startOf(unix: number, granularity?: TimeGranularity)', () => {
        it('ok', () => {
            const res = new Self().startOf(
                moment().unix(),
            );
            strictEqual(
                res.getTime(),
                moment().startOf('day').toDate().getTime(),
            );
        });
    });

    describe('.startOfUnix(unix: number, granularity?: TimeGranularity)', () => {
        it('ok', () => {
            const res = new Self().startOfUnix(
                moment().unix(),
            );
            strictEqual(
                res,
                moment().startOf('day').unix(),
            );
        });
    });
});