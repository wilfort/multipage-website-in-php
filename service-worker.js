let CACHENAME = 'Le Tilt ASBL';
var dataCacheName = 'Tilt';
var urlsToCache = [
        './README.md',
        './assets/css/carousel.css',
        './assets/css/cookieconsent.min.css',
        './assets/css/style.css',
        './assets/doc/fiche-inscription-CGE-2016-2017.doc',
        './assets/doc/fiche-inscription-atelier.doc',
        './assets/img/110114logocommunerixensart.jpg',
        './assets/img/2013-GSK-Logo-with-Strapline.jpg',
        './assets/img/Bande-Citoyen-en-action.jpg',
        './assets/img/Bandeau-Primaire-1024x470.jpg',
        './assets/img/Bandeau-accessibilité-888x317.jpg',
        './assets/img/Entrée-du-tilt-e1474556720214-888x317.jpg',
        './assets/img/Groupe-1-Petit-888x317.jpg',
        './assets/img/Les-classes-maternelles.jpg',
        './assets/img/Loterie-carr.jpg',
        './assets/img/Région-Wallonne.jpg',
        './assets/img/Schémas-le-monde-en-projet.jpg',
        './assets/img/StageSite.png',
        './assets/img/Visite-ecole-maternelle-14102011-026-copie-1024x6851-888x317.jpg',
        './assets/img/formation.jpg',
        './assets/img/kiroundg.gif',
        './assets/img/local.jpg',
        './assets/img/logo.png',
        './assets/img/logoCrayon.png',
        './assets/img/logoFouet.png',
        './assets/img/logoStage.png',
        './assets/img/logo_reine.paola_.jpg',
        './assets/img/plan-daccès-tilt.jpg',
        './assets/img/presentation.jpg',
        './assets/img/round_square_logo_fr_be.png',
        './assets/img/stage-2016-2.jpg',
        './assets/img/stage-2016-3.jpg',
        './assets/img/stage-2016.jpg',
        './assets/img/tilt-logo-article27.jpg',
        './assets/img/tilt-logo-bw.jpg',
        './assets/img/tilt-logo-cap48.jpg',
        './assets/img/tilt-logo-fwb.jpg',
        './assets/img/tilt-logo-gazette-kid.jpg',
        './assets/img/tilt-logo-one.jpg',
        './assets/img/tilt-logo-spw.jpg',
        './assets/img/tilt-logo-tvcom.jpg',
        './assets/js/carousel.js',
        './assets/js/cookieconsent.min.js',
        './assets/js/script.js',
        './assets/log.txt',
        './assets/logMail.txt',
        './assets/logUploads.txt',
        './assets/message.txt',
        './assets/pdf/2018CONDGENSTG.pdf',
        './assets/php/admin-form.php',
        './assets/php/mailer.php',
        './assets/php/phpmailer.php',
        './assets/php/sanitizer.php',
        './assets/php/upload.php'//,
        // './assets/vue/footer.php',
        // './assets/vue/header.php',
        // './assets/vue/link.php',
        // './assets/vue/log.php',
        // './assets/vue/logActiviter.php',
        // './assets/vue/mail.php',
        // './assets/vue/traitement-mail.php',
        // './composer.json',
        // './composer.lock',
        // './contact.php',
        // './cookie.php',
        // './cookie.txt',
        // './enfant.php',
        // './fontionnement backend de la page contact php.png',
        // './form-logs.php',
        // './gdpr.js',
        // './gdpr.php',
        // './index.php',
        // './log.txt',
        // './manifest.json',
        // './prof.php',
        // './vendor/autoload.php',
        // './vendor/composer/ClassLoader.php',
        // './vendor/composer/autoload_classmap.php',
        // './vendor/composer/autoload_namespaces.php',
        // './vendor/composer/autoload_psr4.php',
        // './vendor/composer/autoload_real.php',
        // './vendor/composer/autoload_static.php',
        // './vendor/composer/installed.json',
        // './vendor/phpmailer/phpmailer/README.md',
        // './vendor/phpmailer/phpmailer/SECURITY.md',
        // './vendor/phpmailer/phpmailer/get_oauth_token.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-am.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ar.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-az.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ba.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-be.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-bg.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ca.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ch.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-cs.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-da.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-de.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-el.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-eo.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-es.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-et.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-fa.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-fi.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-fo.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-fr.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-gl.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-he.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-hi.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-hr.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-hu.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-id.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-it.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ja.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ka.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ko.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-lt.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-lv.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ms.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-nb.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-nl.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-pl.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-pt.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-pt_br.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ro.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-rs.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-sk.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-sl.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-sv.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-tr.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-uk.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-vi.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-zh.php',
        // './vendor/phpmailer/phpmailer/language/phpmailer.lang-zh_cn.php',
        // './vendor/phpmailer/phpmailer/src/Exception.php',
        // './vendor/phpmailer/phpmailer/src/OAuth.php',
        // './vendor/phpmailer/phpmailer/src/PHPMailer.php',
        // './vendor/phpmailer/phpmailer/src/POP3.php',
        // './vendor/phpmailer/phpmailer/src/SMTP.php',
        // './vendor/verot/class.upload.php/LICENSE.txt',
        // './vendor/verot/class.upload.php/README.md',
        // './vendor/verot/class.upload.php/composer.json',
        // './vendor/verot/class.upload.php/src/class.upload.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ca_CA.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.cs_CS.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.da_DK.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.de_DE.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.el_GR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.es_ES.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.et_EE.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.fa_IR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.fi_FI.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.fr_FR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.he_IL.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.hr_HR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.hu_HU.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.id_ID.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.it_IT.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ja_JP.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.lt_LT.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.mk_MK.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.nl_NL.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.pl_PL.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.pt_BR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ro_RO.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ru_RU.windows-1251.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.sk_SK.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.sr_YU.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.sv_SE.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.ta_TA.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.tr_TR.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.uk_UA.windows-1251.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.vn_VN.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.xx_XX.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.gb-2312.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.zh_CN.php',
        // './vendor/verot/class.upload.php/src/lang/class.upload.zh_TW.php',
        // './vendor/verot/class.upload.php/test/bg.gif',
        // './vendor/verot/class.upload.php/test/foo.gdf',
        // './vendor/verot/class.upload.php/test/foo.ttf',
        // './vendor/verot/class.upload.php/test/index.html',
        // './vendor/verot/class.upload.php/test/test.bmp',
        // './vendor/verot/class.upload.php/test/test.gif',
        // './vendor/verot/class.upload.php/test/test.jpg',
        // './vendor/verot/class.upload.php/test/test.png',
        // './vendor/verot/class.upload.php/test/upload.php',
        // './vendor/verot/class.upload.php/test/watermark.png',
        // './vendor/verot/class.upload.php/test/watermark_large.png'
      ];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(CACHENAME).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHENAME && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
}); 
self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});