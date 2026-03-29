const menuIcon = document.querySelector(".bx-menu-closer");
const dropContent = document.querySelector("#dropdown");
const courseDropprer = document.querySelector(".click-drop");
const courseDropped = document.querySelector("#courses-dropChild");
const droppingIcon = document.querySelector(".course-dropper");


if(menuIcon && dropContent){
    menuIcon.addEventListener("click", ()=>{
        if(dropContent.style.display === "none"){
            dropContent.style.display = "flex";
            //dropContent.style.classList.add("scroll");
            //document.body.classList.add("no-scroll");
            if(courseDropped && courseDropprer && droppingIcon){
                courseDropprer.addEventListener("click", ()=>{
                    if(courseDropped.style.display === "none"){
                        courseDropped.style.display = "flex";
                        //dropContent.style.classList.add("scroll");
                        if(droppingIcon.classList.contains("bx-chevron-down")){
                            droppingIcon.classList.replace("bx-chevron-down", "bx-chevron-up");
                        }
                    }else{
                        courseDropped.style.display = "none";
                        droppingIcon.classList.replace("bx-chevron-up", "bx-chevron-down");
                    }
                })
            }
        }else{
            dropContent.style.display = "none"
            document.body.classList.remove("no-scroll");
        }
    });
};

/*if(courseDropped.style.display === "flex"){
    dropContent.style.classList.add("scroll");
}*/