// ----- Toggle Navbar ------ //
const navToggler = document.querySelector( '.nav-toggler' );

navToggler.addEventListener( 'click', toggleNav );

function toggleNav() {
    navToggler.classList.toggle( "active" )
    document.querySelector('.nav').classList.toggle("open")
}

// Close nav when clicking nav item
document.addEventListener( 'click', (e) => {
    if ( e.target.closest( '.nav-item' ) ) {
        toggleNav()
    }
})

// Sticky Header
window.addEventListener( 'scroll', () => {
    if ( pageYOffset > 60 ) {
        document.querySelector( '.header' ).classList.add( 'sticky' );
    } else {
        document.querySelector('.header').classList.remove('sticky')
    }
})

// Menu Tabs
const menuTabs = document.querySelector( '.menu-tabs' );

menuTabs.addEventListener( 'click', e => {
    if ( e.target.classList.contains( 'menu-tabs-item' ) && !e.target.classList.contains( 'active' ) ) {
        const target = e.target.getAttribute( 'data-target' );
        menuTabs.querySelector( '.active' ).classList.remove( 'active' );
        e.target.classList.add( 'active' );
        const menuSection = document.querySelector( '.menu-section' );
        menuSection.querySelector( '.menu-tabs-content.active' ).classList.remove( 'active' );
        menuSection.querySelector( target ).classList.add( 'active' );
    }
})