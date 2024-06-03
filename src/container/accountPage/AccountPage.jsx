import React from 'react'
import '../accountPage/AccountPage.css'

const AccountPage = () => {
  return ( 
    <>
    <div className='accPage'>
    <div className="accPage_signin">
      <div className="accPage_heading">
      <h1 className='accPage_accHead'>SIGN IN OR CHECKOUT AS A GUEST</h1>
      </div>
      <div className="accPage_option">
      <button className="accPage_button1"><img src="icons8-google-48.png" className='accPage_style1'/> CONTINUE WITH GOOGLE</button><br /><br />
      </div>
      <h3 className='accPage_accHead3'>OR</h3>
      <h2 className='accPage_accHead2'>CONTINUE WITH EMAIL</h2>
      <p>If you already have a MY GUCCI account, you will be asked to sign in. If not, you can continue as a guest and choose to</p>
      <p className='accPage_style2'>register after checkout.</p>
      <form>
          <input placeholder="EMAIL*" />
      </form><br />
      <div className="accPage_proceed">
      <button className="accPage_button3"><strong>PROCEED TO CHECKOUT</strong></button>
      </div>
  </div>
  </div>

    </>
   )
}

export default AccountPage