/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

( function() {
	'use strict';

	CKEDITOR.plugins.add( 'translatedstyles', {
		lang: 'en,fr',

		init: function( editor ) {
			console.log(editor.stylesSet.get('default'))
		}
	} );

} )();
