import React from 'react'

function Salonlogin() {
  return (
    <>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
      LOGIN PAGE
    </a>
  </div>
</nav>




<div class="nashfa" >
        <div class="card">
            <h1>Login</h1>

            {/* <div class="divider"></div> */}

    <form class="space">
        <input type="text" placeholder="Username"/>   <br />
        <input type="password" placeholder="Password"/> <br />
        <a href="#" id="aa">Forget Password ?</a> <br />
        <button type="submit">Login</button> 
        <div class="sign">
            <p>Not a member? <a href="#">sign Up</a></p>
        </div>
    </form>
</div>

</div>



      
    </>

      

  )
}

export default Salonlogin
