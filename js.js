//const getCar = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});
function getCar(name, model, owner, year, phone, image) {
	return{
		name: name,
		model: model,
		owner: owner,
		year: year, 
		phone: phone,
		image: image
	};
}

const cars = [
	getCar('Ford', 'gt', 'Paul', '1969', '+7 999 123 12 23', 'img/ford-gt.jpg'),
	getCar('Ford', 'thunderbird', 'Jhon', '1971', '+7 999 322 22 77', 'img/ford-thunderbird.jpg'),
	getCar('Lotus', 'elise', 'Ken', '2005', '+7 999 775 45 11', 'img/lotus-elise.jpg')
];

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		logs:[],
		selectIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods:{
		selectCar: function(index){
			this.car = cars[index]
			this.selectIndex = index
		},
		newOrder: function(){
			this.modalVisibility = false
			this.logs.push(
					log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
				)

		},
		cancelOrder: function(){
			this.modalVisibility = false
			this.logs.push(
					log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cnl')
				)			
		}
	},
	computed:{
		changePhoneBtnText: function(){
			return this.phoneVisibility ? "Hide phone" : "Show phone"
		},

		filterCars: function(){
			var self = this;
			const filter = this.cars.filter(function(car){
				return car.name.indexOf(self.search) > -1 || car.model.indexOf(self.search) > -1; 
			})
			return filter;
		}
	},
	filters: {
		date: function(val){
			return val.toLocaleString();
		}
	}
}) 