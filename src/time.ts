import { TimeBase, TimeGranularity } from 'lite-ts-time';
import moment from 'moment';

export class MomentTime extends TimeBase {
    public isSameUnix(leftUnix: number, rightUnix: number, granularity?: TimeGranularity) {
        return moment.unix(leftUnix).isSame(
            moment.unix(rightUnix),
            granularity ?? TimeGranularity.day,
        );
    }

    public startOf(unix: number, granularity?: TimeGranularity) {
        return moment.unix(unix).startOf(granularity ?? TimeGranularity.day).toDate();
    }

    public startOfUnix(unix: number, granularity?: TimeGranularity) {
        return moment.unix(unix).startOf(granularity ?? TimeGranularity.day).unix();
    }
}