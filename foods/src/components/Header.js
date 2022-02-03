import React from 'react'

function Header(props) {
    return (
        <div class="jumbotron">
            <h1><span class="material-icons brand-icon">
fastfood
</span>Food Recipies</h1>
<div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Search Your Recipe" value={props.search} onChange={props.onInputChange}/>
  <div class="input-group-append">
   <button className="btn btn-dark" onClick={props.onSearchChange}>Search Recipe</button>
  </div>
</div>
        </div>
    )
}

export default Header;
