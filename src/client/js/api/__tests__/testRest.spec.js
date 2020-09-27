import regeneratorRuntime from "regenerator-runtime";
import { getData, postData, deleteData } from '../rest'

describe('Testing Api utilitity', () => {
  
  test('Testing the getData function', () => 
    expect(getData).toBeDefined()
  )

  test('returns promise resolving the getData function', () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ''}))
    expect(getData('google.com')).resolves.toBe('')
  })

  test('returns promise rejects the getData function', () => {
    global.fetch = jest.fn(() => Promise.reject(null))
    expect(getData('google.com')).rejects.toBe(null)
  })

  test('Testing the postData function', () => 
    expect(postData).toBeDefined()
  )

  test('returns promise resolving the postData function', () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ''}))
    expect(postData('google.com', {})).resolves.toBe('')
  })

  test('returns promise rejects the postData function', () => {
    global.fetch = jest.fn(() => Promise.reject(null))
    expect(postData('google.com', {})).rejects.toBe(null)
  })

  test('Testing the deleteData function', () => 
    expect(deleteData).toBeDefined()
  )
  
  test('returns promise resolving the deleteData function', () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => '', status: 204}))
    expect(deleteData('google.com')).resolves.toBe('')
  })

  test('returns promise rejects the deleteData function', () => {
    global.fetch = jest.fn(() => Promise.reject(null))
    expect(deleteData('google.com')).rejects.toBe(null)
  })
  
})
