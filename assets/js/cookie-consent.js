var cookieconsent = function(e) {
    var t = {};

    function o(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    return o.m = e, o.c = t, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 33)
}([function(e, t, o) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map((function(t) {
                var o = function(e, t) {
                    var o = e[1] || "",
                        i = e[3];
                    if (!i) return o;
                    if (t && "function" == typeof btoa) {
                        var n = (r = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                            a = i.sources.map((function(e) {
                                return "/*# sourceURL=" + i.sourceRoot + e + " */"
                            }));
                        return [o].concat(a).concat([n]).join("\n")
                    }
                    var r;
                    return [o].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + o + "}" : o
            })).join("")
        }, t.i = function(e, o) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var i = {}, n = 0; n < this.length; n++) {
                var a = this[n][0];
                null != a && (i[a] = !0)
            }
            for (n = 0; n < e.length; n++) {
                var r = e[n];
                null != r[0] && i[r[0]] || (o && !r[2] ? r[2] = o : o && (r[2] = "(" + r[2] + ") and (" + o + ")"), t.push(r))
            }
        }, t
    }
}, function(e, t, o) {
    var i, n, a = {},
        r = (i = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === n && (n = i.apply(this, arguments)), n
        }),
        s = function(e, t) {
            return t ? t.querySelector(e) : document.querySelector(e)
        },
        c = function(e) {
            var t = {};
            return function(e, o) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var i = s.call(this, e, o);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (e) {
                        i = null
                    }
                    t[e] = i
                }
                return t[e]
            }
        }(),
        l = null,
        p = 0,
        u = [],
        d = o(26);

    function k(e, t) {
        for (var o = 0; o < e.length; o++) {
            var i = e[o],
                n = a[i.id];
            if (n) {
                n.refs++;
                for (var r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) n.parts.push(g(i.parts[r], t))
            } else {
                var s = [];
                for (r = 0; r < i.parts.length; r++) s.push(g(i.parts[r], t));
                a[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function v(e, t) {
        for (var o = [], i = {}, n = 0; n < e.length; n++) {
            var a = e[n],
                r = t.base ? a[0] + t.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            i[r] ? i[r].parts.push(s) : o.push(i[r] = {
                id: r,
                parts: [s]
            })
        }
        return o
    }

    function m(e, t) {
        var o = c(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? o.insertBefore(t, i.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), u.push(t);
        else if ("bottom" === e.insertAt) o.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = c(e.insertAt.before, o);
            o.insertBefore(t, n)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function _(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var i = function() {
                0;
                return o.nc
            }();
            i && (e.attrs.nonce = i)
        }
        return h(t, e.attrs), m(e, t), t
    }

    function h(e, t) {
        Object.keys(t).forEach((function(o) {
            e.setAttribute(o, t[o])
        }))
    }

    function g(e, t) {
        var o, i, n, a;
        if (t.transform && e.css) {
            if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
            e.css = a
        }
        if (t.singleton) {
            var r = p++;
            o = l || (l = _(t)), i = w.bind(null, o, r, !1), n = w.bind(null, o, r, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", h(t, e.attrs), m(e, t), t
        }(t), i = j.bind(null, o, t), n = function() {
            f(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = _(t), i = z.bind(null, o), n = function() {
            f(o)
        });
        return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else n()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be meed in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var o = v(e, t);
        return k(o, t),
            function(e) {
                for (var i = [], n = 0; n < o.length; n++) {
                    var r = o[n];
                    (s = a[r.id]).refs--, i.push(s)
                }
                e && k(v(e, t), t);
                for (n = 0; n < i.length; n++) {
                    var s;
                    if (0 === (s = i[n]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete a[s.id]
                    }
                }
            }
    };
    var b, y = (b = [], function(e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function w(e, t, o, i) {
        var n = o ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, n);
        else {
            var a = document.createTextNode(n),
                r = e.childNodes;
            r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
        }
    }

    function z(e, t) {
        var o = t.css,
            i = t.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = o;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o))
        }
    }

    function j(e, t, o) {
        var i = o.css,
            n = o.sourceMap,
            a = void 0 === t.convertToAbsoluteUrls && n;
        (t.convertToAbsoluteUrls || a) && (i = d(i)), n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var r = new Blob([i], {
                type: "text/css"
            }),
            s = e.href;
        e.href = URL.createObjectURL(r), s && URL.revokeObjectURL(s)
    }
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Enabled","always_active":"Always enabled","change_settings":"Change my preferences","find_out_more":"<p>To find out more, please visit the <a href=\'%s\' target=\'_blank\'>Cookies Policy</a>.</p>","i_agree_text":"I agree","inactive":"Disabled","ok_text":"OK","text":"The tensevntysevn website use cookies and other tracking technologies to improve your browsing experience on the website, to show you personalized content and targeted ads, to analyze the website traffic, and to understand where visitors are coming from. <br/>","title":"the tensevntysevn website uses cookies"},"level_functionality":{"content":"<p>These cookies are meed to provide you with a more personalized experience on the website and to remember choices you make when you mee the website.</p><p>For example, the website may mee functionality cookies to remember your language preferences or remember your login details.</p>","title":"Functionality cookies"},"level_strictly_necessary":{"content":"<p>These cookies are essential to provide you with services available through the website and to enable you to mee certain features of the website.</p><p>Without these cookies, the website cannot provide you certain services on the website.</p>","title":"Strictly necessary cookies"},"level_targeting":{"content":"<p>These cookies are meed to show advertising that is likely to be of interest to you based on your browsing habits.</p><p>These cookies, as served by content and/or advertising providers, may combine information they collected from the website with other information they have independently collected relating to your web browser\'s activities across their network of websites.</p><p>If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p>","title":"Targeting and advertising cookies"},"level_tracking":{"content":"<p>These cookies are meed to collect information to analyze the traffic to the website and how visitors are using the website.</p><p>For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps me to understand how the website can improve the website site for you.</p><p>The information collected through these tracking and performance cookies do not identify any individual visitor.</p>","title":"Tracking and performance cookies"},"preference_center":{"save":"Save my preferences","title":"Cookies Preferences Center"},"preference_center_menu_and_content":{"more_information_content":"<h1>More information</h1><p>For any queries in relation to policy on cookies and your choices, please contact me.</p>","more_information_title":"More information","your_privacy_content":"<h1>Privacy is no joke.</h1>\\n<p>Cookies are very small text files that are stored on your computer when you visit a website. The website use cookies for a variety of purposes and to enhance your online experience on the website (for example, to remember your account login details).</p><p>You can change your preferences and decline certain types of cookies to be stored on your computer while browsing the website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of the website.</p>","your_privacy_title":"Your privacy"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Immer aktiv","change_settings":"Einstellungen ändern","find_out_more":"<p>Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>Datenschutzerklärung</a>.</p>","i_agree_text":"Alle akzeptieren","inactive":"Inaktiv","ok_text":"OK","text":"Diese Website verwendet Cookies und Targeting Technologien, um Ihnen ein besseres Internet-Erlebnis zu ermöglichen und die Werbung, die Sie sehen, besser an Ihre Bedürfnisse anzupassen. Diese Technologien nutzen wir außerdem um, Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln. <br/>","title":"Ihre Privatsphäre ist uns wichtig"},"level_functionality":{"content":"<p>Diese Cookies werden verwendet, um Ihnen ein persönlicheres Erlebnis auf unserer Website zu ermöglichen und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.</p><p>Beispielsweise können wir Funktions-Cookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldedaten zu speichern.</p>","title":"Funktions Cookies"},"level_strictly_necessary":{"content":"<p>Diese Cookies sind für die Bereitstellung von Diensten, die über unsere Website verfügbar sind, und für die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.</p><p>Ohne diese Cookies können wir Ihnen bestimmte Dienste auf unserer Website nicht zur Verfügung stellen.</p>","title":"Technisch notwendige Cookies"},"level_targeting":{"content":"<p>Diese Cookies werden genutzt, um Werbung anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren wird.</p><p>Diese Cookies, die von unseren Inhalten und / oder Werbeanbietern bereitgestellt werden, können Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, welche sie durch Aktivitäten Ihres Webbrowsers in Ihrem Netzwerk von Websites gesammelt haben.</p><p>Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, werden weiterhin Anzeigen angezeigt. Diese sind für Sie jedoch möglicherweise nicht relevant.</p>","title":"Targeting und Werbung Cookies"},"level_tracking":{"content":"<p>Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.<p><p>Diese Cookies können beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So können wir verstehen, wie wir unsere Website für Sie verbessern können.</p><p>Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.</p>","title":"Tracking und Performance Cookies"},"preference_center":{"save":"Einstellungen speichern","title":"Cookie Einstellungen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mehr Informationen</h1><p>Bei Fragen in Bezug auf unseren Umgang mit Cookies und Ihrer Privatsphäre kontaktieren Sie uns bitte.</p>","more_information_title":"Mehr Informationen","your_privacy_content":"<h1>Ihre Privatsphäre ist uns wichtig</h1>\\n<p>Cookies sind sehr kleine Textdateien, die auf Ihrem Rechner gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies für eine Reihe von Auswertungen, um damit Ihren Besuch auf unserer Website kontinuierlich verbessern zu können (z. B. damit Ihnen Ihre Login-Daten erhalten bleiben).</p><p>Sie können Ihre Einstellungen ändern und verschiedenen Arten von Cookies erlauben, auf Ihrem Rechner gespeichert zu werden, während Sie unsere Webseite besuchen. Sie können auf Ihrem Rechner gespeicherte Cookies ebenso weitgehend wieder entfernen. Bitte bedenken Sie aber, dass dadurch Teile unserer Website möglicherweise nicht mehr in der gedachten Art und Weise nutzbar sind.</p>","your_privacy_title":"Ihre Privatsphäre"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actif","always_active":"Toujours activé","change_settings":"Changer mes préférences","find_out_more":"<p>Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique sur les cookies</a>.</p>","i_agree_text":"J\'accepte","inactive":"Inactif","ok_text":"OK","text":"Nous utilisons des cookies et d\'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé et des publicités ciblées, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs. <br/>","title":"Nous utilisons des cookies"},"level_functionality":{"content":"<p>Ces cookies servent à vous offrir une expérience plus personnalisée sur notre site Web et à mémoriser les choix que vous faites lorsque vous utilisez notre site Web.</p><p>Par exemple, nous pouvons utiliser des cookies de fonctionnalité pour mémoriser vos préférences de langue ou vos identifiants de connexion.</p>","title":"Cookies de Fonctionnalité"},"level_strictly_necessary":{"content":"<p>Ces cookies sont essentiels pour vous fournir les services disponibles sur notre site Web et vous permettre d’utiliser certaines fonctionnalités de notre site Web.</p><p>Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.</p>","title":"Cookies strictement nécessaires"},"level_targeting":{"content":"<p>Ces cookies sont utilisés pour afficher des publicités susceptibles de vous intéresser en fonction de vos habitudes de navigation.</p><p>Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicité, peuvent associer des informations qu\'ils ont collectées sur notre site Web à d\'autres informations qu\'ils ont collectées de manière indépendante et concernant les activités du votre navigateur Web sur son réseau de sites Web.</p><p>Si vous choisissez de supprimer ou de désactiver ces cookies de ciblage ou de publicité, vous verrez toujours des annonces, mais elles risquent de ne pas être pertinentes.</p>","title":"Cookies de ciblage et de publicité"},"level_tracking":{"content":"<p>Ces cookies sont utilisés pour collecter des informations permettant d\'analyser le trafic sur notre site et la manière dont les visiteurs utilisent notre site.</p><p>Par exemple, ces cookies peuvent suivre des choses telles que le temps que vous passez sur le site Web ou les pages que vous visitez, ce qui nous aide à comprendre comment nous pouvons améliorer notre site Web pour vous.</p><p>Les informations collectées via ces cookies de suivi et de performance n\' identifient aucun visiteur en particulier.</p>","title":"Cookies de suivi et de performance"},"preference_center":{"save":"Sauvegarder mes préférences","title":"Espace de Préférences des Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Plus d\'information</h1><p>Pour toute question relative à notre politique en matière de cookies et à vos choix, veuillez nous contacter.</p>","more_information_title":"Plus d\'information","your_privacy_content":"<h1>Votre confidentialité est importante pour nous</h1>\\n<p>Les cookies sont de très petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies à diverses fins et pour améliorer votre expérience en ligne sur notre site Web (par exemple, pour mémoriser les informations de connexion de votre compte).</p><p>Vous pouvez modifier vos préférences et refuser l\'enregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez également supprimer les cookies déjà stockés sur votre ordinateur, mais gardez à l\'esprit que leur suppression peut vous empêcher d\'utiliser des éléments de notre site Web.</p>","your_privacy_title":"Votre confidentialité"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Activo","always_active":"Siempre activo","change_settings":"Configurar","find_out_more":"<p>Para saber más, visita nuestra página sobre la <a href=\'%s\' target=\'_blank\'>Política de Cookies</a></p>","i_agree_text":"Aceptar","inactive":"Inactivo","ok_text":"OK","text":"Usamos cookies y otras técnicas de rastreo para mejorar tu experiencia de navegación en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el tráfico en nuestra web y para comprender de donde llegan nuestros visitantes. <br/>","title":"Utilizamos cookies"},"level_functionality":{"content":"<p>Estas cookies son utilizadas para proveerte una experiencia más personalizada y recordar tus elecciones en nuestra web.</p><p>Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tus preferencias de idioma o tus detalles de acceso.</p>","title":"Cookies de funcionalidad"},"level_strictly_necessary":{"content":"<p>Estos cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte utilizar algunas características de nuestra web.</p><p>Sin estas cookies, no podemos proveer algunos servicios de nuestro sitio web.</p>","title":"Cookies estrictamente necesarias"},"level_targeting":{"content":"<p>Estas cookies son utilizadas para enseñarte anuncios que pueden ser interesantes basados en tus costumbres de navegación.</p><p>Estas cookies, servidas por nuestros proveedores de contenido y/o de publicidad, pueden combinar la información que ellos recogieron de nuestro sitio web con otra información recopilada por ellos en relación con las actividades de su navegador a través de su red de sitios web.</p><p>Si eliges cancelar o inhabilitar las cookies de seguimiento y publicidad, seguirás viendo anuncios pero estos podrían no ser de tu interés.</p>","title":"Cookies de seguimiento y publicidad"},"level_tracking":{"content":"<p>Estas cookies son utilizadas para recopilar información, para analizar el tráfico y la forma en que los meuarios utilizan nuestra web.</p><p>Por ejemplo, estas cookies pueden recopilar datos como cuánto tiempo llevas navegado en nuestro sitio web o qué páginas visitas, cosa que nos ayuda a comprender cómo podemos mejorar nuestra web para ti.</p><p>La información recopilada con estas cookies de rastreo y rendimiento no identifican a ningún visitante individual.</p>","title":"Cookies de rastreo y rendimiento"},"preference_center":{"save":"Guardar mis preferencias","title":"Centro de Preferencias de Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Más información</h1><p>Para cualquier pregunta en relación con nuestra política de cookies y tus preferencias, contacta con nosotros, por favor.</p>","more_information_title":"Más información","your_privacy_content":"<h1>Tu privacidad es importante para nosotros</h1>\\n<p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en nuestro sitio web (por ejemplo, para recordar tus detalles de acceso).</p><p>Puedes cambiar tus preferencias y rechazar que algunos tipos de cookies sean almacenados mientras estás navegando en nuestra web. También puedes cancelar cualquier cookie ya almacenada en tu navegador, pero recuerda que cancelar las cookies puede impedirte utilizar algunas partes de nuestra web.</p>","your_privacy_title":"Tu privacidad"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actiu","always_active":"Sempre actiu","change_settings":"Canviar preferències","find_out_more":"<p>Per saber més, si me plau visiti la nostra <a href=\'%s\' target=\'_blank\'>Política de Cookies</a>.</p>","i_agree_text":"Estic d’acord","inactive":"Inactiu","ok_text":"OK","text":"Fem servir cookies i altres tecnologies de seguiment per millorar la teva experiència de navegació al nostre lloc web, per mostrar-te contingut personalitzat i anuncis interessants per a tu, per analitzar el nostre tràfic i entendre d’on venen els nostres visitants. <br/>","title":"Fem servir cookies"},"level_functionality":{"content":"<p>Aquestes cookies ens permeten oferir-vos una experiència personalitzada i recordar la vostra configuració quan feu servir el nostre lloc web.</p><p>Per exemple, podem fer servir funcionalitat per recordar el vostre idioma o les vostres credencials.</p>","title":"Cookies de funcionalitat"},"level_strictly_necessary":{"content":"<p>Aquestes cookies són essencials per oferir-vos el nostres serveis i funcionalitats al nostre lloc web.</p><p>Sense aquestes cookies, no me podem oferir alguns serveis.</p>","title":"Cookies estrictament necessàries"},"level_targeting":{"content":"<p>Aquestes cookies es fan servir per mostrar anuncis que poden ser del vostre interès basats en els vostres hàbits d’us.</p><p>Aquestes cookies, servides tal i com ho fan els nostres proveïdors de publicitat i contingut, poden combinar informació recollida al nostre lloc web amb altra informació que hagin recollit independentment relacionada amb activitat a la seva xarxa de llocs web.</p><p>Si vostè decideix eliminar o deshabilitat aquestes cookies, encara veurà publicitat però aquesta pot no ser rellevant per vostè.</p>","title":"Cookies de publicitat i focalització"},"level_tracking":{"content":"<p>Aquestes cookies es fan servir per recollir informació, analitzar el tràfic i veure com es fa servir el nostre lloc web.</p><p>Per exemple, aquestes cookies podrien fer el seguiment de quant de temps visiteu el nostre web o quines pàgines visiteu les quals ens poden ajudar a entendre com millorar el lloc web per vosaltres.</p><p>La informació recollida gràcies a aquestes cookies de seguiment i rendiment no me identifiquen de forma individual.</p>","title":"Cookies de seguiment i rendiment"},"preference_center":{"save":"Guarda les meves preferències","title":"Centre de Preferències de Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Més informació</h1><p>Per qualsevol pregunta relacionada amb la nostra política de cookies i les vostres opcions, si me plau contacti’ns.</p>","more_information_title":"Més informació","your_privacy_content":"<h1>La vostra privacitat és important per nosaltres</h1>\\n<p>Les cookies són uns arxius de text molt petits que es guarden al vostre  ordinador quan visiteu un lloc web. Fem servir cookies per una varietat de finalitats i millorar la vostra experiència al nostre lloc web (per exemple, per recordar les vostres credencials).</p><p>Pot canviar les vostres preferències i rebutjar l’emmagatzematge al vostre ordinador de certs tipus de cookies mentres navega pel nostre. Pot eliminar qualsevol cookie ja emmagatzemada al vostre ordinador, però tingui en compte que eliminar cookies pot impedir que faci servir parts del nostre lloc web.</p>","your_privacy_title":"La vostra privacitat"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Attivo","always_active":"Sempre attivo","change_settings":"Cambia le mie impostazioni","find_out_more":"<p>Per saperne di più, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica dei Cookies</a>.</p>","i_agree_text":"Accetto","inactive":"Inattivo","ok_text":"OK","text":"Noi meiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori. <br/>","title":"Noi meiamo i cookies"},"level_functionality":{"content":"<p>Questi cookies sono utilizzati per offrirti un’esperienza più personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre meavi il nostro sito.</p><p>Per esempio, possiamo meare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.</p>","title":"Cookies funzionali"},"level_strictly_necessary":{"content":"<p>Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalità del nostro sito web.</p><p>Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.</p>","title":"Cookies strettamente necessari"},"level_targeting":{"content":"<p>Questi cookies sono meati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.</p><p>Questi cookies, cosí come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione all’attività del tuo browser attraverso la loro rete di siti web.</p><p>Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicità, vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.</p>","title":"Cookies di targeting e pubblicità"},"level_tracking":{"content":"<p>Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.</p><p>Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.</p><p>Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.</p>","title":"Cookies di tracciamento e prestazione"},"preference_center":{"save":"Salva le mie impostazioni","title":"Centro Preferenze sui Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Più informazioni</h1><p>Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.</p>","more_information_title":"Più informazioni","your_privacy_content":"<h1>La tua privacy è importante per noi</h1>\\n<p>I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi meiamo i cookies per una varietà di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).</p><p>Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie già memorizzato nel tuo computer, ma ricorda che cancellare i cookies può impedirti di utilizzare alcune parti del nostro sito.</p>","your_privacy_title":"La tua privacy"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actief","always_active":"Altijd actief","change_settings":"Wijzig mijn voorkeuren","find_out_more":"<p>Voor meer informatie, bezoek ons <a href=\'%s\' target=\'_blank\'>Cookie Beleid</a>.</p>","i_agree_text":"Ik ga akkoord","inactive":"Inactief","ok_text":"OK","text":"Wij maken gebruik van cookies en andere tracking-technologieën om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om onze website trafiek te analyseren en om te begrijpen waar onze bezoekers vandaan komen. <br/>","title":"Wij gebruiken cookies"},"level_functionality":{"content":"<p>Deze cookies worden gebruikt om u een persoonlijkere ervaring op onze website te bieden en om keuzes te onthouden die u maakt wanneer u onze website gebruikt.</p><p>Functionele cookies worden bijvoorbeeld gebruikt om uw taalvoorkeuren of inloggegevens te onthouden.</p>","title":"Functionele cookies"},"level_strictly_necessary":{"content":"<p>Deze cookies zijn essentieel om u de diensten aan te bieden die beschikbaar zijn via onze website en om u in staat te stellen bepaalde functies van onze website te gebruiken.</p><p>Zonder deze cookies kunnen the website u bepaalde diensten op onze website niet aanbieden.</p>","title":"Strikt noodzakelijke cookies"},"level_targeting":{"content":"<p>Deze cookies worden gebruikt om advertenties weer te geven die u waarschijnlijk interesseren op basis van uw surfgedrag.</p><p>Deze cookies, zoals aangeboden op basis van de inhoud van onze site en/of reclame aanbieders, kunnen informatie die ze van onze website hebben verzameld combineren met andere informatie die ze onafhankelijk hebben verzameld met betrekking tot de activiteiten van uw webbrowser via hun netwerk van websites.</p><p>Als u ervoor kiest deze targeting- of advertentiecookies te verwijderen of uit te schakelen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.</p>","title":"Targeting- en advertentie cookies"},"level_tracking":{"content":"<p>Deze cookies worden gebruikt om informatie te verzamelen om het verkeer naar onze website te analyseren en hoe bezoekers onze website gebruiken.</p><p>Deze cookies kunnen gegevens zoals hoe lang u op de website doorbrengt of de pagina\'s die u bezoekt, bijhouden. Dit helpt ons te begrijpen hoe the website onze website voor u kunnen verbeteren.</p><p>Individuele bezoekers kunnen niet geïdentificeerd worden aan hand van de informatie in deze cookies.</p>","title":"Tracking- en prestatie cookies"},"preference_center":{"save":"Sla mijn voorkeuren op","title":"Cookie instellingen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Meer informatie</h1><p>Voor vragen in verband met ons cookiebeleid en uw keuzes kan u ons contacteren.</p>","more_information_title":"Meer informatie","your_privacy_content":"<h1>Uw privacy is belangrijk voor ons</h1>\\n<p>Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer worden opgeslagen. The website gebruiken cookies voor verschillende doeleinden en om uw online ervaring op onze website te verbeteren (bijvoorbeeld om de inloggegevens voor uw account te onthouden).</p><p>U kunt uw voorkeuren wijzigen en bepaalde soorten cookies weigeren die op uw computer worden opgeslagen tijdens het browsen op onze website. U kunt ook alle cookies verwijderen die al op uw computer zijn opgeslagen, maar houd er rekening mee dat het verwijderen van cookies ertoe kan leiden dat u delen van onze website niet kunt gebruiken.</p>","your_privacy_title":"Jouw privacy"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Ativo","always_active":"Sempre ativo","change_settings":"Alterar as minhas preferências","find_out_more":"<p>Para obter mais detalhes, por favor consulte a nossa<a href=\'%s\' target=\'_blank\'>Política de Cookies</a>.</p>","i_agree_text":"Concordo","inactive":"Inativo","ok_text":"OK","text":"Utilizamos cookies e outras tecnologias de medição para melhorar a sua experiência de navegação no nosso site, de forma a mostrar conteúdo personalizado, anúncios direcionados, analisar o tráfego do site e entender de onde vêm os visitantes. <br/>","title":"O nosso site mea cookies"},"level_functionality":{"content":"<p>Estes cookies são meados ​​para fornecer uma experiência mais personalizada no nosso site e para lembrar as escolhas que faz ao mear o nosso site.</p><p>Por exemplo, podemos mear cookies de funcionalidade para se lembrar das suas preferências de idioma e/ ou os seus detalhes de login.</p>","title":"Cookies de funcionalidade"},"level_strictly_necessary":{"content":"<p>Estes cookies são essenciais para fornecer serviços disponíveis no nosso site e permitir que possa mear determinados recursos no nosso site.</p><p>Sem estes cookies, não podemos fornecer certos serviços no nosso site.</p>","title":"Cookies estritamente necessários"},"level_targeting":{"content":"<p>Estes cookies são meados ​​para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hábitos e comportamentos de navegação.</p><p>Estes cookies, servidos pelo nosso conteúdo e/ ou fornecedores de publicidade, podem combinar as informações coletadas no nosso site com outras informações coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.</p><p>Se optar por remover ou desativar estes cookies de segmentação ou publicidade, ainda verá anúncios, mas estes poderão não ser relevantes para si.</p>","title":"Cookies de segmentação e publicidade"},"level_tracking":{"content":"<p>Estes cookies são meados ​​para coletar informações para analisar o tráfego no nosso site e entender como é que os visitantes estão a mear o nosso site.</p><p>Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as páginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.</p><p>As informações coletadas por meio destes cookies de medição e desempenho não identificam nenhum visitante individual.</p>","title":"Cookies de medição e desempenho"},"preference_center":{"save":"Guardar as minhas preferências","title":"Centro de preferências de cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mais Informações</h1><p>Para qualquer dúvida sobre a nossa política de cookies e as suas opções, entre em contato connosco.</p>","more_information_title":"Mais Informações","your_privacy_content":"<h1>A sua privacidade é importante para nós.</h1>\\n<p>Cookies são pequenos arquivos de texto que são armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiência no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).</p><p>Pode alterar as suas preferências e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode também remover todos os cookies já armazenados no seu computador, mas lembre-se de que a exclusão de cookies pode impedir o meo de determinadas áreas no nosso site.</p>","your_privacy_title":"A sua privacidade"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Päällä","always_active":"Aina päällä","change_settings":"Muuta asetuksiani","find_out_more":"<p>Lue lisää <a href=\'%s\' target=\'_blank\'>Evästekäytännöstämme</a>.</p>","i_agree_text":"Hyväksyn","inactive":"Pois päältä","ok_text":"OK","text":"Käytämme evästeitä ja muita seurantateknologioita parantaaksemme käyttäjäkokemusta verkkosivustollamme, näyttääksemme sinulle personoituja sisältöjä ja mainoksia, analysoidaksemme verkkoliikennettä sekä lisätäksemme ymmärrystämme käyttäjiemme sijainnista. <br/>","title":"Käytämme evästeitä"},"level_functionality":{"content":"<p>Näitä evästeitä käytetään personoidumman käyttäjäkokemuksen luomiseksi sekä valintojesi tallentamiseksi sivustollamme.</p><p>Esim. voimme käyttää toiminnallisuusevästeitä muistaaksemme kielivalintasi sekä kirjautumistietosi.</p>","title":"Toiminnallisuusevästeet"},"level_strictly_necessary":{"content":"<p>Nämä evästeet mahdollistavat verkkosivustomme palveluiden sekä tiettyjen ominaisuuksien käyttämisen.</p><p>Ilman näitä evästeitä emme voi tarjota sinulle tiettyjä palveluita sivustollamme.</p>","title":"Tärkeät evästeet"},"level_targeting":{"content":"<p>Näitä evästeitä käytetään näyttämään mainoksia, jotka selauskäytöksesi perusteella todennäköisesti kiinnostavat sinua.</p><p>Nämä sisältö- ja/tai mainoskumppanimme tarjoamat evästeet voivat yhdistää sivustoltamme kerättyä tietoa muilta heidän verkostoonsa kuuluvilta sivustoilta kerättyihin tietoihin.</p><p>Jos päätät poistaa tai kytkeä pois päältä nämä kohdennus- ja mainosevästeet, näet yhä mainoksia, mutta ne eivät välttämättä ole sinulle oleellisia.</p>","title":"Kohdennus- ja mainosevästeet"},"level_tracking":{"content":"<p>Näiden evästeiden avulla kerätään tietoa sivustomme liikenteestä sekä käyttötavoista.</p><p>Esim. nämä evästeet voivat seurata sitä, paljonko aikaa vietät sivustollamme, mikä auttaa meitä parantamaan sivustomme käyttökokemusta jatkossa.</p><p>Näiden evästeiden avulla kerätty tietoa ei voida yhdistää yksittäiseen käyttäjään.</p>","title":"Seuranta- ja tehokkuusevästeet"},"preference_center":{"save":"Tallenna asetukseni","title":"Evästeasetukset"},"preference_center_menu_and_content":{"more_information_content":"<h1>Lisätietoa</h1><p>Evästeisiin liittyvissä kysymyksissä ole hyvä ja ota meihin yhteyttä.</p>","more_information_title":"Lisätietoa","your_privacy_content":"<h1>Yksityisyytesi on meille tärkeää</h1>\\n<p>Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteeseesi verkkosivulla vieraillessasi. Käytämme evästeitä meeaan tarkoitukseen ja parantaaksesi käyttökokemustasi verkkosivustollamme (esim. muistaaksemme kirjautumistietosi).</p><p>Voit muuttaa asetuksiasi ja kieltää sivustoltamme tiettyjen evästetyyppien tallentamisen laitteellesi. Voit myös poistaa minkä tahansa jo tallennetun evästeen laitteeltasi, mutta huomaathan, että evästeiden poistaminen saattaa estää sinua käyttämästä osaa sivustomme sisällöstä.</p>","your_privacy_title":"Yksityisyytesi"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktív","always_active":"Mindig aktív","change_settings":"Beállítások megváltoztatása","find_out_more":"<p>Ha többet szeretne megtudni, kérjük, keresse fel a <a href=\'%s\' target=\'_blank\'>sütikre vonatkozó irányelveinket</a>.</p>","i_agree_text":"Elfogadom","inactive":"Inaktív","ok_text":"OK","text":"Az oldal sütiket és egyéb nyomkövető technológiákat alkalmaz, hogy javítsa a böngészési élményét, azzal hogy személyre szabott tartalmakat és célzott hirdetéseket jelenít meg, és elemzi a weboldalunk forgalmát, hogy megtudjuk honnan érkeztek a látogatóink. <br/>","title":"Az oldal sütiket használ"},"level_functionality":{"content":"<p>Ezeket a sütiket arra használjuk, hogy személyre szabottabb élményt nyújtsunk weboldalunkon, és hogy az oldal rögzítse a webhelyünk használata során tett döntéseket.</p><p>Például arra használhatunk funkcionális sütiket, hogy emlékezzünk a nyelvi beállításokra, vagy a bejelentkezési adataira.</p>","title":"Funkcionális sütik"},"level_strictly_necessary":{"content":"<p>Ezek a sütik elengedhetetlenek a weboldalunkon elérhető szolgáltatások nyújtásához, valamint weboldalunk bizonyos funkcióinak használatához.</p><p>A feltétlenül szükséges sütik használata nélkül weboldalunkon nem tudunk bizonyos szolgáltatásokat nyújtani Önnek.</p>","title":"Feltétlenül szükséges sütik"},"level_targeting":{"content":"<p>Ezeket a sütiket olyan hirdetések megjelenítésére használjuk, amelyek valószínűleg érdekli Önt a böngészési szokásai alapján.</p><p>Ezek a sütik, amelyeket a tartalom és / vagy a reklámszolgáltatók szolgáltatnak, egyesíthetik a weboldalunktól gyűjtött információkat más információkkal, amelyeket önállóan összegyűjtöttek az Ön böngészőjének tevékenységeivel kapcsolatban a webhely-hálózaton keresztül.</p><p>Ha Ön úgy dönt, hogy eltávolítja vagy letiltja ezeket a célirányos vagy hirdetési sütiket, akkor is látni fogja a hirdetéseket, de lehet, hogy nem lesznek relevánsak az Ön számára.</p>","title":"Célirányos és hirdetési sütik"},"level_tracking":{"content":"<p>Ezeket a sütiket arra használjuk, hogy információkat gyűjtsünk weboldalunk forgalmáról és látogatóiról, webhelyünk használatának elemzéséhez.</p><p>Például ezek a sütik nyomon követhetik a webhelyen töltött időt vagy a meglátogatott oldalakat, amely segít megérteni, hogyan javíthatjuk webhelyünket az Ön nagyobb megelégedettségére.</p><p>Ezekkel a nyomkövető és teljesítménnyel kapcsolatos sütikkel összegyűjtött információk egyetlen személyt sem azonosítanak.</p>","title":"Követési és teljesítménnyel kapcsolatos sütik"},"preference_center":{"save":"Beállítások mentése","title":"Sütikre beállítási központ"},"preference_center_menu_and_content":{"more_information_content":"<h1>Egyéb információk</h1><p>A sütikre vonatkozó irányelveinkkel és az Ön választásával kapcsolatosan felmerülő bármilyen kérdésével keressen meg bennünket.</p>","more_information_title":"Egyéb információk","your_privacy_content":"<h1>Az ön adatainak védelem fontos számunkra</h1>\\n<p>A sütik egészen kicsi szöveges fájlok, amelyeket a számítógépén tárolnak, amikor meglátogat egy weboldalt. Sütiket használunk különféle célokra, és weboldalunkon az online élmény fokozása érdekében (például a fiókjának bejelentkezési adatainak megjegyzésére).</p><p>Webhelyünk böngészése közben megváltoztathatja a beállításait, és elutasíthatja a számítógépén tárolni kívánt bizonyos típusú sütik használatát. A számítógépen már tárolt sütiket eltávolíthatja, de ne feledje, hogy a sütik törlése megakadályozhatja weboldalunk egyes részeinek használatát.</p>","your_privacy_title":"Az ön adatai védelme"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvijek aktivno","change_settings":"Promjeni moje postavke","find_out_more":"<p>Da bi saznali više, posjetite naša <a href=\'%s\' target=\'_blank\'>Pravila o kolačićima</a>.</p>","i_agree_text":"Slažem se","inactive":"Neaktivno","ok_text":"OK","text":"Koristimo kolačiće i druge tehnologije praćenja da bismo poboljšali vaše korisničko iskustvo na našoj web stranici, kako bismo vam prikazali personalizirani sadržaj i ciljane oglase, analizirali promet na našoj web stranici i razumjeli odakle dolaze naši posjetitelji. <br/>","title":"Mi koristimo kolačiće"},"level_functionality":{"content":"<p>Ovi se kolačići koriste kako bi vam pružili personalizirano korisničko iskustvo na našoj web stranici i za pamćenje izbora koje napravite kada koristite našu web stranicu.</p><p>Na primjer, možemo koristiti kolačiće funkcionalnosti da bismo zapamtili vaše jezične postavke ili upamtili vaše podatke za prijavu.</p>","title":"Kolačići funkcionalnosti"},"level_strictly_necessary":{"content":"<p>Ovi su kolačići neophodni za pružanje meluga dostupnih putem naše web stranice i omogućavanje korištenja određenih značajki naše web stranice.</p><p>Bez ovih kolačića ne možemo vam pružiti određene meluge na našoj web stranici.</p>","title":"Strogo potrebni kolačići"},"level_targeting":{"content":"<p>Ovi se kolačići koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaših navika pregledavanja web stranica.</p><p>Ovi kolačići, posluženi od naših pružatelja sadržaja i / ili oglašavanja, mogu kombinirati podatke koje su prikupili s naše web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vašeg web preglednika kroz njihovu mrežu web stranica.</p><p>Ako odlučite ukloniti ili onemogućiti ove kolačiće za ciljano oglašavanje, i dalje ćete vidjeti oglase, ali oni možda nisu relevantni za vas.</p>","title":"Kolačići za ciljano oglašavanje"},"level_tracking":{"content":"<p>Ovi se kolačići koriste za prikupljanje podataka za analizu prometa na našoj web stranici i za informaciju kako posjetitelji koriste našu web stranicu.</p><p>Na primjer, ti kolačići mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite što nam pomaže da shvatimo kako možemo poboljšati vaše korisničko iskustvo na našoj web stranici.</p><p>Informacije prikupljene ovim praćenjem i kolačići izvedbe ne identificiraju nijednog pojedinačnog posjetitelja.</p>","title":"Kolačići za praćenje i performanse"},"preference_center":{"save":"Spremi moje postavke","title":"Centar za postavke kolačića"},"preference_center_menu_and_content":{"more_information_content":"<h1>Više informacija</h1><p>Za sve upite vezane uz naša pravila o kolačićima i vašim izborima, molimo da nas kontaktirate.</p>","more_information_title":"Više informacija","your_privacy_content":"<h1>Vaša privatnost nam je važna</h1>\\n<p>Kolačići su vrlo male tekstualne datoteke koje se pohranjuju na vašem računalu kada posjetite web stranicu. Mi koristimo kolačiće za različite svrhe i za poboljšanje vašeg mrežnog iskustva na našoj web stranici (na primjer, za pamćenje podataka za prijavu na vaš korisnički račun).</p><p>Možete promijeniti svoje postavke i odbiti određene vrste kolačića koji će se pohraniti na vašem računalu tijekom pregledavanja naše web stranice. Također možete ukloniti sve kolačiće koji su već pohranjeni na vašem računalu, ali imajte na umu da vas brisanje kolačića može spriječiti da koristite dijelove naše web stranice.</p>","your_privacy_title":"Vaša privatnost"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivní","always_active":"Vždy aktivní","change_settings":"Upravit mé předvolby","find_out_more":"<p>Pro více informací navštivte naši stránku <a href=\'%s\' target=\'_blank\'>Zásady Cookies</a>.</p>","i_agree_text":"Souhlasím","inactive":"Neaktivní","ok_text":"OK","text":"Tyto webové stránky používají soubory cookies a další sledovací nástroje s cílem vylepšení uživatelského prostředí, zobrazení přizpůsobeného obsahu a  reklam, analýzy návštěvnosti webových stránek a zjištění zdroje návštěvnosti. <br/>","title":"Používáme soubory cookies"},"level_functionality":{"content":"<p>Tyto soubory cookie se používají k tomu, aby vám na našich webových stránkách poskytovaly personalizovaný uživatelský zážitek a aby si pamatovaly vaše volby, které jste použili při používání našich webových stránek.</p><p>Můžeme například používat soubory cookie k zapamatování vašeho jazyka nebo k zapamatování vašich přihlašovacích údajů.</p>","title":"Cookies pro funkcionality"},"level_strictly_necessary":{"content":"<p>Tyto soubory cookies jsou nezbytné k tomu, abychom vám mohli poskytovat služby dostupné prostřednictvím našeho webu a abychom vám umožnili používat určité funkce našeho webu.</p><p>Bez těchto cookies vám nemůžeme na naší webové stránce poskytovat určité služby.</p>","title":"Bezpodmínečně nutné soubory cookies"},"level_targeting":{"content":"<p>Tyto soubory cookie se používají k zobrazování reklamy, která vás pravděpodobně bude zajímat na základě vašich zvyků při procházení.</p><p>Tyto soubory cookie, jsou požadovány námi/nebo poskytovateli reklam, mohou kombinovat informace shromážděné z našich webových stránek s dalšími informacemi, které nezávisle shromáždily z jiných webových stránek, týkající se činností vašeho internetového prohlížeče v rámci jejich reklamní sítě webových stránek.</p><p>Pokud se rozhodnete tyto soubory cookies pro cílení nebo reklamu odstranit nebo deaktivovat, budou se vám reklamy stále zobrazovat, ale nemusí pro vás být nadále personalizované a relevantní.</p>","title":"Cookies pro cílení a reklamu"},"level_tracking":{"content":"<p>Tyto soubory cookies se používají ke shromažďování informací pro analýzu provozu na našich webových stránkách a sledování používání našich webových stránek uživateli.</p><p>Tyto soubory cookies mohou například sledovat věci jako je doba kterou na webu trávíte, nebo stránky, které navštěvujete, což nám pomáhá pochopit, jak pro vás můžeme vylepšit náš web.</p><p>Informace shromážděné prostřednictvím těchto sledovacích a výkonnostních cookies neidentifikují žádné osoby.</p>","title":"Sledovací a výkonnostní soubory cookies"},"preference_center":{"save":"Uložit mé předvolby","title":"Centrum předvoleb souborů Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Další informace</h1><p>V případě jakýchkoliv dotazů  ohledně našich zásad týkajících se souborů cookie a vašich možností nás prosím kontaktujte.</p>","more_information_title":"Další informace","your_privacy_content":"<h1>Vaše soukromí je pro nás důležité</h1>\\n<p>Soubory cookies jsou velmi malé textové soubory, které se ukládají do vašeho zařízení při navštěvování webových stránek. Soubory Cookies používáme pro různé účely a pro vylepšení vašeho online zážitku na webové stránce (například pro zapamatování přihlašovacích údajů k vašemu účtu).</p><p>Při procházení našich webových stránek můžete změnit své předvolby a odmítnout určité typy cookies, které se mají ukládat do vašeho počítače. Můžete také odstranit všechny soubory cookie, které jsou již uloženy ve vašem počítači, ale mějte na paměti, že odstranění souborů cookie vám může zabránit v používání částí našeho webu.</p>","your_privacy_title":"Vaše soukromí"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Altid aktiv","change_settings":"Skift indstillinger","find_out_more":"<p>For at finde ud af mere, så læs venligst vores <a href=\'%s\' target=\'_blank\'>Cookie politik</a>.</p>","i_agree_text":"Jeg accepterer","inactive":"Inaktiv","ok_text":"OK","text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse på vores website, til at vise personaliseret indhold, målrettede annoncer og til at forstå hvor vores besøgende kommer fra. <br/>","title":"Vi bruger cookies"},"level_functionality":{"content":"<p>Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.</p><p>Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.</p>","title":"Funktions cookies"},"level_strictly_necessary":{"content":"<p>Disse Cookies er essentielle for at du kan bruge vores hjemmeside.</p><p>Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.</p>","title":"Nødvendige cookies"},"level_targeting":{"content":"<p>Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret på dine browser profil.</p><p>Disse cookies, som sættes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netværk som partnerne styrer.</p><p>Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke længere være målrettet til dig.</p>","title":"Målretning og annoncecookies"},"level_tracking":{"content":"<p>Disse cookies anvendes til at analysere besøg på vores hjemmeside, og hvordan du bruger vores hjemmeside.</p><p>Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger på. Det hjælper os til at forstå hvordan vi kan forbedre hjemmesiden.</p><p>Informationerne kan ikke identificere dig som individ og er derfor anonyme.</p>","title":"Tracking og performance cookies"},"preference_center":{"save":"Gem mine indstillinger","title":"Cookie indstillinger"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mere information</h1><p>Har du spørgsmål vedr. vores cookiepolitik og dine valgmuligheder, så kontakt os venligst.</p>","more_information_title":"Mere information","your_privacy_content":"<h1>Dit privatliv er vigtigt for os</h1>\\n<p>Cookies er en lille tekstfil, som gemmes på din computer, når du besøger et website. Vi bruger cookies til en række formål, og for at forbedre din oplevelse på vores website (eksempelvis for at huske dine login oplysninger).</p><p>Du kan ændre dine indstillinger og afvise forskellige typer cookies, som gemmes på din computer, når du besøger vores website. Du kan også fjerne cookies som allerede er gemt på din computer, men bemærk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.</p>","your_privacy_title":"Dit privatliv"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Active","always_active":"Întotdeauna active","change_settings":"Vreau să schimb setările","find_out_more":"<p>Pentru a afla mai multe, te rugăm să citești <a href=\'%s\' target=\'_blank\'>Politica noastră de Cookie-uri</a>.</p>","i_agree_text":"Sunt de acord","inactive":"Inactive","ok_text":"OK","text":"Folosim cookie-uri și alte tehnologii de urmărire pentru a îmbunătăți experiența ta de navigare pe website-ul nostru, pentru afișa conținut și reclame personalizate, pentru a analiza traficul de pe website-ul nostru și pentru a înțelege de unde vin vizitatorii noștri. <br/>","title":"Folosim cookie-uri"},"level_functionality":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-ți asigura o experiență personalizată pe website-ul nostru și pentru salvarea alegerilor pe care le faci când folosești website-ul nostru.</p><p>De exemplu, putem folosi cookie-uri funcționale pentru a salva preferințele tale legate de limba website-ului nostru sau datele de logare.</p>","title":"Cookie-uri funcționale"},"level_strictly_necessary":{"content":"<p>Aceste cookie-uri sunt esențiale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.</p><p>Fără aceste cookie-uri nu poți folosi anumite funcționalități ale website-ului nostru.</p>","title":"Cookie-uri strict necesare"},"level_targeting":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-ți afișa reclame cât mai pe interesul tău, în funcție de obiceiurile tale de navigare.</p><p>Aceste cookie-uri, așa cum sunt afișate de furnizori noștri de conținut și/sau publicitate, pot combina informații de pe website-ul nostru cu alte informații pe care furnizori noștri le-au colectat în mod independent cu privire la activitatea ta în rețeaua lor de website-uri.</p><p>Dacă alegi să ștergi sau să dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame să nu fie relevante pentru tine.</p>","title":"Cookie-uri pentru marketing și publicitate"},"level_tracking":{"content":"<p>Acest tip de cookie-uri sunt folosite pentru a colecta informații în vederea analizării traficului pe website-ul nostru și modul în care vizitatorii noștri folosesc website-ul.</p><p>De exemplu, aceste cookie-uri pot urmări cât timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajută să înțelegem cum putem îmbunătăți website-ul pentru tine.</p><p>Informațiile astfel colectate nu identifică individual vizitatorii.</p>","title":"Cookie-uri de analiză și performanță"},"preference_center":{"save":"Salvează","title":"Preferințe pentru Cookie-uri"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mai multe informații</h1><p>Pentru mai multe informații cu privire la politica noastră de cookie-uri și preferințele tale, te rugăm să ne contactezi.</p>","more_information_title":"Mai multe informații","your_privacy_content":"<h1>Confidențialitatea ta este importantă pentru noi</h1>\\n<p>Cookie-urile sunt fișiere text foarte mici ce sunt salvate în browser-ul tău atunci când vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar și pentru a îți oferi cea mai bună experiență de utilizare posibilă (de exemplu, să reținem datele tale de logare în cont).</p><p>Îți poți modifica preferințele și poți refuza ca anumite tipuri de cookie-uri să nu fie salvate în browser în timp ce navigezi pe website-ul nostru. Deasemenea poți șterge cookie-urile salvate deja în browser, dar reține că este posibil să nu poți folosi anumite părți ale website-ul nostru în acest caz.</p>","your_privacy_title":"Confidențialitatea ta"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivni","always_active":"Vedno aktivni","change_settings":"Spremeni moje nastavitve","find_out_more":"<p>Za več informacij si prosim oglejte naš <a href=\'%s\' target=\'_blank\'>Pravilnik o piškotkih</a>.</p>","i_agree_text":"Se strinjam","inactive":"Neaktivni","ok_text":"V redu","text":"Piškotke in druge sledilne tehnologije uporabljamo za izboljšanje vaše uporabniške izkušnje med brskanjem po naši spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naše spletne strani in za vpogled v to, iz kje prihajajo naši gostje. <br/>","title":"Uporabljamo piškotke"},"level_functionality":{"content":"<p>Ti piškotki se uporabljajo za zagotavljanje bolj personalizirane izkušnje na naši spletni strani in za shranjevanje vaših odločitev ob uporabi naše spletne strani.</p><p>Funkcionalne piškotke lahko, na primer, uporabljamo za to, da si zapomnimo vaše jezikovne nastavitve oz. podatke za vpis v vaš račun.</p>","title":"Funkcionalni piškotki (ang. functionality cookies)"},"level_strictly_necessary":{"content":"<p>Ti piškotki so ključnega pomena pri zagotavljanju storitev, ki so na voljo na naši spletni strani, in pri omogočanju določenih funkcionalnosti naše spletne strani.</p><p>Brez teh piškotkov vam ne moremo zagotoviti določenih storitev na naši spletni strani.</p>","title":"Nujno potrebni piškotki (ang. strictly necessary cookies)"},"level_targeting":{"content":"<p>Ti piškotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaših navad pri brskanju verjetno zanimali.</p><p>Ti piškotki, ki jih uporabljajo naši oglaševalski ponudniki oz. ponudniki vsebine, lahko združujejo podatke, ki so jih zbrali na naši spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vašega spletnega brskalnika na njihovi mreži spletnih mest.</p><p>Če se odločite izbrisati oz. onemogočiti te ciljne in oglaševalske piškotke, boste še vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.</p>","title":"Ciljni in oglaševalski piškotki (ang. targeting and advertising cookies)"},"level_tracking":{"content":"<p>Ti piškotki se uporabljajo za zbiranje podatkov za analizo obiskov naše spletne strani in vpogled v to, kako gostje uporabljajo našo spletno stran.</p><p>Ti piškotki lahko, na primer, spremljajo stvari kot so to, koliko časa preživite na naši spletni strani oz. katere strani obiščete, kar nam pomaga pri razumevanju, kako lahko za vas izboljšamo spletno stran.</p><p>Podatki, ki jih zbirajo ti piškotki, ne identificirajo nobenega posameznega uporabnika.</p>","title":"Sledilni in izvedbeni piškotki (ang. tracking and performance cookies)"},"preference_center":{"save":"Shrani moje nastavitve","title":"Nastavitve piškotkov"},"preference_center_menu_and_content":{"more_information_content":"<h1>Več informacij</h1><p>Če imate kakršnakoli vprašanja v zvezi z našim pravilnikom o piškotkih in vaših izbirah, nas prosim kontaktirajte.</p>","more_information_title":"Več informacij","your_privacy_content":"<h1>Cenimo vašo zasebnost</h1>\\n<p>Piškotki so majhne besedilne datoteke, ki se shranijo na vašo napravo ob obisku spletne strani. Piškotke uporabljamo v več namenov, predvsem pa za izboljšanje vaše spletne izkušnje na naši strani (na primer za shranjevanje podatkov ob vpisu v vaš račun).</p><p>Vaše nastavitve lahko spremenite in onemogočite določenim vrstam piškotkov, da bi se shranili na vašo napravo med brskanjem po naši spletni strani. Poleg tega lahko odstranite katerekoli piškotke, ki so že shranjeni v vaši napravi, a upoštevajte, da vam bo po izbrisu piškotkov morda onemogočeno uporabljati dele naše spletne strani.</p>","your_privacy_title":"Vaša zasebnost"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktywne","always_active":"Zawsze aktywne","change_settings":"Zmiana metawień","find_out_more":"<p>Aby dowiedzieć się więcej, odwiedź naszą <a href=\'%s\' target=\'_blank\'>Politykę Cookie (Prywatności)</a>.</p>","i_agree_text":"Zgoda","inactive":"Nieaktywne","ok_text":"OK","text":"Używamy plików cookie i innych technologii śledzenia, aby poprawić jakość przeglądania naszej witryny, wyświetlać spersonalizowane treści i reklamy, analizować ruch w naszej witrynie i wiedzieć, skąd pochodzą nasi użytkownicy. <br/>","title":"Używamy pliki cookie"},"level_functionality":{"content":"<p>Te pliki cookie służą do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiętywania wyborów dokonywanych podczas korzystania z naszej strony internetowej.</p><p>Na przykład możemy używać funkcjonalnych plików cookie do zapamiętywania preferencji językowych lub zapamiętywania danych logowania.</p>","title":"Funkcjonalne"},"level_strictly_necessary":{"content":"<p>Te pliki cookie są niezbędne do świadczenia meług dostępnych za pośrednictwem naszej strony internetowej i umożliwienia korzystania z niektórych funkcji naszej strony internetowej.</p><p>Bez tych plików cookie nie możemy zapewnić meług na naszej stronie internetowej.</p>","title":"Niezbędne"},"level_targeting":{"content":"<p>Te pliki cookie służą do wyświetlania reklam, które mogą Cię zainteresować na podstawie Twoich zwyczajów przeglądania.</p><p>Pliki te tworzone przez naszych dostawców treści i/lub reklam, mogą łączyć informacje zebrane z naszej strony z innymi informacjami, które gromadzili niezależnie w związku z działaniami przeglądarki internetowej w ich sieci witryn.</p><p>Jeśli zdecydujesz się meunąć lub wyłączyć te pliki cookie, reklamy nadal będą wyświetlane, ale mogą one nie być odpowiednie dla Ciebie.</p>","title":"Targeting i reklama"},"level_tracking":{"content":"<p>Te pliki cookie służą do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki użytkownicy korzystają z naszej strony internetowej.</p><p>Na przykład te pliki cookie mogą śledzić takie rzeczy, jak czas spędzony na stronie lub odwiedzane strony, co pomaga nam zrozumieć, w jaki sposób możemy ulepszyć naszą witrynę internetową.</p><p>Informacje zebrane przez te pliki nie identyfikują żadnego konkretnego użytkownika.</p>","title":"Śledzenie i wydajność"},"preference_center":{"save":"Zapisz metawienia","title":"Centrum metawień cookie"},"preference_center_menu_and_content":{"more_information_content":"<h1>Więcej informacji</h1><p>W przypadku jakichkolwiek pytań dotyczących naszej polityki dotyczącej plików cookie i Twoich wyborów, skontaktuj się z nami.</p>","more_information_title":"Więcej informacji","your_privacy_content":"<h1>Twoja prywatność jest dla nas ważna.</h1>\\n<p>Pliki cookie to bardzo małe pliki tekstowe, które są tworzone i przechowywane na komputerze użytkownika podczas odwiedzania strony internetowej. Używamy plików cookie do różnych celów, w tym do ulepszania obsługi online na naszej stronie internetowej (na przykład, aby zapamiętać dane logowania do konta).</p><p>Możesz zmienić swoje metawienia i odrzucić niektóre rodzaje plików cookie, które mają być przechowywane na twoim komputerze podczas przeglądania naszej strony. Możesz również meunąć wszystkie pliki cookie już zapisane na komputerze, ale pamiętaj, że meunięcie plików cookie może uniemożliwić korzystanie z części naszej strony internetowej.</p>","your_privacy_title":"Twoja prywatność"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvek aktivno","change_settings":"Promeni moja podešavanja","find_out_more":"<p>Da saznate više, pogledajte našu <a href=\'%s\' target=\'_blank\'>Politiku o Kolačićima</a>.</p>","i_agree_text":"Slažem se","inactive":"Neaktivno","ok_text":"OK","text":"Mi koristimo kolačiće i ostale  tehnologije za praćenje kako bi unapredili vašu pretragu na našem veb sajtu, kako bi vam prikazali personalizovani sadržaj i ciljane reklame, analizirali posete na našem sajtu i razumeli odakle naši posetioci sajta dolaze. <br/>","title":"Mi koristimo kolačiće"},"level_functionality":{"content":"<p>Ovi kukiji koriste se za pružanje personalizovanijeg iskustva na našem veb sajtu i za pamćenje izbora koje koristite kada koristite našu veb sajt.</p><p>Na primer, možemo da koristimo kukije funkcionalnosti da bismo zapamtili vaše jezičke postavke ili upamtili vaše podatke za prijavu.</p>","title":"Funkcionalni kukiji"},"level_strictly_necessary":{"content":"<p>Ovi kukiji su neophodni za pružanje meluga dostupnih putem našeg veb sajta i za omogućavanje korišćenja određenih funkcija našeg veb sajta.</p><p>Bez ovih kolačića ne možemo vam pružiti određene meluge na našem veb sajtu.</p>","title":"Obavezni kukiji"},"level_targeting":{"content":"<p>Ovi kukiji koriste se za prikazivanje reklama koje će vas verovatno zanimati na osnovu vaših navika pregledavanja.</p><p>Ovi kukiji, opsluženi od strane naših dobavljača sadržaja i / ili oglašavanja, mogu kombinovati informacije koje su sakupili sa našeg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vašeg veb pretraživača kroz mrežu njihovih veb sajtova.</p><p>Ako odlučite da uklonite ili onemogućite ove ciljane ili reklamne kukije i dalje ćete videti oglase, ali oni možda neće biti relevantni za vas.</p>","title":"Ciljanje i oglašavanje kolačić"},"level_tracking":{"content":"<p>Ovi kukiji koriste se za prikupljanje informacija za analizu saobraćaja na našem veb sajtu i kako posetioci koriste naš veb sajt.</p><p>Na primer, ovi kolačići mogu pratiti stvari poput vremena koliko provodite na veb lokaciji ili stranicama koje posećujete što nam pomaže da shvatimo kako možemo da poboljšamo naš veb sajt.</p><p>Informacije prikupljene ovim kukijima za praćenje i performanse ne identifikuju nijednog pojedinačnog posetioca.</p>","title":"Praćenje i performanse kolačić"},"preference_center":{"save":"Sačuvaj moja podešavanja","title":"Centar za podešavanje kolačić"},"preference_center_menu_and_content":{"more_information_content":"<h1>Više informacija</h1><p>Za bilo koje upite vezane za našu politiku o kukijima i vašim izbor, molimo vas kontaktirajte nas.</p>","more_information_title":"Više informacija","your_privacy_content":"<h1>Vaša privatnost je važna za nas</h1>\\n<p>Kukiji su veoma mali tekstualni fajlovi koji su sačuvani na vašem računaru kada posećujete veb sajt. Mi koristimo kolačiće za različite namene i kako bi unapredili vaše onlajn iskustvo na našem veb sajtu (na primer, kako bi zapamtili vaše pristupne podatke).</p><p>Vi možete promeniti vaša podešavanja i odbiti određenu vrstu kolačića koji će biti sačuvani na vašem računaru dok pregledate naš veb sajt. Takođe možete izbisati bilo koji kuki koji je već sačuvan u vašem računaru, ali imajte na umu da brisanjem kolačić možete onemogućiti pristup nekim delovima našeg veb sajta.</p>","your_privacy_title":"Vaša privatnost"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Įjungta","always_active":"Visada įjungta","change_settings":"Keisti mano pasirinkimus","find_out_more":"<p>Norėdami sužinoti daugiau, susipažinkite su mūsų <a href=\'%s\' target=\'_blank\'>Slapukų Politika</a>.</p>","i_agree_text":"Sutinku","inactive":"Išjungta","ok_text":"Gerai","text":"Mes naudojame slapukus ir kitas stebėjimo technologijas, siekdami pagerinti jūsų naršymo mūsų svetainėje patirtį, parodyti jums pritaikytą turinį ir tikslinius skelbimus, išanalizuoti mūsų svetainės srautą ir suprasti, iš kur ateina mūsų lankytojai. <br/>","title":"Mes naudojame slapukus"},"level_functionality":{"content":"<p>Šie slapukai naudojami siekiant suteikti jums asmeniškesnę patirtį mūsų svetainėje ir prisiminti pasirinkimus, kuriuos atlikote, kai naudojatės mūsų svetaine.</p><p>Pvz., Mes galime naudoti funkcinius slapukus, kad prisimintume jūsų kalbos nustatymus arba prisimintume jūsų prisijungimo duomenis.</p>","title":"Funkcionalumo slapukai"},"level_strictly_necessary":{"content":"<p>Šie slapukai yra būtini norint suteikti jums paslaugas, pasiekiamas mūsų svetainėje, ir leisti naudotis tam tikromis mūsų svetainės funkcijomis.</p><p>Be šių slapukų mes negalime jums suteikti tam tikrų paslaugų mūsų svetainėje.</p>","title":"Privalomi slapukai"},"level_targeting":{"content":"<p>Šie slapukai naudojami rodyti reklamą, kuri greičiausiai jus domina, atsižvelgiant į jūsų naršymo įpročius.</p><p>Šie slapukai, kuriuos teikia mūsų turinio ir (arba) reklamos teikėjai, gali apjungti informaciją, kurią jie surinko iš mūsų svetainės, su kita informacija, kurią jie rinko nepriklausomai, apie jūsų interneto naršyklės veiklą jų svetainių tinkle.</p><p>Jei nuspręsite pašalinti arba išjungti šiuos tikslinius ar reklamavimo slapukus, vis tiek pamatysite skelbimus, tačiau jie gali būti jums neaktualūs.</p>","title":"Tiksliniai ir reklaminiai slapukai"},"level_tracking":{"content":"<p>Šie slapukai naudojami rinkti informaciją, siekiant analizuoti srautą į mūsų svetainę ir tai, kaip lankytojai naudojasi mūsų svetaine.</p><p>Pavyzdžiui, šie slapukai gali sekti kiek laiko praleidžiate svetainėje ar lankomuose puslapiuose, o tai padeda mums suprasti, kaip galime patobulinti savo svetainę.</p><p>Informacija, surinkta naudojant šiuos stebėjimo ir našumo slapukus, neatpažįsta konkretaus lankytojo.</p>","title":"Stebėjimo ir našumo slapukai"},"preference_center":{"save":"Išsaugoti mano pasirinkimus","title":"Slapukų Pasirinkimo Centras"},"preference_center_menu_and_content":{"more_information_content":"<h1>Daugiau informacijos</h1><p>Dėl bet kokių klausimų, susijusių su mūsų slapukų politika ir jūsų pasirinkimais, susisiekite su mumis.</p>","more_information_title":"Daugiau informacijos","your_privacy_content":"<h1>Mums rūpi jūsų privatumas</h1>\\n<p>Slapukai yra labai maži tekstiniai failai, kurie saugomi jūsų kompiuteryje, kai apsilankote svetainėje. Mes naudojame slapukus įvairiais tikslais ir siekdami pagerinti jūsų internetinę patirtį mūsų svetainėje (pavyzdžiui, jei norite, kad būtu įsimenami jūsų prisijungimo duomenys).</p><p>Naršydami mūsų svetainėje galite pakeisti savo nustatymus ir atsisakyti tam tikrų tipų slapukų, kurie bus saugomi jūsų kompiuteryje. Taip pat galite pašalinti visus slapukus, jau saugomus jūsų kompiuteryje, tačiau nepamirškite, kad ištrynę slapukus galite nepilnai naudotis mūsų svetaine.</p>","your_privacy_title":"Jūsų privatumas"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"В действие са бисквитките","always_active":"Винаги в действие са бисквитките","change_settings":"Промяна на предпочитанията ми","find_out_more":"<p>За да научите повече, моля, посетете нашата <a href=\'%s\' target=\'_blank\'>страница Политика за бисквитки</a>.</p>","i_agree_text":"Съгласен съм","inactive":"Неактивни бисквитки","ok_text":"Добре","text":"Ние използваме бисквитки и други, проследяващи, технологии, за да подобрим сърфирането ви в нашия сайт, като ви покажем персонализирано съдържание и реклами, да анализираме трафика на нашия сайт и да разберем откъде идват нашите посетители. <br/>","title":"Ние използваме бисквитки"},"level_functionality":{"content":"<p>Тези бисквитки се използват, за да ви осигурят още по-персонализирано изживяване на нашия уебсайт и да бъдат запомнени изборите, които сте направили, когато използвахте нашия уебсайт.</p><p>Например: може да използваме функционални бисквитки, за да запомним предпочитания ви език или да запомним детайли по влизането ви в уебсайта.</p>","title":"Функционални бисквитки"},"level_strictly_necessary":{"content":"<p>Тези бисквитки са съществен елемент, който осигурява услуги, достъпни чрез нашия уебсайт и дават възможност за използване на определени функции на нашия уебсайт.</p><p>Без тези бисквитки не можем да ви доставим определени услуги на нашия уебсайт.</p>","title":"Строго задължителни бисквитки"},"level_targeting":{"content":"<p>Тези бисквитки се използват за показване на реклама, която вероятно ще ви заинтересова въз основа на навиците ви за сърфиране.</p><p>Тези бисквитки, обслужвани от нашите доставчици на съдържание и / или реклама, могат да комбинират информацията, която са събрали от нашия уебсайт, с друга информация, която са събрали независимо, свързана с дейностите на вашия уеб браузър в тяхната мрежа от уебсайтове.</p><p>Ако решите да премахнете или деактивирате тези бисквитки за определени потребителски групи или реклама, пак ще видите реклами, но те може да не са от подходящи за вас.</p>","title":"Насочване и рекламни бисквитки"},"level_tracking":{"content":"<p>Тези бисквитки се използват за събиране на информация за анализ на трафика към нашия уебсайт и как посетителите използват нашия уебсайт.</p><p>Например, тези бисквитки могат да проследяват неща като колко време прекарвате на уебсайта или на посещаваните от вас страници, което ни помага да разберем как можем да подобрим нашия сайт за вас.</p><p>Информацията, събрана чрез тези бисквитки за проследяване и производителност, не идентифицира всеки отделен посетител.</p>","title":"Бисквитки за проследяване и за производителност"},"preference_center":{"save":"Запази предпочитанията ми","title":"Център за настройка на бисквитки"},"preference_center_menu_and_content":{"more_information_content":"<h1>Още информация</h1><p>За всякакви въпроси във връзка с нашата политика за бисквитките и вашите избори, моля, свържете се с нас.</p>","more_information_title":"Още информация","your_privacy_content":"<h1>Вашата поверителност е важна за нас</h1>\\n<p>Бисквитките са много малки текстови файлове, които се съхраняват на вашия компютър, когато посетите уебсайт. Ние използваме бисквитки за множество от цели и да подобрим сърфирането ви из нашия сайт (например: за да запомним детайлите на вашия акаунт за влизане).</p><p>Можете да промените предпочитанията си и да откажете определени видове бисквитки, които да се съхраняват на вашия компютър, докато сърфирате в нашия уебсайт. Можете също да премахнете някои бисквитки, които вече са запазени на вашия компютър, но имайте предвид, че изтриването на бисквитки може да ви попречи да използвате части от нашия уебсайт.</p>","your_privacy_title":"Вашата поверителност"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Ενεργό","always_active":"Πάντα ενεργό","change_settings":"Αλλαγή των προτιμήσεών μου","find_out_more":"<p>Για να μάθετε περισσότερα, παρακαλούμε επισκεφθείτε την σελίδα περί <a href=\'%s\' target=\'_blank\'>πολιτικής cookies</a>.</p>","i_agree_text":"Συμφωνώ","inactive":"Ανενεργό","ok_text":"OK","text":"Χρησιμοποιούμε cookies και άλλες τεχνολογίες εντοπισμού για την βελτίωση της εμπειρίας περιήγησης στην ιστοσελίδα μας, για την εξατομίκευση περιεχομένου και διαφημίσεων, την παροχή λειτουργιών κοινωνικών μέσων και την ανάλυση της επισκεψιμότητάς μας. <br/>","title":"Αυτή η ιστοσελίδα χρησιμοποιεί cookies"},"level_functionality":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να σας παρέχουν μία πιο προσωποποιημένη εμπειρία στην ιστοσελίδα μας και για να θυμούνται επιλογές που κάνετε όταν χρησιμοποιείτε την ιστοσελίδα μας.</p><p>Για παράδειγμα, μπορεί να χρησιμοποιήσουμε cookies λειτουργικότητας για να θυμόμαστε την επιλογή γλώσσας ή τα στοιχεία εισόδου σας.</p>","title":"Cookies Λειτουργικότητας"},"level_strictly_necessary":{"content":"<p>Τα απαραίτητα cookies βοηθούν στο να γίνει χρηστική μία ιστοσελίδα, επιτρέποντας βασικές λειτουργίες όπως την πλοήγηση και την πρόσβαση σε ασφαλείς περιοχές της ιστοσελίδας.</p><p>Η ιστοσελίδα δεν μπορεί να λειτουργήσει σωστά χωρίς αυτά τα cookies.</p>","title":"Άκρως απαραίτητα cookies"},"level_targeting":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να δείχνουν διαφημίσεις που μπορεί να σας ενδιαφέρουν με βάση τις συνήθειες περιήγησής σας στο Διαδίκτυο.</p><p>Αυτά τα cookies, παρέχονται από τους παρόχους περιεχομένου ή/και διαφημίσεων, μπορεί να συνδυάζουν πληροφορίες που συλλέγουν από την ιστοσελίδα μας με άλλες που έχουν ανεξάρτητα συλλέξει από άλλα δίκτυα ή ιστοσελίδες σχετικά με τις δραστηριότητές σας στον φυλλομετρητή σας.</p><p>Εάν επιλέξετε να αφαιρέσετε ή να απενεργοποιήσετε αυτά τα cookies, θα συνεχίσετε να βλέπετε διαφημίσεις, αλλά αυτές μπορεί να μην είναι πλέον σχετικές με τα ενδιαφέροντά σας.</p>","title":"Cookies εξατομικευμένου περιεχομένου και διαφημίσεων"},"level_tracking":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να συλλέγουν πληροφορίες σχετικές με την ανάλυση της επισκεψιμότητας της ιστοσελίδας μας και με το πώς οι χρήστες την χρησιμοποιούν.</p><p>Για παράδειγμα, αυτά τα cookies μπορεί να εντοπίσουν πόσο χρόνο αφιερώνετε στην ιστοσελίδα μας ή ποιες σελίδες της επισκέπτεστε, πράγμα που μας βοηθάει να καταλάβουμε πώς να βελτιώσουμε την ιστοσελίδα μας.</p><p>Οι πληροφορίες που συλλέγονται μέσω αυτών των cookies δεν αναγνωρίζουν μεμονωμένους χρήστες.</p>","title":"Cookies εντοπισμού και αποδοτικότητας"},"preference_center":{"save":"Αποθήκευση των προτιμήσεών μου","title":"Κέντρο Προτιμήσεων Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Περισσότερες πληροφορίες.</h1><p>Για οποιαδήποτε απορία σε σχέση με την πολιτική μας σχετικά με τα cookies και τις επιλογές σας, παρακαλούμε να έρθετε σε επαφή μαζί μας.</p>","more_information_title":"Περισσότερες πληροφορίες","your_privacy_content":"<h1>Η ιδιωτικότητά σας είναι σημαντική για εμάς.</h1>\\n<p>Τα cookies είναι πολύ μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή σας όταν επισκέπτεστε μια ιστοσελίδα. Χρησιμοποιούμε cookies για διάφορους λόγους και για να βελτιώσουμε την διαδικτυακή σας εμπειρία στην ιστοσελίδα μας (π.χ., για υπενθύμιση των στοιχείων πρόσβασής σας στην ιστοσελίδα).</p><p>Μπορείτε να αλλάξετε τις προτιμήσεις σας και να μην επιτρέψετε σε κάποιους τύπους cookies να αποθηκευτούν στον υπολογιστή σας όσο περιηγείστε στην ιστοσελίδα μας. Μπορείτε επίσης να διαγράψετε οποιαδήποτε cookies είναι ήδη αποθηκευμένα στον υπολογιστή σας, αλλά να έχετε υπόψιν ότι διαγράφοντας cookies μπορεί να σας αποτρέψει από το να χρησιμοποιήσετε μέρη της ιστοσελίδας μας.</p>","your_privacy_title":"Η ιδιωτικότητά σας"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","change_settings":"Newid fy newisiadau","find_out_more":"<p>I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>Polisi Cwcis</a>.</p>","i_agree_text":"Rwy\'n cytuno","inactive":"Anweithredol","ok_text":"Iawn","text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr. <br/>","title":"Rydym yn defnyddio cwcis"},"level_functionality":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.</p><p>Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.</p>","title":"Cwcis swyddogaeth"},"level_strictly_necessary":{"content":"<p>Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.</p><p>Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.</p>","title":"Cwcis hollol hanfodol"},"level_targeting":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.</p><p>Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.</p><p>Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi. </p>","title":"Cwcis targedu a hysbysebu"},"level_tracking":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.</p><p>Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld â hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.<p>Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.</p>","title":"Cwcis tracio a pherfformiad"},"preference_center":{"save":"Cadw fy newisiadau","title":"Canolfan Dewisiadau Cwcis"},"preference_center_menu_and_content":{"more_information_content":"<h1>Rhagor o wybodaeth.</h1><p>Os oes gennych chi unrhyw ymholiadau yn ymwneud â\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu â ni.</p>","more_information_title":"Rhagor o wybodaeth","your_privacy_content":"<h1>Mae eich preifatrwydd yn bwysig i ni.</h1>\\n<p>Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld â gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).</p><p>Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.</p>","your_privacy_title":"Eich preifatrwydd"}}')
}, function(e) {
    e.exports = JSON.parse('{"dialog":{"active":"تغيير تفضيلاتي","always_active":"مفعل دائمًا","change_settings":"تغيير تفضيلاتي","find_out_more":"<p><a href=\'%s\' target=\'_blank\'>لمعرفة المزيد ، يرجى زيارة</a> سياسة ملفات تعريف الارتباط الخاصة بنا.</p>","i_agree_text":"موافق","inactive":"غير مفعل","ok_text":"فهمت","text":"نحن نستخدم ملفات تعريف الارتباط وتقنيات التتبع الأخرى لتحسين تجربة التصفح الخاصة بك على موقعنا الإلكتروني ، ولإظهار المحتوى المخصص والإعلانات المستهدفة لك ، وتحليل حركة المرور على موقعنا ، وفهم من أين يأتي زوارنا.\\n<br/>","title":"نحنُ نستخدم ملفات تعريف الارتباط"},"level_functionality":{"content":"<p>\\nتُستخدم ملفات تعريف الارتباط هذه لتزويدك بتجربة أكثر تخصيصًا على موقعنا الإلكتروني ولتذكر الخيارات التي تتخذها عند استخدامك لموقعنا.\\n</p>\\n\\n<p>\\nعلى سبيل المثال ، قد نستخدم ملفات تعريف الارتباط الوظيفية لتذكر تفضيلات اللغة الخاصة بك أو تذكر تفاصيل تسجيل الدخول الخاصة بك.\\n</p>","title":"ملفات تعريف الارتباط الوظيفية"},"level_strictly_necessary":{"content":"<p>\\nتعد ملفات تعريف الارتباط هذه ضرورية لتزويدك بالخدمات المتاحة عبر موقعنا على الويب ولتمكينك من استخدام ميزات معينة في موقعنا.\\n</p>\\n\\n<p>\\n بدون ملفات تعريف الارتباط هذه ، لا يمكننا تقديم خدمات معينة لك على موقعنا.\\n</p>","title":"ملفات تعريف الارتباط الضرورية للغاية"},"level_targeting":{"content":"<p>\\nتُستخدم ملفات تعريف الارتباط هذه لإظهار الإعلانات التي من المحتمل أن تهمك بناءً على عاداتك في التصفح.\\n</p>\\n\\n<p>\\nقد تدمج ملفات تعريف الارتباط هذه ، كما يقدمها المحتوى و / أو موفرو الإعلانات لدينا ، المعلومات التي جمعوها من موقعنا الإلكتروني مع المعلومات الأخرى التي جمعوها بشكل مستقل فيما يتعلق بأنشطة متصفح الويب الخاص بك عبر شبكة مواقعهم الإلكترونية.\\n</p>\\n\\n<p>\\nإذا اخترت إزالة أو تعطيل ملفات تعريف الارتباط الخاصة بالاستهداف أو الإعلانات ، فستظل تشاهد إعلانات ولكنها قد لا تكون ذات صلة بك.\\n</p>","title":"ملفات تعريف الارتباط الخاصة بالاستهداف والإعلان"},"level_tracking":{"content":"<p>\\nتُستخدم ملفات تعريف الارتباط هذه لجمع المعلومات لتحليل حركة المرور إلى موقعنا الإلكتروني وكيفية استخدام الزوار لموقعنا.\\n</p>\\n\\n<p>\\nعلى سبيل المثال ، قد تتعقب ملفات تعريف الارتباط هذه أشياء مثل المدة التي تقضيها على موقع الويب أو الصفحات التي تزورها مما يساعدنا على فهم كيف يمكننا تحسين موقعنا على الويب من أجلك.\\n</p>\\n\\n<p>\\nالمعلومات التي يتم جمعها من خلال ملفات تعريف الارتباط الخاصة بالتتبع والأداء هذه لا تحدد أي زائر فردي.\\n</p>","title":"ملفات تعريف الارتباط للتتبع والأداء"},"preference_center":{"save":"حفظ تفضيلاتي","title":"مركز تفضيلات ملفات تعريف الارتباط"},"preference_center_menu_and_content":{"more_information_content":"<h1>\\nمعلومات أكثر.\\n</h1>\\n<p>\\nلأي استفسارات تتعلق بسياستنا الخاصة بملفات تعريف الارتباط ، وخياراتك،  يرجى التواصل معنا.\\n</p>","more_information_title":"معلومات أكثر.","your_privacy_content":"<h1>\\nخصوصيتك مهمة بالنسبة لنا.\\n</h1>\\n<p> من الأغراض ولتعزيز تجربتك عبر الإنترنت على موقعنا (على سبيل المثال ، لتذكر تفاصيل تسجيل الدخول إلى حسابك).</p>\\n<p>\\n يمكنك تغيير تفضيلاتك ورفض أنواع معينة من ملفات تعريف الارتباط ليتم تخزينها على جهاز الكمبيوتر الخاص بك أثناء تصفح موقعنا على الويب.  يمكنك أيضًا إزالة أي ملفات تعريف ارتباط مخزنة بالفعل على جهاز الكمبيوتر الخاص بك ، ولكن ضع في اعتبارك أن حذف ملفات تعريف الارتباط قد يمنعك من استخدام أجزاء من موقعنا.\\n</p>","your_privacy_title":"خصوصيتك"}}')
}, function(e, t, o) {
    var i = o(25);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(i, n);
    i.locals && (e.exports = i.locals)
}, function(e, t, o) {
    (e.exports = o(0)(!1)).push([e.i, '.cc_css_reboot{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;margin:0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.cc_css_reboot *,.cc_css_reboot *::before,.cc_css_reboot *::after{box-sizing:border-box}.cc_css_reboot a,.cc_css_reboot li,.cc_css_reboot p,.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6,.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.cc_css_reboot{width:device-width}}.cc_css_reboot article,.cc_css_reboot aside,.cc_css_reboot figcaption,.cc_css_reboot figure,.cc_css_reboot footer,.cc_css_reboot header,.cc_css_reboot hgroup,.cc_css_reboot main,.cc_css_reboot nav,.cc_css_reboot section{display:block}.cc_css_reboot [tabindex="-1"]:focus{outline:0 !important}.cc_css_reboot hr{box-sizing:content-box;height:0;overflow:visible}.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6{margin-top:0;margin-bottom:0.5rem;color:#000}.cc_css_reboot p{margin-top:0;margin-bottom:1rem}.cc_css_reboot abbr[title],.cc_css_reboot abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}.cc_css_reboot address{margin-bottom:1rem;font-style:normal;line-height:inherit}.cc_css_reboot div{display:block}.cc_css_reboot ol,.cc_css_reboot ul,.cc_css_reboot dl{margin-top:0;margin-bottom:1rem}.cc_css_reboot ol ol,.cc_css_reboot ul ul,.cc_css_reboot ol ul,.cc_css_reboot ul ol{margin-bottom:0}.cc_css_reboot b,.cc_css_reboot strong{font-weight:bolder}.cc_css_reboot small{font-size:80%}.cc_css_reboot sub,.cc_css_reboot sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.cc_css_reboot sub{bottom:-.25em}.cc_css_reboot sup{top:-.5em}.cc_css_reboot a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.cc_css_reboot a:hover{color:#0056b3;text-decoration:underline}.cc_css_reboot a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):hover,.cc_css_reboot a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):focus{outline:0}.cc_css_reboot img{vertical-align:middle;border-style:none}.cc_css_reboot svg:not(:root){overflow:hidden}.cc_css_reboot table{border-collapse:collapse}.cc_css_reboot caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom}.cc_css_reboot th{text-align:inherit}.cc_css_reboot label{display:inline-block;margin-bottom:0.5rem}.cc_css_reboot button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none;transition:all ease .3s}.cc_css_reboot button:focus{outline:none}.cc_css_reboot select{border-style:none}.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select,.cc_css_reboot optgroup,.cc_css_reboot textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.cc_css_reboot button,.cc_css_reboot input{overflow:visible}.cc_css_reboot button,.cc_css_reboot select{text-transform:none}.cc_css_reboot button,.cc_css_reboot html [type="button"],.cc_css_reboot [type="reset"],.cc_css_reboot [type="submit"]{-webkit-appearance:button}.cc_css_reboot button::-moz-focus-inner,.cc_css_reboot [type="button"]::-moz-focus-inner,.cc_css_reboot [type="reset"]::-moz-focus-inner,.cc_css_reboot [type="submit"]::-moz-focus-inner{padding:0;border-style:none}.cc_css_reboot input[type="radio"],.cc_css_reboot input[type="checkbox"]{box-sizing:border-box;padding:0}.cc_css_reboot input[type="date"],.cc_css_reboot input[type="time"],.cc_css_reboot input[type="datetime-local"],.cc_css_reboot input[type="month"]{-webkit-appearance:listbox}.cc_css_reboot textarea{overflow:auto;resize:vertical}.cc_css_reboot fieldset{min-width:0;padding:0;margin:0;border:0}.cc_css_reboot legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}.cc_css_reboot progress{vertical-align:baseline}.cc_css_reboot [type="number"]::-webkit-inner-spin-button,.cc_css_reboot [type="number"]::-webkit-outer-spin-button{height:auto}.cc_css_reboot [type="search"]{outline-offset:-2px;-webkit-appearance:none}.cc_css_reboot [type="search"]::-webkit-search-cancel-button,.cc_css_reboot [type="search"]::-webkit-search-decoration{-webkit-appearance:none}.cc_css_reboot ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.cc_css_reboot [hidden]{display:none !important}\n', ""])
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
            i = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
            var n, a = t.trim().replace(/^"(.*)"$/, (function(e, t) {
                return t
            })).replace(/^'(.*)'$/, (function(e, t) {
                return t
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (n = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? o + a : i + a.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        }))
    }
}, function(e, t, o) {
    var i = o(28);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(i, n);
    i.locals && (e.exports = i.locals)
}, function(e, t, o) {
    (e.exports = o(0)(!1)).push([e.i, '.cc_overlay_lock{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.8);z-index:9999999999}.cc_overlay_lock.hidden{display:none}.cc_dialog{background-color:#f2f2f2;color:#111;z-index:99999999999;font-size:16px;padding:3rem}.cc_dialog.hidden{display:none}.cc_dialog.headline{right:0;top:0;bottom:auto;left:0;max-width:100%;position:relative}.cc_dialog.simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}.cc_dialog.interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}.cc_dialog.standalone{position:fixed;top:0;left:0;height:100%;width:100%}.cc_dialog .cc_dialog_headline{font-size:24px;font-weight:600}.cc_dialog .cc_dialog_text{font-size:16px}.cc_dialog button{font-weight:bold;font-size:14px}.cc_dialog button.cc_b_ok{background-color:green;color:#fff}.cc_dialog button.cc_b_ok:active,.cc_dialog button.cc_b_ok:focus{background:#136d13}.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111;margin-left:0.25rem !important}.cc_dialog button.cc_b_cp:active,.cc_dialog button.cc_b_cp:focus{background:#f2f2f2}.cookie-consent-preferences-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.5);z-index:999999999999;top:0;left:0;display:none}.cookie-consent-preferences-overlay.visible{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{width:100%;display:flex;background:#fff;flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container>div{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2,.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{margin:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2{font-size:20px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{font-family:Arial, sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px;position:relative}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry{width:100%;display:none;padding:25px;box-sizing:border-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry[active=true]{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry h1{font-size:24px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{padding:20px 10px;font-size:14px;color:#333;display:block !important}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a{color:#999}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{margin-right:10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:hover{opacity:1}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent{position:absolute;margin:2px 0 0 16px;cursor:pointer}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label{position:relative;padding:4px 0 0 50px;line-height:2.0em;cursor:pointer;display:inline;font-size:14px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:after{margin-left:16px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:before{background:#55D069}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm{position:absolute;margin:5px 0 0 10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label{position:relative;padding:0 0 0 32px;line-height:1.3em}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:before{content:"";position:absolute;display:block;left:0;top:0;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:25px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:after{content:"";position:absolute;display:block;left:0px;top:0px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:15px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:hover:after{box-shadow:0 0 3px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:after{margin-left:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:before{background:#55D069}@media screen and (max-width: 600px){.cookie-consent-preferences-overlay{overflow-y:scroll}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{align-items:center;padding:15px 0 0 0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{padding:15px 0;min-height:20px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right:0}}.cc_dialog.ar{text-align:right}.cookie-consent-preferences-overlay.ar{text-align:right}\n', ""])
}, function(e, t, o) {
    var i = o(30);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(i, n);
    i.locals && (e.exports = i.locals)
}, function(e, t, o) {
    (e.exports = o(0)(!1)).push([e.i, ".dark.cc_dialog{background-color:#111;color:#fff}.dark.cc_dialog .cc_dialog_headline{color:#fff}.dark.cc_dialog .cc_dialog_text{color:#fff}.dark.cc_dialog button.cc_b_ok{color:#000;background-color:#ff0}.dark.cc_dialog button.cc_b_ok:focus{box-shadow:0 0 0 2px #3dd000}.dark.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.dark.cc_dialog button.cc_b_cp:focus{box-shadow:0 0 0 2px #3dd000}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#212121;color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select:active,.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select:focus{border:2px solid #ff0}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#f5f5f5 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a:focus{box-shadow:0 0 0 2px #292929}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#cce5ff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a:focus{box-shadow:0 0 0 2px #ff0}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#212121;border-top-color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a:focus{box-shadow:0 0 0 2px #ff0}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:#ff0;color:#000}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:focus{box-shadow:0 0 0 2px #3dd000}\n", ""])
}, function(e, t, o) {
    var i = o(32);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(i, n);
    i.locals && (e.exports = i.locals)
}, function(e, t, o) {
    (e.exports = o(0)(!1)).push([e.i, ".light.cc_dialog{background-color:#f2f2f2;color:#111}.light.cc_dialog .cc_dialog_headline{color:#111}.light.cc_dialog .cc_dialog_text{color:#111}.light.cc_dialog button.cc_b_ok{color:#fff;background-color:green}.light.cc_dialog button.cc_b_ok:focus{box-shadow:0 0 0 2px #ff8d00}.light.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.light.cc_dialog button.cc_b_cp:focus{box-shadow:0 0 0 2px #ff8d00}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#fff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;border-bottom:1px solid #ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select:focus{box-shadow:0 0 0 2px green}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#fbfbfb !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#111 !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a:focus{box-shadow:0 0 0 2px #fbfbfb}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#007bff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a:focus{box-shadow:0 0 0 2px green}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;border-top-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a:focus{box-shadow:0 0 0 2px green}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:green;color:#fff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:focus{box-shadow:0 0 0 2px #ff8d00}\n", ""])
}, function(e, t, o) {
    "use strict";
    o.r(t), o.d(t, "run", (function() {
        return H
    })), o.d(t, "consentDebugger", (function() {
        return n
    }));
    o(24), o(27), o(29), o(31);
    var i, n, a = function() {
            function e() {}
            return e.insertCss = function(e) {
                var t = document.querySelector("head"),
                    o = document.createElement("link");
                o.setAttribute("href", e), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), t.appendChild(o)
            }, e.appendChild = function(e, t, o) {
                var i, n;
                return void 0 === o && (o = null), i = "string" == typeof e ? document.querySelector(e) : e, n = "string" == typeof t ? document.querySelector(t) : t, "afterbegin" === o ? i.insertAdjacentElement("afterbegin", n) : i.insertAdjacentElement("beforeend", n), !0
            }, e.setCookie = function(e, t, o) {
                void 0 === o && (o = 62);
                var i = new Date;
                i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3);
                var n = "; expires=" + i.toUTCString();
                return document.cookie = e + "=" + (t || "") + n + "; path=/", !0
            }, e.getCookie = function(e) {
                for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
                    for (var n = o[i];
                        " " === n.charAt(0);) n = n.substring(1, n.length);
                    if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                }
                return null
            }, e.removeCookie = function(e) {
                document.cookie = e + "=; Max-Age=-99999999;"
            }, e.registerEvent = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !0), t
            }, e.searchObjectsArray = function(e, t, o) {
                for (var i in e) {
                    if (e[i][t] === o) return !0
                }
                return !1
            }, e.magicTransform = function(e) {
                return decodeURIComponent(atob(e).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join(""))
            }, e.isValidUrl = function(e) {
                return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
            }, e
        }(),
        r = o(2),
        s = o(3),
        c = o(4),
        l = o(5),
        p = o(6),
        u = o(7),
        d = o(8),
        k = o(9),
        v = o(10),
        m = o(11),
        f = o(12),
        _ = o(13),
        h = o(14),
        g = o(15),
        b = o(16),
        y = o(17),
        w = o(18),
        z = o(19),
        j = o(20),
        C = o(21),
        x = o(22),
        L = o(23),
        S = function() {
            function e(e) {
                this.cookieConsent = e, this.userLang = "en", this.initAvailableLanguages(), this.initDefaultTranslations(), this.detectUserLanguage()
            }
            return e.prototype.detectUserLanguage = function() {
                var e = "en";
                if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                    if (e.indexOf("-") > 0) {
                        var t = e.split("-");
                        e = t[0]
                    }
                    this.cookieConsent.log("[i18n] Detected meer default language: " + e, "info")
                } else e = this.cookieConsent.ownerSiteLanguage;
                var o = e.toLowerCase.toString();
                this.availableTranslations[o] ? this.userLang = o : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? this.userLang = this.cookieConsent.ownerSiteLanguage : this.userLang = "en"
            }, e.prototype.initDefaultTranslations = function() {
                this.availableTranslations = {
                    en: r,
                    de: s,
                    fr: c,
                    es: l,
                    ca_es: p,
                    it: u,
                    nl: d,
                    pt: k,
                    fi: v,
                    hu: m,
                    hr: f,
                    cs: _,
                    da: h,
                    ro: g,
                    sl: b,
                    pl: y,
                    sr: w,
                    lt: z,
                    bg: j,
                    el: C,
                    cy: x,
                    ar: L
                }, this.cookieConsent.log("[i18n] Default translations initialized", "info")
            }, e.prototype.initAvailableLanguages = function() {
                this.availableLanguages = [{
                    value: "en",
                    title: "English"
                }, {
                    value: "de",
                    title: "German"
                }, {
                    value: "fr",
                    title: "French"
                }, {
                    value: "es",
                    title: "Spanish"
                }, {
                    value: "ca_es",
                    title: "Catalan"
                }, {
                    value: "it",
                    title: "Italian"
                }, {
                    value: "nl",
                    title: "Dutch"
                }, {
                    value: "pt",
                    title: "Portugese"
                }, {
                    value: "fi",
                    title: "Finnish"
                }, {
                    value: "hu",
                    title: "Hungarian"
                }, {
                    value: "hr",
                    title: "Croatian"
                }, {
                    value: "cs",
                    title: "Czech"
                }, {
                    value: "da",
                    title: "Danish"
                }, {
                    value: "ro",
                    title: "Romanian"
                }, {
                    value: "sl",
                    title: "Slovenian"
                }, {
                    value: "pl",
                    title: "Polish"
                }, {
                    value: "sr",
                    title: "Serbian"
                }, {
                    value: "lt",
                    title: "Lithuanian"
                }, {
                    value: "bg",
                    title: "Bulgarian"
                }, {
                    value: "el",
                    title: "Greek"
                }, {
                    value: "cy",
                    title: "Welsh"
                }, {
                    value: "ar",
                    title: "Arabic"
                }], this.cookieConsent.log("[i18n] Default languages initialized", "info")
            }, e.prototype.$t = function(e, t, o) {
                void 0 === o && (o = null);
                var i = this.availableTranslations[this.userLang][e][t];
                return "string" == typeof o ? i = i.replace("%s", o) : Array.isArray(o) && o.map((function(e, t) {
                    var n = o[t];
                    i = i.replace("%s", n)
                })), i || ""
            }, e
        }(),
        A = (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        P = function() {
            function e(e) {
                this.scripts = {}, this.cookieConsent = e, this.cookieConsent.log("Javascript items initialized.", "info"), this.readScripts()
            }
            return e.prototype.readScripts = function() {
                var e = document.querySelectorAll('script[type="text/plain"]');
                for (var t in e) {
                    var o = e[t];
                    "object" == typeof o && this._noticeScriptIfValid(o)
                }
            }, e.prototype._noticeScriptIfValid = function(e) {
                var t = e.getAttribute("cookie-consent");
                !0 === a.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", t) ? (this.cookieConsent.log("Javascript with valid cookie consent found", "info"), this.cookieConsent.log(e, "info"), void 0 === this.scripts[t] && (this.scripts[t] = []), this.scripts[t].push(e)) : this.cookieConsent.log("Invalid cookie consent level for javascript sript: " + t, "warning")
            }, e.prototype.enableScriptsByLevel = function(e) {
                for (var t in this.scripts[e]) try {
                    var o = this.scripts[e][t],
                        i = document.createElement("script");
                    i.setAttribute("type", "text/javascript"), i.setAttribute("initial-cookie-consent", o.getAttribute("cookie-consent")), null !== o.getAttribute("src") && i.setAttribute("src", o.getAttribute("src")), i.text = o.innerHTML, a.appendChild("head", i), o.parentNode.removeChild(o), delete this.scripts[e][t]
                } catch (e) {
                    this.cookieConsent.log("Got an error while trying to activate a script template, message: " + e.message.toString(), "log")
                }
            }, e
        }(),
        E = function() {
            function e(e) {
                this.acceptedLevels = {}, this.userAccepted = !1, this.consentLevelCookieName = "cookie_consent_level", this.consentAcceptedCookieName = "cookie_consent_user_accepted", this.loadCookiesUntilAndInclude = "strictly-necessary", this.cookieConsent = e, this.cookieConsent.log("UserConsent initialized.", "info"), this.checkIfUserAccepted(), this.getUserLevels()
            }
            return e.prototype.checkIfUserAccepted = function() {
                "true" === a.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0)
            }, e.prototype.markUserAccepted = function() {
                this.userAccepted = !0, !1 === this.cookieConsent.isDemo && a.setCookie(this.consentAcceptedCookieName, "true")
            }, e.prototype.getUserLevels = function() {
                var e = a.getCookie(this.consentLevelCookieName),
                    t = {};
                try {
                    t = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    t = null
                }
                if (null === t) document.dispatchEvent(this.cookieConsent.events.cc_freshUser), this.acceptedLevels["strictly-necessary"] = !0, this.acceptedLevels.functionality = !1, this.acceptedLevels.tracking = !1, this.acceptedLevels.targeting = !1;
                else {
                    for (var o in this.cookieConsent.cookieLevels.cookieLevels) {
                        var i = this.cookieConsent.cookieLevels.cookieLevels[o].id;
                        !0 === t[i] ? this.acceptedLevels[i] = !0 : this.acceptedLevels[i] = !1, this.saveCookie()
                    }
                    this.cookieConsent.log(this.acceptedLevels, "info", "table")
                }
            }, e.prototype.enableAllCookies = function() {
                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var t = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    this.acceptLevel(t)
                }
            }, e.prototype.loadCookiesUntilMaxLevel = function() {
                var e = !1;
                for (var t in this.cookieConsent.cookieLevels.cookieLevels) {
                    if (e) break;
                    var o = this.cookieConsent.cookieLevels.cookieLevels[t].id;
                    o === this.loadCookiesUntilAndInclude && (e = !0), !1 !== this.acceptedLevels[o] && this.cookieConsent.javascriptItems.enableScriptsByLevel(o)
                }
            }, e.prototype.loadAcceptedCookies = function() {
                loadDisqus();
                loadAddThis();

                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var t = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    !1 !== this.acceptedLevels[t] && this.cookieConsent.javascriptItems.enableScriptsByLevel(t)
                }
            }, e.prototype.checkIsAccepted = function(e) {
                var t = !1;
                return e in this.acceptedLevels && !0 === this.acceptedLevels[e] && (t = !0), t
            }, e.prototype.acceptLevel = function(e) {
                return this.cookieConsent.log("Accepted cookie level: " + e, "info"), this.acceptedLevels[e] = !0, this.saveCookie()
            }, e.prototype.rejectLevel = function(e) {
                return this.cookieConsent.log("Rejected cookie level: " + e, "info"), this.acceptedLevels[e] = !1, this.saveCookie()
            }, e.prototype.saveCookie = function() {
                var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
                return a.setCookie(this.consentLevelCookieName, e), this.cookieConsent.log("Saved cookies containing the meer consent level", "info"), !0
            }, e
        }(),
        I = function() {
            this.cc_dialogShown = a.registerEvent("cc_dialogShown"), this.cc_dialogOkPressed = a.registerEvent("cc_dialogOkPressed"), this.cc_dialogPreferencesPressed = a.registerEvent("cc_dialogPreferencesPressed"), this.cc_userLanguageChanged = a.registerEvent("cc_userLanguageChanged"), this.cc_preferencesSavePressed = a.registerEvent("cc_preferencesSavePressed"), this.cc_freshUser = a.registerEvent("cc_freshUser"), this.cc_userChangedConsent = a.registerEvent("cc_userChangedConsent")
        },
        T = function() {
            function e(e) {
                this.cookieConsent = e, this.cc_dialogShown(), this.cc_dialogOkPressed(), this.cc_dialogPreferencesPressed(), this.cc_userLanguageChanged(), this.cc_preferencesSavePressed(), this.cc_freshUser(), this.cc_userChangedConsent()
            }
            return e.prototype.cc_dialogShown = function() {
                var e = this;
                window.addEventListener("cc_dialogShown", (function() {
                    e.cookieConsent.log("cc_dialogShown triggered", "event")
                }))
            }, e.prototype.cc_dialogOkPressed = function() {
                var e = this;
                document.addEventListener("cc_dialogOkPressed", (function() {
                    e.cookieConsent.log("cc_dialogOkPressed triggered", "event"), e.cookieConsent.consentType instanceof J ? (e.cookieConsent.userConsent.enableAllCookies(), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies()) : e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.consentBanner.hideDialog()
                }))
            }, e.prototype.cc_dialogPreferencesPressed = function() {
                var e = this;
                window.addEventListener("cc_dialogPreferencesPressed", (function() {
                    e.cookieConsent.log("cc_dialogPreferencesPressed triggered", "event"), e.cookieConsent.consentPreferences.showPreferences()
                }))
            }, e.prototype.cc_userLanguageChanged = function() {
                var e = this;
                window.addEventListener("cc_userLanguageChanged", (function() {
                    e.cookieConsent.log("cc_userLanguageChanged triggered", "event")
                }))
            }, e.prototype.cc_preferencesSavePressed = function() {
                var e = this;
                window.addEventListener("cc_preferencesSavePressed", (function() {
                    e.cookieConsent.log("cc_preferencesSavePressed triggered", "event"), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies(), e.cookieConsent.consentPreferences.hidePreferences(), e.cookieConsent.consentBanner.hideDialog()
                }))
            }, e.prototype.cc_freshUser = function() {
                var e = this;
                window.addEventListener("cc_freshUser", (function() {
                    e.cookieConsent.log("cc_freshUser triggered", "event")
                }))
            }, e.prototype.cc_userChangedConsent = function() {
                var e = this;
                window.addEventListener("cc_userChangedConsent", (function() {
                    e.cookieConsent.log("cc_userChangedConsent triggered", "event")
                }))
            }, e
        }(),
        O = function() {
            function e(e) {
                this.cookieConsent = e, this.initDefaultLevels(), this.initPreferenceItems()
            }
            return e.prototype.languageChanged = function() {
                this.initDefaultLevels(), this.initPreferenceItems()
            }, e.prototype.initDefaultLevels = function() {
                this.cookieLevels = [{
                    id: "strictly-necessary",
                    title: this.cookieConsent.i18n.$t("level_strictly_necessary", "title"),
                    content: this.cookieConsent.i18n.$t("level_strictly_necessary", "content")
                }, {
                    id: "functionality",
                    title: this.cookieConsent.i18n.$t("level_functionality", "title"),
                    content: this.cookieConsent.i18n.$t("level_functionality", "content")
                }, {
                    id: "tracking",
                    title: this.cookieConsent.i18n.$t("level_tracking", "title"),
                    content: this.cookieConsent.i18n.$t("level_tracking", "content")
                }, {
                    id: "targeting",
                    title: this.cookieConsent.i18n.$t("level_targeting", "title"),
                    content: this.cookieConsent.i18n.$t("level_targeting", "content")
                }]
            }, e.prototype.initPreferenceItems = function() {
                this.preferenceItems = [{
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_title"),
                    content_container: "content_your_privacy",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_content")
                }];
                for (var e = 0, t = this.cookieLevels; e < t.length; e++) {
                    var o = t[e];
                    this.preferenceItems.push({
                        id: o.id,
                        title: o.title,
                        content_container: "content_" + o.id,
                        content: "\n<h1>" + o.title + "</h1>\n<p>" + o.content + "</p>\n"
                    })
                }
                this.preferenceItems.push({
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_title"),
                    content_container: "content_more_information",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_content")
                }), null !== this.cookieConsent.cookiesPolicyUrl && a.isValidUrl(this.cookieConsent.cookiesPolicyUrl) && (this.preferenceItems[this.preferenceItems.length - 1].content = this.preferenceItems[this.preferenceItems.length - 1].content + this.cookieConsent.i18n.$t("dialog", "find_out_more", this.cookieConsent.cookiesPolicyUrl))
            }, e
        }(),
        N = function() {
            function e(e) {
                this.cpOverlay = null, this.cookieConsent = e
            }
            return e.prototype.listenToUserButtonToOpenPreferences = function(e) {
                var t = this,
                    o = document.querySelector(e);
                o && o.addEventListener("click", (function() {
                    document.dispatchEvent(t.cookieConsent.events.cc_dialogPreferencesPressed), t.showPreferences()
                }))
            }, e.prototype.showPreferences = function() {
                null === this.cpOverlay && (this.cpOverlay = this.createPreferencesOverlayAndDialog(), a.appendChild("body", this.cpOverlay)), this.cpOverlay.classList.add("visible"), this.cookieConsent.log("Cookie preferences dialog was shown", "info"), this.cpOverlay.setAttribute("role", "dialog"), this.cpOverlay.setAttribute("tabindex", "-1"), this.cpOverlay.focus(), this.cpOverlay.classList.add(this.cookieConsent.i18n.userLang)
            }, e.prototype.hidePreferences = function() {
                this.cpOverlay.classList.remove("visible"), this.cookieConsent.log("Cookie preferences dialog was hidden", "info")
            }, e.prototype.refreshPreferences = function() {
                if (null !== this.cpOverlay) return this.cpOverlay.parentNode.removeChild(this.cpOverlay), this.cpOverlay = null, this.showPreferences()
            }, e.prototype.createPreferencesOverlayAndDialog = function() {
                var e = document.createElement("div");
                e.classList.add("cookie-consent-preferences-overlay"), e.classList.add(this.cookieConsent.colorPalette.getClass()), e.classList.add("cc_css_reboot");
                var t = document.createElement("div");
                t.classList.add("cookie-consent-preferences-dialog");
                var o = document.createElement("div");
                o.classList.add("cc_cp_container");
                var i = document.createElement("div");
                i.classList.add("cc_cp_head");
                var n = document.createElement("div");
                if (n.classList.add("cc_cp_head_title"), this.cookieConsent.ownerWebsiteName.length > 2) {
                    var r = document.createElement("p");
                    r.innerText = this.cookieConsent.ownerWebsiteName, a.appendChild(n, r)
                }
                var s = document.createElement("h2");
                s.innerHTML = this.cookieConsent.i18n.$t("preference_center", "title"), a.appendChild(n, s);
                var c = document.createElement("div");
                c.classList.add("cc_cp_head_lang_selector");
                var l = this.obtainLanguageSelector();
                a.appendChild(c, l), a.appendChild(i, n), a.appendChild(i, c);
                var p = document.createElement("div");
                p.classList.add("cc_cp_content");
                var u = this.getMenuContainer(),
                    d = this.getContentContainer();
                a.appendChild(p, u), a.appendChild(p, d);
                var k = this.getFooterContainer();
                return a.appendChild(o, i), a.appendChild(o, p), a.appendChild(o, k), a.appendChild(t, o), a.appendChild(e, t), e
            }, e.prototype.obtainLanguageSelector = function() {
                var e = this,
                    t = document.createElement("select");
                return [].forEach.call(e.cookieConsent.i18n.availableLanguages, (function(o) {
                    var i = document.createElement("option");
                    i.text = o.title, i.value = o.value, e.cookieConsent.i18n.userLang === i.value && i.setAttribute("selected", "selected"), t.add(i)
                })), t.addEventListener("change", (function() {
                    e.cookieConsent.i18n.userLang = t.value, e.cookieConsent.cookieLevels.languageChanged(), e.refreshPreferences(), document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged)
                })), t
            }, e.prototype.getContentContainer = function() {
                var e = this,
                    t = document.createElement("div");
                t.classList.add("cc_cp_m_content");
                var o = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach((function(i) {
                    var n = document.createElement("div");
                    if (n.classList.add("cc_cp_m_content_entry"), n.setAttribute("content_layout", i.content_container), n.setAttribute("active", "false"), n.innerHTML = i.content, 0 === o && n.setAttribute("active", "true"), o++, i.id) {
                        var r = e._getLevelCheckbox(i);
                        a.appendChild(n, r)
                    }
                    a.appendChild(t, n)
                })), t
            }, e.prototype.getMenuContainer = function() {
                var e = this,
                    t = document.createElement("ul");
                t.classList.add("cc_cp_m_menu");
                var o = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach((function(i) {
                    var n = document.createElement("li"),
                        r = document.createElement("a");
                    r.setAttribute("href", "#"), r.setAttribute("t", i.content_container), r.innerHTML = i.title, 0 === o && n.setAttribute("active", "true"), o++, r.setAttribute("tabindex", "0"), r.addEventListener("click", (function(t) {
                        t.preventDefault(), e.cookieConsent.log("Preferences menu item clicked: " + i.title, "info");
                        var o = document.querySelectorAll('li[active="true"]');
                        [].forEach.call(o, (function(e) {
                            e.setAttribute("active", "false")
                        })), n.setAttribute("active", "true");
                        try {
                            var a = document.querySelectorAll("div[content_layout]");
                            [].forEach.call(a, (function(e) {
                                e.setAttribute("active", "false")
                            })), document.querySelector('div[content_layout="' + i.content_container + '"]').setAttribute("active", "true")
                        } catch (t) {}
                    })), a.appendChild(n, r), a.appendChild(t, n)
                })), t
            }, e.prototype.getFooterContainer = function() {
                var e = this,
                    t = document.createElement("div");
                t.classList.add("cc_cp_footer");
                var o = document.createElement("div");
                o.classList.add("cc_cp_f_powered_by"), o.innerHTML = a.magicTransform("Tw==");
                var i = document.createElement("div");
                i.classList.add("cc_cp_f_save");
                var n = document.createElement("button");
                return n.innerHTML = e.cookieConsent.i18n.$t("preference_center", "save"), n.addEventListener("click", (function() {
                    document.dispatchEvent(e.cookieConsent.events.cc_preferencesSavePressed)
                })), a.appendChild(i, n), a.appendChild(t, o), a.appendChild(t, i), t
            }, e.prototype._getLevelCheckbox = function(e) {
                var t = this,
                    o = document.createElement("div");
                if (o.classList.add("div_checkbox_cookie_consent"), "strictly-necessary" !== e.id) {
                    var i = t.cookieConsent.userConsent.acceptedLevels,
                        n = document.createElement("input");
                    n.setAttribute("cookie_consent_toggler", "true"), n.setAttribute("type", "checkbox"), n.setAttribute("class", "checkbox_cookie_consent"), n.setAttribute("id", e.id), n.setAttribute("name", e.id), (r = document.createElement("label")).setAttribute("for", e.id), i[e.id] ? (n.setAttribute("checked", "checked"), r.setAttribute("class", "is-active"), r.innerHTML = t.cookieConsent.i18n.$t("dialog", "active")) : (r.setAttribute("class", "is-inactive"), r.innerHTML = t.cookieConsent.i18n.$t("dialog", "inactive")), n.addEventListener("change", (function() {
                        var o = n.checked,
                            i = e.id,
                            a = document.querySelector('label[for="' + i + '"]');
                        t.cookieConsent.log("User changed toggle for cookie level [" + i + "], new status: " + o, "info"), document.dispatchEvent(t.cookieConsent.events.cc_userChangedConsent), !0 === o ? (t.cookieConsent.userConsent.acceptLevel(i), a.innerHTML = t.cookieConsent.i18n.$t("dialog", "active")) : (t.cookieConsent.userConsent.rejectLevel(i), a.innerHTML = t.cookieConsent.i18n.$t("dialog", "inactive"))
                    })), a.appendChild(o, n), a.appendChild(o, r)
                } else {
                    var r, s = document.createElement("input");
                    s.setAttribute("cookie_consent_toggler", "true"), s.setAttribute("type", "checkbox"), s.setAttribute("checked", "checked"), s.setAttribute("disabled", "disabled"), s.setAttribute("class", "checkbox_cookie_consent"), s.setAttribute("id", e.id), s.setAttribute("name", e.id), s.setAttribute("tabindex", "0"), (r = document.createElement("label")).setAttribute("for", e.id), r.innerHTML = t.cookieConsent.i18n.$t("dialog", "always_active"), a.appendChild(o, s), a.appendChild(o, r)
                }
                return o
            }, e
        }(),
        q = function() {
            function e(e) {
                this.dialog = null, this.dialogOverlay = null, this.dialogExtraCss = [], this.cookieConsent = e, this.dialogExtraCss.push(e.colorPalette.getClass())
            }
            return e.prototype.initDialog = function() {
                return null === this.dialog && (this.dialog = this.createDialog()), a.appendChild("body", this.dialog, "afterbegin"), this.cookieConsent.log("Consent dialog shown", "info"), document.dispatchEvent(this.cookieConsent.events.cc_dialogShown), !0
            }, e.prototype.hideDialog = function() {
                try {
                    this.dialog.classList.add("hidden"), this.cookieConsent.log("Consent dialog hidden", "info")
                } catch (e) {}
            }, e.prototype.createDialog = function() {
                var e = document.createElement("div");
                if (e.classList.add("cc_css_reboot"), e.classList.add("cc_dialog"), this.dialogExtraCss.length)
                    for (var t = 0, o = this.dialogExtraCss; t < o.length; t++) {
                        var i = o[t];
                        e.classList.add(i)
                    }
                if (e.classList.add(this.cookieConsent.i18n.userLang), a.appendChild(e, this.createDialogContent()), "interstitial" === this.cookieConsent.userNoticeType) {
                    var n = document.createElement("div");
                    return n.classList.add("cc_overlay_lock"), a.appendChild(n, e), n
                }
                return e
            }, e.prototype.createDialogContent = function() {
                var e = this,
                    t = document.createElement("div"),
                    o = document.createElement("h1");
                o.classList.add("cc_dialog_headline"), o.innerText = e.cookieConsent.i18n.$t("dialog", "title");
                var i = document.createElement("div"),
                    n = document.createElement("p");
                n.classList.add("cc_dialog_text"), n.innerHTML = e.cookieConsent.i18n.$t("dialog", "text"), a.appendChild(i, n);
                var r = document.createElement("button");
                r.classList.add("cc_b_ok"), "express" == e.cookieConsent.userConsentType ? r.innerHTML = e.cookieConsent.i18n.$t("dialog", "i_agree_text") : r.innerHTML = e.cookieConsent.i18n.$t("dialog", "ok_text"), r.addEventListener("click", (function() {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogOkPressed)
                }));
                var s = document.createElement("button");
                s.classList.add("cc_b_cp"), s.innerHTML = e.cookieConsent.i18n.$t("dialog", "change_settings"), s.addEventListener("click", (function() {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogPreferencesPressed)
                }));
                var c = document.createElement("div");
                return a.appendChild(c, r), a.appendChild(c, s), a.appendChild(t, o), a.appendChild(t, i), a.appendChild(t, c), t
            }, e
        }(),
        U = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.dialogExtraCss.push("simple"), o
            }
            return A(t, e), t
        }(q),
        D = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.dialogExtraCss.push("headline"), o
            }
            return A(t, e), t
        }(q),
        M = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.dialogExtraCss.push("interstitial"), o
            }
            return A(t, e), t
        }(q),
        W = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.dialogExtraCss.push("standalone"), o
            }
            return A(t, e), t
        }(q),
        B = function() {
            function e(e) {
                e.log("ConsentType main class initialized", "info")
            }
            return e.prototype.loadInitialCookies = function() {}, e
        }(),
        J = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.cookieConsent = t, o
            }
            return A(t, e), t.prototype.loadInitialCookies = function() {
                var e = this.cookieConsent.cookieLevels.cookieLevels[0].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = e.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, t
        }(B),
        V = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.cookieConsent = t, o
            }
            return A(t, e), t.prototype.loadInitialCookies = function() {
                var e = this.cookieConsent.cookieLevels.cookieLevels.length,
                    t = this.cookieConsent.cookieLevels.cookieLevels[e - 1].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = t.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, t
        }(B),
        F = function() {
            function e(e) {
                this.cookieConsent = e
            }
            return e.prototype.getClass = function() {
                return "light"
            }, e
        }(),
        R = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.cookieConsent = t, o
            }
            return A(t, e), t.prototype.getClass = function() {
                return "dark"
            }, t
        }(F),
        $ = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.cookieConsent = t, o
            }
            return A(t, e), t.prototype.getClass = function() {
                return "light"
            }, t
        }(F),
        K = function() {
            function e(e) {
                switch (this.debug = !1, this.ownerWebsiteName = e.website_name || "", this.cookiesPolicyUrl = e.cookies_policy_url || null, this.userConsentType = e.consent_type || "express", this.userNoticeType = e.notice_banner_type || "headline", this.userColorPalette = e.palette || "light", this.ownerSiteLanguage = e.language || "en", this.userLanguageStrings = e.language_overwrite || {}, this.changePreferencesSelector = e.change_preferences_selector || null, this.isDemo = "true" == e.demo, this.debug = "true" == e.debug, this.userConsentType) {
                    default:
                        case "express":
                        this.consentType = new J(this);
                    break;
                    case "implied":
                            this.consentType = new V(this)
                }
                switch (this.userColorPalette) {
                    default:
                        case "dark":
                        this.colorPalette = new R(this);
                    break;
                    case "light":
                            this.colorPalette = new $(this)
                }
                switch (this.userNoticeType) {
                    default:
                        case "simple":
                        this.consentBanner = new U(this);
                    break;
                    case "headline":
                            this.consentBanner = new D(this);
                        break;
                    case "interstitial":
                            this.consentBanner = new M(this);
                        break;
                    case "standalone":
                            this.consentBanner = new W(this)
                }
                this.events = new I, this.eventsListeners = new T(this), this.i18n = new S(this), this.cookieLevels = new O(this), this.userConsent = new E(this), this.javascriptItems = new P(this), this.consentPreferences = new N(this), null !== this.changePreferencesSelector && this.consentPreferences.listenToUserButtonToOpenPreferences(this.changePreferencesSelector), !0 === this.userConsent.userAccepted ? (this.userConsent.loadAcceptedCookies(), !0 === this.isDemo && this.consentBanner.initDialog()) : (this.consentBanner.initDialog(), this.consentType.loadInitialCookies())
            }
            return e.prototype.log = function(e, t, o) {
                void 0 === o && (o = "log"), !0 === this.debug && ("log" === o || "table" === o) && console.log("[" + t + "]", e)
            }, e
        }(),
        H = function(e) {
            return n = new K(e)
        }
}]);