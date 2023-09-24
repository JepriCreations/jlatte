# jlatte ☕

This is a Node.js script that helps you to easily perform language translation on your project's languages .json files using the Google Translate API. It can automatically detect the source language in a specified folder and translate the content in the correspondent files.

No configuration needed.

Nested objects support.

## 📦 Installation
Install it as a dev dependency in your project.

```sh
npm install -D jlatte
```
or

```sh
pnpm add jlatte -D
```
## 🧑‍💻 Usage
1. Inside the folder that you use for your .json languages, create the source language file, for example, ``en.json`` with all the translations. 
Note: you can add after new translation, and if you have change manually any of the translations it will keep it as it is.

2. Create in the same folder than the source language file, an empty .json file for every of the desired languages. For example ``es.json``.
Note: check for the available language codes in [Available codes](#available-codes)

3. Execute the CLI in your project
```sh
pnpm jlatte
```
Note: you can create a script on your package.json for convenience as:
```sh
scripts{
   "translate": "pnpm jlatte <sourceFilePath> <sort>"
}
```
Replace ``<sourceFilePath>`` with the path to the source JSON file, and ``<sort>`` with true or false depending if you want to sort the object keys alphabetically or not, where true es "yes" and false is "not".

Example:
```sh
scripts{
   "translate": "pnpm jlatte languages/en.json true"
}
```
and then just execute:
```sh
pnpm translate
```

## Available codes
| Language            | Code |
|---------------------|------|
| Afar                | aa   |
| Abkhazian           | ab   |
| Afrikaans           | af   |
| Akan                | ak   |
| Albanian            | sq   |
| Amharic             | am   |
| Arabic              | ar   |
| Aragonese           | an   |
| Armenian            | hy   |
| Assamese            | as   |
| Avaric              | av   |
| Avestan             | ae   |
| Aymara              | ay   |
| Azerbaijani         | az   |
| Bashkir             | ba   |
| Bambara             | bm   |
| Basque              | eu   |
| Belarusian          | be   |
| Bengali             | bn   |
| Bihari Languages    | bh   |
| Bislama             | bi   |
| Tibetan             | bo   |
| Bosnian             | bs   |
| Breton              | br   |
| Bulgarian           | bg   |
| Burmese             | my   |
| Catalan             | ca   |
| Valencian           | ca   |
| Czech               | cs   |
| Chamorro            | ch   |
| Chechen             | ce   |
| Chinese             | zh   |
| Church Slavic       | cu   |
| Old Slavonic        | cu   |
| Church Slavonic     | cu   |
| Old Bulgarian       | cu   |
| Old Church Slavonic | cu   |
| Chuvash             | cv   |
| Cornish             | kw   |
| Corsican            | co   |
| Cree                | cr   |
| Welsh               | cy   |
| Danish              | da   |
| German              | de   |
| Divehi              | dv   |
| Dhivehi             | dv   |
| Maldivian           | dv   |
| Dutch               | nl   |
| Flemish             | nl   |
| Dzongkha             | dz   |
| Greek               | el   |
| English             | en   |
| Esperanto           | eo   |
| Estonian            | et   |
| Ewe                 | ee   |
| Faroese             | fo   |
| Persian             | fa   |
| Fijian              | fj   |
| Finnish             | fi   |
| French              | fr   |
| Western Frisian     | fy   |
| Fula                | ff   |
| Georgian            | ka   |
| Gaelic              | gd   |
| Scottish Gaelic     | gd   |
| Irish               | ga   |
| Galician            | gl   |
| Manx                | gv   |
| Guarani             | gn   |
| Gujarati            | gu   |
| Haitian             | ht   |
| Haitian Creole      | ht   |
| Hausa               | ha   |
| Hebrew              | he   |
| Herero              | hz   |
| Hindi               | hi   |
| Hiri Motu           | ho   |
| Croatian            | hr   |
| Hungarian           | hu   |
| Igbo                | ig   |
| Icelandic           | is   |
| Ido                 | io   |
| Sichuan Yi          | ii   |
| Nuosu               | ii   |
| Inuktitut           | iu   |
| Interlingue         | ie   |
| Occidental          | ie   |
| Interlingua         | ia   |
| Indonesian          | id   |
| Inupiaq             | ik   |
| Italian             | it   |
| Javanese            | jv   |
| Japanese            | ja   |
| Kalaallisut         | kl   |
| Greenlandic         | kl   |
| Kannada             | kn   |
| Kashmiri            | ks   |
| Kanuri              | kr   |
| Kazakh              | kk   |
| Central Khmer       | km   |
| Kikuyu              | ki   |
| Gikuyu              | ki   |
| Kinyarwanda         | rw   |
| Kirghiz             | ky   |
| Kyrgyz              | ky   |
| Komi                | kv   |
| Kongo               | kg   |
| Korean              | ko   |
| Kuanyama            | kj   |
| Kwanyama            | kj   |
| Kurdish             | ku   |
| Lao                 | lo   |
| Latin               | la   |
| Latvian             | lv   |
| Limburgan           | li   |
| Limburger           | li   |
| Limburgish          | li   |
| Lingala             | ln   |
| Lithuanian          | lt   |
| Luxembourgish       | lb   |
| Letzeburgesch       | lb   |
| Luba-Katanga        | lu   |
| Ganda               | lg   |
| Macedonian          | mk   |
| Marshallese         | mh   |
| Malayalam           | ml   |
| Maori               | mi   |
| Marathi             | mr   |
| Malay               | ms   |
| Malagasy            | mg   |
| Maltese             | mt   |
| Mongolian           | mn   |
| Nauru               | na   |
| Navajo              | nv   |
| Navaho              | nv   |
| Ndebele, South      | nr   |
| South Ndebele       | nr   |
| Ndebele, North      | nd   |
| North Ndebele       | nd   |
| Ndonga              | ng   |
| Nepali              | ne   |
| Norwegian Nynorsk   | nn   |
| Nynorsk, Norwegian  | nn   |
| Norwegian Bokmål    | nb   |
| Bokmål, Norwegian   | nb   |
| Norwegian           | no   |
| Chichewa            | ny   |
| Chewa               | ny   |
| Nyanja              | ny   |
| Occitan             | oc   |
| Ojibwa              | oj   |
| Oriya               | or   |
| Oromo               | om   |
| Ossetian            | os   |
| Ossetic             | os   |
| Panjabi             | pa   |
| Punjabi             | pa   |
| Pali                | pi   |
| Polish              | pl   |
| Portuguese          | pt   |
| Pushto              | ps   |
| Pashto              | ps   |
| Quechua             | qu   |
| Romansh             | rm   |
| Romanian            | ro   |
| Moldavian           | ro   |
| Moldovan            | ro   |
| Rundi               | rn   |
| Russian             | ru   |
| Sango               | sg   |
| Sanskrit            | sa   |
| Sinhala             | si   |
| Sinhalese           | si   |
| Slovak              | sk   |
| Slovenian           | sl   |
| Northern Sami       | se   |
| Samoan              | sm   |
| Shona               | sn   |
| Sindhi              | sd   |
| Somali              | so   |
| Sotho, Southern     | st   |
| Spanish             | es   |
| Sardinian           | sc   |
| Serbian             | sr   |
| Swati               | ss   |
| Sundanese           | su   |
| Swahili             | sw   |
| Swedish             | sv   |
| Tahitian            | ty   |
| Tamil               | ta   |
| Tatar               | tt   |
| Telugu              | te   |
| Tajik               | tg   |
| Tagalog             | tl   |
| Thai                | th   |
| Tigrinya            | ti   |
| Tonga               | to   |
| Tswana              | tn   |
| Tsonga              | ts   |
| Turkmen             | tk   |
| Turkish             | tr   |
| Twi                 | tw   |
| Uighur              | ug   |
| Ukrainian           | uk   |
| Urdu                | ur   |
| Uzbek               | uz   |
| Venda               | ve   |
| Vietnamese          | vi   |
| Volapük             | vo   |
| Walloon             | wa   |
| Wolof               | wo   |
| Xhosa               | xh   |
| Yiddish             | yi   |
| Yoruba              | yo   |
| Zhuang              | za   |
| Chuang              | za   |
| Zulu                | zu   |



## 🎖️ Credits
[Translate](https://github.com/franciscop/translate) as base for the translations.

[Clack](https://github.com/natemoo-re/clack/tree/main/packages/prompts) and [picocolors](https://github.com/alexeyraspopov/picocolors) for the command-line interface