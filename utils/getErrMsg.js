export default function getErrMsg(e) {
    if(e && 'message' in e) {
      return e.message
    } else if(typeof e === 'string') {
      return e
    } else {
      return 'An unknown error occured'
    }
  }