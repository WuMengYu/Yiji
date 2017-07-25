;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M516.624832 955.424158c-11.711739 0-23.068392-4.876054-31.212886-13.376659l0 0c0 0-103.806227-107.134019-143.581116-148.871609L184.695001 793.175891c-77.883835 0-143.698796-69.619614-143.698796-152.081721L40.996205 208.625528c0-79.96524 63.318094-145.007605 141.201929-145.007605l668.854421 0c77.884858 0 141.202952 65.043389 141.202952 145.007605L992.255507 641.032772c0 82.46313-65.813938 152.143119-143.760195 152.143119l-161.713079 0c-56.897871 56.243979-137.219221 147.028635-138.051169 147.919934C539.693224 950.549128 528.337595 955.424158 516.624832 955.424158L516.624832 955.424158zM182.198134 123.072013c-45.066405 0-81.748862 38.406728-81.748862 85.553515L100.449271 641.032772c0 49.346895 39.418778 92.686982 84.245729 92.686982l182.761464 0 8.79941 9.335622c23.840988 25.388227 108.324124 112.725364 139.894144 145.246035 25.803689-28.834722 91.084485-100.951203 137.873114-146.257062l8.67866-8.382924 185.854918 0c44.886303 0 84.304058-43.341111 84.304058-92.686982L932.860768 208.625528c0-47.206138-36.682457-85.553515-81.748862-85.553515L182.198134 123.072013 182.198134 123.072013z"  ></path>' +
    '' +
    '<path d="M293.674041 381.63693c-30.797423 0-55.707766 25.803689-55.707766 57.670467s24.969695 57.670467 55.707766 57.670467c30.737048 0 55.706743-25.803689 55.706743-57.670467S324.472488 381.63693 293.674041 381.63693L293.674041 381.63693 293.674041 381.63693z"  ></path>' +
    '' +
    '<path d="M516.624832 381.63693c-30.797423 0-55.706743 25.803689-55.706743 57.670467s24.969695 57.670467 55.706743 57.670467c30.738072 0 55.707766-25.803689 55.707766-57.670467S547.423279 381.63693 516.624832 381.63693L516.624832 381.63693 516.624832 381.63693z"  ></path>' +
    '' +
    '<path d="M739.576647 381.63693c-30.797423 0-55.767118 25.803689-55.767118 57.670467s24.969695 57.670467 55.767118 57.670467c30.798447 0 55.707766-25.803689 55.707766-57.670467C795.344788 407.439596 770.375094 381.63693 739.576647 381.63693L739.576647 381.63693 739.576647 381.63693z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)