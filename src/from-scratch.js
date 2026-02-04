const resolvedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
};

const rejectedWrapper = (errorMessage) => {
  return new Promise((resolve, reject) => {
    reject(Error(errorMessage))
  })
};

const handleResolvedPromise = (promise) => {
  return promise.then(data => {
    console.log(data)
    return data.toUpperCase()
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then(data => {
      console.log(data)
      return data.toUpperCase()
    })
    .catch(err => {
      console.error(`Your error message was: ${err.message}`)
      return null
    })
};

const pauseForMs = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
