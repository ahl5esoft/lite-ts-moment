import { NowTimeBase } from 'lite-ts-time';
import moment from 'moment';

export class MomentNowTime extends NowTimeBase {
    public async unix() {
        return moment().unix();
    }
}