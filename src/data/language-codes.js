const languages = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Albanian",
        value: "sq"
    },
    {
        label: "Amharic",
        value: "am"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Armenian",
        value: "hy"
    },
    {
        label: "Azerbaijani",
        value: "az"
    },
    {
        label: "Basque",
        value: "eu"
    },
    {
        label: "Belarusian",
        value: "be"
    },
    {
        label: "Bengali",
        value: "bn"
    },
    {
        label: "Bosnian",
        value: "bs"
    },
    {
        label: "Bulgarian",
        value: "bg"
    },
    {
        label: "Catalan",
        value: "ca"
    },
    {
        label: "Cebuano",
        value: "ceb"
    },
    {
        label: "Chinese (Simplified)",
        value: "zh-CN"
    },
    {
        label: "Chinese (Traditional)",
        value: "zh-TW"
    },
    {
        label: "Corsican",
        value: "co"
    },
    {
        label: "Croatian",
        value: "hr"
    },
    {
        label: "Czech",
        value: "cs"
    },
    {
        label: "Danish",
        value: "da"
    },
    {
        label: "Dutch",
        value: "nl"
    },
    {
        label: "English",
        value: "en"
    },
    {
        label: "Esperanto",
        value: "eo"
    },
    {
        label: "Estonian",
        value: "et"
    },
    {
        label: "Finnish",
        value: "fi"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Frisian",
        value: "fy"
    },
    {
        label: "Galician",
        value: "gl"
    },
    {
        label: "Georgian",
        value: "ka"
    },
    {
        label: "German",
        value: "de"
    },
    {
        label: "Greek",
        value: "el"
    },
    {
        label: "Gujarati",
        value: "gu"
    },
    {
        label: "Haitian Creole",
        value: "ht"
    },
    {
        label: "Hausa",
        value: "ha"
    },
    {
        label: "Hawaiian",
        value: "haw"
    },
    {
        label: "Hebrew",
        value: "iw"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Hmong",
        value: "hmn"
    },
    {
        label: "Hungarian",
        value: "hu"
    },
    {
        label: "Icelandic",
        value: "is"
    },
    {
        label: "Igbo",
        value: "ig"
    },
    {
        label: "Indonesian",
        value: "id"
    },
    {
        label: "Irish",
        value: "ga"
    },
    {
        label: "Italian",
        value: "it"
    },
    {
        label: "Japanese",
        value: "ja"
    },
    {
        label: "Javanese",
        value: "jw"
    },
    {
        label: "Kannada",
        value: "kn"
    },
    {
        label: "Kazakh",
        value: "kk"
    },
    {
        label: "Khmer",
        value: "km"
    },
    {
        label: "Korean",
        value: "ko"
    },
    {
        label: "Kurdish",
        value: "ku"
    },
    {
        label: "Kyrgyz",
        value: "ky"
    },
    {
        label: "Lao",
        value: "lo"
    },
    {
        label: "Latin",
        value: "la"
    },
    {
        label: "Latvian",
        value: "lv"
    },
    {
        label: "Lithuanian",
        value: "lt"
    },
    {
        label: "Luxembourgish",
        value: "lb"
    },
    {
        label: "Macedonian",
        value: "mk"
    },
    {
        label: "Malagasy",
        value: "mg"
    },
    {
        label: "Malay",
        value: "ms"
    },
    {
        label: "Malayalam",
        value: "ml"
    },
    {
        label: "Maltese",
        value: "mt"
    },
    {
        label: "Maori",
        value: "mi"
    },
    {
        label: "Marathi",
        value: "mr"
    },
    {
        label: "Mongolian",
        value: "mn"
    },
    {
        label: "Myanmar (Burmese)",
        value: "my"
    },
    {
        label: "Nepali",
        value: "ne"
    },
    {
        label: "Norwegian",
        value: "no"
    },
    {
        label: "Nyanja (Chichewa)",
        value: "ny"
    },
    {
        label: "Pashto",
        value: "ps"
    },
    {
        label: "Persian",
        value: "fa"
    },
    {
        label: "Polish",
        value: "pl"
    },
    {
        label: "Portuguese (Portugal, Brazil)",
        value: "pt"
    },
    {
        label: "Punjabi",
        value: "pa"
    },
    {
        label: "Romanian",
        value: "ro"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Samoan",
        value: "sm"
    },
    {
        label: "Scots Gaelic",
        value: "gd"
    },
    {
        label: "Serbian",
        value: "sr"
    },
    {
        label: "Sesotho",
        value: "st"
    },
    {
        label: "Shona",
        value: "sn"
    },
    {
        label: "Sindhi",
        value: "sd"
    },
    {
        label: "Sinhala (Sinhalese)",
        value: "si"
    },
    {
        label: "Slovak",
        value: "sk"
    },
    {
        label: "Slovenian",
        value: "sl"
    },
    {
        label: "Somali",
        value: "so"
    },
    {
        label: "Spanish",
        value: "es"
    },
    {
        label: "Sundanese",
        value: "su"
    },
    {
        label: "Swahili",
        value: "sw"
    },
    {
        label: "Swedish",
        value: "sv"
    },
    {
        label: "Tagalog (Filipino)",
        value: "tl"
    },
    {
        label: "Tajik",
        value: "tg"
    },
    {
        label: "Tamil",
        value: "ta"
    },
    {
        label: "Telugu",
        value: "te"
    },
    {
        label: "Thai",
        value: "th"
    },
    {
        label: "Turkish",
        value: "tr"
    },
    {
        label: "Ukrainian",
        value: "uk"
    },
    {
        label: "Urdu",
        value: "ur"
    },
    {
        label: "Uzbek",
        value: "uz"
    },
    {
        label: "Vietnamese",
        value: "vi"
    },
    {
        label: "Welsh",
        value: "cy"
    },
    {
        label: "Xhosa",
        value: "xh"
    },
    {
        label: "Yiddish",
        value: "yi"
    },
    {
        label: "Yoruba",
        value: "yo"
    },
    {
        label: "Zulu",
        value: "zu"
    },
    {
        label: "Afrikaans (South Africa)",
        value: "af-ZA"
    },
    {
        label: "Amharic (Ethiopia)",
        value: "am-ET"
    },
    {
        label: "Armenian (Armenia)",
        value: "hy-AM"
    },
    {
        label: "Azerbaijani (Azerbaijan)",
        value: "az-AZ"
    },
    {
        label: "Indonesian (Indonesia)",
        value: "id-ID"
    },
    {
        label: "Malay (Malaysia)",
        value: "ms-MY"
    },
    {
        label: "Bengali (Bangladesh)",
        value: "bn-BD"
    },
    {
        label: "Bengali (India)",
        value: "bn-IN"
    },
    {
        label: "Catalan (Spain)",
        value: "ca-ES"
    },
    {
        label: "Czech (Czech Republic)",
        value: "cs-CZ"
    },
    {
        label: "Danish (Denmark)",
        value: "da-DK"
    },
    {
        label: "German (Germany)",
        value: "de-DE"
    },
    {
        label: "English (Australia)",
        value: "en-AU"
    },
    {
        label: "English (Canada)",
        value: "en-CA"
    },
    {
        label: "English (Ghana)",
        value: "en-GH"
    },
    {
        label: "English (United Kingdom)",
        value: "en-GB"
    },
    {
        label: "English (India)",
        value: "en-IN"
    },
    {
        label: "English (Ireland)",
        value: "en-IE"
    },
    {
        label: "English (Kenya)",
        value: "en-KE"
    },
    {
        label: "English (New Zealand)",
        value: "en-NZ"
    },
    {
        label: "English (Nigeria)",
        value: "en-NG"
    },
    {
        label: "English (Philippines)",
        value: "en-PH"
    },
    {
        label: "English (Singapore)",
        value: "en-SG"
    },
    {
        label: "English (South Africa)",
        value: "en-ZA"
    },
    {
        label: "English (Tanzania)",
        value: "en-TZ"
    },
    {
        label: "English (United States)",
        value: "en-US"
    },
    {
        label: "Spanish (Argentina)",
        value: "es-AR"
    },
    {
        label: "Spanish (Bolivia)",
        value: "es-BO"
    },
    {
        label: "Spanish (Chile)",
        value: "es-CL"
    },
    {
        label: "Spanish (Colombia)",
        value: "es-CO"
    },
    {
        label: "Spanish (Costa Rica)",
        value: "es-CR"
    },
    {
        label: "Spanish (Ecuador)",
        value: "es-EC"
    },
    {
        label: "Spanish (El Salvador)",
        value: "es-SV"
    },
    {
        label: "Spanish (Spain)",
        value: "es-ES"
    },
    {
        label: "Spanish (United States)",
        value: "es-US"
    },
    {
        label: "Spanish (Guatemala)",
        value: "es-GT"
    },
    {
        label: "Spanish (Honduras)",
        value: "es-HN"
    },
    {
        label: "Spanish (Mexico)",
        value: "es-MX"
    },
    {
        label: "Spanish (Nicaragua)",
        value: "es-NI"
    },
    {
        label: "Spanish (Panama)",
        value: "es-PA"
    },
    {
        label: "Spanish (Paraguay)",
        value: "es-PY"
    },
    {
        label: "Spanish (Peru)",
        value: "es-PE"
    },
    {
        label: "Spanish (Puerto Rico)",
        value: "es-PR"
    },
    {
        label: "Spanish (Dominican Republic)",
        value: "es-DO"
    },
    {
        label: "Spanish (Uruguay)",
        value: "es-UY"
    },
    {
        label: "Spanish (Venezuela)",
        value: "es-VE"
    },
    {
        label: "Basque (Spain)",
        value: "eu-ES"
    },
    {
        label: "Filipino (Philippines)",
        value: "fil-PH"
    },
    {
        label: "French (Canada)",
        value: "fr-CA"
    },
    {
        label: "French (France)",
        value: "fr-FR"
    },
    {
        label: "Galician (Spain)",
        value: "gl-ES"
    },
    {
        label: "Georgian (Georgia)",
        value: "ka-GE"
    },
    {
        label: "Gujarati (India)",
        value: "gu-IN"
    },
    {
        label: "Croatian (Croatia)",
        value: "hr-HR"
    },
    {
        label: "Zulu (South Africa)",
        value: "zu-ZA"
    },
    {
        label: "Icelandic (Iceland)",
        value: "is-IS"
    },
    {
        label: "Italian (Italy)",
        value: "it-IT"
    },
    {
        label: "Javanese (Indonesia)",
        value: "jv-ID"
    },
    {
        label: "Kannada (India)",
        value: "kn-IN"
    },
    {
        label: "Khmer (Cambodia)",
        value: "km-KH"
    },
    {
        label: "Lao (Laos)",
        value: "lo-LA"
    },
    {
        label: "Latvian (Latvia)",
        value: "lv-LV"
    },
    {
        label: "Lithuanian (Lithuania)",
        value: "lt-LT"
    },
    {
        label: "Hungarian (Hungary)",
        value: "hu-HU"
    },
    {
        label: "Malayalam (India)",
        value: "ml-IN"
    },
    {
        label: "Marathi (India)",
        value: "mr-IN"
    },
    {
        label: "Dutch (Netherlands)",
        value: "nl-NL"
    },
    {
        label: "Nepali (Nepal)",
        value: "ne-NP"
    },
    {
        label: "Norwegian Bokmål (Norway)",
        value: "nb-NO"
    },
    {
        label: "Polish (Poland)",
        value: "pl-PL"
    },
    {
        label: "Portuguese (Brazil)",
        value: "pt-BR"
    },
    {
        label: "Portuguese (Portugal)",
        value: "pt-PT"
    },
    {
        label: "Romanian (Romania)",
        value: "ro-RO"
    },
    {
        label: "Sinhala (Sri Lanka)",
        value: "si-LK"
    },
    {
        label: "Slovak (Slovakia)",
        value: "sk-SK"
    },
    {
        label: "Slovenian (Slovenia)",
        value: "sl-SI"
    },
    {
        label: "Sundanese (Indonesia)",
        value: "su-ID"
    },
    {
        label: "Swahili (Tanzania)",
        value: "sw-TZ"
    },
    {
        label: "Swahili (Kenya)",
        value: "sw-KE"
    },
    {
        label: "Finnish (Finland)",
        value: "fi-FI"
    },
    {
        label: "Swedish (Sweden)",
        value: "sv-SE"
    },
    {
        label: "Tamil (India)",
        value: "ta-IN"
    },
    {
        label: "Tamil (Singapore)",
        value: "ta-SG"
    },
    {
        label: "Tamil (Sri Lanka)",
        value: "ta-LK"
    },
    {
        label: "Tamil (Malaysia)",
        value: "ta-MY"
    },
    {
        label: "Telugu (India)",
        value: "te-IN"
    },
    {
        label: "Vietnamese (Vietnam)",
        value: "vi-VN"
    },
    {
        label: "Turkish (Turkey)",
        value: "tr-TR"
    },
    {
        label: "Urdu (Pakistan)",
        value: "ur-PK"
    },
    {
        label: "Urdu (India)",
        value: "ur-IN"
    },
    {
        label: "Greek (Greece)",
        value: "el-GR"
    },
    {
        label: "Bulgarian (Bulgaria)",
        value: "bg-BG"
    },
    {
        label: "Russian (Russia)",
        value: "ru-RU"
    },
    {
        label: "Serbian (Serbia)",
        value: "sr-RS"
    },
    {
        label: "Ukrainian (Ukraine)",
        value: "uk-UA"
    },
    {
        label: "Hebrew (Israel)",
        value: "he-IL"
    },
    {
        label: "Arabic (Israel)",
        value: "ar-IL"
    },
    {
        label: "Arabic (Jordan)",
        value: "ar-JO"
    },
    {
        label: "Arabic (United Arab Emirates)",
        value: "ar-AE"
    },
    {
        label: "Arabic (Bahrain)",
        value: "ar-BH"
    },
    {
        label: "Arabic (Algeria)",
        value: "ar-DZ"
    },
    {
        label: "Arabic (Saudi Arabia)",
        value: "ar-SA"
    },
    {
        label: "Arabic (Iraq)",
        value: "ar-IQ"
    },
    {
        label: "Arabic (Kuwait)",
        value: "ar-KW"
    },
    {
        label: "Arabic (Morocco)",
        value: "ar-MA"
    },
    {
        label: "Arabic (Tunisia)",
        value: "ar-TN"
    },
    {
        label: "Arabic (Oman)",
        value: "ar-OM"
    },
    {
        label: "Arabic (State of Palestine)",
        value: "ar-PS"
    },
    {
        label: "Arabic (Qatar)",
        value: "ar-QA"
    },
    {
        label: "Arabic (Lebanon)",
        value: "ar-LB"
    },
    {
        label: "Arabic (Egypt)",
        value: "ar-EG"
    },
    {
        label: "Persian (Iran)",
        value: "fa-IR"
    },
    {
        label: "Hindi (India)",
        value: "hi-IN"
    },
    {
        label: "Thai (Thailand)",
        value: "th-TH"
    },
    {
        label: "Korean (South Korea)",
        value: "ko-KR"
    },
    {
        label: "Chinese, Cantonese (Traditional, Hong Kong)",
        value: "yue-Hant-HK"
    },
    {
        label: "Japanese (Japan)",
        value: "ja-JP"
    },
    {
        label: "Chinese, Mandarin (Simplified, Hong Kong)",
        value: "zh-HK"
    },
    {
        label: "Chinese, Mandarin (Simplified, China)",
        value: "zh"
    }
];

export default languages;