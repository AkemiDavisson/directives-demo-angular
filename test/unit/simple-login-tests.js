
var body,
	element,
	html,
	scope

	beforeEach(function(){

		module('directives-demo-app');
		module('my.templates');
	});

	describe('opt-in', function(){

		it('should render directive',
			inject(function($compile, $rootScope){

				html = "";
				html += '<div>';
				html += '<opt-in>';
				html += '<div class="brand-logo pull-left"></div>';
				html += '</opt-in>';
				html += '</div>';


				body = angular.element(document.body);
				element = angular.element(html);
				body.append(element);

				scope = $rootScope.$new();
				$compile(element)(scope);
				scope.$digest(); 

				expect(element.find('form').length).toBe(1);

			 }));
	});