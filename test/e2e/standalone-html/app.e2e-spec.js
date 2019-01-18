/**
 * MIT License
 * 
 * Copyright (c) 2017-present, Elasticsearch BV
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

var utils = require('elastic-apm-js-core/dev-utils/webdriver')
const { isChrome } = require('../e2e-utils')

describe('standalone-html', function () {
  it('should run the usecase', function () {
    browser.timeouts('script', 30000)
    browser.url('/test/e2e/standalone-html/index.html')

    browser.waitUntil(
      function () {
        return browser.getText('#test-element') === 'Passed'
      },
      10000,
      'expected element #test-element'
    )

    if (isChrome()) {
      return utils.allowSomeBrowserErrors(['timeout test error with a secret'])
    }
  })

  it('should run the opentracing use-case', function () {
    browser.timeouts('script', 30000)
    browser.url('/test/e2e/standalone-html/opentracing.html')

    browser.waitUntil(
      function () {
        return browser.getText('#test-element') === 'Passed'
      },
      10000,
      'expected element #test-element'
    )

    if (isChrome()) {
      return utils.allowSomeBrowserErrors(['timeout test error with a secret'])
    }
  })
})
