"use strict";const collapsableButton=document.querySelector(".js_collapsable"),collapsableCard=document.querySelector(".js_collapsable_design");function handleCollapsableClick(){collapsableCard.classList.toggle("hidden")}collapsableButton.addEventListener("click",handleCollapsableClick);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const l=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(l)}function writeImage(){profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);