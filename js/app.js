var initialCats = [
		{
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nickname : ['Flabby']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nickname : ['Lion']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nickname : ['Dumbass']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nickname : ['Light']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat5.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nickname : ['Molly']
        }];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nickname);
	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		var title;
		if(clicks < 10){
			title = 'Newborn';
		} else if(clicks < 20){
			title = "Infant";
		} else if(clicks < 30){
			title = "30 is the new 20";
		} else if(clicks < 40){
			title = 'JK 40 is the new 30'
		}
		return title;
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	function changeCat(){
		self.currentCat(self.catList()[$index])
	}
}

ko.applyBindings(new ViewModel());