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
const ans1 = document.querySelectorAll(".ans-1");

if(FAQS1 && ans1){
  FAQS1.addEventListener("click", () => {
    alert("clicked!")
    if(ans1.style.display == "none"){
      ans1.style.display = "flex";
    }else{
      ans1.style.display = "none";
    }
  })
}
