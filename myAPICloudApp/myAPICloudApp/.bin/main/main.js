(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {
			api.setStatusBarStyle({
				style: "light",
				color: "-"
			});

			var album = {
				artwork: "https://iph.href.lu/60x60?fg=666666&bg=cccccc",
				title: "It's title",
				artist: "describe",
				year: "2021"
			};

			var albums = Array(1000);
			albums.fill(album);
			var listView = document.getElementById("listView");
			listView.load({
				data: albums
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"safe-area",
					{class: "header"},
					apivm.h("text", {class: "header__title"}, "APICloud")
				),
				apivm.h("list-view", {
					class: "main",
					id: "listView",
					$bindCell_: function(celltype, item, index) {
						return apivm.h(
							"cell",
							{class: "cell"},
							apivm.h(
								"view",
								{class: "left"},
								apivm.h("image", {class: "image", src: item.artwork})
							),
							apivm.h(
								"view",
								{class: "right"},
								apivm.h("text", {class: "title"}, item.title),
								apivm.h("text", {class: "subtitle"}, item.artist, ",", item.year)
							)
						);
					}
				}),
				apivm.h(
					"safe-area",
					{class: "footer"},
					apivm.h("text", {class: "footer__text"}, "Copyright © "),
					apivm.h("text", {class: "footer__text"}, "2014"),
					apivm.h("text", {class: "footer__text"}, "-")
				)
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {
		".image": {width: "60px", height: "60px"},
		".page": {height: "100%", backgroundColor: "white"},
		".header": {
			background: "#81a9c3",
			justifyContent: "center",
			alignItems: "center"
		},
		".header__title": {
			color: "#fff",
			fontSize: "18px",
			fontWeight: "bold",
			height: "50px",
			lineHeight: "50px"
		},
		".main": {flex: "1", padding: "15px"},
		".h1": {fontSize: "24px"},
		".item": {flexDirection: "row", padding: "10px 0"},
		".item__text": {color: "#333", whiteSpace: "nowrap"},
		".item__value": {marginLeft: "5px"},
		".footer": {
			background: "#81a9c3",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center"
		},
		".footer__text": {
			color: "#fff",
			fontSize: "14px",
			height: "30px",
			lineHeight: "30px"
		},
		".cell": {
			padding: "8px",
			height: "60px",
			borderBottom: "0.5px solid #ddd",
			backgroundColor: "#fff",
			flexDirection: "row"
		},
		".title": {fontWeight: "bold", fontSize: "18px", color: "#000"},
		".subtitle": {color: "#333"},
		".left": {flex: "1", width: "60px"},
		".right": {flex: "4"}
	};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
