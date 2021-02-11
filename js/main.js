
//form logic
$(function(){
    $("#nameError,#emailError,#phoneError,#courseError,#queryError").css({
        'color':'#d9534f'
    })
})
function formValidate(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const course=document.getElementById("course").value;
    const query=document.getElementById("query").value;

    const dotLocation=email.lastIndexOf(".");
    const atLocation=email.indexOf("@");

    if(name=='' || name==null){
        document.getElementById('nameError').innerHTML="Please Enter Name";
        return false;
    }
    if(name.length<4){
        document.getElementById('nameError').innerHTML="Name must be altleast 4 character long";
        return false;
    }
    if(email=='' || email==null){
        document.getElementById('emailError').innerHTML="Please Enter Email";
        return false;
    }
    if(atLocation<1 || (dotLocation-atLocation)<2){
        document.getElementById('emailError').innerHTML="Invalid Email";
        return false;
    }
    if(phone=='' || phone==null){
        document.getElementById('phoneError').innerHTML="Please Enter Phone Number";
        return false;
    }
    if(phone.length<10){
        document.getElementById('phoneError').innerHTML="Invalid Phone Number";
        return false;
    }
    if(course=='' || course==null){
        document.getElementById('courseError').innerHTML="Please Enter Course Name";
        return false;
    }
    if(query=='' || query==null){
        document.getElementById('queryError').innerHTML="Please Enter Your Query";
        return false;
    }
}
//slider
$(function(){
    $('.slider1').slick({
        infinite: true,
        autoplay:true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1000
      });
});
$(function(){
    $('.testimonial .two').slick({
        infinite: true,
        autoplay:true,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      });
});