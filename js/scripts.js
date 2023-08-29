const { postFairway } = require("../models/fairway");

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val(); 
    formData.image = $('#image_link').val(); 
    formData.description = $('#description').val(); 
    formData.link = $('#link').val();
    console.log("Form Data Submitted: ", formData);
    postFairway(formData)
}

function postFairway(dog){
    $.ajax({
        url:'/api/fairway',
        type:'POST',
        data:fairway,
        success: (result)=>{
            if(result.statusCode === 201){
                alert('product created')
            }
        }
    })
}

function getAllFairway(){
    $.get('/api/fairway',(result)=>{
        if(result.statusCode === 200){
            //Idk
        }
    })
}

$(document).ready(function () {
    $('.materialboxed').materialbox(); 
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    getAllFairway();
});

