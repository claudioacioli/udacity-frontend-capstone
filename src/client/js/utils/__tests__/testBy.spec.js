import { byId, byName, byAll, byTag, bySelector, byClassName } from '../by'

describe('Testing By utilitity', () => {
  
  test('Testing the byId function', () => expect(byId).toBeDefined())
  
  test('Testing the byName function', () => expect(byName).toBeDefined())

  test('Testing the bySelector function', () => expect(bySelector).toBeDefined())

  test('Testing the byAll function', () => expect(byAll).toBeDefined())
  
  test('Testing the byTag function', () => expect(byTag).toBeDefined())
  
  test('Testing the byClassName function', () => expect(byClassName).toBeDefined())

})
