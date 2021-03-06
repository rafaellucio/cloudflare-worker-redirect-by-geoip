# 👷 `cloudflare-worker-redirect-by-geoip`
> This is a single POC to use Redirect by GeoIP

## Use Case

**Scenarios**

First

- Given the user is from Mexico 
- When to access https://files.gangoffront.com 
- Then it will be redirected to https://creditascrew.gangoffront.com 

Second

- Given the user is from Spain 
- When to access https://files.gangoffront.com 
- Then it will be redirected to https://creditascrew.gangoffront.com 

Cloudflare Community speaking about GeoIP Redirection Worker

https://community.cloudflare.com/t/geoip-redirection-worker/14414/13

## Using

A template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
