(function($){var trigger=new ScrollTrigger({once:!0});var $window=$(window),$body=$('body'),$banner=$('#banner'),$header=$('#header'),$moreProjects=$('#more-projects');breakpoints({xlarge:['1281px','1680px'],large:['981px','1280px'],medium:['737px','980px'],small:['481px','736px'],xsmall:[null,'480px']});$window.on('load',function(){window.setTimeout(function(){$body.removeClass('is-preload')},100)});if(browser.mobile)
$body.addClass('is-mobile');else{breakpoints.on('>medium',function(){$body.removeClass('is-mobile')});breakpoints.on('<=medium',function(){$body.addClass('is-mobile')})}
$('.scrolly').scrolly({speed:1500,offset:$header.outerHeight()});$('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:'right',target:$body,visibleClass:'is-menu-visible'});if($banner.length>0&&$header.hasClass('alt')){$window.on('resize',function(){$window.trigger('scroll')});$banner.scrollex({bottom:$header.outerHeight()+1,terminate:function(){$header.removeClass('alt')},enter:function(){$header.addClass('alt')},leave:function(){$header.removeClass('alt')}})}
var extraProjects=[{technologies:"C# Unity ARCore SDK",name:"AR CAR GUIDES",description:"Android application made with Unity that uses augmented reality elements having the main purpose to provide information about cars. Watch animated maintenance guides or how to fix common car problems.",aboutPage:"/projects/arcars.html",gitHubPage:"https://github.com/craciuncezar/ARCore-Car-App",demoPage:"#",cardImgClass:"card-ar"},{technologies:"JAVA Android SDK Firebase GoogleDirections API SqlLite",name:"SUBWAY HELPER",description:"Android native application for people who use the Bucharest subway. Provides information regarding trains, prices and schedule. Set a starting point and a destination and get a route.",aboutPage:"",gitHubPage:"#",demoPage:"#",cardImgClass:"card-subway"}]
$moreProjects.on("click",function(){if(extraProjects.length>=2){var project=extraProjects.splice(0,2);project.map((project)=>{$(`
					<div onclick="location.href='${project.aboutPage}'" class="card ${project.cardImgClass}">
					<div class="card-content">
						<h5>${project.technologies}</h5>
						<h4>${project.name}</h4>
						<p>${project.description}</p>
						<button class="project-button">
							<a class="button" href="${project.aboutPage}">About</a>
						</button>
						<button class="project-button">
							<a class="button" href="${project.gitHubPage}">GitHub</a>
						</button>
					</div>
				</div>
					`).insertBefore($moreProjects)})}else if(extraProjects.length>0){$(`
					<div onclick="location.href='${extraProjects[0].aboutPage}'" class="card ${extraProjects[0].cardImgClass}">
					<div class="card-content">
						<h5>${extraProjects[0].technologies}</h5>
						<h4>${extraProjects[0].name}</h4>
						<p>${extraProjects[0].description}</p>
						<button class="project-button">
							<a class="button" href="${extraProjects[0].aboutPage}">About</a>
						</button>
						<button class="project-button">
							<a class="button" href="${extraProjects[0].gitHubPage}">GitHub</a>
						</button>
					</div>
				</div>
					`).insertBefore($moreProjects);extraProjects.splice(0,1)}
if(extraProjects.length<=0){$moreProjects.hide()}})})(jQuery)