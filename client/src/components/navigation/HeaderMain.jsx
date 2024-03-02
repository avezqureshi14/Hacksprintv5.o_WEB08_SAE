import React from 'react'

const HeaderMain = () => {
  return (
    <div>
          <div class="header-main">

              <div class="container">

                  <a href="#" class="header-logo">
                    <h1 style={{color:"black"}} >Avez.</h1>
                  </a>

                  <div class="header-search-container">

                      <input type="search" name="search" class="search-field" placeholder="Enter your product name..."/>

                          <button class="search-btn">
                              <ion-icon name="search-outline"></ion-icon>
                          </button>

                  </div>

                  <div class="header-user-actions">

                      <button class="action-btn">
                          <ion-icon name="person-outline"></ion-icon>
                      </button>

                      <button class="action-btn">
                          <ion-icon name="heart-outline"></ion-icon>
                          <span class="count">0</span>
                      </button>
                  </div>

              </div>

          </div>
    </div>
  )
}

export default HeaderMain
