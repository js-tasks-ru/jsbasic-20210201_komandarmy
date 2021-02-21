//1-module_2-task_verification_userName
		/**
		* Эту функцию трогать не нужно
		*/
		function print(text) {
			console.log(text);
		}

		/**
		* Эту функцию нужно поменять так,
		* чтобы функция sayHello работала корректно
		* @param {string | null} name
		* @returns {boolean}
		*/
		function isValid(name) {
			let name1 = name;
						
			if (name == null) {
				return false;
			}  
			
			if (name1 === "") {
				return false;
			} 
			
			let lengthName = name1.length; 
			let MIN_LENGHT_NAME = 4
			if (lengthName < MIN_LENGHT_NAME) {
				return false;
			} 
			
			let isSpaceInName = name1.includes(" ");
			if (isSpaceInName) {
				return false;
			} else {
				return true;
			}
		}
		/**
		* Эту функцию трогать не нужно
		*/
		function sayHello() {
			let userName = prompt('Введите ваше имя');
			if (isValid(userName)) {
				print(`Welcome back, ${userName}!`);
			} else {
				print('Некорректное имя');
			}
		}
		sayHello();
	