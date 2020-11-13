const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {

    // Arrange
    const bodyPromise = getBodyFromRequest(fakeReq);

    fakeReq.emit('end');

    // Assert
    bodyPromise
      .then(body => {
        if (body === "") {
          done()
        } else {
          done(`Failed. Got "${body}"`)
        }
      });
  });

  it('returns the data read from the stream', done => {


    // Arrange
    const bodyPromise = getBodyFromRequest(fakeReq);
    const data1 = "This is some";
    const data2 = " data from the browser";



    // Act
    // Write code to emit a "data" event with
    // the data stored in data1
    fakeReq.emit('data', data1);
    fakeReq.emit('data', data2);
    // Write code to emit a "data" event with
    // the data stored in data2

    fakeReq.emit('end');

    // Assert
    bodyPromise
      .then(body => {
        if (body === data1 + data2) {
          done()
        } else {
          done(`Failed. Got "${body}"`)
        }
        // Write the following code:
        // Determine if body is equal to data1 + data2
        // If it is, call done()
        // If it is not, call
        //   done(`Failed. Got "${body}"`)
      });



  });
});
