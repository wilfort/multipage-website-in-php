/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","3172edfd9d1fee42c303f9adf325f394"],["assets/css/carousel.css","dd1f0cdfba8919c32d7182d0ea33973d"],["assets/css/cookieconsent.min.css","5cbae32b3f95a10b80a9c9dcd6bf30ea"],["assets/css/style.css","39f608ddb102cf534704eb7c534846e3"],["assets/doc/fiche-inscription-CGE-2016-2017.doc","6db882feba29e33e3317f3b36ef12837"],["assets/doc/fiche-inscription-atelier.doc","d181c89e22e63895501120997a3b90f6"],["assets/img/110114logocommunerixensart.jpg","09525348f47405c6b4a4d28f9744726d"],["assets/img/2013-GSK-Logo-with-Strapline.jpg","60a47eccbab39f7977b085e4faac7c20"],["assets/img/Bande-Citoyen-en-action.jpg","18e1765a864af9ef8f6a4250eb2f48f1"],["assets/img/Bandeau-Primaire-1024x470.jpg","bfd2136216eb037ee30f5c5a010be619"],["assets/img/Bandeau-accessibilité-888x317.jpg","5aad8ba6849dde5f7aa7b574d87d0e84"],["assets/img/Entrée-du-tilt-e1474556720214-888x317.jpg","e49cf5c8e54bb3992e21f596646170e8"],["assets/img/Groupe-1-Petit-888x317.jpg","2cfd8946d5476333482a97750710a63a"],["assets/img/Les-classes-maternelles.jpg","91925d066fc1f891f8bc2942bcbf44d1"],["assets/img/Loterie-carr.jpg","50d9bd466980b847312b6af03fb46a30"],["assets/img/Région-Wallonne.jpg","797f338ed576caddf53c1814c2b6b8c9"],["assets/img/Schémas-le-monde-en-projet.jpg","8722bc5ba674b6935908cf3dc92464a8"],["assets/img/StageSite.png","68ca4411848fd2793007548bcb70806c"],["assets/img/Visite-ecole-maternelle-14102011-026-copie-1024x6851-888x317.jpg","5089b9cfebfe11c5bbcdd2fc32b7c1bf"],["assets/img/formation.jpg","e6078bcc418282a8dd6a866c25f1b66b"],["assets/img/kiroundg.gif","708e7c52217d6ca75f397f0d23f11b5e"],["assets/img/local.jpg","0324f895251720f41b24c5277f35f2dc"],["assets/img/logo.png","03fe7f9b256893769adfe593ca27cb30"],["assets/img/logoCrayon.png","639b0256f722af3de9787ee4c04bc1a6"],["assets/img/logoFouet.png","f0533f2cf6c66d62174618eb0c6c0561"],["assets/img/logoStage.png","499e16076a9cbb84e7743eaef10b54a4"],["assets/img/logo_reine.paola_.jpg","67b395b7c7a0441bf7965c7c46e3e930"],["assets/img/plan-daccès-tilt.jpg","9676d1d8603301e6ebb356b6e775bb03"],["assets/img/presentation.jpg","6a9a5d59caeb45858d7002639f451c64"],["assets/img/round_square_logo_fr_be.png","72b5fdabc1688873d0d8049d2bd8cf0b"],["assets/img/stage-2016-2.jpg","89f8eb6cc09c85048918b823b07149aa"],["assets/img/stage-2016-3.jpg","3fe22804b0ca9fa3c7277e8e33627a4e"],["assets/img/stage-2016.jpg","2843f10733a720594a55df074b2e31e7"],["assets/img/tilt-logo-article27.jpg","300052bf36764bbe6beb09c07ac4e825"],["assets/img/tilt-logo-bw.jpg","db7825669d819985976e620d8b2777d6"],["assets/img/tilt-logo-cap48.jpg","ec5ea007501c22c3746e302b6b05b0e3"],["assets/img/tilt-logo-fwb.jpg","cc2a3c7ddcaff3ab562392dd2e0f9b64"],["assets/img/tilt-logo-gazette-kid.jpg","84a17472673d5b615d225debca14a146"],["assets/img/tilt-logo-one.jpg","01c54eee34e57b2e3482b249b15b3e22"],["assets/img/tilt-logo-spw.jpg","8fa10e349c1db979300e4915d41882c8"],["assets/img/tilt-logo-tvcom.jpg","4ef3a3ec53d2ca4d9a4edf638c3222ad"],["assets/js/carousel.js","49ed97001c5df43188576f41e7632b5d"],["assets/js/cookieconsent.min.js","24fe2c0444e1e6a4d9bda59cdb2edf85"],["assets/js/script.js","5e808e4e9e190fb09ef3c2d8cb06bbaa"],["assets/log.txt","db0deec8a3fb7e83824f2a9ecd3fc09c"],["assets/logMail.txt","41e9e670e72d350f36becf3e2a9fbcfa"],["assets/logUploads.txt","dcfb66d174b9f8d8f8645bd4c206d555"],["assets/message.txt","f999bbdb73b01c281010d0cc76f0309c"],["assets/pdf/2018CONDGENSTG.pdf","3914d9e64494d2e8e59c5da87fe799c7"],["assets/php/admin-form.php","3476d6903eaedbf7a3565c20aedc97b0"],["assets/php/mailer.php","86056376bea45c636a769b8cbe76bf16"],["assets/php/phpmailer.php","1cf8d2ef857e989a1562011c90d4b3c7"],["assets/php/sanitizer.php","1214b11b7809c7e213b77335c0da10bb"],["assets/php/upload.php","ecc418d2c85433028bb8b2e8ce30c8d2"],["assets/uploads/20180804_123149_1.jpg","3db2aee8d7bbc83143bd14c00d11ce1f"],["assets/vue/footer.php","938a5e5d7e4716ca87235ecff22bf9bc"],["assets/vue/header.php","595e78c9b8d99572acb2a86f12a5826d"],["assets/vue/link.php","a8811c68438848980f19941b4f1fbc0a"],["assets/vue/log.php","2c1be90922f38e969e4a5e8544cb5ceb"],["assets/vue/logActiviter.php","b9b7fa260bbd86faa43e56b69d102123"],["assets/vue/mail.php","c500479cdd84c62beda7debd89bd5838"],["assets/vue/traitement-mail.php","a8e76acb908f0454a9b44241ee9b0e08"],["composer.json","8a599cbb8ee39d8287ef2e022bf5a556"],["composer.lock","d1f81b569cc3159c64246739ed0d4754"],["contact.php","9d28de6ea56a14b845b832a869dcc2ae"],["cookie.php","8cff2f6053da0f0f4fcb681dfe3a0ddc"],["cookie.txt","d41d8cd98f00b204e9800998ecf8427e"],["enfant.php","ab87585978f38673e8f8427872a4bf62"],["fontionnement backend de la page contact php.png","04a95b317f75aed4dda0579dcc254995"],["form-logs.php","4722dd38700af3007f6807a9143852ec"],["gdpr.js","b4e07554508f858f46647ccddc4e4ec1"],["gdpr.php","80c58b3b474c4ca0fdba6cbba0a15004"],["index.php","5f1502f55bec803e51da53a03a623b78"],["log.txt","998714fcc7753a4fb17479bd7b059936"],["manifest.json","e93ee39517402b7a135fd1742eeb1108"],["prof.php","3ed7faab8442094eacc5c9ca96175f6e"],["vendor/autoload.php","45ff0ce77a307050fbffb3f7c48e74c0"],["vendor/composer/ClassLoader.php","7bcd58ef2df6fe97165bea70fe9c7712"],["vendor/composer/autoload_classmap.php","67a383045bff8e5f80d0f80c399a5495"],["vendor/composer/autoload_namespaces.php","35e12c7d76c4a81633bcf547c0e229a9"],["vendor/composer/autoload_psr4.php","bef49c9294d2e96895a4c28fd166a876"],["vendor/composer/autoload_real.php","b61b916aa8f2180506343e932c8dd221"],["vendor/composer/autoload_static.php","b714ebda31fcefa8abee1bd736d33044"],["vendor/composer/installed.json","ef4f66d1609a8dfc27cf825520cff7cb"],["vendor/phpmailer/phpmailer/README.md","940d9ba78de02f99713dc4cba7cf853f"],["vendor/phpmailer/phpmailer/SECURITY.md","5202468726f825a4ac72e4e93fca6d09"],["vendor/phpmailer/phpmailer/get_oauth_token.php","0bebd0991f833d404eae1f4169f12d03"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-am.php","46dcd505d56a950198d9aa84385f94a2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ar.php","312e3d6b9b67338bdbe8cdce5c911278"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-az.php","56d774311cad93c3935f7e0bae385c31"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ba.php","288d90dc839febcb80f24ef24dd91a7b"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-be.php","ed20568de7c20ec102935043c8201af2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-bg.php","20589ae4ffe53e701190e19794731e82"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ca.php","632c0caa936fa9575f6a089c84ffd2cc"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ch.php","94100d2b2dc17ac67579a4499a13d9c2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-cs.php","3b2be0a69d0f145ccd7288d31131b043"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-da.php","2f2b474f532ab2ee3d92395f3c5b0e0c"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-de.php","e76eef12bcc910c9fb7b6f4c6781658b"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-el.php","a05aa8b2f630a31493922b24b4b93b2e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-eo.php","c2ac8c3ea177248b481c66e5b4c6a463"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-es.php","2868a1611e605385f5e8a0a0c39976af"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-et.php","fa5e67af621d49a64d8766a8a5c55386"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fa.php","62ee650e737866d7b819d8f349db92e6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fi.php","2a9b439722f490ae350f7dbc25198d79"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fo.php","cfd27a7f91f0f4f2a4846cc10839dfd6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fr.php","f15bc9c06bdbd0532cceabc75784bd46"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-gl.php","b2ca56ae4030b23dad54fcd1770838bc"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-he.php","18049afa12f6341a28464a8240547496"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hi.php","9c16e72cdef57089e3111a58382d2d9e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hr.php","0b2a5b47bd0b46eb7cbf43b531229539"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hu.php","b562487c73f60e245d1a1671dc9c1573"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-id.php","d33f3b2facdea271b3506d3946f80684"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-it.php","2343321d68a0f537731094d94cb018ce"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ja.php","3cd5d83da61896f05af3b0e3afc4120f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ka.php","dde630065bad8dfef600c47eecfca2c2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ko.php","58a5b654f0322ba94713956e9fe2cbde"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-lt.php","95d8e64b4ea89cf7429053f2191b4c56"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-lv.php","70881d6b394785c9c85bfeca355c7e45"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ms.php","d3bf25210a06e7ab8b407f140d5d6612"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-nb.php","47a1156689dd8d71488d19feb4e2a957"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-nl.php","f1bbf9fa400300827982247005eedd16"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pl.php","ddbd3d779da4c2a86964361665248b79"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pt.php","e43a3661566d39f7f6094905c5fa142e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pt_br.php","48dd712cfb4932969171d7f49308ce8f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ro.php","97dd1085d2495783b04790f9a6d5190f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-rs.php","563da4ca11458562b6e938bc7742248a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php","ab761bc79974a307b6d482f361c9a70a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sk.php","c7ba3b001f45220f9aa7cd6e4101f58c"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sl.php","da14fff5b9752f8a14be805703fb5e50"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sv.php","ea5c4060572ebb34b0e409206af22d5a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-tr.php","0b9b8615f536f95ec22381707441fbe6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-uk.php","60cf6cf5d5380e7573bed1f2039a6fb6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-vi.php","13ac94e759a8baeb4f8b6d186ed9a0b6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-zh.php","4099efcb36a6e5609d30d5498fa5c6ff"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-zh_cn.php","f29e829c90e3f89bcd1fc29f9cf58ea4"],["vendor/phpmailer/phpmailer/src/Exception.php","89150e124021d4814e1456eb6290f3f3"],["vendor/phpmailer/phpmailer/src/OAuth.php","982ffd225fdc01a3b80a3c1fec2155a8"],["vendor/phpmailer/phpmailer/src/PHPMailer.php","b771fddb588379917d54dee66bed3ed6"],["vendor/phpmailer/phpmailer/src/POP3.php","b751761c7421d3a0113725b2b1ab773c"],["vendor/phpmailer/phpmailer/src/SMTP.php","4fbdc1952dba7d7cb54e575515642af2"],["vendor/verot/class.upload.php/LICENSE.txt","fdafc691aa5fb7f8e2a9e9521fef771b"],["vendor/verot/class.upload.php/README.md","b89d8843dffed948168e3116b339b358"],["vendor/verot/class.upload.php/composer.json","225e8e24e9953ca1a63bc56e4569d214"],["vendor/verot/class.upload.php/src/class.upload.php","bf725c688a5fc93af2b9b8e5e6754803"],["vendor/verot/class.upload.php/src/lang/class.upload.ca_CA.php","e8cc802d3c414d7bc550735ca0cf202e"],["vendor/verot/class.upload.php/src/lang/class.upload.cs_CS.php","c57150cbc955077efeebd9504d1b02bc"],["vendor/verot/class.upload.php/src/lang/class.upload.da_DK.php","8d8d3f08363f5bfdc0aef37ef12f404c"],["vendor/verot/class.upload.php/src/lang/class.upload.de_DE.php","116255ae466eda65d371a6eefb96482a"],["vendor/verot/class.upload.php/src/lang/class.upload.el_GR.php","8b0c86ccc5d6897b1be769adc904ef87"],["vendor/verot/class.upload.php/src/lang/class.upload.es_ES.php","16dc9468e35b0019477701aa82d44c40"],["vendor/verot/class.upload.php/src/lang/class.upload.et_EE.php","d2c956a7348e2151af3e91ed8043e704"],["vendor/verot/class.upload.php/src/lang/class.upload.fa_IR.php","a777945c45df0c97fc891876ce440704"],["vendor/verot/class.upload.php/src/lang/class.upload.fi_FI.php","f209747c0a2597a757cdfad6e1546a14"],["vendor/verot/class.upload.php/src/lang/class.upload.fr_FR.php","56b1f00b441ae2c06c1159a421064c12"],["vendor/verot/class.upload.php/src/lang/class.upload.he_IL.php","e1b87ceec3af27d81ae46d93607707f3"],["vendor/verot/class.upload.php/src/lang/class.upload.hr_HR.php","c1ac4b49c1c98bbc6f655dfbab3b62e1"],["vendor/verot/class.upload.php/src/lang/class.upload.hu_HU.php","158824bd0ebf20da07aac3f6d32b926b"],["vendor/verot/class.upload.php/src/lang/class.upload.id_ID.php","9fe138f670b0cf733e297a99b4ceff5d"],["vendor/verot/class.upload.php/src/lang/class.upload.it_IT.php","1925f369d9e0de54bd4bc102355e54da"],["vendor/verot/class.upload.php/src/lang/class.upload.ja_JP.php","e5ddd650129412d7100a0a1f24a019e9"],["vendor/verot/class.upload.php/src/lang/class.upload.lt_LT.php","a151598381402a6b471bbfd24f35878e"],["vendor/verot/class.upload.php/src/lang/class.upload.mk_MK.php","c2b58814e84ff5670c3a20a04a1ab341"],["vendor/verot/class.upload.php/src/lang/class.upload.nl_NL.php","43dc2d15a9321219d2364c74aa0f4e8f"],["vendor/verot/class.upload.php/src/lang/class.upload.no_NO.php","74b16f14c11411eaee0d249808ee2504"],["vendor/verot/class.upload.php/src/lang/class.upload.pl_PL.php","47722bc0438665267cdf7ef17847d5bb"],["vendor/verot/class.upload.php/src/lang/class.upload.pt_BR.php","fcb161e05ff07c0f01040093d889896d"],["vendor/verot/class.upload.php/src/lang/class.upload.ro_RO.php","fe3839dd9940d63e7aa3e735e0fbe6f5"],["vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.php","89c5ad03fa4903d9f35928d51702e96f"],["vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.windows-1251.php","78b81c87f45c28a30a1eeef88431fa94"],["vendor/verot/class.upload.php/src/lang/class.upload.sk_SK.php","dff04a0b2d556bbba21034431ad179b6"],["vendor/verot/class.upload.php/src/lang/class.upload.sr_YU.php","de78833266760e91b88fa0ac30e4be93"],["vendor/verot/class.upload.php/src/lang/class.upload.sv_SE.php","c63f52f3de3112adc3a198dd811bf172"],["vendor/verot/class.upload.php/src/lang/class.upload.ta_TA.php","b6cd16b973f767d7984a4ff9b06779d7"],["vendor/verot/class.upload.php/src/lang/class.upload.tr_TR.php","5b7c656dea0f540fdc3e480b4c954f0f"],["vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.php","fa7af99738b3411f9118a3ec74f38d44"],["vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.windows-1251.php","b075532c3dcf80b0a33fbac42266ea7a"],["vendor/verot/class.upload.php/src/lang/class.upload.vn_VN.php","155597b3a90c440c4e5eb2f7ebc6bd83"],["vendor/verot/class.upload.php/src/lang/class.upload.xx_XX.php","1ed052b8736ef8ce781680ce22fb9005"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.gb-2312.php","605a7f0af2fe2b1864aa4a506831df99"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.php","0c54a397f0227143667b1d56c0229835"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_TW.php","37ba89153babb410edec6693da3160c8"],["vendor/verot/class.upload.php/test/bg.gif","a28ef71a1c661330f0a0abd4fe6fa20d"],["vendor/verot/class.upload.php/test/foo.gdf","c23f6763e578afa9fc7c220a929a1216"],["vendor/verot/class.upload.php/test/foo.ttf","74692ba304e5cbd6849892291188cb28"],["vendor/verot/class.upload.php/test/index.html","372e5e685052f1499ec82adb6d91b9a0"],["vendor/verot/class.upload.php/test/test.bmp","7845e38372dde8e2d1e7b92be94e82bc"],["vendor/verot/class.upload.php/test/test.gif","780a3e6e720cb83feff25f181dd7f3cc"],["vendor/verot/class.upload.php/test/test.jpg","fff1504892be82d505d7f43f212d756c"],["vendor/verot/class.upload.php/test/test.png","aa24e34400066bbb3bffa596839446bf"],["vendor/verot/class.upload.php/test/upload.php","ee8bfabaabd796f5eca7fa74175cf9b5"],["vendor/verot/class.upload.php/test/watermark.png","b68cb43acf0232f30a22d49d705911a3"],["vendor/verot/class.upload.php/test/watermark_large.png","9f2369168e3bc1edd6823fa8dd594018"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







