$(document).ready(function(){

	$(document).on('click', '.js-nav a', function(e){
		e.preventDefault();
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	});
	
/*SUMMOSELECT*/
	if ($('.js-select').length > 0) {
		$('.js-select').each( function(i, item) {
			var $this = $(this),
				attr = $this.attr('multiple'),
				settings = {
					placeholder: $this.data('title'),
					csvDispCount: 20,
					floatWidth: 0,
					nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
				};

			if ($this.attr('multiple')) {
				settings.selectAll = true;
				settings.selectAlltext = $this.data('select');
			}

			$this.SumoSelect(settings);
		});
		$('.SumoSelect').each(function(){
			var $select = $(this),
				$wrapper = $select.find('.optWrapper'),
				$caption = $select.find('.CaptionCont');

			$caption.on('click', function(e) {
				if ($wrapper.find('.options li').length > 4) {
					$wrapper.jScrollPane({
						contentWidth: '0px',
						verticalDragMinHeight : 12,
						verticalDragMaxHeight: 12,
						mouseWheelSpeed: 50,
						animateScroll: true,
						animateDuration: 100
					});
				} 
			});
		});
	}
/*SUMMOSELECT*/
 validationForm();
 
 function validationForm() {
 	var myLanguage = {
 		errorTitle: 'Ошибка отправки формы!',
 		requiredField: 'Это обязательное поле',
 		requiredFields: 'Вы задали не все обязательные поля',
 		badTime: 'Вы задали некорректное время',
 		badEmail: 'Вы задали некорректный e-mail',
 		badTelephone: 'Вы задали некорректный номер телефона',
 		badSecurityAnswer: 'Вы задали некорректный ответ на секретный вопрос',
 		badDate: 'Вы задали некорректную дату',
 		lengthBadStart: 'Значение должно быть в диапазоне',
 		lengthBadEnd: ' символов',
 		lengthTooLongStart: 'Значение длинее, чем ',
 		lengthTooShortStart: 'Значение меньше, чем ',
 		notConfirmed: 'Введённые значения не могут быть подтверждены',
 		badDomain: 'Некорректное значение домена',
 		badUrl: 'Некорретный URL',
 		badCustomVal: 'Введённое значение неверно',
 		andSpaces: ' и пробелы ',
 		badInt: 'Значение - не число',
 		badSecurityNumber: 'Введённый защитный номер - неправильный',
 		badUKVatAnswer: 'Некорректный UK VAT номер',
 		badStrength: 'Пароль не достаточно надёжен',
 		badNumberOfSelectedOptionsStart: 'Вы должны выбрать как минимум ',
 		badNumberOfSelectedOptionsEnd: ' ответов',
 		badAlphaNumeric: 'Значение должно содержать только числа и буквы ',
 		badAlphaNumericExtra: ' и ',
 		wrongFileSize: 'Загружаемый файл слишком велик (максимальный размер %s)',
 		wrongFileType: 'Принимаются файлы следующих типов %s',
 		groupCheckedRangeStart: 'Выберите между ',
 		groupCheckedTooFewStart: 'Выберите как минимум ',
 		groupCheckedTooManyStart: 'Выберите максимум из ',
 		groupCheckedEnd: ' элемент(ов)',
 		badCreditCard: 'Номер кредитной карты некорректен',
 		badCVV: 'CVV номер некорректно',
 		wrongFileDim: 'Неверные размеры графического файла,',
 		imageTooTall: 'изображение не может быть уже чем',
 		imageTooWide: 'изображение не может быть шире чем',
 		imageTooSmall: 'изображение слишком мало',
 		min: 'минимум',
 		max: 'максимум',
 		imageRatioNotAccepted: 'Изображение с таким соотношением сторон не принимается',
 		badBrazilTelephoneAnswer: 'Введённый номер телефона неправильный',
 		badBrazilCEPAnswer: 'CEP неправильный',
 		badBrazilCPFAnswer: 'CPF неправильный'
 	};
 
 	$.validate({
 		language: myLanguage,
 		modules: 'security',
 		borderColorOnError: '#ff0000',
 		scrollToTopOnError: false
 	});
 
 }; 

});
