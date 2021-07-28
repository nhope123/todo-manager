import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:3000/create-list'

function Header() {
  console.log(`URL: ${window.location.href}`);
  return (
    <header className={'container-fluid mx-0 py-4 '}       >
      <div role={'document'} aria-label={'Application header'} title={'Home'}
           className={'col-12 d-flex flex-row justify-content-center align-items-canter'} >
        <Link to={'/'} className={'text-decoration-none'} >
          <h2 className={'mb-0'}>{'Todo Manager'}</h2>
        </Link >
      </div >
    </header>
  )
}

export default Header