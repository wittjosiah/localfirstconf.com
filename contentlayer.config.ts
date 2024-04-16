import {Session} from './src/contentlayer/schema/session'
import {Speaker} from './src/contentlayer/schema/speaker'
import {makeSource} from 'contentlayer/source-files'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Speaker, Session]
})
