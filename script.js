document.addEventListener("DOMContentLoaded", () => {

  console.log("script loaded find error elsewhere!!");
  //let's add interactivity to the chat with us button so that when a user clicks it, a modal opens where they can send us messages and files.

  const chatBtn = document.getElementById("chat-btn1");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");

  if(chatBtn && closeModal && modal){
    chatBtn.onclick = () =>{modal.style.display = "block";};
    closeModal.onclick = () =>{modal.style.display = "none";};
  };

  // now we add interactivity to the log in button so that when a user clicks the button they are taken to the log in page.

  const loginBtn = document.getElementById("login-btn");

  if(loginBtn){
    loginBtn.onclick = () =>{
      window.location = "login.html";
    };
  };

  //let's upload files to the preview arear in the chat with us modal and show the filename in the textarear.

  const paperclipModal = document.querySelector("#paperclip-modal");
  const filesModal = document.getElementById("files-upload");
  const prevArear = document.querySelector(".preview-arear");
  const modal2 = document.getElementsByClassName("modal-bottom");

  if( paperclipModal){
    paperclipModal.onclick = () => filesModal.click();

    filesModal.addEventListener("change", ()=>{
      for (const file of filesModal.files){
        const url = URL.createObjectURL(file);
      

      //let's create a wrapper for the files uploaded.

      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.display = "inline-block";
      wrapper.style.margin = "5px";

      //let's create a remove button to remove the files uploaded incase the user changes mind.

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.style.position = "absolute";
      removeBtn.style.top = "0";
      removeBtn.style.right = "0";
      removeBtn.style.background = "rgba(180, 10, 10, .5)";
      removeBtn.style.color = "rgba(255, 255, 255, .7)";
      removeBtn.style.border = "none";
      removeBtn.style.cursor = "pointer";
      removeBtn.style.borderRadius = "5px";

      removeBtn.onclick = () =>{
        wrapper.remove();
      };

      if (file.type.startsWith("image/")) {
        const image = document.createElement("img");
        image.src = url;
        image.style.maxWidth = "50px";
        image.style.borderRadius = "50px";
        wrapper.appendChild(image);
      }else if(file.type.startsWith("video/")) {
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        video.style.maxWidth = "150px";
        video.style.borderRadius = "10px";
        wrapper.appendChild(video);
      }else{
        const text =document.createElement("p");
        text.textContent = file.name;
        wrapper.appendChild(text);
      }
      wrapper.appendChild(removeBtn);
      prevArear.appendChild(wrapper);

      filesModal.value = "";
    }});
  };
  //let's add interactivity to the try free lesson buttons

  const freelessBtn = document.querySelectorAll(".freeless-btn");

  freelessBtn.forEach(button => { 
      button.onclick = () => {
      window.location = "freeless.html"}
    });

  // let's add interactivity to the enroll button.

  const enroll = document.querySelectorAll(".enrollBtn");

  enroll.forEach(button => {
    button.onclick = () =>{
    window.location = "freeless.html"}
  });

  //let's make the faq section in the courses pages interactive
  try{
    const faq = document.querySelector("#FAQ1");
    const faqTxt = document.querySelector(".FAQ-text");

    let clicked = false;

    faq.addEventListener("mouseenter", () => {
      if(!clicked) faqTxt.textContent = "Click";
    });

    faq.addEventListener("mouseleave", () => {
      if(!clicked) faqTxt.textContent = "Lorem ipsum dolor sit amet consectetur.";
    });

    faq.addEventListener("click", () =>{
      clicked = true;
      faqTxt.textContent = "this is the answer to what you asked!";
    });
  }catch(error){
    console.log("this is the stupid error:", error);
  }
});

const FAQS1 = document.querySelector(".quiz-1");
const ans1 = document.querySelector(".ans-1");
const icon1 = document.querySelector(".icon1");

