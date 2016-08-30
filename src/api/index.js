/**
 * Created by jyj02736 on 2016/8/30.
 */
import {GetTopicsApi} from './resource'

export default{
  getTopics :function() {
  	console.log(33)
    return GetTopicsApi.get()
  }
}
