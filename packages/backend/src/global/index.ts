import { Users } from '@boiling/core'
import { HttpError as _HttpError } from './HttpError'

declare global {
  const HttpError: _HttpError
}

// @ts-ignore
global.HttpError = _HttpError

declare module 'koa-session' {
  interface Session {
    curUser?: Users.Out
  }
}
