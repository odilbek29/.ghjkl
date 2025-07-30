import  './header.css'

function Header() {
  return (
    <div className='header'>
        <header className='container'>
        <img src="./Logo.png" alt="" /> 
<div className="text">
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="">Contact</a>
</div>
        </header>
    </div>
  )
}

export default Header