import moment from 'moment';

import { NowTimeBase } from './now-time-base';

export class MomentNowTime extends NowTimeBase {
    public async unix() {
        return moment().unix();
    }

    public async unixNano() {
        return moment().valueOf() * 1_000_000;
    }
}