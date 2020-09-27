const regeneratorRuntime = require('regenerator-runtime')
const Routes = require('../index')

describe('Testing api utility', () => {  
  
  const req = {}
  const res = {
    status: jest.fn(), 
    type: jest.fn(), 
    send: jest.fn()
  }

  test('Testing status code 404', () => {
    Routes.notFound(req, res)
    expect(res.status.mock.calls[0][0]).toBe(404)
  })

  test('Testing result 404', () => {
    Routes.notFound(req, res)
    expect(res.send.mock.calls[0][0]).toBe('Ops, where are you?\nNot Found!')
  })
})
