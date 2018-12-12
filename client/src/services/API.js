const API = {
  POST: body => {
    return fetch('http://localhost:21075/', {
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
  GET: cep => {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .catch(err => {
        return err
      })
  },
}

export default API
