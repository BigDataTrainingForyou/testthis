var app = angular.module("mainApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
  
        
        // HOME STATES AND NESTED VIEWS ========================================
        
        
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/home.htm'
	})
	
	.state('about', {
            url: '/about',
            templateUrl: 'templates/aboutUs.htm'
            
        })
	.state('courses', {
            url: '/courses',
            templateUrl: 'templates/courses.htm'
            
        });
});




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}