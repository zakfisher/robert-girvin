(function(){

  // NAV
  const navToggles = document.querySelectorAll('.mobile-nav-toggle');
  Array.prototype.slice.call(navToggles, 0).map(function(el) {
    el.addEventListener('click', function() {
      document.body.className += ' force-mobile-nav mobile-nav-open'
    });
  });

  // FOOTER
  document.querySelector('#footerBlocks').outerHTML = '\
    <div id="footer-content"> \
      <div class="social-icons"> \
        <ul> \
          <li> \
            <a href="mailto: hey@robertgirvin.com?subject=hey" target="_blank"> \
              <img src="https://firebasestorage.googleapis.com/v0/b/robert-girvin.appspot.com/o/svg%2Fenvelope.svg?alt=media&token=290cec5d-a7ed-4d2d-83f9-cba1aa26c0df" alt=""> \
            </a> \
          </li> \
          <li> \
            <a href="https://twitter.com/robertgirvin" target="_blank"> \
              <img src="https://firebasestorage.googleapis.com/v0/b/robert-girvin.appspot.com/o/svg%2Ftwitter.svg?alt=media&token=f52c9ecc-6f14-482c-8cdd-bf0f7c4dc811" alt=""> \
            </a> \
          </li> \
          <li> \
            <a href="https://www.linkedin.com/in/robertgirvin/" target="_blank"> \
              <img src="https://firebasestorage.googleapis.com/v0/b/robert-girvin.appspot.com/o/svg%2Flinkedin.svg?alt=media&token=63e7eebc-8a7f-477b-8cb3-b04faabe265a" alt=""> \
            </a> \
          </li> \
          <li> \
            <a href="https://soundcloud.com/robertgirvin" target="_blank"> \
              <img src="https://firebasestorage.googleapis.com/v0/b/robert-girvin.appspot.com/o/svg%2Fsoundcloud.svg?alt=media&token=ccc03e85-30db-4ee6-8e7a-a8a839c0237f" alt=""> \
            </a> \
          </li> \
        </ul> \
      </div> \
      <div class="rights"> \
        <p><a href="/">robertgirvin.com</a><span>all rights reserved.</span></p> \
      </div> \
    </div> \
  ';
})()
