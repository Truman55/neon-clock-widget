import {create} from 'jss'
import vendorPrefixer from 'jss-vendor-prefixer'
import camelCase from 'jss-camel-case'
import jssNested from 'jss-nested'
import jssExtend from 'jss-extend'


const jss = create()
jss.use(vendorPrefixer())
jss.use(camelCase())
jss.use(jssNested())
jss.use(jssExtend())

export default jss