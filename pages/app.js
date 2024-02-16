const azeMap = document.querySelector("svg")
const pathes = [...document.querySelectorAll("path")];
const regions = document.querySelector("#regions");
const toolTip= document.querySelector(".tooltip");
pathes.map((path) => {
 const region = document.createElement("li")
 region.textContent = path.getAttribute("name")
 regions.append(region)
})
regions.addEventListener('click',(e)=>{
 if (e.target.tagName !== "LI") {
    return;
}
document.querySelector(".active_btn")?.classList.remove("active_btn")
e.target.classList.add("active_btn");
document.querySelector(".active")?.classList.remove("active")
document.querySelector(`path[name="${e.target.textContent}"]`)
.classList.add("active")
});
azeMap.addEventListener('click',(e)=>{
    if (e.target.tagName !== "path") {
        return;
    }
    toolTip.classList.add("tooltip")
    toolTip.style.top=e.pageY + "px";
    toolTip.style.left=e.pageX + "px"
    console.log(e);
    toolTip.textContent = e.target.getAttribute("name")
    // document.body.prepend(toolTip)
})