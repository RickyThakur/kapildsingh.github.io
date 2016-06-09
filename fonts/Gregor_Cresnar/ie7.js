/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Gregor_Cresnar\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-gc-avatar': '&#xe900;',
		'icon-gc-avatar-1': '&#xe901;',
		'icon-gc-back': '&#xe902;',
		'icon-gc-book': '&#xe903;',
		'icon-gc-cancel': '&#xe904;',
		'icon-gc-chat': '&#xe905;',
		'icon-gc-chat-1': '&#xe906;',
		'icon-gc-chat-2': '&#xe907;',
		'icon-gc-copy': '&#xe908;',
		'icon-gc-dislike': '&#xe909;',
		'icon-gc-download': '&#xe90a;',
		'icon-gc-download-1': '&#xe90b;',
		'icon-gc-edit': '&#xe90c;',
		'icon-gc-envelope': '&#xe90d;',
		'icon-gc-folder': '&#xe90e;',
		'icon-gc-garbage': '&#xe90f;',
		'icon-gc-glasses': '&#xe910;',
		'icon-gc-hand': '&#xe911;',
		'icon-gc-headphones': '&#xe912;',
		'icon-gc-heart': '&#xe913;',
		'icon-gc-house': '&#xe914;',
		'icon-gc-like': '&#xe915;',
		'icon-gc-link': '&#xe916;',
		'icon-gc-logout': '&#xe917;',
		'icon-gc-magnifying-glass': '&#xe918;',
		'icon-gc-monitor': '&#xe919;',
		'icon-gc-musical-note': '&#xe91a;',
		'icon-gc-next': '&#xe91b;',
		'icon-gc-next-1': '&#xe91c;',
		'icon-gc-padlock': '&#xe91d;',
		'icon-gc-paper-plane': '&#xe91e;',
		'icon-gc-phone-call': '&#xe91f;',
		'icon-gc-photo-camera': '&#xe920;',
		'icon-gc-pie-chart': '&#xe921;',
		'icon-gc-piggy-bank': '&#xe922;',
		'icon-gc-placeholder': '&#xe923;',
		'icon-gc-printer': '&#xe924;',
		'icon-gc-reload': '&#xe925;',
		'icon-gc-settings': '&#xe926;',
		'icon-gc-settings-1': '&#xe927;',
		'icon-gc-share': '&#xe928;',
		'icon-gc-shopping-bag': '&#xe929;',
		'icon-gc-shopping-cart': '&#xe92a;',
		'icon-gc-shuffle': '&#xe92b;',
		'icon-gc-speaker': '&#xe92c;',
		'icon-gc-star': '&#xe92d;',
		'icon-gc-tag': '&#xe92e;',
		'icon-gc-upload': '&#xe92f;',
		'icon-gc-upload-1': '&#xe930;',
		'icon-gc-vector': '&#xe931;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-gc-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
