
$.click("button", function() {

   // var content = $("input").value;
    var content = $("textarea").value;
    console.log($("textarea"));
    console.log(content);
    content = trim(content); //ȥ����λ�Ŀո�
    var contentArr = content.split(/,|��|\t|��|;|��/);//�����û��û��С��ո�ȫ��/��ǣ������ţ�ȫ��/��ǣ����ٺš��ֺ�����Ϊ��ͬ���õķָ�
    var contentArr2 = deleteBlank(uniqArray(contentArr)); // ȥ�أ�ȥ�հ�

    var displayDiv = $(".display");
   // var warnDiv = $(".warn");

 /*   if (contentArr2.length > 10 || contentArr2.length === 0) {
        warnDiv.style.display = "block"; */
		if(contentArr2.length===0)
        displayDiv.style.display = "none";
 /*   } else {
        warnDiv.style.display = "none"; */
    //    var checkboxStr = "";
    /*    for (var i = 0; i < contentArr2.length; i++) {
            // contentArr2[i] = 0;
            checkboxStr += '<br><input type="checkbox"><label>' + contentArr2[i] + '</label>';
        }  */
     //   console.log(checkboxStr.substr(4));
        displayDiv.innerHTML =contentArr2 ;
        displayDiv.style.display = "block";
//    }

    console.log(contentArr2);
    // $(".show").innerHTML = contentArr2;



});
