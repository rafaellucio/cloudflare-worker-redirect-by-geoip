//these countries go to REDIRECT
var mx_countries = ['MX', 'ES']
//these IP addresses don't get redirected
var bypass_ip = []

addEventListener('fetch', event => {
  event.respondWith(Redirect(event.request))
})

function inArray(needle, haystack) {
  var length = haystack.length
  for (var i = 0; i < length; i++) {
    if (haystack[i] == needle) return true
  }
  return false
}

function byPass(request) {
  if (inArray(request.headers.get('CF-Connecting-IP'), bypass_ip)) {
    return true
  }
  return false
}

function mapCountry(country_code) {
  if (inArray(country_code, mx_countries)) {
    return 'creditascrew.gangoffront.com'
  }
  //everyone else gets US
  return 'files.gangoffront.com'
}

/**
 * Fetch and log a given request object
 * @param {Request} request
 */
async function Redirect(request) {
  var url = new URL(request.url)

  correctHost = mapCountry(request.headers.get('CF-IPCountry'))
  if (byPass(request)) {
    correctHost = url.hostname
  }
  if (correctHost !== url.hostname) {
    url.hostname = correctHost
    console.log('redirecting to ' + url.href)
    return new Response('', {
      status: 301,
      headers: {
        Location: url.href,
      },
    })
  }

  console.log('no redirect')
  const response = await fetch(request)
  return response
}
