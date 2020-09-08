const http = require('http')
const https = require('https')

const 
 
  getRequestObject = url => (
    url.protocol && url.protocol.toLowerCase().replace(':','') === 'https' 
      ? https
      : http
  ),

  getData = async (url, token=null) => (
    new Promise((resolve, reject) => {
      const http = getRequestObject(url)
      const req = http.request(url, res => {
        const data = []
        res.on('data', chunk => data.push(chunk.toString()))
        res.on('end', () => {
          const result = data.join('')
          if(res.statusCode !== 200) {
            reject(result)
            return
          }
          try {
            resolve(JSON.parse(result))
          } catch(ex) {
            console.error(ex)
            reject(ex.message)
          }
        })
      })
      .on('error', err => {
        console.log("CLAUDIO")
        console.error('error on http', err)
        reject(err)
      })
      req.end()
    })
  ),

  postData = async (url, data=null, token=null) => (
    new Promise((resolve, reject) => {
      const body = JSON.stringify(data)
      const http = getRequestObject(url)
      const options = {
        hostname: url.hostname,
        path: [url.pathname, url.search].join(''),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': body.length
        }
      }
      const req = http.request(options, res => {
        const data = []
        res.on('data', chunk => data.push(chunk.toString()))
        res.on('end', () => {

          const result = data.join('')
          if(res.statusCode !== 200) {
            reject(result)
            return;
          }

          try {
            resolve(JSON.parse(result))
          } catch(ex) {
            console.error(ex)
            reject(ex.message)
          }

        })
      })
      .on('error', err => {
        console.error('error on http', err)
        reject(err)
      })
    
      req.write(body)
      req.end()
    })
  )
;

module.exports = {
  getData,
  postData
}
