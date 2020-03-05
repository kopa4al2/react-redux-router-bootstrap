import React, { useState } from 'react'

const AuthPage = props => {
  const [loginInput, changeLoginInput] = useState('')
  const [passInput, changePassInput] = useState('')

 function attemptLogin() {
    const json = JSON.stringify({
      login: loginInput,
      pass: passInput,
    })

   // TODO: API.login()
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='login'
          value={loginInput}
          onChange={e => changeLoginInput(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={passInput}
          onChange={e => changePassInput(e.target.value)}
        />
        <button onClick={attemptLogin}>Login</button>
      </form>
    </div>
  )
}

export default AuthPage
