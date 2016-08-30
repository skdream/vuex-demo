/**
 * Created by jyj02736 on 2016/8/30.
 */
import createLogger from 'vuex/logger'

export default process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
