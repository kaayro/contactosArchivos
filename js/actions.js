var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	ready: function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	init: function(){
		$('#ncSend').tap(fn.crearContacto);
		$('#cListar').tap(cn.findContacts);
		$('#aEscribir').tap(f.createFile);
		$('#aLeer').tap(f.readFile);
	},
	crearContacto: function(){
		var n = $('#ncNom').val();
		var t = $('#ncTel').val();
		var m = $('#ncMail').val();
		
		if(n != '' && t != '' && m != '')
			cn.createContact(n,t,m);
		else
			alert("Todos los campos son requeridos");
	}
};

$(fn.ready);