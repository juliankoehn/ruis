import '@babel/polyfill'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)