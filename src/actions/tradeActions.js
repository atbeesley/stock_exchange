import { 
    TRADE_LIST_REQUEST, 
    TRADE_LIST_FAIL, 
    TRADE_LIST_SUCCESS 
} from '../constants/tradeConstants'
import axios from 'axios'

export const listTrades = () => async (dispatch) => {
    try {
        dispatch({type: TRADE_LIST_REQUEST})

        const { data } = await axios.get('http://localhost:4000/trades')

        dispatch({
            type: TRADE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRADE_LIST_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message
        })

    }
}