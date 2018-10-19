const API = {
  post: body => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  },
}

export default API
