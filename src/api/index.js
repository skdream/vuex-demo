/**
 * Created by jyj02736 on 2016/8/30.
 */
import {GetTopicsApi} from './resource'

export default{
  getTopics :function(tab,page) {
    return GetTopicsApi.get({tab,tab,page:page})
  }
}
