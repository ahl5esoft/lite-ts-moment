import moment, { unitOfTime } from 'moment';

export abstract class NowTimeBase {
    public async isSameUnix(unix: number, granularity?: unitOfTime.StartOf) {
        const nowUnix = await this.unix();
        return moment.unix(nowUnix).isSame(
            moment.unix(unix),
            granularity ?? 'day'
        );
    }

    public abstract unix(): Promise<number>;
    public abstract unixNano(): Promise<number>;
}