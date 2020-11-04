!function(e) {
    var n = !1;
    if ("function" === typeof define && define.amd && (define(e),
    n = !0),
    "object" == typeof exports && (module.exports = e(),
    n = !0),
    !n) {
        var t = window.Cookies
          , o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t,
            o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)
                n[o] = t[o]
        }
        return n
    }
    function n(t) {
        function o(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (i = e({
                        path: "/"
                    }, o.defaults, i),
                    "number" == typeof i.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
                        i.expires = a
                    }
                    try {
                        c = JSON.stringify(r),
                        /^[\{\[]/.test(c) && (r = c)
                    } catch (s) {}
                    return r = t.write ? t.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    n = encodeURIComponent(String(n)),
                    n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                    n = n.replace(/[\(\)]/g, escape),
                    document.cookie = [n, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                    var f = p[d].split("=")
                      , l = f.slice(1).join("=");
                    '"' === l.charAt(0) && (l = l.slice(1, -1));
                    try {
                        var m = f[0].replace(u, decodeURIComponent);
                        if (l = t.read ? t.read(l, m) : t(l, m) || l.replace(u, decodeURIComponent),
                        this.json)
                            try {
                                l = JSON.parse(l)
                            } catch (s) {}
                        if (n === m) {
                            c = l;
                            break
                        }
                        n || (c[m] = l)
                    } catch (s) {}
                }
                return c
            }
        }
        return o.set = o,
        o.get = function(e) {
            return o.call(o, e)
        }
        ,
        o.getJSON = function() {
            return o.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        o.defaults = {},
        o.remove = function(n, t) {
            o(n, "", e(t, {
                expires: -1
            }))
        }
        ,
        o.withConverter = n,
        o
    }
    return n(function() {})
});
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position
    }
}
var GeolizrDefaults = {
    countries: {
        AF: "AFGHANISTAN",
        AL: "ALBANIA",
        DZ: "ALGERIA",
        AS: "AMERICAN SAMOA",
        AD: "ANDORRA",
        AO: "ANGOLA",
        AI: "ANGUILLA",
        AQ: "ANTARCTICA",
        AG: "ANTIGUA AND BARBUDA",
        AR: "ARGENTINA",
        AM: "ARMENIA",
        AW: "ARUBA",
        AU: "AUSTRALIA",
        AT: "AUSTRIA",
        AZ: "AZERBAIJAN",
        BS: "BAHAMAS",
        BH: "BAHRAIN",
        BD: "BANGLADESH",
        BB: "BARBADOS",
        BY: "BELARUS",
        BE: "BELGIUM",
        BZ: "BELIZE",
        BJ: "BENIN",
        BM: "BERMUDA",
        BT: "BHUTAN",
        BO: "BOLIVIA",
        BA: "BOSNIA AND HERZEGOVINA",
        BW: "BOTSWANA",
        BV: "BOUVET ISLAND",
        BR: "BRAZIL",
        BQ: "BRITISH ANTARCTIC TERRITORY",
        IO: "BRITISH INDIAN OCEAN TERRITORY",
        VG: "BRITISH VIRGIN ISLANDS",
        BN: "BRUNEI",
        BG: "BULGARIA",
        BF: "BURKINA FASO",
        BI: "BURUNDI",
        KH: "CAMBODIA",
        CM: "CAMEROON",
        CA: "CANADA",
        CT: "CANTON AND ENDERBURY ISLANDS",
        CV: "CAPE VERDE",
        KY: "CAYMAN ISLANDS",
        CF: "CENTRAL AFRICAN REPUBLIC",
        TD: "CHAD",
        CL: "CHILE",
        CN: "CHINA",
        CX: "CHRISTMAS ISLAND",
        CC: "COCOS [KEELING] ISLANDS",
        CO: "COLOMBIA",
        KM: "COMOROS",
        CG: "CON BRAZZAVILLE",
        CD: "CON KINSHASA",
        CK: "COOK ISLANDS",
        CR: "COSTA RICA",
        HR: "CROATIA",
        CU: "CUBA",
        CY: "CYPRUS",
        CZ: "CZECH REPUBLIC",
        CI: "CÔTE D’IVOIRE",
        DK: "DENMARK",
        DJ: "DJIBOUTI",
        DM: "DOMINICA",
        DO: "DOMINICAN REPUBLIC",
        NQ: "DRONNING MAUD LAND",
        DD: "EAST GERMANY",
        EC: "ECUADOR",
        EG: "EGYPT",
        SV: "EL SALVADOR",
        GQ: "EQUATORIAL GUINEA",
        ER: "ERITREA",
        EE: "ESTONIA",
        ET: "ETHIOPIA",
        FK: "FALKLAND ISLANDS",
        FO: "FAROE ISLANDS",
        FJ: "FIJI",
        FI: "FINLAND",
        FR: "FRANCE",
        GF: "FRENCH GUIANA",
        PF: "FRENCH POLYNESIA",
        TF: "FRENCH SOUTHERN TERRITORIES",
        FQ: "FRENCH SOUTHERN AND ANTARCTIC TERRITORIES",
        GA: "GABON",
        GM: "GAMBIA",
        GE: "GEORGIA",
        DE: "GERMANY",
        GH: "GHANA",
        GI: "GIBRALTAR",
        GR: "GREECE",
        GL: "GREENLAND",
        GD: "GRENADA",
        GP: "GUADELOUPE",
        GU: "GUAM",
        GT: "GUATEMALA",
        GG: "GUERNSEY",
        GN: "GUINEA",
        GW: "GUINBISSAU",
        GY: "GUYANA",
        HT: "HAITI",
        HM: "HEARD ISLAND AND MCDONALD ISLANDS",
        HN: "HONDURAS",
        HK: "HONG KONG SAR CHINA",
        HU: "HUNGARY",
        IS: "ICELAND",
        IN: "INDIA",
        ID: "INDONESIA",
        IR: "IRAN",
        IQ: "IRAQ",
        IE: "IRELAND",
        IM: "ISLE OF MAN",
        IL: "ISRAEL",
        IT: "ITALY",
        JM: "JAMAICA",
        JP: "JAPAN",
        JE: "JERSEY",
        JT: "JOHNSTON ISLAND",
        JO: "JORDAN",
        KZ: "KAZAKHSTAN",
        KE: "KENYA",
        KI: "KIRIBATI",
        KW: "KUWAIT",
        KG: "KYRGYZSTAN",
        LA: "LAOS",
        LV: "LATVIA",
        LB: "LEBANON",
        LS: "LESOTHO",
        LR: "LIBERIA",
        LY: "LIBYA",
        LI: "LIECHTENSTEIN",
        LT: "LITHUANIA",
        LU: "LUXEMBOURG",
        MO: "MACAU SAR CHINA",
        MK: "MACEDONIA",
        MG: "MADAGASCAR",
        MW: "MALAWI",
        MY: "MALAYSIA",
        MV: "MALDIVES",
        ML: "MALI",
        MT: "MALTA",
        MH: "MARSHALL ISLANDS",
        MQ: "MARTINIQUE",
        MR: "MAURITANIA",
        MU: "MAURITIUS",
        YT: "MAYOTTE",
        FX: "METROPOLITAN FRANCE",
        MX: "MEXICO",
        FM: "MICRONESIA",
        MI: "MIDWAY ISLANDS",
        MD: "MOLDOVA",
        MC: "MONACO",
        MN: "MONGOLIA",
        ME: "MONTENEGRO",
        MS: "MONTSERRAT",
        MA: "MOROCCO",
        MZ: "MOZAMBIQUE",
        MM: "MYANMAR [BURMA]",
        NA: "NAMIBIA",
        NR: "NAURU",
        NP: "NEPAL",
        NL: "NETHERLANDS",
        AN: "NETHERLANDS ANTILLES",
        NT: "NEUTRAL ZONE",
        NC: "NEW CALEDONIA",
        NZ: "NEW ZEALAND",
        NI: "NICARAGUA",
        NE: "NIGER",
        NG: "NIGERIA",
        NU: "NIUE",
        NF: "NORFOLK ISLAND",
        KP: "NORTH KOREA",
        VD: "NORTH VIETNAM",
        MP: "NORTHERN MARIANA ISLANDS",
        NO: "NORWAY",
        OM: "OMAN",
        PC: "PACIFIC ISLANDS TRUST TERRITORY",
        PK: "PAKISTAN",
        PW: "PALAU",
        PS: "PALESTINIAN TERRITORIES",
        PA: "PANAMA",
        PZ: "PANAMA CANAL ZONE",
        PG: "PAPUA NEW GUINEA",
        PY: "PARAGUAY",
        YD: "PEOPLE’S DEMOCRATIC REPUBLIC OF YEMEN",
        PE: "PERU",
        PH: "PHILIPPINES",
        PN: "PITCAIRN ISLANDS",
        PL: "POLAND",
        PT: "PORTUGAL",
        PR: "PUERTO RICO",
        QA: "QATAR",
        RO: "ROMANIA",
        RU: "RUSSIA",
        RW: "RWANDA",
        RE: "RÉUNION",
        BL: "SAINT BARTHÉLEMY",
        SH: "SAINT HELENA",
        KN: "SAINT KITTS AND NEVIS",
        LC: "SAINT LUCIA",
        MF: "SAINT MARTIN",
        PM: "SAINT PIERRE AND MIQUELON",
        VC: "SAINT VINCENT AND THE GRENADINES",
        WS: "SAMOA",
        SM: "SAN MARINO",
        SA: "SAUDI ARABIA",
        SN: "SENEGAL",
        RS: "SERBIA",
        CS: "SERBIA AND MONTENEGRO",
        SC: "SEYCHELLES",
        SL: "SIERRA LEONE",
        SG: "SINGAPORE",
        SK: "SLOVAKIA",
        SI: "SLOVENIA",
        SB: "SOLOMON ISLANDS",
        SO: "SOMALIA",
        ZA: "SOUTH AFRICA",
        GS: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        KR: "SOUTH KOREA",
        ES: "SPAIN",
        LK: "SRI LANKA",
        SD: "SUDAN",
        SR: "SURINAME",
        SJ: "SVALBARD AND JAN MAYEN",
        SZ: "SWAZILAND",
        SE: "SWEDEN",
        CH: "SWITZERLAND",
        SY: "SYRIA",
        ST: "SÃO TOMÉ AND PRÍNCIPE",
        TW: "TAIWAN",
        TJ: "TAJIKISTAN",
        TZ: "TANZANIA",
        TH: "THAILAND",
        TL: "TIMLESTE",
        TG: "TOGO",
        TK: "TOKELAU",
        TO: "TONGA",
        TT: "TRINIDAD AND TOBAGO",
        TN: "TUNISIA",
        TR: "TURKEY",
        TM: "TURKMENISTAN",
        TC: "TURKS AND CAICOS ISLANDS",
        TV: "TUVALU",
        UM: "U.S. MINOR OUTLYING ISLANDS",
        PU: "U.S. MISCELLANEOUS PACIFIC ISLANDS",
        VI: "U.S. VIRGIN ISLANDS",
        UG: "UGANDA",
        UA: "UKRAINE",
        SU: "UNION OF SOVIET SOCIALIST REPUBLICS",
        AE: "UNITED ARAB EMIRATES",
        GB: "UNITED KINGDOM",
        US: "UNITED STATES",
        ZZ: "UNKNOWN OR INVALID REGION",
        UY: "URUGUAY",
        UZ: "UZBEKISTAN",
        VU: "VANUATU",
        VA: "VATICAN CITY",
        VE: "VENEZUELA",
        VN: "VIETNAM",
        WK: "WAKE ISLAND",
        WF: "WALLIS AND FUTUNA",
        EH: "WESTERN SAHARA",
        YE: "YEMEN",
        ZM: "ZAMBIA",
        ZW: "ZIMBABWE",
        AX: "ÅLAND ISLANDS"
    },
    currencies: {
        AD: "EUR",
        AE: "AED",
        AF: "AFN",
        AG: "XCD",
        AI: "XCD",
        AL: "ALL",
        AM: "AMD",
        AO: "AOA",
        AQ: "AQD",
        AR: "ARS",
        AS: "USD",
        AT: "EUR",
        AU: "AUD",
        AW: "AWG",
        AX: "EUR",
        AZ: "AZN",
        BA: "BAM",
        BB: "BBD",
        BD: "BDT",
        BE: "EUR",
        BF: "XOF",
        BG: "BGN",
        BH: "BHD",
        BI: "BIF",
        BJ: "XOF",
        BL: "EUR",
        BM: "BMD",
        BN: "BND",
        BO: "BOB",
        BQ: "USD",
        BR: "BRL",
        BS: "BSD",
        BT: "BTN",
        BV: "NOK",
        BW: "BWP",
        BY: "BYR",
        BZ: "BZD",
        CA: "CAD",
        CC: "AUD",
        CD: "CDF",
        CF: "XAF",
        CG: "XAF",
        CH: "CHF",
        CI: "XOF",
        CK: "NZD",
        CL: "CLP",
        CM: "XAF",
        CN: "CNY",
        CO: "COP",
        CR: "CRC",
        CU: "CUP",
        CV: "CVE",
        CW: "ANG",
        CX: "AUD",
        CY: "EUR",
        CZ: "CZK",
        DE: "EUR",
        DJ: "DJF",
        DK: "DKK",
        DM: "XCD",
        DO: "DOP",
        DZ: "DZD",
        EC: "USD",
        EE: "EUR",
        EG: "EGP",
        EH: "MAD",
        ER: "ERN",
        ES: "EUR",
        ET: "ETB",
        FI: "EUR",
        FJ: "FJD",
        FK: "FKP",
        FM: "USD",
        FO: "DKK",
        FR: "EUR",
        GA: "XAF",
        GB: "GBP",
        GD: "XCD",
        GE: "GEL",
        GF: "EUR",
        GG: "GBP",
        GH: "GHS",
        GI: "GIP",
        GL: "DKK",
        GM: "GMD",
        GN: "GNF",
        GP: "EUR",
        GQ: "XAF",
        GR: "EUR",
        GS: "GBP",
        GT: "GTQ",
        GU: "USD",
        GW: "XOF",
        GY: "GYD",
        HK: "HKD",
        HM: "AUD",
        HN: "HNL",
        HR: "HRK",
        HT: "HTG",
        HU: "HUF",
        ID: "IDR",
        IE: "EUR",
        IL: "ILS",
        IM: "GBP",
        IN: "INR",
        IO: "USD",
        IQ: "IQD",
        IR: "IRR",
        IS: "ISK",
        IT: "EUR",
        JE: "GBP",
        JM: "JMD",
        JO: "JOD",
        JP: "JPY",
        KE: "KES",
        KG: "KGS",
        KH: "KHR",
        KI: "AUD",
        KM: "KMF",
        KN: "XCD",
        KP: "KPW",
        KR: "KRW",
        KW: "KWD",
        KY: "KYD",
        KZ: "KZT",
        LA: "LAK",
        LB: "LBP",
        LC: "XCD",
        LI: "CHF",
        LK: "LKR",
        LR: "LRD",
        LS: "LSL",
        LT: "LTL",
        LU: "EUR",
        LV: "EUR",
        LY: "LYD",
        MA: "MAD",
        MC: "EUR",
        MD: "MDL",
        ME: "EUR",
        MF: "EUR",
        MG: "MGA",
        MH: "USD",
        MK: "MKD",
        ML: "XOF",
        MM: "MMK",
        MN: "MNT",
        MO: "MOP",
        MP: "USD",
        MQ: "EUR",
        MR: "MRO",
        MS: "XCD",
        MT: "EUR",
        MU: "MUR",
        MV: "MVR",
        MW: "MWK",
        MX: "MXN",
        MY: "MYR",
        MZ: "MZN",
        NA: "NAD",
        NC: "XPF",
        NE: "XOF",
        NF: "AUD",
        NG: "NGN",
        NI: "NIO",
        NL: "EUR",
        NO: "NOK",
        NP: "NPR",
        NR: "AUD",
        NU: "NZD",
        NZ: "NZD",
        OM: "OMR",
        PA: "PAB",
        PE: "PEN",
        PF: "XPF",
        PG: "PGK",
        PH: "PHP",
        PK: "PKR",
        PL: "PLN",
        PM: "EUR",
        PN: "NZD",
        PR: "USD",
        PS: "ILS",
        PT: "EUR",
        PW: "USD",
        PY: "PYG",
        QA: "QAR",
        RE: "EUR",
        RO: "RON",
        RS: "RSD",
        RU: "RUB",
        RW: "RWF",
        SA: "SAR",
        SB: "SBD",
        SC: "SCR",
        SD: "SDG",
        SE: "SEK",
        SG: "SGD",
        SH: "SHP",
        SI: "EUR",
        SJ: "NOK",
        SK: "EUR",
        SL: "SLL",
        SM: "EUR",
        SN: "XOF",
        SO: "SOS",
        SR: "SRD",
        SS: "SSP",
        ST: "STD",
        SV: "USD",
        SX: "ANG",
        SY: "SYP",
        SZ: "SZL",
        TC: "USD",
        TD: "XAF",
        TF: "EUR",
        TG: "XOF",
        TH: "THB",
        TJ: "TJS",
        TK: "NZD",
        TL: "USD",
        TM: "TMT",
        TN: "TND",
        TO: "TOP",
        TR: "TRY",
        TT: "TTD",
        TV: "AUD",
        TW: "TWD",
        TZ: "TZS",
        UA: "UAH",
        UG: "UGX",
        UM: "USD",
        US: "USD",
        UY: "UYU",
        UZ: "UZS",
        VA: "EUR",
        VC: "XCD",
        VE: "VEF",
        VG: "USD",
        VI: "USD",
        VN: "VND",
        VU: "VUV",
        WF: "XPF",
        WS: "WST",
        XK: "EUR",
        YE: "YER",
        YT: "EUR",
        ZA: "ZAR",
        ZM: "ZMK",
        ZW: "ZWL"
    }
};
var Geolizr = Geolizr || {};
Geolizr.countries = GeolizrDefaults.countries;
Geolizr.currencies = GeolizrDefaults.currencies;
Geolizr.cities = {
    London: "LND",
    Shaw: "SHAW",
    'Newcastle upon Tyne': 'NET'
};
Geolizr.lastCommit = "73dc4a83fdd2a6796e58a5867b4ed5afd1df36ef";
Geolizr.shopDomain = window.location.hostname;
Geolizr.jquery = Geolizr.jquery || null;
Geolizr.initState = Geolizr.initState || "false";
Geolizr.initCallbackList = Geolizr.initCallbackList || [];
Geolizr.geoData = null;
Geolizr.validation = "74Pfs6wLK3GmwxYLoURv2ptrFVUAsEtDupYN0jEBC3WJyjGGddHrcl8IyRwF";
Geolizr.dataState = "false";
Geolizr.dataCallbackList = Geolizr.dataCallbackList || [];
Geolizr.eventListeners = Geolizr.eventListeners || [];
Geolizr.currency_widget_enabled = Geolizr.currency_widget_enabled || false;
Geolizr.shopCurrency = "EUR";
Geolizr.moneyFormats = [];
Geolizr.shopifyFormatMoneySet = false;
Geolizr.observeElements = [];
Geolizr.formatMoneyInit = false;
Geolizr.cookie = Cookies.noConflict();
Geolizr.version = 20181108;
Geolizr.money_format = "${{amount}}";
Geolizr.admin = false;
Geolizr.redirects = [];
Geolizr.popups = [];
Geolizr.notifications = [];
Geolizr.useCookieReferrer = false;
Geolizr.animation = Geolizr.animation || false;
Geolizr.detectAdmin = function() {
    var adminCentres = [/https:\/\/.*.myshopify.com\/admin\/themes\/\d*\/editor/, /https:\/\/gempages.net\/editor\?id=.*/];
    if (parent && parent.location.href) {
        var results = adminCentres.some(function(regEx) {
            try {
                var matchIt = regEx.exec(parent.location.href);
                return matchIt && matchIt.length > 0
            } catch (e) {
                return false
            }
        })
        return results
    } else {
        return false
    }
}
;
Geolizr.admin = Geolizr.detectAdmin();
Geolizr.referrer = document.referrer;
Geolizr.setProvider = function(provider, fallbackProvider) {
    if (typeof provider === "object")
        Geolizr.provider = provider;
    else {
        console.error("given provider not valid - use default provider");
        Geolizr.provider = Geolizr.ipApiProvider.setAccessKey("tRmURnXYvSzbKKY")
    }
    if (typeof fallbackProvider === "object")
        Geolizr.fallbackProvider = fallbackProvider;
    else
        Geolizr.fallbackProvider = Geolizr.geolizrProvider
}
;
Geolizr.ipInfo = {
    providerUrl: "https://ipinfo.io/json",
    setIp: function(ip) {
        this.ip = ip;
        var accessKey = (typeof this.ip === "undefined") ? "" : "/?token" + this.access_key;
        this.providerUrl = "https://ipinfo.io/" + this.ip + "/json" + accessKey;
        return this
    },
    setAccessKey: function(accessKey) {
        this.access_key = accessKey;
        var ip = (typeof this.ip === "undefined") ? "" : "/" + this.ip;
        this.providerUrl = "https://ipinfo.io/" + ip + "/json?token=" + this.access_key;
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data["countryCode"] = data['country'];
        data["countryName"] = Geolizr.countries[data.countryCode];
        data["region"] = "N/A";
        data.currencyCode = Geolizr.getCurrencyCode(data);
        data.currency = {
            'code': data.currencyCode
        };
        data.country = {
            'code': data["countryCode"],
            'country': data['countryName']
        };
        data["service"] = "ipinfo.io";
        data["status"] = "success";
        return data
    }
};
Geolizr.ipApiCo = {
    providerUrl: "https://ipapi.co/json/",
    setIp: function(ip) {
        this.ip = ip;
        var accessKey = (typeof this.ip === "undefined") ? "" : "/" + this.access_key;
        this.providerUrl = "https://ipapi.co/" + this.ip + "/json" + accessKey;
        return this
    },
    setAccessKey: function(accessKey) {
        this.access_key = accessKey;
        var ip = (typeof this.ip === "undefined") ? "" : "/" + this.ip;
        this.providerUrl = "https://ipapi.co/" + ip + "/json/" + this.access_key;
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data.currencyCode = data.currency;
        data.currency = {
            'code': data.currency
        };
        data.countryName = data['country_name'];
        data.countryCode = data['country'];
        data.country = {
            'code': data.countryCode,
            'country': data['country_name']
        };
        data["service"] = "ipapi.co";
        data["status"] = "success";
        return data
    }
};
Geolizr.dbIpProvider = {
    providerUrl: "https://api.db-ip.com/v2/free/self",
    setIp: function(ip) {
        this.ip = ip;
        this.providerUrl = "https://api.db-ip.com/v2/free/" + this.ip;
        return this
    },
    setAccessKey: function(accessKey) {
        this.access_key = accessKey;
        var ip = (typeof this.ip === "undefined") ? "free" : this.ip;
        this.providerUrl = "https://api.db-ip.com/v2/" + this.access_key + "/" + ip;
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data["country"] = data['countryName'];
        data["region"] = data['region_code'];
        data["org"] = "N/A";
        data.currencyCode = Geolizr.getCurrencyCode(data);
        data.currency = {
            'code': data.currencyCode
        };
        data.countryName = data.country;
        data.country = {
            'code': data.countryCode,
            'country': data.country
        };
        data["service"] = "db-ip.com";
        data["status"] = "success";
        return data
    }
};
Geolizr.ipStackProvider = {
    providerUrl: "https://freegeoip.net/json/",
    setIp: function(ip) {
        this.ip = ip;
        this.providerUrl = "https://api.ipstack.com/" + this.ip + "?access_key=" + this.access_key;
        return this
    },
    setAccessKey: function(accessKey) {
        this.access_key = accessKey;
        var check = (typeof this.ip === "undefined") ? "check" : this.ip;
        this.providerUrl = "https://api.ipstack.com/" + check + "?access_key=" + this.access_key;
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data["service"] = "ipstack.net";
        if (typeof data['error'] !== "undefined") {
            console.error('Geolizr ipStackProvider Error: ' + data['error']['info']);
            return data
        }
        data["country"] = data['country_name'];
        data["countryCode"] = data['country_code'];
        data["region"] = data['region_code'];
        data["org"] = "N/A";
        data.currencyCode = Geolizr.getCurrencyCode(data);
        data.currency = {
            'code': data.currencyCode
        };
        data.countryName = data.country;
        data.country = {
            'code': data.countryCode,
            'country': data.country
        };
        data["status"] = "success";
        return data
    }
};
Geolizr.ipApiProvider = {
    providerUrl: "https://pro.ip-api.com/json/?key=tRmURnXYvSzbKKY",
    setIp: function(ip) {
        this.ip = ip;
        var access_key = typeof this.access_key !== "undefined" ? "?key=" + this.access_key : "";
        this.providerUrl = "https://pro.ip-api.com/json/" + ip + access_key;
        return this
    },
    setAccessKey: function(accessKey) {
        this.access_key = accessKey;
        var ip = typeof this.ip !== "undefined" ? this.ip : "";
        this.providerUrl = "https://pro.ip-api.com/json/" + ip + "?key=" + this.access_key;
        return this
    },
    setCountry: function(country) {},
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data.currencyCode = Geolizr.getCurrencyCode(data);
        data.currency = {
            'code': data.currencyCode
        };
        data.countryName = data.country;
        data.country = {
            'code': data.countryCode,
            'country': data.country
        };
        data["service"] = "ip-api.com";
        return data
    }
};
Geolizr.geolizrProvider = {
    params: {},
    providerUrl: "https://service.geolizr.com",
    setIp: function(ip) {
        this.params['ip'] = ip;
        this.providerUrl = "https://service.geolizr.com?" + Geolizr.jquery.param(this.params);
        return this
    },
    setCountry: function(country) {
        this.params['country'] = country;
        this.providerUrl = "https://service.geolizr.com?" + Geolizr.jquery.param(this.params);
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data['success'] = "true";
        data["service"] = "service.geolizr.net";
        return data
    }
};
Geolizr.geolizrIpApiProvider = {
    params: {},
    providerUrl: "https://service.geolizr.com/ipapi/",
    setIp: function(ip) {
        this.params['ip'] = ip;
        this.providerUrl = "https://service.geolizr.com/ipapi/?" + Geolizr.jquery.param(this.params);
        return this
    },
    setCountry: function(country) {
        this.params['country'] = country;
        this.providerUrl = "https://service.geolizr.com/ipapi/?" + Geolizr.jquery.param(this.params);
        return this
    },
    convert: function(data) {
        if (typeof data['service'] !== "undefined")
            return data;
        data = Geolizr.ipApiProvider.convert(data);
        data["service"] = "service.geolizr.net/ipapi";
        return data
    }
};
Geolizr.presetServiceActivate = function(config) {
    if (typeof Geolizr[config.name] === "object") {
        if (config.name === "ipStackProvider" && typeof config.accessKey === "undefined") {
            console.error("The free freegeoip is deprecated, more information at https://github.com/apilayer/freegeoip#readme \nWith Geolizr you can bye a key on https://ipstack.com/product a subscription and use this method: use Geolizr.activateFreegeoip('<your new api.ipstack.com key>'). Or you use some of the other free services found here: https://geolizr.freshdesk.com/support/solutions/articles/8000068428-geoip-services");
            return
        }
        if (typeof config.accessKey === "undefined") {
            Geolizr.setProvider(Geolizr[config.name])
        } else {
            Geolizr.setProvider(Geolizr[config.name].setAccessKey(config.accessKey))
        }
    }
}
;
if (typeof Geolizr.presetService === "object") {
    Geolizr.presetServiceActivate(Geolizr.presetService)
} else {
    Geolizr.presetServiceActivate({
        'name': 'ipApiProvider',
        accessKey: "tRmURnXYvSzbKKY"
    })
}
Geolizr.activateIpApiWrapper = function() {
    Geolizr.provider = Geolizr.geolizrIpApiProvider
}
;
Geolizr.addEventListener = function(event, eventListener) {
    if (!Geolizr.eventListeners[event]) {
        Geolizr.eventListeners[event] = []
    }
    Geolizr.eventListeners[event].push(eventListener);
    if (event === 'geolizr.geoData' && Geolizr.geoData) {
        Geolizr.dispatchEvent('geolizr.geoData', Geolizr.geoData)
    }
}
;
Geolizr.dispatchEvent = function(event, params) {
    if (Geolizr.eventListeners[event]) {
        for (var i = 0; i < Geolizr.eventListeners[event].length; i++) {
            Geolizr.eventListeners[event][i](params)
        }
    }
}
;
Geolizr.isReady = function() {
    return true
}
;
Geolizr.getCurrencyCode = function(geoData) {
    geoData.countryCode = geoData.countryCode || "--";
    if (geoData && Geolizr.currencies[geoData.countryCode]) {
        return Geolizr.currencies[geoData.countryCode]
    } else {
        return false
    }
}
;
Geolizr.loadScript = function(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback()
            }
        }
    } else {
        script.onload = function() {
            callback()
        }
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script)
}
;
Geolizr.listCheck = function(item, filterUrls, currentUrlWithoutParams) {
    if (item.filterlistType === undefined)
        return false;
    item.filterlistType = item.filterlistType || "none";
    var result = false;
    if (item.filterlistType === 'blacklist') {
        result = false;
        filterUrls.forEach(function(filter) {
            if (currentUrlWithoutParams.match(filter) !== null)
                result = true
        });
        return result
    }
    if (item.filterlistType === 'whitelist') {
        result = true;
        filterUrls.forEach(function(filter) {
            if (currentUrlWithoutParams.match(filter) !== null)
                result = false
        });
        return result
    }
    return false
}
;
Geolizr.calculate = function(calcStr) {
    return new Function('return ' + calcStr)()
}
;
Geolizr.getURLParameter = function(name) {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1]
    }
    return vars[name]
}
;
Geolizr.checkGeoData = function(geoData) {
    var ignoreOrgs = ['Microsoft bingbot', 'Googlebot', 'Google', 'Facebook', 'Yahoo', 'YANDEX LLC', 'China Unicom Beijing'];
    geoData.org = geoData.org || "N/A";
    if ("undefined" !== typeof geoData.org && ignoreOrgs.indexOf(geoData.org) > -1) {
        return false
    }
    if (typeof Geolizr.admin !== "undefined" && Geolizr.admin === true) {
        return false
    }
    return "undefined" !== typeof geoData.status && geoData.status === "success"
}
;
Geolizr.geoDataSuccessCallback = function(geoData) {
    geoData = Geolizr.provider.convert(geoData);
    var status = Geolizr.checkGeoData(geoData);
    if (geoData.success === "true") {
        status = true
    }
    if (status) {
        Geolizr.geoDataSave(geoData);
        Geolizr.geoData = geoData;
        Geolizr.dataState = 'true';
        for (var i = 0; i < Geolizr.dataCallbackList.length; i++) {
            Geolizr.dataCallbackList[i](geoData, true)
        }
        Geolizr.dataCallbackList = []
    }
}
;
Geolizr.geoDataOff = function(callback) {
    var data = {
        "status": "success",
        "success": true,
        "geolizr": 'off',
        "country": {
            "code": "--"
        },
        "currency": {
            "code": "---"
        }
    };
    callback(data)
}
;
Geolizr.geoDataLoad = function(usedUrl, fallBackUrl, callback) {
    if ((typeof Geolizr.geolizr !== "undefined" && Geolizr.geolizr === 'off') || (typeof Geolizr.geoDataObject !== "undefined" && Geolizr.geoDataObject && Geolizr.geoDataObject.geolizr === "off")) {
        Geolizr.geoDataOff(callback);
        return
    }
    Geolizr.jquery.ajax = Geolizr.jquery.ajax || false;
    if (Geolizr.jquery.ajax !== false) {
        Geolizr.jquery.ajax({
            timeout: 3000,
            url: usedUrl,
            success: callback,
            error: function(error, msg) {
                console.error(msg, error);
                Geolizr.provider = Geolizr.fallbackProvider;
                $.ajax({
                    url: fallBackUrl,
                    success: callback
                })
            }
        })
    }
}
;
Geolizr.geoDataSave = function(geoData) {
    geoData = Geolizr.provider.convert(geoData);
    if (Geolizr.geolizrCountry) {
        geoData.geolizrCountry = Geolizr.geolizrCountry
    }
    Geolizr.cookie.set('geo_data', geoData, {
        expires: 365,
        path: '/',
        domain: Geolizr.shopDomain
    })
}
;
Geolizr.getGeoData = function(callback, ignoreCache) {
    Geolizr.init(function() {
        Geolizr.geolizr = Geolizr.getURLParameter('geolizr');
        Geolizr.geolizrIP = Geolizr.getURLParameter('geolizr_ip');
        Geolizr.geolizrCountry = Geolizr.getURLParameter('geolizr_country');
        Geolizr.ignoreCache = ignoreCache ? ignoreCache === true : false;
        if (Geolizr.geolizr && Geolizr.geolizr === "off" || Geolizr.geolizrIP || Geolizr.geolizrCountry)
            Geolizr.ignoreCache = false;
        if (Geolizr.dataState === 'true' && Geolizr.geoData) {
            callback(Geolizr.geoData);
            return
        } else if (Geolizr.dataState === 'pending') {
            Geolizr.dataCallbackList.push(callback);
            return
        }
        Geolizr.dataCallbackList.push(callback);
        Geolizr.dataState = 'pending';
        setTimeout(function() {
            if (Geolizr.dataState === 'pending') {
                if (!Geolizr.pendingReset)
                    Geolizr.pendingReset = 0;
                Geolizr.pendingReset++;
                Geolizr.dataState = "false";
                if (callback && Geolizr.pendingReset < 10) {
                    Geolizr.getGeoData(callback, Geolizr.ignoreCache)
                } else {
                    Geolizr.pendingReset = 0
                }
            }
        }, 600);
        if (typeof Geolizr.provider.execute == "function")
            Geolizr.provider.execute();
        else
            Geolizr.defaultExecuteProvider()
    })
}
Geolizr.defaultExecuteProvider = function() {
    var usedUrl;
    var fallBackUrl;
    if (Geolizr.geolizrIP) {
        Geolizr.ignoreCache = true;
        Geolizr.provider.setIp(Geolizr.geolizrIP);
        usedUrl = Geolizr.provider.providerUrl;
        Geolizr.fallbackProvider.setIp(Geolizr.geolizrIP);
        fallBackUrl = Geolizr.fallbackProvider.providerUrl
    } else {
        usedUrl = Geolizr.provider.providerUrl;
        fallBackUrl = Geolizr.fallbackProvider.providerUrl
    }
    if (Geolizr.geolizrCountry) {
        Geolizr.ignoreCache = true;
        Geolizr.fallbackProvider.setCountry(Geolizr.geolizrCountry);
        Geolizr.provider = Geolizr.fallbackProvider;
        usedUrl = Geolizr.provider.providerUrl
    }
    Geolizr.geoDataObject = false;
    if (Geolizr.isReady()) {
        if (typeof Geolizr.jquery !== "function") {
            console.error("jQuery missing");
            return
        }
        var geoData = Geolizr.cookie.get('geo_data');
        Geolizr.jquery.parseJSON = typeof Geolizr.jquery.parseJSON === "function" ? Geolizr.jquery.parseJSON : false;
        if (Geolizr.jquery.parseJSON === false) {
            console.error("jQuery missing parseJSON");
            return
        }
        if ("undefined" !== typeof geoData)
            Geolizr.geoDataObject = Geolizr.jquery.parseJSON(geoData);
        else
            Geolizr.geoDataObject = false;
        if (typeof Geolizr.geoDataObject !== "undefined" && Geolizr.geoDataObject) {
            if (!Geolizr.geoDataObject.geolizrCountry && Geolizr.geoDataObject.geolizrCountry !== Geolizr.geolizrCountry) {
                Geolizr.geoDataObject = false
            }
            if (Geolizr.geolizr && ("on" === Geolizr.geolizr || "off" === Geolizr.geolizr)) {
                Geolizr.geoDataObject = false
            } else if (Geolizr.geoDataObject && ("off" === Geolizr.geoDataObject.geolizr)) {
                Geolizr.geolizr = "off"
            }
            if (Geolizr.ignoreCache === true)
                Geolizr.geoDataObject = false
        }
        if (Geolizr.geoDataObject) {
            try {
                Geolizr.geoDataSuccessCallback(Geolizr.geoDataObject)
            } catch (err) {}
            Geolizr.geoDataLoad(usedUrl, fallBackUrl, Geolizr.geoDataSave)
        } else {
            Geolizr.geoDataLoad(usedUrl, fallBackUrl, Geolizr.geoDataSuccessCallback)
        }
    } else {
        Geolizr.dataState = 'false'
    }
}
;
Geolizr.versionCompare = function(a, b) {
    if (a === b) {
        return 0
    }
    var a_components = a.split(".");
    var b_components = b.split(".");
    var len = Math.min(a_components.length, b_components.length);
    for (var i = 0; i < len; i++) {
        if (parseInt(a_components[i]) > parseInt(b_components[i])) {
            return 1
        }
        if (parseInt(a_components[i]) < parseInt(b_components[i])) {
            return -1
        }
    }
    if (a_components.length > b_components.length) {
        return 1
    }
    if (a_components.length < b_components.length) {
        return -1
    }
    return 0
}
;
Geolizr.redirect = function(redirect) {
    if (!redirect && Object.keys(Geolizr.redirects).length > 0) {
        redirect = Geolizr.redirects[Geolizr.countryToRedirect[Geolizr.geoData.country.code]];
        var regionRedirect = Geolizr.redirects[Geolizr.countryToRedirect[Geolizr.geoData.country.code + '-' + Geolizr.geoData.region]];
        if (regionRedirect)
            redirect = regionRedirect
    }
    if (redirect) {
        Geolizr.redirectExecute(redirect)
    }
    Geolizr.dispatchEvent('redirect.notExecuted', {
        redirect: redirect,
        code: Geolizr.redirectExcutionCode,
        message: Geolizr.redirectExcutionMessage
    })
}
;
Geolizr.redirectExecute = function(redirect) {
    Geolizr.redirectExcutionCode = "200";
    Geolizr.redirectExcutionMessage = "";
    var cookieBlocker = Geolizr.cookie.get("geolizr.blockRedirects");
    if (typeof cookieBlocker !== "undefined" && cookieBlocker !== false) {
        Geolizr.redirectExcutionCode = "908";
        Geolizr.redirectExcutionMessage = "Redirect " + redirect.id + " blocks by cookie [" + cookieBlocker + "]";
        return
    }
    var currentUrl = window.location.href;
    if (currentUrl.slice(-1) === '/') {
        currentUrl = currentUrl.substring(0, currentUrl.length - 1)
    }
    var currentUrlWithoutParams = currentUrl.split('?')[0];
    if (currentUrlWithoutParams.slice(-1) === '/') {
        currentUrlWithoutParams = currentUrlWithoutParams.substring(0, currentUrlWithoutParams.length - 1)
    }
    redirect.redirectUrl = redirect.redirectUrl || "";
    var targetUrl = redirect.redirectUrl.replace('/%path%', '%path%');
    if (targetUrl.slice(-1) === '/') {
        targetUrl = targetUrl.substring(0, targetUrl.length - 1)
    }
    if (targetUrl.indexOf('%path%') > -1) {
        var path = window.location.href.replace(window.location.protocol + '//' + window.location.hostname, '');
        targetUrl = targetUrl.replace('%path%', path)
    } else {
        Geolizr.geolizrCountry = Geolizr.getURLParameter('geolizr_country');
        Geolizr.geolizrIP = Geolizr.getURLParameter('geolizr_ip');
        if ("undefined" !== typeof Geolizr.geolizrCountry && "undefined" !== typeof Geolizr.geolizrIP) {
            targetUrl = targetUrl + '/?geolizr_country=' + Geolizr.geolizrCountry + "&geolizr_ip=" + Geolizr.geolizrIP
        } else {
            if (Geolizr.geolizrCountry) {
                targetUrl = targetUrl + '/?geolizr_country=' + Geolizr.geolizrCountry
            }
            if (Geolizr.geolizrIP) {
                targetUrl = targetUrl + '/?geolizr_ip=' + Geolizr.geolizrIP
            }
        }
    }
    if (targetUrl.slice(-1) === '/') {
        targetUrl = targetUrl.substring(0, targetUrl.length - 1)
    }
    redirect.filterlistUrls = redirect.filterlistUrls || "";
    if (redirect.filterlistType !== 'none' && redirect.filterlistUrls !== "") {
        var filterUrls = redirect.filterlistUrls.replace(/ /g, '').split(",");
        if (Geolizr.listCheck(redirect, filterUrls, currentUrlWithoutParams)) {
            Geolizr.redirectExcutionCode = "904";
            Geolizr.redirectExcutionMessage = "Filter blocks the redirect";
            return
        }
    }
    var cookieReferrer = false;
    if (Geolizr.useCookieReferrer === true)
        cookieReferrer = "https://" + Geolizr.cookie.get("geolizr.referrer");
    var baseReferrer = document.referrer || Geolizr.referrer || cookieReferrer;
    if (baseReferrer && baseReferrer !== '') {
        var tmpAnchor = document.createElement('a');
        tmpAnchor.href = baseReferrer;
        var referrer = tmpAnchor.host;
        if (referrer.indexOf(":") > 0) {
            referrer = referrer.replace(':443', '').replace(':80', '').replace(":88", '')
        }
        redirect.redirectIgnoreReferrers = redirect.redirectIgnoreReferrers || false;
        if (redirect.redirectIgnoreReferrers) {
            var ignoreReferrers = redirect.redirectIgnoreReferrers.replace(/ /g, '').split(',');
            Geolizr.jquery.inArray = Geolizr.jquery.inArray || function() {
                return false
            }
            ;
            if (Geolizr.jquery.inArray(referrer, ignoreReferrers) === -1 && currentUrl !== targetUrl) {
                window.location.replace(targetUrl)
            } else {
                if (currentUrl !== targetUrl) {
                    Geolizr.redirectExcutionCode = "905";
                    Geolizr.redirectExcutionMessage = "Referrer (" + referrer + ") blocks the redirect";
                    if (cookieReferrer === "https://" + referrer) {
                        Geolizr.redirectExcutionCode = "907";
                        Geolizr.redirectExcutionMessage = "Cookie Referrer (" + referrer + ") blocks the redirect"
                    }
                    if (Geolizr.useCookieReferrer === true)
                        Geolizr.cookie.set("geolizr.referrer", referrer)
                } else {
                    Geolizr.redirectExcutionCode = "906";
                    Geolizr.redirectExcutionMessage = "Destination and current URL are the same"
                }
            }
        } else {
            if (currentUrl !== targetUrl) {
                window.location.replace(targetUrl)
            } else {
                Geolizr.redirectExcutionCode = "906";
                Geolizr.redirectExcutionMessage = "Destination and current URL are the same"
            }
        }
    } else {
        if (currentUrl !== targetUrl) {
            window.location.replace(targetUrl)
        } else {
            Geolizr.redirectExcutionCode = "906";
            Geolizr.redirectExcutionMessage = "Destination and current URL are the same"
        }
    }
}
;
Geolizr.executePopup = function(popup) {
    var currentUrlWithoutParams = window.location.href.split('?')[0];
    if (currentUrlWithoutParams.slice(-1) === '/') {
        currentUrlWithoutParams = currentUrlWithoutParams.substring(0, currentUrlWithoutParams.length - 1)
    }
    if (popup.filterlistType !== 'none' && popup.filterlistUrls !== "") {
        var filterUrls = popup.filterlistUrls.replace(/ /g, '').split(",");
        if (Geolizr.listCheck(popup, filterUrls, currentUrlWithoutParams))
            return
    }
    popup.roundCorner = popup.roundCorner || 'false';
    var geolizrClass = popup.roundCorner === 'true' ? "geolizr-popup-round-corner" : "geolizr-popup-shadow";
    var geolizrPopupTemplate = '<div id="geolizr-popup">';
    var animationClass = "";
    if (Geolizr.animation) {
        animationClass = "animate fadeIn "
    }
    geolizrPopupTemplate += '<div class="geolizr-popup gp-center ' + animationClass + geolizrClass + '" style="background: ' + popup.backgroundColor + ' !important;">';
    geolizrPopupTemplate += '<iframe id="geolizr-popup-content-iframe" class="' + geolizrClass + '" src="' + Geolizr.popupAssetUrl.replace("[popupId]", popup.id) + '"></iframe>';
    popup.dismissible = popup.dismissible || 'false';
    if (popup.dismissible === 'true') {
        popup.textColor = popup.textColor || "black";
        geolizrPopupTemplate += '<a id="geolizr-dismiss-popup" style="color: ' + popup.textColor + ';" href="">&times;</a>'
    }
    popup.pageBackgroundColor = popup.pageBackgroundColor || ['inherit'];
    geolizrPopupTemplate += '</div>';
    geolizrPopupTemplate += '<div class="geolizr-popup-background" style="background-color: rgba(' + popup.pageBackgroundColor[0] + ', ' + popup.pageBackgroundColor[1] + ',' + popup.pageBackgroundColor[2] + ', 0.7)"></div>';
    geolizrPopupTemplate += '</div>';
    Geolizr.jquery('body').prepend = Geolizr.jquery('body').prepend || function() {
        return false
    }
    ;
    Geolizr.jquery('body').prepend(geolizrPopupTemplate);
    Geolizr.dispatchEvent('popup.show', popup);
    var message = 'GeolizrData=>' + JSON.stringify(Geolizr.geoData);
    var iframe = Geolizr.jquery('#geolizr-popup-content-iframe');
    if (iframe.length > 0) {
        iframe.ready(function() {
            setTimeout(function() {
                iframe[0].contentWindow.postMessage(message, "https://cdn.shopify.com")
            }, 1)
        })
    }
    var geolizrPopup = $('#geolizr-popup');
    Geolizr.activePopup = popup;
    geolizrPopup.children = geolizrPopup.children || function() {
        return false
    }
    ;
    var geolizrPopupContent = geolizrPopup.children('div.geolizr-popup');
    var onResize = function(event) {
        Geolizr.event = event;
        var geolizrPopupHeight = parseInt(geolizrPopup.height());
        geolizrPopupContent.hasClass = geolizrPopupContent.hasClass || function() {
            return false
        }
        ;
        geolizrPopupContent.addClass = geolizrPopupContent.addClass || function() {
            return false
        }
        ;
        geolizrPopupContent.removeClass = geolizrPopupContent.removeClass || function() {
            return false
        }
        ;
        if ($(window).width() < 670 && geolizrPopupContent.hasClass('gp-center')) {
            if ($(window).width >= $(window).height) {
                geolizrPopupContent.addClass('gp-mobile');
                geolizrPopupContent.addClass('landscape')
            } else {
                geolizrPopupContent.addClass('gp-mobile');
                geolizrPopupContent.addClass('portrait')
            }
            geolizrPopupContent.removeClass('gp-center')
        } else if ($(window).width() >= 670 && geolizrPopupContent.hasClass('gp-mobile')) {
            geolizrPopupContent.addClass('gp-center');
            geolizrPopupContent.removeClass('gp-mobile');
            if (geolizrPopupContent.hasClass('portrait'))
                geolizrPopupContent.removeClass('portrait');
            if (geolizrPopupContent.hasClass('landscape'))
                geolizrPopupContent.removeClass('landscape')
        }
        Geolizr.dispatchEvent('popup.resize', {
            popup: popup,
            height: geolizrPopupHeight
        })
    };
    onResize();
    $(window).resize(onResize);
    if (popup.dismissible === 'true') {
        $('#geolizr-dismiss-popup').click(function(e) {
            e.preventDefault();
            Geolizr.dispatchEvent('popup.hide', popup);
            geolizrPopup.remove();
            Geolizr.activePopup = null;
            popup.rememberCloseState = popup.rememberCloseState || 'false';
            if (popup.rememberCloseState === 'true') {
                Geolizr.cookie.set('geolizr-dismissed-popup-' + popup.id, 'true', {
                    expires: 365,
                    path: '/',
                    domain: Geolizr.shopDomain
                })
            }
        })
    }
}
;
Geolizr.popup = function(popup, assetUrl) {
    Geolizr.popupAssetUrl = assetUrl;
    if (popup) {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventCatcher = window[eventMethod];
        var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
        var changeUrl = function(data) {
            var dataArray = data.split("=>");
            var targetUrl = dataArray[1];
            if (targetUrl) {
                targetUrl = targetUrl.replace('/%path%', '%path%');
                var path = window.location.href.replace(window.location.protocol + '//' + window.location.hostname, '');
                targetUrl = targetUrl.replace('%path%', path);
                window.location.href = targetUrl
            }
        };
        var checkData = function(data, string) {
            return typeof data === "string" && data.startsWith(string)
        };
        eventCatcher(messageEvent, function(e) {
            var geolizrPopup = $('#geolizr-popup');
            var data = e.data || "";
            if (geolizrPopup.length > 0 && checkData(data, "GeolizrClosePopup") === true) {
                e.preventDefault();
                if (Geolizr.activePopup)
                    Geolizr.dispatchEvent('popup.hide', Geolizr.activePopup);
                geolizrPopup.remove();
                if (Geolizr.activePopup && Geolizr.activePopup.rememberCloseState === 'true') {
                    Geolizr.cookie.set('geolizr-dismissed-popup-' + Geolizr.activePopup.id, 'true', {
                        expires: 365,
                        path: '/',
                        domain: Geolizr.shopDomain
                    })
                }
                Geolizr.activePopup = null;
                if (data !== "GeolizrClosePopup") {
                    changeUrl(data)
                }
            }
            if (geolizrPopup.length > 0 && checkData(data, "GeolizrRedirect") === true) {
                e.preventDefault();
                changeUrl(data)
            }
            if (checkData(data, "GeolizrLyChangeLanguage")) {
                var dataArray = data.split("=>");
                var lyCode = dataArray[1];
                if (langify && langify.helper) {
                    geolizrPopup.remove();
                    if (Geolizr.activePopup && Geolizr.activePopup.rememberCloseState === 'true') {
                        Geolizr.cookie.set('geolizr-dismissed-popup-' + Geolizr.activePopup.id, 'true', {
                            expires: 365,
                            path: '/',
                            domain: Geolizr.shopDomain
                        })
                    }
                    langify.helper.saveLanguage(lyCode)
                }
            }
        }, false);
        Geolizr.dispatchEvent('popup.preShow', popup);
        var dismissedContent = Geolizr.cookie.get('geolizr-dismissed-popup-' + popup.id);
        var dismissed = typeof dismissedContent !== 'undefined';
        if (!dismissed) {
            Geolizr.executePopup(popup)
        }
    }
}
;
Geolizr.countryFlagTemplate = '<i class="famfamfam-flag-{countryFlagLowerCase}"></i>';
Geolizr.getCountryFlag = function(countryCode) {
    var countryFlagLowerCase = countryCode.toLowerCase();
    var countryFlagUpperCase = countryCode.toUpperCase();
    var countryFlagFirstLetterUp = countryCode.charAt(0).toUpperCase() + countryCode.substr(1).toLowerCase();
    return Geolizr.countryFlagTemplate.replace('{countryFlagLowerCase}', countryFlagLowerCase).replace('{countryFlagUpperCase}', countryFlagUpperCase).replace('{countryFlagFirstLetterUp}', countryFlagFirstLetterUp)
}
;
Geolizr.getNotification = function() {
    var geoData = Geolizr.geoData;
    var notification = Geolizr.notifications[Geolizr.regionToNotification[geoData.country.code]];
    var regionNotification = Geolizr.notifications[Geolizr.regionToNotification[geoData.country.code + '-' + geoData.region]];
    if (typeof regionNotification !== "undefined")
        notification = regionNotification;
    if (typeof Geolizr.cities[geoData.city] !== "undefined") {
        var cityNotification = Geolizr.notifications[Geolizr.regionToNotification[geoData.country.code + '-' + Geolizr.cities[geoData.city]]];
        if (typeof cityNotification !== "undefined")
            notification = cityNotification
    }
    return notification
}
;
Geolizr.notification = function(notification, geoData) {
    if (notification) {
        var dismissed = Geolizr.cookie.get('geolizr-dismissed-' + notification.id) === 'true';
        if (!dismissed) {
            var currentUrlWithoutParams = window.location.href.split('?')[0];
            if (currentUrlWithoutParams.slice(-1) === '/') {
                currentUrlWithoutParams = currentUrlWithoutParams.substring(0, currentUrlWithoutParams.length - 1)
            }
            if (notification.filterlistType !== 'none' && notification.filterlistUrls !== "") {
                var filterUrls = notification.filterlistUrls.replace(/ /g, '').split(",");
                if (Geolizr.listCheck(notification, filterUrls, currentUrlWithoutParams))
                    return
            }
            var randomNumber = function(regex, from, to, gc, cookie) {
                cookie = cookie === "1";
                var cookieKey = "rndNr_" + from + "," + to + location.href;
                if (cookie && Geolizr.cookie.get(cookieKey)) {
                    return Geolizr.cookie.get(cookieKey)
                }
                var random = Math.floor(Math.random() * parseInt(to)) + parseInt(from);
                if (cookie)
                    Geolizr.cookie.set(cookieKey, random, {
                        expire: 1
                    });
                return random
            };
            notification.message = notification.message.replace('{{ country_name }}', Geolizr.countries[geoData.country.code]).replace('{{ country_code }}', geoData.country.code).replace('{{ country_flag }}', Geolizr.getCountryFlag(geoData.country.code)).replace(/{{ random_number\((\d+),(\d+)(,(\d+))?\) }}/g, randomNumber).replace('{{ currency }}', geoData.currency.code);
            notification.linkColor = notification.linkColor || "";
            notification.linkUrl = notification.linkUrl || "";
            if (notification.linkUrl.indexOf('%path%') > -1) {
                var path = window.location.href.replace(window.location.protocol + '//' + window.location.hostname, '');
                notification.linkUrl = notification.linkUrl.replace('/%path%', '%path%');
                notification.linkUrl = notification.linkUrl.replace('%path%', path)
            }
            notification.linkText = notification.linkText || "";
            notification.textColor = notification.textColor || "";
            notification.backgroundColor = notification.backgroundColor || "";
            var geolizrNotificationTemplate = '<div id="geolizr-notification-wrapper" style="display: block; height: 44px;"><div id="geolizr-notification">';
            geolizrNotificationTemplate += '<div id="geolizr-notification-message-wrapper" style="background-color: ' + notification.backgroundColor + '; border-bottom:4px solid ' + notification.textColor + ';">';
            geolizrNotificationTemplate += '<span style=\'color:' + notification.textColor + ' !important; font-family:' + notification.font + ';\'>' + notification.message + '&nbsp;</span>';
            geolizrNotificationTemplate += '<a style=\'color:' + notification.linkColor + ' !important;text-decoration:underline !important;font-family:' + notification.font + ';\' href="' + notification.linkUrl + '">' + notification.linkText + '</a>';
            if (notification.dismissible === 'true') {
                geolizrNotificationTemplate += '<a id="geolizr-dismiss-notification" style="color: ' + notification.backgroundColor + ' !important; background: ' + notification.textColor + ';" href="">&times;</a>'
            }
            geolizrNotificationTemplate += '</div>';
            geolizrNotificationTemplate += '</div>';
            Geolizr.dispatchEvent('notification.preShow', notification);
            var body = $('body');
            body.addClass('geolizr-notification-open');
            body.prepend(geolizrNotificationTemplate);
            Geolizr.dispatchEvent('notification.show', notification);
            var geolizrNotification = $('#geolizr-notification');
            var geolizrNotificationSpace = $('#geolizr-notification-space');
            var geolizrNotificationWrapper = $('#geolizr-notification-wrapper');
            if (Geolizr.animation === true) {
                geolizrNotificationWrapper.addClass("slideInDown");
                $(document).ready(function() {
                    setTimeout(function() {
                        geolizrNotificationWrapper.css("display", "block")
                    }, 1500)
                })
            } else
                geolizrNotificationWrapper.css("display", "block");
            var onResize = function() {
                var geolizrNotificationHeight = parseInt(geolizrNotification.height());
                geolizrNotificationWrapper.css = geolizrNotificationSpace.css || function() {
                    return false
                }
                ;
                geolizrNotificationWrapper.css('height', geolizrNotificationHeight);
                Geolizr.dispatchEvent('notification.resize', {
                    notification: notification,
                    height: geolizrNotificationHeight
                })
            };
            onResize();
            $(window).resize(onResize);
            if (notification.dismissible === 'true') {
                $('#geolizr-dismiss-notification').click(function(e) {
                    e.preventDefault();
                    geolizrNotification.removeClass("slideInDown");
                    geolizrNotification.addClass("slideInUp");
                    geolizrNotificationSpace.css('margin-bottom', '0px');
                    setTimeout(function() {
                        geolizrNotificationWrapper.remove();
                        geolizrNotification.remove();
                        $('body').removeClass('geolizr-notification-open')
                    }, 300);
                    if (notification.rememberCloseState === 'true') {
                        Geolizr.cookie.set('geolizr-dismissed-' + notification.id, 'true', {
                            expires: 365,
                            path: '/',
                            domain: Geolizr.shopDomain
                        })
                    }
                    Geolizr.dispatchEvent('notification.hide', notification)
                })
            }
        }
    }
}
;
Geolizr.shopifyFormatMoney = function(e, t) {
    function n(e, t) {
        return "undefined" === typeof e ? t : e
    }
    function i(e, t, i, r) {
        if (t = n(t, 2),
        i = n(i, ","),
        r = n(r, "."),
        isNaN(e) || null == e)
            return 0;
        e = (e / 100).toFixed(t);
        var o = e.split(".")
          , a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i)
          , s = o[1] ? r + o[1] : "";
        return a + s
    }
    "string" === typeof e && (e = e.replace(".", ""));
    var r = ""
      , o = /{{\s*(\w+)\s*}}/
      , a = t || this.money_format;
    switch (a.match(o)[1]) {
    case "amount":
        r = i(e, 2);
        break;
    case "amount_no_decimals":
        r = i(e, 0);
        break;
    case "amount_with_comma_separator":
        r = i(e, 2, ".", ",");
        break;
    case "amount_no_decimals_with_comma_separator":
        r = i(e, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        r = i(e, 0, " ")
    }
    return a.replace(o, r)
}
;
Geolizr.formatMoney = function(cents, format) {
    if (typeof cents === 'string') {
        cents = cents.replace('.', '')
    }
    var value = '';
    var placeholderRegex = /{{\s*(\w+)\s*}}/;
    this.money_format = this.money_format || false;
    var formatString = format || this.money_format;
    var defaultOption = function(opt, def) {
        return (typeof opt === 'undefined' ? def : opt)
    };
    var formatWithDelimiters = function(number, precision, thousands, decimal) {
        precision = defaultOption(precision, 2);
        thousands = defaultOption(thousands, ',');
        decimal = defaultOption(decimal, '.');
        if (isNaN(number) || number == null) {
            return 0
        }
        number = (number / 100.0).toFixed(precision);
        var parts = number.split('.')
          , dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands)
          , cents = parts[1] ? (decimal + parts[1]) : '';
        return dollars + cents
    };
    switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
    case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
    case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
    case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break
    }
    return formatString.replace(placeholderRegex, value)
}
;
Geolizr.fixedFormatMoney = function formatMoney(cents, format) {
    if (typeof cents === 'string') {
        cents = cents.replace('.', '')
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);
    function formatWithDelimiters(number, precision, thousands, decimal) {
        if (precision !== 0)
            precision = precision || 2;
        thousands = thousands || ',';
        decimal = decimal || '.';
        if (isNaN(number) || number == null) {
            return 0
        }
        number = (number / 100.0).toFixed(precision);
        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
        var centsAmount = parts[1] ? (decimal + parts[1]) : '';
        return dollarsAmount + centsAmount
    }
    switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
    case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
    case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
    case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break
    }
    return formatString.replace(placeholderRegex, value)
}
;
Geolizr.convert = function(originalPrice, shopCurrency, currency) {
    var customCalculation = Geolizr.moneyFormats[currency].calculationString || false;
    var xrate = false;
    try {
        var options = JSON.parse(customCalculation);
        if (options) {
            if ("number" === typeof options["xrate"]) {
                Geolizr.Currency["rates"][currency] = options["xrate"];
                xrate = options["xrate"]
            }
            if ("string" === typeof options["customCalc"])
                customCalculation = options["customCalc"];
            else
                customCalculation = false
        }
    } catch (ex) {}
    var convertedPrice;
    if (xrate === false) {
        convertedPrice = Geolizr.Currency.convert(originalPrice, shopCurrency, currency)
    } else {
        convertedPrice = originalPrice / xrate
    }
    if (customCalculation) {
        convertedPrice = Geolizr.calculate(customCalculation.replace('{{amount}}', convertedPrice))
    }
    return convertedPrice
}
;
Geolizr.setCurrency = function(currency) {
    if (typeof currency === "string")
        currency = currency.trim();
    Geolizr.init(function($) {
        if (Geolizr.observeElements.length > 0) {
            Geolizr.disconnectObserver()
        }
        var moneyFormat = Geolizr.moneyFormats[currency].moneyFormat;
        Geolizr.jquery('.geolizr-currency').each(function() {
            var originalPrice = parseInt($(this).attr('data-geolizr-price'), 10);
            var convertedPrice = Geolizr.convert(originalPrice, Geolizr.shopCurrency, currency);
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var output = Geolizr.shopifyFormatMoney(convertedPrice, moneyFormat);
            if (moneyFormat.match(placeholderRegex)[1] === 'amount_no_decimals') {
                output = Geolizr.fixedFormatMoney(convertedPrice, moneyFormat)
            }
            Geolizr.jquery(this).html(output)
        });
        var removeDomains = Geolizr.shopDomain.split(".").reverse();
        var baseEnding = removeDomains.shift();
        var baseDomain = removeDomains.shift() + '.' + baseEnding;
        Geolizr.cookie.remove('geolizr-currency', {
            domain: baseDomain
        });
        if (removeDomains.length > 0) {
            removeDomains.forEach(function(subDomain) {
                baseDomain = subDomain + '.' + baseDomain;
                Geolizr.cookie.remove('geolizr-currency', {
                    domain: baseDomain
                })
            })
        }
        Geolizr.cookie.set('geolizr-currency', currency, {
            expires: 365,
            path: '/',
            domain: Geolizr.shopDomain
        });
        Geolizr.usedLanguageCode = Geolizr.currenciesToLanguages[currency];
        if (!Geolizr.usedLanguageCode) {
            Geolizr.usedLanguageCode = Geolizr.currenciesToLanguages[Geolizr.shopCurrency]
        }
        Geolizr.dispatchEvent('currency.change', currency);
        if (Geolizr.observeElements.length > 0) {
            Geolizr.observe()
        }
    })
}
;
Geolizr.convertAll = function(oldCurrency, newCurrency, selector, format) {
    Geolizr.jquery(selector || 'span.money').each(function(i, e) {
        if (Geolizr.jquery(e).hasClass('geolizr-currency') || Geolizr.jquery(e).find('.geolizr-currency').length > 0)
            return;
        if (Geolizr.jquery(e).attr('data-currency') === newCurrency)
            return;
        if (Geolizr.jquery(e).attr('data-currency-' + newCurrency)) {
            Geolizr.jquery(e).html(Geolizr.jquery(this).attr('data-currency-' + newCurrency))
        } else {
            var cents = 0.0;
            var oldFormat = Geolizr.moneyFormats[oldCurrency]['moneyFormat'] || '{{amount}}';
            if (typeof format !== "undefined")
                oldFormat = format;
            if (oldFormat.indexOf('amount_no_decimals') !== -1) {
                cents = parseInt(jQuery(e).html().replace(/[^0-9]/g, '')) * 100
            } else if (oldCurrency === 'JOD' || oldCurrency === 'KWD' || oldCurrency === 'BHD') {
                cents = parseInt(jQuery(e).html().replace(/[^0-9]/g, ''))
            } else {
                cents = parseInt(jQuery(e).html().replace(/[^0-9]/g, ''))
            }
            if (isNaN(cents))
                return;
            var newFormattedAmount = Geolizr.formatMoney(cents, oldFormat);
            Geolizr.jquery(e).html(newFormattedAmount);
            Geolizr.jquery(e).attr('data-currency-' + newCurrency, newFormattedAmount)
        }
        Geolizr.jquery(e).attr('data-currency', newCurrency);
        Geolizr.setCurrency(Geolizr.getCurrency())
    }
    .bind(format))
}
;
Geolizr.getCurrency = function() {
    return Geolizr.cookie.get('geolizr-currency', {
        domain: Geolizr.shopDomain
    }) || Geolizr.shopCurrency
}
;
Geolizr.switchCurrency = function(currency) {
    if (typeof currency === "string")
        currency = currency.trim();
    if (currency && Geolizr.moneyFormats[currency]) {
        Geolizr.setCurrency(currency)
    } else {
        Geolizr.setCurrency(Geolizr.shopCurrency)
    }
}
;
Geolizr.currencyConverterInit = function() {
    if (typeof Geolizr.formatMoney !== 'undefined' && typeof Geolizr.formatMoney === 'function') {
        Geolizr.formatMoney = function(cents, format) {
            var currency = Geolizr.getCurrency();
            if (Geolizr.moneyFormats[currency]) {
                var moneyFormat = Geolizr.moneyFormats[currency].moneyFormat;
                var originalPrice = parseInt(cents, 10);
                var convertedPrice = Geolizr.convert(originalPrice, Geolizr.shopCurrency, currency);
                return '<span class="geolizr-currency" data-geolizr-price="' + cents + '">' + Geolizr.shopifyFormatMoney(convertedPrice, moneyFormat) + '</span>'
            } else {
                return '<span class="geolizr-currency" data-geolizr-price="' + cents + '">' + Geolizr.shopifyFormatMoney(cents, format) + '</span>'
            }
        }
        ;
        Geolizr.formatMoneyInit = true
    }
    Geolizr.geolizrCountry = Geolizr.getURLParameter('geolizr_country');
    Geolizr.geolizrIp = Geolizr.getURLParameter('geolizr_ip');
    Geolizr.dispatchEvent('currency.api', {
        switchCurrency: Geolizr.switchCurrency,
        getCurrency: Geolizr.getCurrency
    });
    Geolizr.displayAutoCurrency(false)
}
;
Geolizr.displayAutoCurrency = function(wrapper) {
    var showHideCurrency = function(currency) {
        if (typeof wrapper === "object" && wrapper.find('.geolizr-currency-list-link[geolizr-currency-data="' + currency + '"]').length <= 0 && Geolizr.moneyFormats[currency]) {
            wrapper.find('.geolizr-currency-placeholder-value').text(currency);
            var currencyPlaceholder = wrapper.find('.geolizr-currency-placeholder');
            currencyPlaceholder.find('a').attr('geolizr-currency-data', currency);
            var usedLanguageCode = Geolizr.currenciesToLanguages[currency];
            if (usedLanguageCode) {
                currencyPlaceholder.find('i').attr('class', 'famfamfam-flag-' + usedLanguageCode)
            }
            currencyPlaceholder.show()
        }
    };
    var usedCurrency = Geolizr.getCurrency();
    if ((!Geolizr.cookie.get('geolizr-currency') || Geolizr.geolizrCountry || Geolizr.geolizrIp) && Geolizr.currencyOptions.auto_switch_currency === true) {
        Geolizr.getGeoData(function(geoData) {
            usedCurrency = geoData.currency.code;
            showHideCurrency(usedCurrency);
            Geolizr.switchCurrency(usedCurrency)
        })
    } else {
        Geolizr.switchCurrency(usedCurrency);
        if (Geolizr.currencyOptions.auto_switch_currency === true) {
            Geolizr.getGeoData(function(geoData) {
                showHideCurrency(geoData.currency.code)
            })
        }
    }
}
;
Geolizr.init = function(callback) {
    if (Geolizr.initState === 'true') {
        callback(Geolizr.jquery);
        return
    } else if (Geolizr.initState === 'pending') {
        Geolizr.initCallbackList.push(callback);
        return
    }
    Geolizr.initCallbackList.push(callback);
    Geolizr.initState = 'pending';
    var init = function($) {
        if (typeof window.$ === 'undefined')
            window.$ = $;
        Geolizr.jquery = $;
        Geolizr.jquery && function($) {
            function t(t, e) {
                var n = t ? $(this) : e;
                n.attr = n.attr || false;
                var d = $(n.attr("data-jq-dropdown"))
                  , a = n.hasClass("jq-dropdown-open");
                if (t) {
                    if ($(t.target).hasClass("jq-dropdown-ignore"))
                        return;
                    t.preventDefault(),
                    t.stopPropagation()
                } else if (n !== e.target && $(e.target).hasClass("jq-dropdown-ignore"))
                    return;
                d.data = d.data || function() {
                    return false
                }
                ;
                o(),
                a || n.hasClass("jq-dropdown-disabled") || (n.addClass("jq-dropdown-open"),
                d.data("jq-dropdown-trigger", n).show(),
                r(),
                d.trigger("show", {
                    jqDropdown: d,
                    trigger: n
                }))
            }
            function o(t) {
                var target = $(t.target);
                target.parents = target.parents || function() {
                    return false
                }
                ;
                var parents = target.parents();
                parents.addBack = parents.addBack || function() {
                    return false
                }
                ;
                var o = t ? parents.addBack() : null;
                o.is = o.is || function() {
                    return false
                }
                ;
                if (o && o.is(".jq-dropdown")) {
                    if (!o.is(".jq-dropdown-menu"))
                        return;
                    if (!o.is("A"))
                        return
                }
                var document = $(document);
                document.find = document.find || function() {
                    return false
                }
                ;
                var dropdownVisible = document.find(".jq-dropdown:visible");
                dropdownVisible.each = dropdownVisible.each || false;
                dropdownVisible.each(function() {
                    var t = $(this);
                    t.hide = t.hide || false;
                    var h = t.hide();
                    h.removeData = h.removeData || false;
                    h.removeData("jq-dropdown-trigger").trigger("hide", {
                        jqDropdown: t
                    })
                }),
                $(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open")
            }
            function r() {
                var jq = $(".jq-dropdown:visible");
                jq.eq = jq.eq || false;
                var t = jq.eq(0)
                  , o = t.data("jq-dropdown-trigger")
                  , r = o ? parseInt(o.attr("data-horizontal-offset") || 0, 10) : null
                  , e = o ? parseInt(o.attr("data-vertical-offset") || 0, 10) : null;
                o = o || {};
                t.outerWidth = t.outerWidth || false;
                t.outerHeight = t.outerHeight || false;
                o.offset = o.offset || false;
                0 !== t.length && o && t.css(t.hasClass("jq-dropdown-relative") ? {
                    left: t.hasClass("jq-dropdown-anchor-right") ? o.position().left - (t.outerWidth(!0) - o.outerWidth(!0)) - parseInt(o.css("margin-right"), 10) + r : o.position().left + parseInt(o.css("margin-left"), 10) + r,
                    top: o.position().top + o.outerHeight(!0) - parseInt(o.css("margin-top"), 10) + e
                } : {
                    left: t.hasClass("jq-dropdown-anchor-right") ? o.offset().left - (t.outerWidth() - o.outerWidth()) + r : o.offset().left + r,
                    top: o.offset().top + o.outerHeight() + e
                })
            }
            $.fn = $.fn || {};
            var _document = $(document);
            _document.on = _document.on || function() {
                return false
            }
            ;
            $.extend($.fn, {
                jqDropdown: function(r, e) {
                    var _this = $(this);
                    _this.removeAttr = _this.removeAttr || function() {
                        return false
                    }
                    ;
                    switch (r) {
                    case "show":
                        return t(null, $(this)),
                        $(this);
                    case "hide":
                        return o(),
                        $(this);
                    case "attach":
                        return $(this).attr("data-jq-dropdown", e);
                    case "detach":
                        return o(),
                        _this.removeAttr("data-jq-dropdown");
                    case "disable":
                        return $(this).addClass("jq-dropdown-disabled");
                    case "enable":
                        return o(),
                        $(this).removeClass("jq-dropdown-disabled")
                    }
                }
            }),
            _document.on("click.jq-dropdown", "[data-jq-dropdown]", t),
            $(document).on("click.jq-dropdown", o),
            $(window).on("resize", r)
            var intervals = {};
            var removeListener = function(selector) {
                if (intervals[selector]) {
                    window.clearInterval(intervals[selector]);
                    intervals[selector] = null
                }
            };
            var found = 'waitUntilExists.found';
            $.fn.waitUntilExists = function(handler, shouldRunHandlerOnce, isChild) {
                var selector = this.selector;
                var $this = $(selector);
                var $elements = $this.not(function() {
                    return $(this).data(found)
                });
                if (handler === 'remove') {
                    removeListener(selector)
                } else {
                    $elements.each(handler).data(found, true);
                    if (shouldRunHandlerOnce && $this.length) {
                        removeListener(selector)
                    } else if (!isChild) {
                        intervals[selector] = window.setInterval(function() {
                            $this.waitUntilExists(handler, shouldRunHandlerOnce, true)
                        }, 500)
                    }
                }
                return $this
            }
        }(Geolizr.jquery, window);
        Geolizr.initState = 'true';
        for (var i = 0; i < Geolizr.initCallbackList.length; i++) {
            Geolizr.initCallbackList[i]($)
        }
        Geolizr.initCallbackList = []
    };
    document.addEventListener("DOMContentLoaded", function() {
        if ((typeof jQuery === 'undefined') || (Geolizr.versionCompare(jQuery.fn.jquery, '1.7.0') <= 0)) {
            Geolizr.loadScript('//cdn.shopify.com/s/files/1/1102/5626/files/jquery-1.9.1.min.js', function() {
                jQuery.noConflict = jQuery.noConflict || function() {
                    return this
                }
                ;
                var jQuery191 = jQuery.noConflict(true);
                init(jQuery191)
            })
        } else {
            init(jQuery)
        }
    })
}
;
Geolizr.realInit = Geolizr.init;
Geolizr.realGetGeoData = Geolizr.getGeoData;
Geolizr.realAddEventListener = Geolizr.addEventListener
Geolizr.onDomChanges = function(records) {
    console.log(records);
    Geolizr.switchCurrency(Geolizr.getCurrency())
}
;
Geolizr.observer = new MutationObserver(Geolizr.onDomChanges);
Geolizr.observe = function() {
    Geolizr.observeElements.forEach(function(el) {
        var elObjects = Geolizr.jquery(el);
        if (elObjects.length > 0) {
            for (var i = 0; i < elObjects.length; i++) {
                Geolizr.observer.observe(elObjects[i], {
                    childList: true,
                    attributes: true,
                    characterData: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true,
                    attributeFilter: []
                })
            }
        }
    })
}
;
Geolizr.disconnectObserver = function() {
    Geolizr.observer.disconnect()
}
;
Geolizr.addDomInspectors = function(key) {
    Geolizr.observeElements.push(key)
}
;
!function(s) {
    "use strict";
    var e = function(e, n, t) {
        var o, i = s.document, r = i.createElement("link");
        if (n)
            o = n;
        else {
            var d = (i.body || i.getElementsByTagName("head")[0]).childNodes;
            o = d[d.length - 1]
        }
        var a = i.styleSheets;
        r.rel = "stylesheet",
        r.href = e,
        r.media = "only x",
        function e(n) {
            if (i.body)
                return n();
            setTimeout(function() {
                e(n)
            })
        }(function() {
            o.parentNode.insertBefore(r, n ? o : o.nextSibling)
        });
        var l = function(e) {
            for (var n = r.href, t = a.length; t--; )
                if (a[t].href === n)
                    return e();
            setTimeout(function() {
                l(e)
            })
        };
        function f() {
            r.addEventListener && r.removeEventListener("load", f),
            r.media = t || "all"
        }
        return r.addEventListener && r.addEventListener("load", f),
        (r.onloadcssdefined = l)(f),
        r
    };
    "undefined" !== typeof exports ? exports.loadCSS = e : s.loadCSS = e
}("undefined" != typeof global ? global : this);
Geolizr.loadCSS = loadCSS;
if (typeof Geolizr.geolizrCssFile === "string" && Geolizr.geolizrCssFile.length > 0) {
    Geolizr.loadCSS(Geolizr.geolizrCssFile);
    Geolizr.geolizrCssFile = false
}
Geolizr.domObserver = function(config) {
    var setEvent = 0;
    var observeElement = false
    var delay = config.delay || 200;
    var OnNodeInserted = function(event) {
        if (config.checkForClassName) {
            if ($(event.target).hasClass(config.checkForClassName)) {
                $(event.target).ready(function() {
                    if (setEvent > 0)
                        clearTimeout(setEvent);
                    setEvent = setTimeout(setCurrentCurrency, delay)
                })
            }
        } else {
            $(event.target).ready(function() {
                if (setEvent > 0)
                    clearTimeout(setEvent);
                setEvent = setTimeout(setCurrentCurrency, delay)
            })
        }
    };
    var setCurrentCurrency = function() {
        Geolizr.setCurrency(Geolizr.getCurrency());
        if (config.observerPersists !== true) {
            observeElement[0].removeEventListener('DOMNodeInserted', OnNodeInserted, false)
        }
    };
    if (typeof config.observeObject === "undefined") {
        observeElement = $('body')
    } else {
        observeElement = $(config.observeObject)
    }
    if (observeElement.length > 0)
        observeElement[0].addEventListener('DOMNodeInserted', OnNodeInserted, false)
}
;
Geolizr.supportExternalApps = function() {
    if (typeof window.saso_config === "object") {
        Geolizr.addEventListener('currency.change', function(currency) {
            Geolizr.convertAll(Geolizr.shopCurrency, currency, ".original_price,.discounted_price,.saso-cart-total,.saso-price span.money")
        });
        Geolizr.domObserver({
            observeObject: '#saso-cart-total'
        })
    }
    if ($('limespot').length > 0) {
        Geolizr.addEventListener('currency.change', function(currency) {
            Geolizr.convertAll(Geolizr.shopCurrency, currency)
        });
        Geolizr.domObserver({
            'checkForClassName': 'limespot-recommendation-box-item',
            'observerPersists': true
        })
    }
    if (typeof window.BOLD !== "undefined" && typeof window.BOLD.bundles !== "undefined") {
        Geolizr.addEventListener('currency.change', function(currency) {
            Geolizr.convertAll(Geolizr.shopCurrency, Geolizr.shopCurrency, ".cart .money, .bold-bundles-widget-item__price--old .money, .bold-bundles-widget-item__price--new .money", "${{amount_no_decimals}}")
        });
        Geolizr.domObserver({
            observeObject: '.bold-bundle'
        });
        Geolizr.domObserver({
            observeObject: '.cart',
            checkForClassName: 'bundle_visible_prop'
        })
    }
    if (typeof window.Flickity === "function") {
        Geolizr.addEventListener('currency.change', function(currency) {
            Geolizr.convertAll(Geolizr.shopCurrency, "USD", ".flickity-viewport span.money")
        });
        Geolizr.domObserver({
            checkForClassName: 'flickity-viewport'
        })
    }
}
;
Geolizr.init(function($) {
    $(function() {
        if (typeof Geolizr.events === "undefined")
            Geolizr.events = {};
        if (Object.keys(Geolizr.events).length > 0) {
            Object.keys(Geolizr.events).forEach(function(name) {
                Geolizr.events[name].forEach(function(callback) {
                    Geolizr.addEventListener(name, callback)
                })
            })
        }
        Geolizr.dispatchEvent("geolizr.init", $);
        if (typeof Geolizr.geolizrEvents === "undefined")
            Geolizr.geolizrEvents = [];
        Geolizr.geolizrEvents.forEach(function(event) {
            event.jquery = $;
            document.dispatchEvent(event)
        })
    });
    Geolizr.addEventListener("currency.api", function() {
        var elements = ["#ajaxifyCart", ".cart-toggle"];
        elements.forEach(function(el) {
            if ($(el).length > 0 && !$(el).hasClass('gl_observe')) {
                Geolizr.addDomInspectors(el);
                $(el).addClass('gl_observe')
            }
        });
        if (Geolizr.observeElements.length > 0) {
            Geolizr.disconnectObserver();
            Geolizr.observe()
        }
        Geolizr.supportExternalApps()
    })
})
