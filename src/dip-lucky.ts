/**
 *  ζ²Ύεζ°
 */
import {random} from 'lodash';
import {message} from './message';
import * as service from './services';


export const dipLucky = async () => {
    const {data: {lotteries}} = await service.bigLottery({
        page_no: 1,
        page_size: 5
    })
    const index = random(0, lotteries.length - 1);
    const {
        data: {
            has_dip,
            dip_action,
            total_value
        }
    } = await service.dipLucky({lottery_history_id: lotteries[index].history_id});
    if (has_dip) {
        message.info(`πγζ²Ύεζ°γε·²ζ²ΎθΏεζ°οΌε½εεζ°εΌοΌ${total_value}`)
    } else if (dip_action === 1) {
        message.info(`πγζ²Ύεζ°γζδ½ζεοΌε½εεζ°εΌοΌ${total_value}`)
    }
}
