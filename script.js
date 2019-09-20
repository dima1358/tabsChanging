tabsChanging("info-header", "info-header-tab", "info-tabcontent");

	function tabsChanging(tabsWrapClass, tabsCollClass, contentCollClass) {

		let tabsWrap = document.querySelector("." + tabsWrapClass),
			tabsColl = document.querySelectorAll("." + tabsCollClass),
			contentColl = document.querySelectorAll("." + contentCollClass);

		function hideContent(a) {
			for(let i = a; i < contentColl.length; i++) {
				contentColl[i].classList.remove("show");
				contentColl[i].classList.add("hide");
			}
		}
		hideContent(1);

		function showContent(b) {
			if (contentColl[b].classList.contains('hide')) {
				contentColl[b].classList.remove('hide');
				contentColl[b].classList.add('show');
			}
		}

		tabsWrap.addEventListener("click", function(event) {
			let target = event.target;
			if (target && target.classList.contains('info-header-tab')) {
				for(let i = 0; i < tabsColl.length; i++) {
					if (tabsColl[i] == target) {
						hideContent(0);
						showContent(i);
						break;
					}
				}
			}
		})
	};
