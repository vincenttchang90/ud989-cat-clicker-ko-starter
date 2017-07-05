var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.level = ko.observable('');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		if(this.clickCount() < 10){
			this.level('Newborn');
		}
		else if(this.clickCount() < 19){
			this.level('Baby');
		}
	}

}

ko.applyBindings(new ViewModel());