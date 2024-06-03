// ***********preloder F**********
let loding_img = document.getElementById('loding_img');
function loding(){
    loding_img.style.display = 'none';
}
// **********navigation toggle btn F************
let toggle_btn = document.getElementById('toggle_btn');
let nav = document.querySelector('.nav');
let show = true;
toggle_btn.addEventListener('click', () => {
   if(show){
    nav.style.display = 'none';
    show = false;
   }else {
     nav.style.display = 'block';
     show = true;
   }
})
// ***********navigaTion Menu Acitve***************
let navlist = document.querySelectorAll('#nav_Menu li a');
navlist.forEach((value, index) => {
   value.addEventListener('click', () => {
     document.querySelector('.nav-active')?.classList.remove('nav-active');
     value.classList.add('nav-active');
   })
})
// *****************all section slide F*************
let body = document.querySelectorAll('#body .section');
let tab_Btn = document.getElementById('tab_Btn');
let test = document.getElementById('test');
// **********Book_now Card F************
let book_Now_All_Card = document.querySelectorAll('#all_Card .book-now-card');
let card_One = document.querySelector('.card_One');
let book_Now_Menu = document.querySelectorAll('.book-now-menu ul li');
let booking_Img = document.getElementById('booking_Img');
let card_close_btn = document.getElementById('card_close_btn');
let booking_Card = document.getElementById('booking_Card');
let open_booking_card_btn= document.getElementById('book_Now');
let submit_booking = document.getElementById('submit_booking');
let nav_Menu = document.querySelectorAll('#menu li');
// **********input card selector**********
// **********book_Now_city_selector*******/
let city_Card_form = document.getElementById('city_Card_form');
let city_card = document.querySelectorAll('#city_card input');
let city_Submit_Btn = document.getElementById('city_Submit_Btn');
let cityData = [];
// **********book_Now_hotle_selector*******/
let hotle_card_form = document.querySelector('#hottle_card_form');
let hotle_card_form_input = document.querySelectorAll('#hottle_card_form input');
let hotle_Reviw = document.querySelectorAll('#card_Three_R span i');
let hotle_submit_Data_Btn = document.getElementById('hotle_submit_Data_Btn');
// **********book__selector*******/
let visitor = document.getElementById('visitor_Name');
let city = document.getElementById('visit_city');
let hotleName = document.getElementById('hotle_name');
let visit_Id = document.getElementById('visit_Id');
let stay_Time = document.getElementById('stay_Time');
let hotleDuration = document.getElementById('hotle_Duration');
let hotleAmount = document.getElementById('hotle_Amount');
let submit_btn = document.getElementById('submit_booking');
// **********open_booking_Card_btn F*******/
let open_booking_card_btn_F = () => {
   booking_Card.classList.toggle('card-hidden');
   booking_Card.style.visibility ='visible';
}
// **********open_booking_Card_btn E*******/
open_booking_card_btn.addEventListener('click', open_booking_card_btn_F);
// **********close_booking_card_btn F*******/
let close_booking_card_F = () => {
   booking_Card.style.visibility ='hidden';
}
// **********book_Now_Card_Active_F**********F*********
let book_Now_Card_Active_F = (index) => {
    document.querySelector('.active')?.classList.remove('active');
    nav_Menu[index].classList.add('active');
}
// **********book_Now_Menu_F ***F****/
let book_Now_Menu_Card_F = (index) => {
    if(index == 0){
        book_Now_Card_Active_F(index);
        booking_Img.src='./style/images/book_c.jpg';
        book_Now_All_Card[index].style.display="block";
        book_Now_All_Card[1].style.display="none";
        book_Now_All_Card[2].style.display="none";
    }
    if(index == 1){
        book_Now_Card_Active_F(index);
        booking_Img.src='./style/images/book_h.jpg';
        book_Now_All_Card[index].style.display="block";
        book_Now_All_Card[0].style.display="none";
        book_Now_All_Card[2].style.display="none";
    }
    if(index == 2){
        book_Now_Card_Active_F(index);
        booking_Img.src='./style/images/book_s.jpg';
        book_Now_All_Card[index].style.display="block";
        book_Now_All_Card[0].style.display="none";
        book_Now_All_Card[1].style.display="none";
    }
    if(index == 3){
        book_Now_Card_Active_F(index);
        booking_Img.src='./style/images/book-now-c.jpg';
        book_Now_All_Card[index].style.display="block";
        book_Now_All_Card[0].style.display="none";
        book_Now_All_Card[1].style.display="none";    
        book_Now_All_Card[2].style.display="none";
    }
}
// ********book now card ul li [Acive]*********
book_Now_Menu.forEach((value, index) => {
   value.addEventListener('click', () => {
       book_Now_Menu_Card_F(index);
   })
})
// ***************booking_Card[3]_Active C & P***********
let booking_Card_Active = () => {
   submit_btn.addEventListener('click', () => {
       let index = 3;
       book_Now_Menu_Card_F(index);
   })
}
booking_Card_Active();
// *********validation_city Data Validation *****F****
let validation_Data = (visitor_Name, visiteId, cityName, stayTime) => {
    if(visitor_Name == '' || visiteId == '' || cityName =='' || stayTime == ''){
        alert('Empty Data !!!');
    }
    else {
        if(!visitor_Name.match(/\d+/) && !visitor_Name.match(/[0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
            visitor.innerHTML= visitor_Name;
           if(!visiteId.match(/[!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
              visit_Id.innerHTML= visiteId;
              if(!cityName.match(/[0-9!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
                city.innerHTML= cityName;
                if(!stayTime.match(/[a-zA-Z\!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
                    stay_Time.innerHTML= stayTime;
                    // ***card_One**open
                    let index = 1;
                    book_Now_Menu_Card_F(index);
                    city_card.forEach((input) => {
                        input.value = '';
                    })
                }
                else{ 
                    alert('Not Valid Data');
                } 
              }
           }
        }       
    }
}
// *********hotle Data Validation ****F*****
let validation_Hotle_Data = (hotle_Name, hotle_Duration, hotle_Amount) => {
    if(hotle_Name == '' || hotle_Duration == '' || hotle_Amount ==''){
        alert('Empty Hotle Data !!!');
    }
    else {
        if(!hotle_Name.match(/\d+/) && !hotle_Name.match(/[0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
            hotleName.innerHTML = hotle_Name;
            if(!hotle_Duration.match(/[a-zA-z!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
                hotleDuration.innerHTML = hotle_Duration;
                if(!hotle_Amount.match(/[a-zA-Z!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
                    hotleAmount.innerHTML= hotle_Amount;
                    hottle_Reating_Validation(hotle_Amount);
                    // ***card_One**open
                    let index = 2;
                    book_Now_Menu_Card_F(index);
                }
                else{ 
                    alert('$ demo Number place');
                } 
             }
          }
        }
}
// ********hottle Reating Validation*********F***
let h_Amount = document.getElementById('h_Amount');
let hottle_Reating_Validation = (hotle_Amount) => {
    if(hotle_Amount >= 50){
       for(let i = 0; i <= 0;){
        hotle_Reviw[i].classList.add('reviw_color');
        h_Amount.placeholder='One Star Hotle';
        i++;
       }
    }else{
        alert('Not Fount Hotle');
    }
    if(hotle_Amount >= 100){
        for(let i = 0; i <= 1;){
            hotle_Reviw[i].classList.add('reviw_color');
            h_Amount.placeholder='Two Star Hotle';
            i++;
        }
    }
    if(hotle_Amount >= 150){
       for(let i = 0; i <= 2;){
           hotle_Reviw[i].classList.add('reviw_color');
           h_Amount.placeholder='Three Star Hotle';
           i++;
       }
    }
    if(hotle_Amount >= 200){
        for(let i = 0; i <= 3;){
            hotle_Reviw[i].classList.add('reviw_color');
            h_Amount.placeholder='Four Star Hotle';
            i++;
        }
    }
    if(hotle_Amount >= 250){
        for(let i = 0; i <= 4;){
            hotle_Reviw[i].classList.add('reviw_color');
            h_Amount.placeholder='Five Star Hotle';
            i++;
        }
    }
 
}
// *********collect city Data Btn****Eent*****
city_Submit_Btn.addEventListener('click', (e) => {
    e.preventDefault();
    let visitor_Name = city_Card_form.name.value;
    let visiteId = city_Card_form.visiteId.value;
    let cityName = city_Card_form.cityName.value;
    let stayTime = city_Card_form.stayTime.value;
    // *****send this data in validation_Data()******
    validation_Data(visitor_Name, visiteId, cityName, stayTime);

    city_card.forEach((input) => {
        input.value = '';
    })    
})
// *********hotle All card ****Event*****
hotle_submit_Data_Btn.addEventListener('click', (e) => {
    e.preventDefault();
    let hotle_Name = hotle_card_form.hotleName.value;
    let hotle_Duration = hotle_card_form.hotleDuration.value;
    let hotle_Amount = hotle_card_form.hotleAmount.value;
    // *****send this data in validation_Data()******
    validation_Hotle_Data(hotle_Name, hotle_Duration, hotle_Amount);
    let index = 2;
    book_Now_Menu_Card_F(index);
    // empty data fild
    hotle_card_form.hotleName.value = '';
    hotle_card_form.hotleDuration.value = '';
    hotle_card_form.hotleAmount.value = '';
});
// **********close_book_card_btn E*******/
card_close_btn.addEventListener('click', close_booking_card_F);
// **********Popular Destination Images************
let singapur_images = ['singapur-1.jpg','singapur-2.jpg','singapur-3.jpg','singapur-4.jpg','singapur-5.jpg'];
let thailand_images = ['thailand-1.jpg','thailand-2.jpg','thailand-3.jpg','thailand-4.jpg','thailand-5.jpg'];
let malaysia_images = ['malaysia-1.jpg','malaysia-2.jpg','malaysia-3.jpg','malaysia-4.jpg','malaysia-5.jpg'];
let astralia_images = ['astralia-1.jpg','astralia-2.jpg','astralia-3.jpg','astralia-4.jpg','astralia-5.jpg'];
let indonesia_images = ['indonesia-1.jpg','indonesia-2.jpg','indonesia-3.jpg','indonesia-4.jpg','indonesia-5.jpg'];
// **********Popular Destination Selector************
let destaination_menu = document.querySelectorAll('#destaination_menu ul li');
let display_image_container = document.getElementById('display_image');
let list_images = document.querySelectorAll('#list_images div img');
let rating = document.querySelectorAll('#rating span');
let rating_I = document.querySelectorAll('#rating span i');
let now_rating = document.getElementById('now_rating');
let now_reviews = document.getElementById('now_reviews');
let progress_bar = document.querySelectorAll('#progress_bar div span span');
let review_Toggle = document.querySelector('#review_Toggle');
// ***********destaination_menu*****Active*****
destaination_menu.forEach((value) => {
    value.addEventListener('click', () => {
        document.querySelector('.active_bg')?.classList.remove('active_bg');
        value.classList.add('active_bg');
    })
})
// ***********display_Function**********
let display_Function = (index) => {
   for(let i = 0; i <= singapur_images.length; i++){
       if(index == 0){
        display_image_container.src = `./style/images/${singapur_images[index]}`;
        list_images[i].src=`./style/images/${singapur_images[i]}`; 
       }
       else if(index == 1) {
        display_image_container.src = `./style/images/${thailand_images[index]}`;
        list_images[i].src=`./style/images/${thailand_images[i]}`; 
       }
       else if(index == 2) {
        display_image_container.src = `./style/images/${malaysia_images[index]}`;
        list_images[i].src=`./style/images/${malaysia_images[i]}`; 
       }
       else if(index == 3) {
        display_image_container.src = `./style/images/${astralia_images[index]}`;
        list_images[i].src=`./style/images/${astralia_images[i]}`; 
       }
       else if(index == 4) {
        display_image_container.src = `./style/images/${indonesia_images[index]}`;
        list_images[i].src=`./style/images/${indonesia_images[i]}`; 
       }
   }
}
// ***********images_Select_Function**********
let images_Select_Function = (value) => {
    display_image_container.src =`${value.src}`;
}
// ************progress_Toggle_btn_F**************
let progress_btn = document.querySelector('#review_Toggle i');
let r_card_Display = () => {
    let progress = document.querySelector('#progress_bar');
    let a = progress.classList;
    let b = Object.getOwnPropertyNames(a);
    progress.classList.toggle('hide');
    if(b[1]){
        progress_btn.style.rotate = '360deg';
    }
    if(b[2]){
        progress_btn.style.rotate = '180deg';
    }
}
// review_Toggle**********Event*****
review_Toggle.addEventListener('click', r_card_Display);
// **********review icons color Event**********
rating_I.forEach((value) => {
    value.addEventListener('click', () => {
        document.getElementById('reating_active')?.classList.remove('reating_active');
        value.classList.add('reating_active');
    })
})
// ***********rating_Give_Function**********
let rating_Give_Function = (value, index) => {
   for(let i = 0; i <= index; i++){
       value.classList.add('color_toggle');
       now_rating.innerText =`2${i}k of ${i}`;
       now_reviews.innerText =`3${i}k`;
       if(index == 0){
        progress_bar[index].style.paddingRight= '50%';
       }
       else if(index == 1){
        progress_bar[index].style.paddingRight= '45%';
       }
       else if(index == 2){
        progress_bar[index].style.paddingRight= '65%';
       }
       else if(index == 3){
        progress_bar[index].style.paddingRight= '85%';
       }
       else if(index == 4){
        progress_bar[index].style.paddingRight= '95%';
       }
  
   }
}
// *********images_Select_Function**Event********
destaination_menu.forEach((value, index) => {
    value.addEventListener('click', () => {
        display_Function(index);
    })
})
// *********images_Select_Function**Event********
list_images.forEach((value, index) => {
    value.addEventListener('click', () => {
        images_Select_Function(value, index);
    })
})
// *********images_Select_Function**Event********
rating.forEach((value, index) => {
    value.addEventListener('click', () => {
        rating_Give_Function(value, index);
    })
})
// ****************Awesome Packages and Loging book card*************
let loging_form = document.querySelectorAll('#loging_form input');
let book_Now_Loging = document.getElementById('book_Now_Loging');
let awesome_Cards = document.querySelectorAll('.awesome-car-container .awesome-card');
// ***list**
let booking_Btn = document.querySelectorAll('.book-now');
let booking_List = document.querySelectorAll('.list ul');
let list_One = booking_List[0].children;
let list_Two = booking_List[1].children;
let list_Three = booking_List[2].children;
let dolar = document.querySelectorAll('#dolor');
let lorem_p = document.querySelectorAll('#lorem_P');
let book_Now_btn = document.querySelectorAll('#book_Now_btn');
// ******************thailand_F************
let thailand_F = (booking_Time, booking_Person) => {
    list_One[1].innerHTML = `${booking_Time} Day`;
    list_One[2].innerHTML = `${booking_Person} Person`;
    list_One[0].classList.add('menu_li');
    list_One[1].classList.add('menu_li');
    list_One[2].classList.add('menu_li');
    let person = parseFloat(booking_Person);
    let number = 149.00 + (person + 30);
    dolar[0].innerHTML = `$${number}.00`;
    lorem_p[0].innerHTML = `Booking`;
    lorem_p[0].classList.add('lorem_P');
    lorem_p[0].classList.add('loging_boking_p');
    book_Now_btn[0].classList.add('hide');
}
// ******************indonesia_F************
let indonesia_F = (booking_Time, booking_Person) => {
    list_Two[1].innerHTML = `${booking_Time} Day`;
    list_Two[2].innerHTML = `${booking_Person} Person`;
    list_Two[0].classList.add('menu_li');
    list_Two[1].classList.add('menu_li');
    list_Two[2].classList.add('menu_li');
    let person = parseFloat(booking_Person);
    let number = 149.00 + (person + 25);
    dolar[1].innerHTML = `$${number}.00`;
    lorem_p[1].innerHTML = `Boking`;
    lorem_p[1].classList.add('lorem_P');
    lorem_p[1].classList.add('loging_boking_p');
    book_Now_btn[1].classList.add('hide');
}
// ******************malaysia_F************
let malaysia_F = (booking_Time, booking_Person) => {
    list_Three[1].innerHTML = `${booking_Time} Day`;
    list_Three[0].classList.add('menu_li');
    list_Three[1].classList.add('menu_li');
    list_Three[2].classList.add('menu_li');
    list_Three[2].innerHTML = `${booking_Person} Person`;
    let person = parseFloat(booking_Person);
    let number = 149.00 + (person + 20);
    dolar[2].innerHTML = `$${number}.00`;
    lorem_p[2].innerHTML = `Boking`;
    lorem_p[2].classList.add('lorem_P');
    lorem_p[2].classList.add('loging_boking_p');
    book_Now_btn[2].classList.add('hide');
}
// ******************awesome_Cars_F************
let awesome_Cards_F = (booking_Time, booking_Person, booking_City) => {
    let thailand_Index = 0;
    let indonesia_Index = 1;
    let malaysia_Index = 2;
    // ********booking_C Card Event**************     
    if(thailand_Index == booking_City){
        thailand_F(booking_Time, booking_Person);
        awesome_Cards[0].style.borderBottom= '5px solid #eab308';
        awesome_Cards[1].style.borderBottom= 'none';
        awesome_Cards[2].style.borderBottom= 'none';
    }

    else if(indonesia_Index == booking_City){
        indonesia_F(booking_Time, booking_Person);
        awesome_Cards[1].style.borderBottom= '5px solid #eab308';
        awesome_Cards[0].style.borderBottom= 'none';
        awesome_Cards[2].style.borderBottom= 'none';
    }

    else if(malaysia_Index == booking_City){
        malaysia_F(booking_Time, booking_Person);
        awesome_Cards[2].style.borderBottom= '5px solid #eab308';
        awesome_Cards[0].style.borderBottom= 'none';
        awesome_Cards[1].style.borderBottom= 'none';
    }
}
// ********book_Now_Loging btn**************
let book_Now = document.querySelectorAll('.book-now');

let city_Data_F = (booking_City) => {
    book_Now_Loging.addEventListener('click', (e) => {
        e.preventDefault();
        let user_Name = loging_form[0].value;
        let booking_Email = loging_form[1].value;
        let booking_Time = loging_form[2].value;
        let booking_Person = loging_form[3].value;
        if(user_Name == '' || booking_Email == '' || booking_Time =='' || booking_Person == ''){
            alert('Empty Data !!!');
        }
        else if(!user_Name.match(/[0-9!@#\$%\^\&*\)\(+=._-]$/g)){
            if(booking_Email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
               if(!booking_Time.match(/[a-zA-Z\!@#\$%\^\&*\)\(+=._-]{1}$/g)){
                if(!booking_Person.match(/[!@#\$%\^\&*\)\(+=._-]{1}$/g)){
                    awesome_Cards_F(booking_Time, booking_Person, booking_City);
                    loging_form[0].value = "";
                    loging_form[1].value = "";
                    loging_form[2].value = "";
                    loging_form[3].value = "";
                } 
             }
            }
        }else{
            alert('Not Match');
        }
    })
}
// *********book_Now list forEach()***Awesome Packages***
book_Now.forEach((cityValue, index) => {
    cityValue.addEventListener('click', () => {
        if(index == 0){
            let thailand = list_One[0].innerText;
            loging_form[4].placeholder = thailand;
            loging_form[4].value = thailand;
            city_Data_F(index);
        }
        else if(index == 1){
            let indonesia = list_Two[0].innerText;
            loging_form[4].placeholder = indonesia;
            loging_form[4].value = indonesia;
            city_Data_F(index);
        }
        else if(index == 2){
            let malaysia = list_Three[0].innerText;
            loging_form[4].placeholder = malaysia;
            loging_form[4].value = malaysia;
            city_Data_F(index);
        }
     })    
})
// ***************Testimonial Seletor********************
let card_Slider = document.querySelector('#card_Slider');
let slide = document.querySelector('.slide');
let slides = document.querySelectorAll('.slide');
let arrow_Btn = document.querySelectorAll('.main-container span i');
// ***********Testimonial Seletor F**************
let first_Card_Width = slide.offsetWidth;
arrow_Btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        card_Slider.scrollLeft += btn.id ==="left_Btn" ? -first_Card_Width : first_Card_Width;
    })
})
let isDragging = false, startX, startScrollLeft;
let dragg_Mouse_Down = (e) => {
    isDragging = true;
    card_Slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = card_Slider.scrollLeft;
}
let dragging = (e) => {
    if(!isDragging) return;
    card_Slider.scrollLeft = startScrollLeft - (e.pageX -startX);
}
let dragStop = () => {
    isDragging = false;
    card_Slider.classList.remove("dragging");
}
// *******mouse down**********
card_Slider.addEventListener("mousedown", dragg_Mouse_Down);
// *******mouse dragging**********
card_Slider.addEventListener("mousemove", dragging);
// *******mouse dragStop**********
card_Slider.addEventListener("mouseup", dragStop);