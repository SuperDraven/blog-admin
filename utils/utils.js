import Cookie from 'js-cookie'
export default {
  getcookiesInServer: function (req) {
    const service_cookie = {}
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function(val) {
      const parts = val.split('=')
      service_cookie[parts[0].trim()] = (parts[1] || '').trim()
    })
    return service_cookie
  },
  getcookiesInClient: function(key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  }
}
