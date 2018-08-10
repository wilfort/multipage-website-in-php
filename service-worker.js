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

var precacheConfig = [["README.md","472bb7b39facb0073d1dc97f8f049142"],["assets/css/carousel.css","cdb08ce4f07233f00e128027bdf2fdbc"],["assets/css/cookieconsent.min.css","3ddff9c54ff2df56fda345b21cfd9d23"],["assets/css/style.css","8e384a31c073f3cb44e1d55512f628b5"],["assets/doc/fiche-inscription-CGE-2016-2017.doc","6db882feba29e33e3317f3b36ef12837"],["assets/doc/fiche-inscription-atelier.doc","d181c89e22e63895501120997a3b90f6"],["assets/img/110114logocommunerixensart.jpg","09525348f47405c6b4a4d28f9744726d"],["assets/img/2013-GSK-Logo-with-Strapline.jpg","60a47eccbab39f7977b085e4faac7c20"],["assets/img/Bande-Citoyen-en-action.jpg","18e1765a864af9ef8f6a4250eb2f48f1"],["assets/img/Bandeau-Primaire-1024x470.jpg","bfd2136216eb037ee30f5c5a010be619"],["assets/img/Bandeau-accessibilité-888x317.jpg","5aad8ba6849dde5f7aa7b574d87d0e84"],["assets/img/Entrée-du-tilt-e1474556720214-888x317.jpg","e49cf5c8e54bb3992e21f596646170e8"],["assets/img/Groupe-1-Petit-888x317.jpg","2cfd8946d5476333482a97750710a63a"],["assets/img/Les-classes-maternelles.jpg","91925d066fc1f891f8bc2942bcbf44d1"],["assets/img/Loterie-carr.jpg","50d9bd466980b847312b6af03fb46a30"],["assets/img/Région-Wallonne.jpg","797f338ed576caddf53c1814c2b6b8c9"],["assets/img/Schémas-le-monde-en-projet.jpg","8722bc5ba674b6935908cf3dc92464a8"],["assets/img/StageSite.png","68ca4411848fd2793007548bcb70806c"],["assets/img/Visite-ecole-maternelle-14102011-026-copie-1024x6851-888x317.jpg","5089b9cfebfe11c5bbcdd2fc32b7c1bf"],["assets/img/formation.jpg","e6078bcc418282a8dd6a866c25f1b66b"],["assets/img/kiroundg.gif","708e7c52217d6ca75f397f0d23f11b5e"],["assets/img/local.jpg","0324f895251720f41b24c5277f35f2dc"],["assets/img/logo.png","03fe7f9b256893769adfe593ca27cb30"],["assets/img/logoCrayon.png","639b0256f722af3de9787ee4c04bc1a6"],["assets/img/logoFouet.png","f0533f2cf6c66d62174618eb0c6c0561"],["assets/img/logoStage.png","499e16076a9cbb84e7743eaef10b54a4"],["assets/img/logo_reine.paola_.jpg","67b395b7c7a0441bf7965c7c46e3e930"],["assets/img/plan-daccès-tilt.jpg","9676d1d8603301e6ebb356b6e775bb03"],["assets/img/presentation.jpg","6a9a5d59caeb45858d7002639f451c64"],["assets/img/round_square_logo_fr_be.png","72b5fdabc1688873d0d8049d2bd8cf0b"],["assets/img/stage-2016-2.jpg","89f8eb6cc09c85048918b823b07149aa"],["assets/img/stage-2016-3.jpg","3fe22804b0ca9fa3c7277e8e33627a4e"],["assets/img/stage-2016.jpg","2843f10733a720594a55df074b2e31e7"],["assets/img/tilt-logo-article27.jpg","300052bf36764bbe6beb09c07ac4e825"],["assets/img/tilt-logo-bw.jpg","db7825669d819985976e620d8b2777d6"],["assets/img/tilt-logo-cap48.jpg","ec5ea007501c22c3746e302b6b05b0e3"],["assets/img/tilt-logo-fwb.jpg","cc2a3c7ddcaff3ab562392dd2e0f9b64"],["assets/img/tilt-logo-gazette-kid.jpg","84a17472673d5b615d225debca14a146"],["assets/img/tilt-logo-one.jpg","01c54eee34e57b2e3482b249b15b3e22"],["assets/img/tilt-logo-spw.jpg","8fa10e349c1db979300e4915d41882c8"],["assets/img/tilt-logo-tvcom.jpg","4ef3a3ec53d2ca4d9a4edf638c3222ad"],["assets/js/carousel.js","28318eaba583b0faab8f954374faef60"],["assets/js/cookieconsent.min.js","db0b3983b5562f9721cdd2a7cc9d61b1"],["assets/js/script.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/log.txt","f2861fb7117133abfe45e023d72cda83"],["assets/logMail.txt","d0aaef89d2356c6a189d64ae62f3233a"],["assets/logUploads.txt","195b213a43a7e750d8e935a39031120a"],["assets/message.txt","f999bbdb73b01c281010d0cc76f0309c"],["assets/pdf/2018CONDGENSTG.pdf","3914d9e64494d2e8e59c5da87fe799c7"],["assets/php/admin-form.php","6a74559958d28968a1e96a9618b171c5"],["assets/php/mailer.php","3454e6061961aa083be8b6fac165facf"],["assets/php/phpmailer.php","7bd4646468e845768b6bdc5928f40141"],["assets/php/sanitizer.php","a2b8b609cfd62ef9e6357be4b9905cc4"],["assets/php/upload.php","2b3faa0add33da55c7f18f96e17f5b29"],["assets/uploads/Anatolia-Story-Fini.jpg","3a8f0aca16a0cb401de04686a87c1c56"],["assets/uploads/Anatolia-Story-Fini_1.jpg","3a8f0aca16a0cb401de04686a87c1c56"],["assets/uploads/Anatolia-Story-Fini_2.jpg","3a8f0aca16a0cb401de04686a87c1c56"],["assets/uploads/Anatolia-Story-Fini_3.jpg","3a8f0aca16a0cb401de04686a87c1c56"],["assets/uploads/Capture-du-2018-08-10-15-34-43.png","a60964bfe4205917b9b0e3ad52f16cd2"],["assets/uploads/Capture-du-2018-08-10-15-34-43_1.png","a60964bfe4205917b9b0e3ad52f16cd2"],["assets/uploads/Kyou-Koi-wo-Hajimemasu.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/Kyou-Koi-wo-Hajimemasu_1.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/Kyou-Koi-wo-Hajimemasu_2.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/Kyou-Koi-wo-Hajimemasu_3.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/Kyou-Koi-wo-Hajimemasu_4.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/Kyou-Koi-wo-Hajimemasu_5.jpg","020076736612893a7698b242f8c9c5db"],["assets/uploads/NotreCommune.png","04482409cf162cbc8f0d6b3f5ee4661a"],["assets/uploads/Peach-Girl-Fini.jpg","58b625eb31d5683f1eb9601633eac5ab"],["assets/uploads/Peach-Girl-Fini_1.jpg","58b625eb31d5683f1eb9601633eac5ab"],["assets/uploads/Peach-Girl-Fini_2.jpg","58b625eb31d5683f1eb9601633eac5ab"],["assets/uploads/Peach-Girl-Fini_3.jpg","58b625eb31d5683f1eb9601633eac5ab"],["assets/uploads/desktop.ini","bd63ab24b8f03e452f19a781f77c85a6"],["assets/uploads/icon512.png","0faa40dea51ad27460861d511ebd8b50"],["assets/uploads/icon512_1.png","0faa40dea51ad27460861d511ebd8b50"],["assets/uploads/icon512_2.png","0faa40dea51ad27460861d511ebd8b50"],["assets/uploads/icon512_3.png","0faa40dea51ad27460861d511ebd8b50"],["assets/uploads/icon512_4.png","0faa40dea51ad27460861d511ebd8b50"],["assets/uploads/index.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_1.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_10.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_11.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_12.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_13.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_14.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_15.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_16.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_2.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_3.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_4.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_5.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_6.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_7.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_8.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/index_9.jpeg","9e34ef23ac7a83af2c194f7e23dac9fc"],["assets/uploads/rezort.jpg","3ddb36be68e77e2c987ac4fe450cb231"],["assets/uploads/rezort_1.jpg","3ddb36be68e77e2c987ac4fe450cb231"],["assets/uploads/shutterisland-2010-thriller.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/shutterisland-2010-thriller_1.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/shutterisland-2010-thriller_2.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/shutterisland-2010-thriller_3.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/shutterisland-2010-thriller_4.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/shutterisland-2010-thriller_5.jpg","0cf8822af62289cc261e2d37fa4ac857"],["assets/uploads/spyKids.jpeg","e193a2336813113f5bed71ed20b53a9b"],["assets/uploads/spyKids4D.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_1.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_2.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_3.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_4.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_5.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids4D_6.jpeg","67957f87a50a7570e7754f3f7a4dba44"],["assets/uploads/spyKids_1.jpeg","e193a2336813113f5bed71ed20b53a9b"],["assets/uploads/spyKids_2.jpeg","e193a2336813113f5bed71ed20b53a9b"],["assets/uploads/spyKids_3.jpeg","e193a2336813113f5bed71ed20b53a9b"],["assets/uploads/taken3.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/taken3_1.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/taken3_2.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/taken3_3.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/taken3_4.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/taken3_5.jpg","a5ca0f7c7ec92e0fbba0a5c1c56dab19"],["assets/uploads/thefall-2006-dramatique.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["assets/uploads/thefall-2006-dramatique_1.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["assets/uploads/thefall-2006-dramatique_2.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["assets/uploads/thefall-2006-dramatique_3.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["assets/uploads/un-sac-de-billes.jpg","379d9f7cded4d483efafb96c4f43ce52"],["assets/uploads/un-sac-de-billes_1.jpg","379d9f7cded4d483efafb96c4f43ce52"],["assets/vue/footer.php","641e9830f9bcdaf09b18265558cb7112"],["assets/vue/header.php","bcd516682437d176e5c56fa2d535b53d"],["assets/vue/link.php","d2f55057c0903778b5ee8cdb708db1db"],["assets/vue/log.php","b21687af4640d96540faa08c44091778"],["assets/vue/logActiviter.php","b525e42666019a7d0cd2f0d481f6e75f"],["assets/vue/mail.php","b45b038a0b0f86d548d45b0d0ccae110"],["assets/vue/traitement-mail.php","bb7dbdac71b8a95fdd3918455c97b010"],["composer.json","c5bd82baac9b2a9e52e7aba9ea21b6ed"],["composer.lock","cb76baeb754c0577688592981b5132d0"],["contact.php","37a4cc89def25663d3fe1051fc86c19c"],["cookie.php","ab8ad0fae9af0e6a2b49f9727ad7fa65"],["cookie.txt","d41d8cd98f00b204e9800998ecf8427e"],["enfant.php","ec18dbb8020b3999f6ea38d2499aaeb0"],["fontionnement backend de la page contact php.png","04a95b317f75aed4dda0579dcc254995"],["form-logs.php","a356a7b0071e90442f489ff490b543f0"],["gdpr.js","26dbe817ae9e8d9e01e8b805e0935d4f"],["gdpr.php","3eaec2458423b8e33c1115dde2b73ef7"],["index.php","5bad0b190a6960bc11538ef5bc89032a"],["log.txt","e896e47976d270a5343c48ce3c611d01"],["manifest.json","24303f561ea6c20f13a7ef9e8620ec99"],["prof.php","fd1f41d346480f244c0f5b5bcf6ff900"],["vendor/autoload.php","5ba95959a96a36fa6c4e7f205b6504f5"],["vendor/composer/ClassLoader.php","7bcd58ef2df6fe97165bea70fe9c7712"],["vendor/composer/autoload_classmap.php","67a383045bff8e5f80d0f80c399a5495"],["vendor/composer/autoload_namespaces.php","35e12c7d76c4a81633bcf547c0e229a9"],["vendor/composer/autoload_psr4.php","bef49c9294d2e96895a4c28fd166a876"],["vendor/composer/autoload_real.php","1397a08cc29ea68e4f61c18832d314df"],["vendor/composer/autoload_static.php","9e4c5b0912247fbe719b08a36fb1dd71"],["vendor/composer/installed.json","ef4f66d1609a8dfc27cf825520cff7cb"],["vendor/phpmailer/phpmailer/README.md","940d9ba78de02f99713dc4cba7cf853f"],["vendor/phpmailer/phpmailer/SECURITY.md","5202468726f825a4ac72e4e93fca6d09"],["vendor/phpmailer/phpmailer/get_oauth_token.php","0bebd0991f833d404eae1f4169f12d03"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-am.php","46dcd505d56a950198d9aa84385f94a2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ar.php","312e3d6b9b67338bdbe8cdce5c911278"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-az.php","56d774311cad93c3935f7e0bae385c31"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ba.php","288d90dc839febcb80f24ef24dd91a7b"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-be.php","ed20568de7c20ec102935043c8201af2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-bg.php","20589ae4ffe53e701190e19794731e82"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ca.php","632c0caa936fa9575f6a089c84ffd2cc"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ch.php","94100d2b2dc17ac67579a4499a13d9c2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-cs.php","3b2be0a69d0f145ccd7288d31131b043"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-da.php","2f2b474f532ab2ee3d92395f3c5b0e0c"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-de.php","e76eef12bcc910c9fb7b6f4c6781658b"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-el.php","a05aa8b2f630a31493922b24b4b93b2e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-eo.php","c2ac8c3ea177248b481c66e5b4c6a463"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-es.php","2868a1611e605385f5e8a0a0c39976af"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-et.php","fa5e67af621d49a64d8766a8a5c55386"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fa.php","62ee650e737866d7b819d8f349db92e6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fi.php","2a9b439722f490ae350f7dbc25198d79"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fo.php","cfd27a7f91f0f4f2a4846cc10839dfd6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-fr.php","f15bc9c06bdbd0532cceabc75784bd46"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-gl.php","b2ca56ae4030b23dad54fcd1770838bc"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-he.php","18049afa12f6341a28464a8240547496"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hi.php","9c16e72cdef57089e3111a58382d2d9e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hr.php","0b2a5b47bd0b46eb7cbf43b531229539"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-hu.php","b562487c73f60e245d1a1671dc9c1573"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-id.php","d33f3b2facdea271b3506d3946f80684"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-it.php","2343321d68a0f537731094d94cb018ce"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ja.php","3cd5d83da61896f05af3b0e3afc4120f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ka.php","dde630065bad8dfef600c47eecfca2c2"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ko.php","58a5b654f0322ba94713956e9fe2cbde"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-lt.php","95d8e64b4ea89cf7429053f2191b4c56"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-lv.php","70881d6b394785c9c85bfeca355c7e45"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ms.php","d3bf25210a06e7ab8b407f140d5d6612"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-nb.php","47a1156689dd8d71488d19feb4e2a957"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-nl.php","f1bbf9fa400300827982247005eedd16"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pl.php","ddbd3d779da4c2a86964361665248b79"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pt.php","e43a3661566d39f7f6094905c5fa142e"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-pt_br.php","48dd712cfb4932969171d7f49308ce8f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ro.php","97dd1085d2495783b04790f9a6d5190f"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-rs.php","563da4ca11458562b6e938bc7742248a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php","ab761bc79974a307b6d482f361c9a70a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sk.php","c7ba3b001f45220f9aa7cd6e4101f58c"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sl.php","da14fff5b9752f8a14be805703fb5e50"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-sv.php","ea5c4060572ebb34b0e409206af22d5a"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-tr.php","0b9b8615f536f95ec22381707441fbe6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-uk.php","60cf6cf5d5380e7573bed1f2039a6fb6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-vi.php","13ac94e759a8baeb4f8b6d186ed9a0b6"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-zh.php","4099efcb36a6e5609d30d5498fa5c6ff"],["vendor/phpmailer/phpmailer/language/phpmailer.lang-zh_cn.php","f29e829c90e3f89bcd1fc29f9cf58ea4"],["vendor/phpmailer/phpmailer/src/Exception.php","89150e124021d4814e1456eb6290f3f3"],["vendor/phpmailer/phpmailer/src/OAuth.php","982ffd225fdc01a3b80a3c1fec2155a8"],["vendor/phpmailer/phpmailer/src/PHPMailer.php","b771fddb588379917d54dee66bed3ed6"],["vendor/phpmailer/phpmailer/src/POP3.php","b751761c7421d3a0113725b2b1ab773c"],["vendor/phpmailer/phpmailer/src/SMTP.php","4fbdc1952dba7d7cb54e575515642af2"],["vendor/verot/class.upload.php/LICENSE.txt","393a5ca445f6965873eca0259a17f833"],["vendor/verot/class.upload.php/README.md","4b74eb34ece1a96ddab3c9590234c7aa"],["vendor/verot/class.upload.php/composer.json","0274877e426740f76fd27d7ebf6882c3"],["vendor/verot/class.upload.php/src/class.upload.php","aca7c34cad6a63089b71e2132cdaa998"],["vendor/verot/class.upload.php/src/lang/class.upload.ca_CA.php","9393ecc49be7c99372859896d349ce30"],["vendor/verot/class.upload.php/src/lang/class.upload.cs_CS.php","d1058e482a78c182ff03aa06037a4838"],["vendor/verot/class.upload.php/src/lang/class.upload.da_DK.php","733bdc59b2273b507ac4b32b010a6b34"],["vendor/verot/class.upload.php/src/lang/class.upload.de_DE.php","99a1e33ca2a6c2bb9fac7eb2475ae8d6"],["vendor/verot/class.upload.php/src/lang/class.upload.el_GR.php","47a000c2b3f53f6e9d4499989f318a4f"],["vendor/verot/class.upload.php/src/lang/class.upload.es_ES.php","5f58b05d7857133cf4ee87194b6a1c76"],["vendor/verot/class.upload.php/src/lang/class.upload.et_EE.php","4a92302186b4ecfb4e7b51a2c1f75a6d"],["vendor/verot/class.upload.php/src/lang/class.upload.fa_IR.php","8ff6a505820d94834c06f6608576cd12"],["vendor/verot/class.upload.php/src/lang/class.upload.fi_FI.php","8c2327dd9161e320a81f7b6991b56fb3"],["vendor/verot/class.upload.php/src/lang/class.upload.fr_FR.php","c51dfa160d33ff65bf842097a807808b"],["vendor/verot/class.upload.php/src/lang/class.upload.he_IL.php","f174902e8bb9f88b5088152258fded6d"],["vendor/verot/class.upload.php/src/lang/class.upload.hr_HR.php","59705c9082eb6adc6f92c77f5dfad1ec"],["vendor/verot/class.upload.php/src/lang/class.upload.hu_HU.php","4d0fee72ad18811a7ceed5067b1d0e77"],["vendor/verot/class.upload.php/src/lang/class.upload.id_ID.php","4377aed9321135f247f8e5a7d97d4189"],["vendor/verot/class.upload.php/src/lang/class.upload.it_IT.php","e288aa02daded039326d77c6f3845e99"],["vendor/verot/class.upload.php/src/lang/class.upload.ja_JP.php","52570e3df8121e4c225dea993520ede5"],["vendor/verot/class.upload.php/src/lang/class.upload.lt_LT.php","cd4507564fd257ea2e1ac49527300615"],["vendor/verot/class.upload.php/src/lang/class.upload.mk_MK.php","b552c520c3cbe34db1c2f9c5e00d428b"],["vendor/verot/class.upload.php/src/lang/class.upload.nl_NL.php","84dfd39aafe9eeaf35417e17d91fa23b"],["vendor/verot/class.upload.php/src/lang/class.upload.no_NO.php","6154a10667ed9223593bd637d7f1a459"],["vendor/verot/class.upload.php/src/lang/class.upload.pl_PL.php","54d77b8ad6c30ba00f79c3986049392c"],["vendor/verot/class.upload.php/src/lang/class.upload.pt_BR.php","4e0cd32c560793ff69f2ef9de841ef71"],["vendor/verot/class.upload.php/src/lang/class.upload.ro_RO.php","b0ae4399953e6025d9bde665fcf634aa"],["vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.php","29eacf4ced87503e49f59a9fad533030"],["vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.windows-1251.php","b37b6abdefb4a1ce005b8a66687dce11"],["vendor/verot/class.upload.php/src/lang/class.upload.sk_SK.php","a2d5c6894538d43b70b1d444a0198941"],["vendor/verot/class.upload.php/src/lang/class.upload.sr_YU.php","11d5858f2342fe19cd6a2b4d06d1f9c1"],["vendor/verot/class.upload.php/src/lang/class.upload.sv_SE.php","d9ca2e00dcb1035074a5b868bdb81e9b"],["vendor/verot/class.upload.php/src/lang/class.upload.ta_TA.php","ec5926dbf4710359746dafcd44b10ce4"],["vendor/verot/class.upload.php/src/lang/class.upload.tr_TR.php","d416d4e1206b7482c99830bd73bd3c86"],["vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.php","cc0549780bd5345f6a4f54904bc854f2"],["vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.windows-1251.php","a04eb921aedfc635b15e0e5b85b76b03"],["vendor/verot/class.upload.php/src/lang/class.upload.vn_VN.php","d83010e512d44818dbd6cdbc14835875"],["vendor/verot/class.upload.php/src/lang/class.upload.xx_XX.php","45b2dd0f7c3dec4c2d1e1a843c46196e"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.gb-2312.php","1fcbd6b593021959da24d884c506c1d8"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.php","812f851eada63972ea51f1bdf0a20de0"],["vendor/verot/class.upload.php/src/lang/class.upload.zh_TW.php","ffc9b7336fdb769d97407e3da7c2d384"],["vendor/verot/class.upload.php/test/bg.gif","a28ef71a1c661330f0a0abd4fe6fa20d"],["vendor/verot/class.upload.php/test/foo.gdf","c23f6763e578afa9fc7c220a929a1216"],["vendor/verot/class.upload.php/test/foo.ttf","74692ba304e5cbd6849892291188cb28"],["vendor/verot/class.upload.php/test/index.html","d79b0d636bdcc07cb95888dca26279b9"],["vendor/verot/class.upload.php/test/test.bmp","7845e38372dde8e2d1e7b92be94e82bc"],["vendor/verot/class.upload.php/test/test.gif","780a3e6e720cb83feff25f181dd7f3cc"],["vendor/verot/class.upload.php/test/test.jpg","fff1504892be82d505d7f43f212d756c"],["vendor/verot/class.upload.php/test/test.png","aa24e34400066bbb3bffa596839446bf"],["vendor/verot/class.upload.php/test/upload.php","0adfca6854ba8674c0db298ce518222e"],["vendor/verot/class.upload.php/test/watermark.png","b68cb43acf0232f30a22d49d705911a3"],["vendor/verot/class.upload.php/test/watermark_large.png","9f2369168e3bc1edd6823fa8dd594018"]];
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







