var array = '';var matched = array.includes(window.location.href);var sitem = '230';if (window.innerWidth > 800 && matched == false) {var iFrameDetection = false; 
                
                if(!iFrameDetection){let is_daktilo = 0;var currentScript = document.currentScript; if(is_daktilo == 1) { var ad_area = null; var adhouseDivs = document.querySelectorAll('adhouse.adhousediv-987478'); adhouseDivs.forEach(function(div) { if (div.getAttribute('data-adinserted') === 'false') { ad_area = div; div.setAttribute('data-adinserted', 'true'); } }); } else { var adContainer = document.createElement('adhouse'); currentScript.parentElement.insertBefore(adContainer, currentScript); adContainer.appendChild(currentScript); var ad_area = currentScript.parentElement; }var scripts = document.getElementsByTagName( 'script' );var thisScriptTag = scripts[ scripts.length - 1 ]; ad_area.className = 'adhouse-987478';var iframe = document.createElement('iframe');iframe.id= "adhframe-987478";iframe.style=" border-style:none; width: 100% !important; height:100%; !important overflow:hidden";iframe.className="adhouseframe";var html = '<!DOCTYPE html><html><head><script async src=\"https://cdn.adhouse.pro/code/hb.js\"></script><script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"></script><script>var olcu = [[120, 600], [160, 600]]; var olcugad = [[160, 600], \'fluid\'];var PREBID_TIMEOUT = 1000;var FAILSAFE_TIMEOUT = 3000;var adhslot;var id;var prebidtime;var rtime;var gorsn;var el;id = \"987478\";rtime = \"10000\";prebidtime = \"10000\";gorsn = \"5\";el = document.getElementById(\"adhouse-987478\");</script><script> var adUnits = [ { code: \"/22668611599/Rekoroyun.com_160x600\", mediaTypes: { banner: {sizes: [[120, 600]]} }, bids: [ {bidder: \"rtbhouse\", params: {region: \"prebid-eu\", publisherId: \"VkiCvheyEU11iF1U2PZM\", bidfloor: \"0.01\"}}, {bidder: \"adf\", params: {priceType: \"net\", mid: \"1608161\"}}, {bidder: \"rubicon\", params: {accountId: \"23446\", siteId: \"413260\", zoneId: \"2324058\"}}, {bidder: \"yandex\", params: {cur: \"USD\", placementId: \"R-A-2714999-1\"}}, ] }]; const adhousefloor={buckets:[{precision:2,min:0,max:3,increment:0.01},{precision:2,min:3,max:7,increment:0.05},{precision:2,min:7,max:11.60,increment:0.10}]}; var googletag = googletag || {}; googletag.cmd = googletag.cmd || []; googletag.cmd.push(function() { googletag.pubads().disableInitialLoad(); }); var pbjs = pbjs || {}; pbjs.que = pbjs.que || []; pbjs.que.push(function() { pbjs.addAdUnits(adUnits); pbjs.setConfig({priceGranularity:adhousefloor,useBidCache:true,enableSendAllBids:false,userSync:{filterSettings:{all:{bidders:\"*\",filter:\"include\"}},syncsPerBidder:5,syncDelay:4000,aliasSyncEnabled:true}, fledgeForGpt: {enabled: true,bidders: [\"rtbhouse\"],defaultForSlots: 1}, schain: {\"validation\": \"relaxed\",\"config\": {\"ver\":\"1.0\",\"complete\": 1,\"nodes\": [{\"asi\":\"adhouse.pro\",\"sid\":\"230\",\"hp\":1}]}}}); pbjs.requestBids({ bidsBackHandler: initAdserver, timeout: PREBID_TIMEOUT }); }); function initAdserver() { if (pbjs.initAdserverSet) return; pbjs.initAdserverSet = true; googletag.cmd.push(function() { pbjs.que.push(function() { pbjs.setTargetingForGPTAsync(); 987478 }); }); yenile(id, rtime, gorsn); } setTimeout(function() { initAdserver(); }, FAILSAFE_TIMEOUT);</script><script> googletag.cmd.push(function() { adhslot = googletag.defineSlot(\'/22668611599/Rekoroyun.com_160x600\', olcugad, \'adhouse-987478\').addService(googletag.pubads()); googletag.pubads().set(\'page_url\', \'Rekoroyun.com\'); googletag.pubads().setCentering(true); googletag.pubads().enableSingleRequest(); googletag.enableServices(); });</script><script> function scriptExists(url) { var iframe = document.querySelector(\'iframe:not([src])\'); if(iframe) { var iframeDocument = iframe.contentDocument || iframe.contentWindow.document; return iframeDocument.querySelectorAll(`script[src=\"${url}\"]`).length > 0; }else { return false; } } function yenile(id, rtime, gorsn) { setTimeout(function() { const url = \'https://cdn.jsdelivr.net/npm/prebid-universal-creative@latest/dist/creative.js\'; if(scriptExists(url)) { time = prebidtime - 2000; }else { time = rtime - 2000; } setTimeout(function() { var gonder = yukle_tek(id, rtime, gorsn); }, time);}, 2000);}function yukle_tek(id, time, gorsn) { el = document.getElementById(\"adhouse-987478\"); function islem() { refreshBid2(); yenile(id, time, gorsn); } function kontrolcu() { if (typeof ampstat !== \'undefined\') { islem(); } else { if (window.top.document.hasFocus() && checkIframeVisibility()) { timekontrolcu[id] = gorsn; timeValuetimekontrolcu[id] = setInterval((interval) => { if (window.top.document.hasFocus() && checkIframeVisibility()) { timekontrolcu[id] = this.timekontrolcu[id] - 1; } if (timekontrolcu[id] <= 0) { clearInterval(timeValuetimekontrolcu[id]); islem(); } }, 1000); } else { setTimeout(kontrolcu, 500); } } } kontrolcu();}function adhouse_kordinator(el) { if (el) { let els = el.getBoundingClientRect(); let kk = els.top; if ((kk < 0 && kk < (els.height * -1 / 2)) || (els.bottom - window.innerHeight > els.height / 2)) { return; } else { return; } } else { return; }} function isIframeVisible() { const rect = window.frameElement.getBoundingClientRect(); const windowHeight = window.parent.innerHeight || window.parent.document.documentElement.clientHeight; const windowWidth = window.parent.innerWidth || window.parent.document.documentElement.clientWidth; const iframeHeight = rect.bottom - rect.top; const iframeWidth = rect.right - rect.left; const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)); const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)); const visibleArea = visibleHeight * visibleWidth; const iframeTotalArea = iframeHeight * iframeWidth; const visiblePercentage = (visibleArea / iframeTotalArea) * 100; return visiblePercentage >= 50; } function checkIframeVisibility() { const isVisible = isIframeVisible(); return isVisible; }function refreshBid2() { pbjs.que.push(function() { pbjs.requestBids({ timeout: PREBID_TIMEOUT, adUnitCodes: [\'/22668611599/Rekoroyun.com_160x600\'], bidsBackHandler: function() { pbjs.setTargetingForGPTAsync([\'/22668611599/Rekoroyun.com_160x600\']); googletag.pubads().refresh([adhslot]); } }); });} window.addEventListener(\'load\', function() { setTimeout(function() { var adhouseElement = document.getElementById(\'adhouse-987478\'); if (adhouseElement) { var googleQueryId = adhouseElement.getAttribute(\'data-google-query-id\'); if (!googleQueryId) { googletag.pubads().refresh(); var maxRetries = 30; var retryCount = 0; var intervalIdFs = setInterval(function() { var adhouseElement = document.getElementById(\'adhouse-987478\'); if (adhouseElement) { var googleQueryId = adhouseElement.getAttribute(\'data-google-query-id\'); if (googleQueryId) { clearInterval(intervalIdFs); } else { googletag.pubads().refresh(); } } retryCount++; if (retryCount >= maxRetries) { clearInterval(intervalIdFs); } }, 1000); } } }, 200); });</script> <style>body {overflow: hidden; margin: 0px!important;}</style><script src="https://cdn.adhouse.pro/publisher/ads/adhouse/230.js"></script></head><body><div style=\'margin:0 auto; text-align:center\' id="adhouse-987478"></div><script type=\'text/javascript\'> googletag.cmd.push(function() { googletag.display(\'adhouse-987478\'); }); </script><script></script></body></html>';ad_area.style = 'display: flex; width:160px;height:600px;';ad_area.appendChild(iframe);iframe.contentWindow.document.open();iframe.contentWindow.document.write(html);iframe.contentWindow.document.close();var doc = iframe.contentWindow;iframe.setAttribute('sandbox', 'allow-same-origin allow-popups allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms'); 
		}else {
		function isLoadedScript(lib) {
		return window.parent.document.querySelectorAll('body >[src="' + lib + '"]').length > 0
	  }
	  var lib = "https://cdn.adhouse.pro/publisher/ads/987478.js";
	if (!isLoadedScript(lib)) {      
	 //document.querySelectorAll("script[src*=\"https://cdn.adhouse.pro/publisher/ads/987478.js"]").remove();    
	  var phh = window.parent.document.body;   
	  var ph = document.createElement("script"); 
	  ph.type = "text/javascript";    
	  ph.src =  "https://cdn.adhouse.pro/publisher/ads/987478.js";                
	  phh.appendChild(ph);    
	}
		}  }   