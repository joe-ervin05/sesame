# Sesame
Clean, secure Go authentication you can own.

Sesame is an open-source collection of **guides, best practices, and reference code** for implementing authentication with **Go + SQL**. It’s heavily inspired by [Lucia Auth](https://lucia-auth.com), a fantastic resource for implementing auth in JavaScript.

## What you get
- ✅ A clear, opinionated approach to auth (sessions, cookies, CSRF, passwords)
- ✅ SQL schema and migrations you can copy
- ✅ A reference server (net/http) you can run locally
- ✅ Patterns for email & password, OAuth 2, MFA (TOTP), WebAuthn, and rate limiting

## Non-goals
- ❌ A giant framework or black-box auth server
- ❌ “Magic middleware” that hides security decisions
- ❌ JWT-by-default for browser authentication

## Why sessions instead of JWTs?
JWTs are popular because they’re self-contained: you can validate a request with a signature check and claim validation, without hitting your database on every request. That's a real win in some architectures. But it comes with tradeoffs that make your authentication much more complicated and hard to secure.

### 1) Revocation is hard and costly
A JWT is valid until it expires. If you want true revocation (log out everywhere, kill stolen tokens, respond to account takeover), you usually have to **reintroduce server-side state**—for example:
- a denylist / blocklist
- token versioning / “last logout” timestamps
- token introspection

Once you’re doing that, the “no database calls” advantage mostly disappears.

### 2) Rotation and replay defense get complicated
With server-side sessions, you can rotate and invalidate on the server and you’re done.

JWT setups often evolve into:
- short-lived access tokens + long-lived refresh tokens
- refresh token storage rules
- replay detection
- multi-device/session tracking
- careful storage requirements (especially in browsers)

It’s more moving pieces that are easy to mess up.

### 3) Scope creep: you rebuild sessions anyways
Many “JWT-first” systems eventually add:
- refresh token tables
- token blacklists
- token versioning
- device/session lists

At that point you’ve basically built a session system except policy is split between “what the token says” and “what the server knows.” This is a classic example of multiple sources of truth and keeping them in sync becomes complex.

## Sessions are simple, controllable, and fast enough
Server-side sessions are straightforward to secure and operationalize:
- easy revocation and “logout everywhere”
- clean rotation and expiration
- easy auditing and device/session lists

And the performance cost is usually small in practice. Especially if you’re already querying the database for user/org/roles, or if you add caching when needed.
