# Reproduction for code elimination bug

Reproduction for code limination bug.

In `pages/index.js` we import 2 module from `utils/index.js` - one module with frontend code, one module with Node.js code.
The Next.js code elimination fails in this case - the `fs` module can't be resolved.
