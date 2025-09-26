// Shim for iso-web/http that includes the missing RetryError export
// This re-exports everything from the original iso-web/http and adds the missing RetryError

// Import the original iso-web/http module path directly
import * as isoWebHttp from '../node_modules/iso-web/src/http.js';

// Re-export everything from the original module
export * from '../node_modules/iso-web/src/http.js';

// Add the missing RetryError class as a simple error subclass
export class RetryError extends Error {
  constructor(message, options = {}) {
    super(message, options);
    this.name = 'RetryError';
    this.cause = options.cause;
  }
}