if(FAQS1 && ans1){
  FAQS1.addEventListener("click", () => {
    
    if(ans1.style.display === "none"){
      ans1.style.display = "flex";
      icon1.className = "bx-chevron-up"
    }else{
      ans1.style.display = "none";
      icon1.className = "bx-chevron-down"
    }
  })
}

const FAQS2 = document.querySelector(".quiz-2");
const ans2 = document.querySelector(".ans-2");
const icon2 = document.querySelector(".icon2");

if(FAQS2 && ans2){
  FAQS2.addEventListener("click", () => {
    
    if(ans2.style.display === "none"){
      ans2.style.display = "flex";
      icon2.className = "bx-chevron-up"
    }else{
      ans2.style.display = "none";
      icon2.className = "bx-chevron-down"
    }
  })
}

const FAQS3 = document.querySelector(".quiz-3");
const ans3 = document.querySelector(".ans-3");
const icon3 = document.querySelector(".icon3");

if(FAQS3 && ans3){
  FAQS3.addEventListener("click", () => {
    
    if(ans3.style.display === "none"){
      ans3.style.display = "flex";
      icon3.className = "bx-chevron-up"
    }else{
      ans3.style.display = "none";
      icon3.className = "bx-chevron-down"
    }
  })
}

const FAQS4 = document.querySelector(".quiz-4");
const ans4 = document.querySelector(".ans-4");
const icon4 = document.querySelector(".icon4");

if(FAQS4 && ans4){
  FAQS4.addEventListener("click", () => {
    
    if(ans4.style.display === "none"){
      ans4.style.display = "flex";
      icon4.className = "bx-chevron-up"
    }else{
      ans4.style.display = "none";
      icon4.className = "bx-chevron-down"
    }
  })
}

const FAQS5 = document.querySelector(".quiz-5");
const ans5 = document.querySelector(".ans-5");
const icon5 = document.querySelector(".icon5");

if(FAQS5 && ans5){
  FAQS5.addEventListener("click", () => {
    
    if(ans5.style.display === "none"){
      ans5.style.display = "flex";
      icon5.className = "bx-chevron-up"
    }else{
      ans5.style.display = "none";
      icon5.className = "bx-chevron-down"
    }
  })
}

const FAQS6 = document.querySelector(".quiz-6");
const ans6 = document.querySelector(".ans-6");
const icon6 = document.querySelector(".icon6");

if(FAQS6 && ans6){
  FAQS6.addEventListener("click", () => {
    
    if(ans6.style.display === "none"){
      ans6.style.display = "flex";
      icon6.className = "bx-chevron-up"
    }else{
      ans6.style.display = "none";
      icon6.className = "bx-chevron-down"
    }
  })
}

const FAQS7 = document.querySelector(".quiz-7");
const ans7 = document.querySelector(".ans-7");
const icon7 = document.querySelector(".icon7");

if(FAQS7 && ans7){
  FAQS7.addEventListener("click", () => {
    
    if(ans7.style.display === "none"){
      ans7.style.display = "flex";
      icon7.className = "bx-chevron-up"
    }else{
      ans7.style.display = "none";
      icon7.className = "bx-chevron-down"
    }
  })
}

const FAQS8 = document.querySelector(".quiz-8");
const ans8 = document.querySelector(".ans-8");
const icon8 = document.querySelector(".icon8");

if(FAQS8 && ans8){
  FAQS8.addEventListener("click", () => {
    
    if(ans8.style.display === "none"){
      ans8.style.display = "flex";
      icon8.className = "bx-chevron-up"
    }else{
      ans8.style.display = "none";
      icon8.className = "bx-chevron-down"
    }
  })
}

const FAQS9 = document.querySelector(".quiz-9");
const ans9 = document.querySelector(".ans-9");
const icon9 = document.querySelector(".icon9");

if(FAQS9 && ans9){
  FAQS9.addEventListener("click", () => {
    
    if(ans9.style.display === "none"){
      ans9.style.display = "flex";
      icon9.className = "bx-chevron-up"
    }else{
      ans9.style.display = "none";
      icon9.className = "bx-chevron-down"
    }
  })
}