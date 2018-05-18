# Why do transit apps need HTTPS?

[**TDLR: HTTPS matters.**](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)

---

Transit apps are being used to get route planning info in many aspects of our lives. Because of this, they transmit highly sensitive information about their users:

- Based on the names of [POIs](https://en.wikipedia.org/wiki/Point_of_interest), one might be able to make assumptions about users' workplaces and personal interests.
- One might be able to determine daily, weekly and monthly schedules, e.g. how often a user visits their doctor.
- Many queries are being done right before a ride, so the movement patterns are near-realtime.

Aside from the fact that all this information will end up at the provider of the app, **it shouldn't be possible to obtain it along the way**. It is a matter of fact that:

- both people with criminal intentions and some providers of Wifi/Internet infrastructure collect and sell data about what users search for when and where,
- large-scale mass surveillance mechanisms are being used in many places along the way from the users to the app provider.

While it's hard to protect users against every of those threats, **a large class can be eliminated by encrypting communications**.

You could argue that, in 2018, it's outright irresponsible to have transit apps communicate via unencrypted protocols.

## How to do it?

- get an [SSL certificate](https://en.wikipedia.org/wiki/Public_key_certificate#TLS/SSL_server_certificate) (it's free with [LetsEncrypt](https://letsencrypt.org))
- configure your webserver to use [HTTPS](https://en.wikipedia.org/wiki/HTTPS)
- most importantly, **change your apps to only send HTTPS requests**
- redirect HTTP requests to HTTPS
