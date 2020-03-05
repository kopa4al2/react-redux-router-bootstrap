import React, { useState } from 'react'

const RegisterPage = props => {
  const [loginInput, changeLoginInput] = useState('')
  const [passInput, changePassInput] = useState('')

  function register() {
    const json = JSON.stringify({
      login: loginInput,
      pass: passInput,
    })

    // TODO: API.register()
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
        <button onClick={register}>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
