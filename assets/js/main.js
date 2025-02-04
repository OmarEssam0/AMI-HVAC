// $(document).ready(function() {
 
//     $(".owl-carousel").owlCarousel({
 
//         //Basic Speeds
//         slideSpeed : 200,
//         paginationSpeed : 800,
     
//         //Autoplay
//         autoPlay : false,
//         goToFirst : true,
//         goToFirstSpeed : 1000,
     
//         // Navigation
//         navigation : false,
//         navigationText : ["prev","next"],
//         pagination : true,
//         paginationNumbers: true,
     
//         // Responsive
//         responsive: true,
//         items : 5,
//         itemsDesktop : [1199,4],
//         itemsDesktopSmall : [980,3],
//         itemsTablet: [768,2],
//         itemsMobile : [479,1]
     
//     })
   
//   });


let menu = document.querySelector('.menu')



document.querySelector('.side-icon').addEventListener('click' , function(){
    menu.classList.replace('d-none' ,'d-block')
})
document.querySelector('.menu-close').addEventListener('click' , function(){
    menu.classList.replace('d-block' , 'd-none')
})

function sendMail(){
    var params ={
        to_name:'AMI-HVAC',
        from_name :document.querySelector('#FullName').value+document.querySelector('#CompanyName').value,
        email_id: document.querySelector('#Email').value,
        message: document.querySelector('#PhoneNumber').value + document.querySelector('#Message').value
    }
    emailjs.send("service_4yttutf","template_pxgnvfh" , params).then(function(res){
        alert('success')
    });
}



  