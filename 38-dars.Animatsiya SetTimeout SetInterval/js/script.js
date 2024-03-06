'use strict';

// ASINxronlik metodlari

// setTimeout - bu ma'lum bir vaqt davomida ishga tushuvchi funksiya

// Namuna-1:
// setTimeout(()=>{
//   console.log('set timeout ');
// }, 1000)

//  Namuna-2:
// setTimeout(()=>{
//   logger();
// }, 1000)

// function logger(){
//   console.log('set time out');
// }

// Namuna-3 real loyihada
// const btn = document.querySelector('#btn');
// let timerId;
// let i=1;
// btn.addEventListener('click',()=>{
//   //  timerId = setTimeout(logger,1000); // 1.1 
//   //setInterval
//   timerId = setInterval(logger,500);
// })


// Bu setTimeoutni o'chirish uchun
// clearInterval(timerId); // ushbu metod 1.1 holatda anpnim funk.ya ichida chaqirilganligi sababli ishlay olmaydi

// function logger(){
//   if(i == 3){
//     clearInterval(timerId); // setTimeoutda ishlamaydi
//   }
//   console.log('set time out !');
//   i++; // shu funksiyani ishlashini bilish uchun
//   console.log(i);
// }


// ==================================

// Funksiya ichida setTimeout metodi shu setTimeout funksiyaning o'zini chaqirganda 2ala vaqt ham qo'shib keyin ishga tuhsadi
// let id = setTimeout(function log(){
//   console.log('helo log');
//   id = setTimeout(log,500);
// },500);

// ======================================

function myAnimation(){
  const car = document.querySelector('.car');
  let pos = 0;

  const timerId = setInterval(frame,10);

  function frame(){
    if(pos == 700){
      clearInterval(timerId);
    }else{
      console.log(pos);
      pos++;
      car.style.left = pos +'px'; // dynamic typing
    }
  }
}

btn.addEventListener('click',myAnimation)


