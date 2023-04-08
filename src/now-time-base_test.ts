import { ok } from 'assert';
import moment from 'moment';

import { NowTimeBase } from './now-time-base';

class Self extends NowTimeBase {
    public constructor(
        private m_NowUnix: number,
    ) {
        super();
    }

    public async unix() {
        return this.m_NowUnix;
    }

    public async unixNano() {
        return 0;
    }
}

describe('src/now-time-base.ts', () => {
    describe('.isSameUnix(unix: number, granularity?: unitOfTime.StartOf)', () => {
        it('day', async () => {
            const res = await new Self(
                moment().startOf('day').unix(),
            ).isSameUnix(
                moment().endOf('day').unix()
            );
            ok(res);
        });

        it('month', async () => {
            const res = await new Self(
                moment().startOf('month').unix(),
            ).isSameUnix(
                moment().endOf('month').unix(),
                'month'
            );
            ok(res);
        });
    });
});