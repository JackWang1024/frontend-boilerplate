window.slog = function(msg, filename, lineno) {
	setTimeout(function() {
		try {
			var data = {};
			if (typeof msg !== 'object') {
				data.msg = msg;
				data.file = filename;
				data.lineno = lineno;
			} else {
				data.msg = msg.message;
				data.file = msg.filename;
				data.lineno = msg.lineno;
				data.colno = msg.colno;
				try {
					data.stack = msg.error.stack.toString();
				} catch(e) {}
			}
			data.date = Date.now();
			data.route = window.location.href;
			data.ua = navigator.userAgent;
			var info = encodeURIComponent(JSON.stringify(data));
			var img = new Image();
			img.onload = img.onerror = function() {
				img = null;
			};
			// img.src = '';
		} catch(e) {}
	}, 0);
};

window.addEventListener('error', slog);